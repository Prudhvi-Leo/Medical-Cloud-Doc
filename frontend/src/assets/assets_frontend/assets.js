import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.jpg'
import doc12 from './doc12.jpg'
import doc13 from './doc13.jpg'
import doc14 from './doc14.jpg'
import doc15 from './doc15.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Arjun Mehta',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '6 Years',
    about:
      'Dr. Mehta focuses on preventive healthcare and personalized treatment plans, ensuring long-term patient wellness.',
    fees: 40,
    address: {
      line1: 'Sector 12, Green Park',
      line2: 'New Delhi, India',
    },
  },
  {
    _id: 'doc2',
    name: 'Dr. Sophia Carter',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '8 Years',
    about:
      'Expert in women’s health, Dr. Carter provides compassionate care with modern treatment methods and patient education.',
    fees: 75,
    address: {
      line1: 'Sunrise Avenue',
      line2: 'Boston, MA',
    },
  },
  {
    _id: 'doc3',
    name: 'Dr. Liam Thompson',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '3 Years',
    about:
      'Dr. Thompson specializes in skin disorders, cosmetic treatments, and aesthetic skin improvement.',
    fees: 35,
    address: {
      line1: 'Harbor Road',
      line2: 'Portland, OR',
    },
  },
  {
    _id: 'doc4',
    name: 'Dr. Aisha Rahman',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS, DCH',
    experience: '5 Years',
    about:
      'Dedicated to child care, Dr. Rahman focuses on growth, development, and preventive child healthcare.',
    fees: 50,
    address: {
      line1: 'Rose Garden Colony',
      line2: 'Lucknow, India',
    },
  },
  {
    _id: 'doc5',
    name: 'Dr. Ethan Parker',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, DM Neurology',
    experience: '9 Years',
    about:
      'Dr. Parker provides advanced neurological diagnosis and rehabilitation plans for chronic and acute conditions.',
    fees: 85,
    address: {
      line1: 'Highbridge Lane',
      line2: 'Manchester, UK',
    },
  },
  {
    _id: 'doc6',
    name: 'Dr. Olivia Mitchell',
    image: doc6,
    speciality: 'Cardiologist',
    degree: 'MBBS, DM Cardiology',
    experience: '11 Years',
    about:
      'With expertise in cardiac care, Dr. Mitchell focuses on patient lifestyle improvement and long-term heart health.',
    fees: 90,
    address: {
      line1: 'Park View Street',
      line2: 'Chicago, IL',
    },
  },
  {
    _id: 'doc7',
    name: 'Dr. Vikram Sutar',
    image: doc7,
    speciality: 'Orthopedic Surgeon',
    degree: 'MBBS, MS Orthopedics',
    experience: '7 Years',
    about:
      'Dr. Sutar specializes in joint care, fracture management, and post-surgery rehabilitation.',
    fees: 65,
    address: {
      line1: 'Shivaji Nagar',
      line2: 'Pune, India',
    },
  },
  {
    _id: 'doc8',
    name: 'Dr. Hannah Wilson',
    image: doc8,
    speciality: 'ENT Specialist',
    degree: 'MBBS, MS ENT',
    experience: '4 Years',
    about:
      'Provides modern diagnosis for ear, nose, and throat complications with personalized treatment plans.',
    fees: 45,
    address: {
      line1: 'Lakeview District',
      line2: 'Seattle, WA',
    },
  },
  {
    _id: 'doc9',
    name: 'Dr. Rohan Iyer',
    image: doc9,
    speciality: 'Psychiatrist',
    degree: 'MBBS, MD Psychiatry',
    experience: '6 Years',
    about:
      'Specializes in mental health, counseling, therapy sessions, and patient-centered treatment.',
    fees: 70,
    address: {
      line1: 'Palm Residency',
      line2: 'Mumbai, India',
    },
  },
  {
    _id: 'doc10',
    name: 'Dr. Mia Rodriguez',
    image: doc10,
    speciality: 'Pulmonologist',
    degree: 'MBBS, MD Pulmonology',
    experience: '8 Years',
    about:
      'Expert in lung disorders, asthma, bronchitis, and respiratory rehabilitation programs.',
    fees: 60,
    address: {
      line1: 'Valley Hills',
      line2: 'California, USA',
    },
  },
  {
    _id: 'doc11',
    name: 'Dr. Daniel Becker',
    image: doc11,
    speciality: 'Endocrinologist',
    degree: 'MBBS, DM Endocrinology',
    experience: '10 Years',
    about:
      'Focuses on diabetes management, thyroid disorders, and metabolic diseases.',
    fees: 75,
    address: {
      line1: 'Maple Street',
      line2: 'Munich, Germany',
    },
  },
  {
    _id: 'doc12',
    name: 'Dr. Natasha Bose',
    image: doc12,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM Gastroenterology',
    experience: '9 Years',
    about:
      'Provides expert care in digestive disorders with modern treatment and diagnostics.',
    fees: 80,
    address: {
      line1: 'Garden Square',
      line2: 'Kolkata, India',
    },
  },
  {
    _id: 'doc13',
    name: 'Dr. Omar Sheikh',
    image: doc13,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Focuses on primary medical care with detailed analysis and patient education.',
    fees: 30,
    address: {
      line1: 'Main Road Central',
      line2: 'Sharjah, UAE',
    },
  },
  {
    _id: 'doc14',
    name: 'Dr. Victoria Adams',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '12 Years',
    about:
      'Experienced in women’s health, pregnancy care, and fertility consultation.',
    fees: 95,
    address: {
      line1: 'Elmwood Avenue',
      line2: 'Toronto, Canada',
    },
  },
  {
    _id: 'doc15',
    name: 'Dr. Kevin Brooks',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '3 Years',
    about:
      'Focuses on acne treatment, pigmentation removal, and cosmetic dermatology.',
    fees: 55,
    address: {
      line1: 'Silver City',
      line2: 'Sydney, Australia',
    },
  },
];
