import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { RiShapesLine } from "react-icons/ri";
import img from '../assets/vector image.svg'
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Home = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    

    const handleSubscribe = async () => {
        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }
        try {
            await emailjs.send(
                "service_6tfea5f",
                "template_ie35gm2", 
                {
                    to_email: email,
                    name: "SusEyez Careers",
                    custom_message: "Thank you for subscribing to our career newsletter!",
                    time: new Date().toLocaleString()
                },
                "Z4nO9zT6EXvZ__MPL" 
            );
            setMessage("Thank you! A thank you email has been sent.");
        } catch (err) {
            setMessage("Failed to send email. Please try again.");
        }
    };

    return (
        <div className="home w-[400px] sm:w-[700px] md:w-[1120px]">
            {/* Hero-Section */}
            <div className="hero flex justify-between items-center mt-[150px]">
                <div className="hero-text">
                    <h1 className="text-4xl font-bold">It's Open Season!</h1>
                    <p className="text-xl font-light mt-[25px]">Find your dream job with us!</p>
                    <button className="hero-btn text-xl font-mono mt-[70px] rounded-2xl py-[5px] px-[20px] bg-gradient-to-r from-[#FFFAFA] to-[#F73131]"><Link to='/jobs'>Start Hunting!</Link></button>
                </div>
                <div className="hero-img w-[400px] h-[400px] rounded-full bg-[#FF5151] flex justify-center items-center">
                    <img src={img} className="" alt="hero-section image" />
                </div>
            </div>
            {/* Info-Section */}
            <div className="info-section sm:flex sm:justify-between sm:items-center mt-[220px]">
                <div className="location flex flex-col justify-center items-center">
                    <CiLocationOn className="text-[#FF5151] text-[64px]" />
                    <h5 className="text-xl font-bold">Location Specific</h5>
                    <p className="w-[150px] text-center font-extralight mt-2">Find jobs nearest to your place.</p>
                </div>
                <div className="requirement flex flex-col justify-center items-center mt-8">
                    <GoChecklist className="text-[#FF5151] text-[64px]" />
                    <h5 className="text-xl font-bold">Requirement Specific</h5>
                    <p className="w-[150px] text-center font-extralight mt-2">Find jobs that match your skillset.</p>
                </div>
                <div className="type flex flex-col justify-center items-center mt-8">
                    <RiShapesLine className="text-[#FF5151] text-[64px]" />
                    <h5 className="text-xl font-bold">Type Specific</h5>
                    <p className="w-[150px] text-center font-extralight mt-2">Find jobs based on type.</p>
                </div>
            </div>
            {/* Email newsletter */}
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-center sm:items-center mt-[220px] mb-[10px]">
                <p className="p-[10px] rounded-l-2xl bg-gradient-to-r from-[#FF5151] to-[#FFFAFA]">Subscribe to our newsletter</p>
                <input type="email" name="email" id="email" className="p-[10px] focus:invalid:border-red-500 focus:invalid:outline-pink-500 invalid:text-pink-600" placeholder="Enter email..." value={email} onChange={e => setEmail(e.target.value)} />
                <button className="p-[10px] custom-gradient-btn rounded-r-2xl" onClick={handleSubscribe}>Subscribe</button>
            </div>
            {message && <p className="text-center text-black font-mono font-bold">{message}</p>}
        </div>
    )
}

export default Home