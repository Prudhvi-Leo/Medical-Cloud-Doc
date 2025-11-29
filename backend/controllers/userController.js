import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import razorpay from 'razorpay'

//API to register user

const registerUser = async (req, res)=>{
    try {
        
        const {name,email ,password} = req.body

        if(!name || !password || !email){
            return res.json({success : false , message : "Missing Details"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false , message : "enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success : false , message:"enter a strong password"})
        }

        
        const salt =  await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt);

        const userData =  {
            name ,
            email,
            password : hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)

        res.json({success : true , token})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const loginUser = async (req ,res) => {
    try {
        const {email,password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
          return  res.json({success:false , message : 'user does not exist'})
        }
        const  isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)
              res.json({success:true , token})
        }
        else{
            res.json({success : false , message : "Invalid credentials"})
        }
        
    } catch (error) {
         console.log(error)
        res.json({success:false , message:error.message})
    }
}

const getProfile = async (req, res) => {
    try {
        const { userId } = req.body

        const userData = await userModel.findById(userId).select('-password')

         res.json({success:true , userData})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const updateProfile = async (req , res ) => {
    try {
        
        const { name , phone ,address, dob ,gender} = req.body 
        console.log(req.body.userId)
        const userId = req.body.userId;
        const imageFile = req.file
        console.log({ name , phone ,address, dob ,gender , userId ,imageFile} )

        if(!name || !phone || !address || !dob || !gender)
            return res.json({success :false , message : 'data missing'})

        await userModel.findByIdAndUpdate(userId  , {name , phone ,address:JSON.parse(address) , dob , gender })

        if(imageFile){
            const imageUpload = await cloudinary.uploader.upload(imageFile.path , {resource_type : 'image'})

            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId , {image : imageUrl})
        }
        res.json({success:true , message : 'profile Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}


const bookAppointment = async (req ,res) => {
    try {
        const {userId , docId , slotDate ,slotTime} = req.body

        const docData = await doctorModel.findById(docId).select('-password')
        
        if(!docData.available){
            return res.json({success : false , message : 'doctor not available'})
        }

        let slots_booked = docData.slots_booked

        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
               return res.json({success : false , message : 'Slots not Available'})
            }
            else{
                slots_booked[slotDate].push(slotTime)
            }
        }
        else{
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked 

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount : docData.fees,
            slotTime,
            slotDate,
            date : Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)

        await newAppointment.save()

        await doctorModel.findByIdAndUpdate(docId , {slots_booked})

        res.json({success:true , message  : 'appointment booked'})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const listAppointment = async (req, res) => {
    try {
        const {userId} = req.body

        const appointments = await appointmentModel.find({userId})

        res.json({success : true , appointments})
    } catch (error) {
         console.log(error)
        res.json({success:false , message:error.message})
    }
}

const cancelAppointment = async (req, res) =>{
    try {

        const {userId , appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        console.log
        if(appointmentData.userId !== userId){
            return res.json({success:false , message : 'Unauthorized action'})
        }

        await appointmentModel.findByIdAndUpdate(appointmentId , {cancelled : true})

        const  {docId , slotDate ,slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let  slots_booked = doctorData.slots_booked
        
        slots_booked[slotDate] = slots_booked[slotDate].filter(e=> e!== slotTime)

        await doctorModel.findByIdAndUpdate(docId , {slots_booked})

        res.json({success : true , message : 'Appointment Cancelled'})


    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const paymentRazorPay = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    console.log(appointmentId)
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentId || !appointmentData || appointmentData.cancelled) {
      return res.json({ success: false, message: "Appointment Cancelled or not found" });
    }

    // Create dummy order
    const dummyOrder = {
      id: "dummy_order_" + Date.now(),
      amount: 50000,
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(2, 10),
    };

    // Simulate delay
    setTimeout(() => {
      res.json({
        success: true,
        message: "Dummy Order Created",
        order: dummyOrder,
      });
    }, 2000);

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { dummy_payment_id, dummy_order_id, appointmentId } = req.body;

    // Simulated paid order
    const orderInfo = {
      orderId: dummy_order_id,
      paymentId: dummy_payment_id,
      status: "paid",
    };

    if (orderInfo.status === "paid") {

      await appointmentModel.findByIdAndUpdate(
        appointmentId,                   // 🔥 use real ID
        { payment: true }
      );

      return res.json({ success: true, message: "Payment Successful (Simulated)" });
    }

    res.json({ success: false, message: "Payment Failed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};




export {registerUser , loginUser , getProfile , updateProfile , bookAppointment , listAppointment , cancelAppointment , paymentRazorPay ,verifyRazorpay}