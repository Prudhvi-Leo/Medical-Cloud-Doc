import React from 'react'
import { assets } from '../../assets/assets_admin/assets'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import {toast} from 'react-toastify'

const AddDoctor = () => {

  const ref = React.useRef();
  const [docImg ,setDocImg] = React.useState(false);
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [experience,setExperience] = React.useState('1 Year');
  const [fees,setFees] = React.useState("");
  const [speciality,setSpeciality] = React.useState("General Physician");
  const [address1,setAddress1] = React.useState("");
  const [address2,setAddress2] = React.useState("");
  const [about,setAbout] = React.useState("");
  const [degree,setDegree] = React.useState("");

  const {backendUrl , aToken} = React.useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
    /*    const {name ,email ,password , speciality , degree , experience , about , fees ,address} = req.body;
        const imageFile = req.file */
        if(!docImg){
          return toast.error("Please upload doctor image");
        }

        
        const formData = new FormData();
        formData.append("name" , name);
        formData.append("email" , email);
        formData.append("password" , password);
        formData.append("speciality" , speciality);
        formData.append("degree" , degree);
        formData.append("experience" , experience);
        formData.append("about" , about);
        formData.append("fees" , fees);
        formData.append("address" , JSON.stringify({line1: address1 , line2 : address2}));
        formData.append("image" , docImg);

        const {data} = await axios.post(`${backendUrl}/api/admin/add-doctor` , formData , {headers: {
            'Content-Type': 'multipart/form-data',  
            'Authorization': `Bearer ${aToken}`
          }});  
          
        if(data?.success){
          toast.success(data?.message);
          //reset form
          setDocImg(false);
          setName("");
          setEmail("");
          setPassword("");
          setExperience('1 Year');
          setFees("");
          setSpeciality("General Physician");
          setAddress1("");
          setAddress2("");
          setAbout("");
          setDegree(""); 
        }else{
          toast.error(data?.message);
        }

    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-full flex justify-center py-10">
      
      <div className="bg-white w-full max-w-4xl p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">

        {/* Title */}
        <p className="text-2xl font-semibold text-primary mb-8 text-center">
          Add Doctor
        </p>

        {/* Upload Section */}
        <div className="flex flex-col items-center mb-10">
          <label 
            htmlFor="doc-img" 
            className="cursor-pointer flex flex-col items-center"
          >
            <img 
              src={ docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
              alt="upload" 
              className="h-40 w-40 object-cover rounded-xl border border-dashed border-primary p-2 hover:opacity-80"
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-gray-600 mt-3 text-sm">
            Upload doctor picture
          </p>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">

            <div>
              <p className="text-sm text-gray-600 mb-1">Doctor Name</p>
              <input onChange ={(e) => setName(e.target.value)} value={name}
                type="text"
                placeholder="Name"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Doctor Email</p>
              <input onChange ={(e) => setEmail(e.target.value)} value={email}
                type="email"
                placeholder="Email"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Password</p>
              <input onChange ={(e) => setPassword(e.target.value)} value={password}
                type="password"
                placeholder="Password"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Experience</p>
              <select onChange ={(e) => setExperience(e.target.value)} value={experience} className="border w-full p-2 rounded-md focus:outline-primary">
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i}>{i + 1} Year{ i+1 > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Fees</p>
              <input onChange ={(e) => setFees(e.target.value)} value={fees}
                type="number"
                placeholder="Consultation Fees"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            <div>
              <p className="text-sm text-gray-600 mb-1">Speciality</p>
              <select onChange ={(e) => setSpeciality(e.target.value)} value={speciality} className="border w-full p-2 rounded-md focus:outline-primary">
                <option>General Physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>Neurologist</option>
                <option>Gastroenterologist</option>
                <option>Cardiologist</option>
              </select>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Education</p>
              <input onChange ={(e) => setDegree(e.target.value)} value={degree}
                type="text"
                placeholder="Degree / Qualification"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Address Line 1</p>
              <input onChange ={(e) => setAddress1(e.target.value)} value={address1}
                type="text"
                placeholder="Address 1"
                required
                className="border w-full p-2 rounded-md focus:outline-primary mb-2"
              />
              <p className="text-sm text-gray-600 mb-1">Address Line 2</p>
              <input onChange ={(e) => setAddress2(e.target.value)} value={address2}
                type="text"
                placeholder="Address 2"
                required
                className="border w-full p-2 rounded-md focus:outline-primary"
              />
            </div>

          </div>

        </div>

        {/* About Doctor */}
        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-2">About Doctor</p>
          <textarea onChange ={(e) => setAbout(e.target.value)} value={about}
            rows="5"
            placeholder="Write about doctor..."
            required
            className="border w-full p-3 rounded-md focus:outline-primary"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit" ref={ref}
          className="mt-6 w-full bg-primary text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition"
        >
          Add Doctor
        </button>

      </div>
    </form>
  )
}

export default AddDoctor
