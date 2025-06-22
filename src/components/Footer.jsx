import { Link } from 'react-router-dom';
import { CiInstagram } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer w-full bg-gradient-to-b from-[#fffafa] to-[#FF5151] py-10">
        <div className="footer-1 flex flex-col items-center sm:flex-row sm:justify-around sm:items-start">
            <div className="footer-info">
                <h4 className="text-lg font-mono font-bold">SusEyez.inc</h4>
                <p className="w-[200px] text-left font-light mt-4">Web development organization operational since 2019.</p>
            </div>
            <div className="contact flex flex-col justify-center items-center">
                <h4>Contact</h4>
                <ul className="contact-list flex flex-col justify-center items-center">
                    <li className='mt-4'><Link to="https://www.instagram.com/rahul_kongara_/"><CiInstagram className='text-[40px]' /></Link></li>
                    <li className='mt-4'><Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfwWCbhKwSPgFTbVLKBPWKtltcRkJQKQKftShdsWCbPSTFZKFfwrCgggljwnRmGhwTdV"><CiMail className='text-[40px]' /></Link></li>
                    <li className='mt-4'><Link to="https://www.x.com/rahulkongara02/"><FaXTwitter className='text-[40px]' /></Link></li>
                </ul>
            </div>
            <div className="navigation flex flex-col justify-center items-center">
                <h4>Navigation</h4>
                <ul className="nav-list flex flex-col justify-center items-center font-light">
                    <li className='mt-6'><Link to='/'>Home</Link></li>
                    <li className='mt-6'><Link to='/jobs'>Jobs</Link></li>
                </ul>
            </div>
        </div>
        <p className="text-md font-mono mt-5 text-center">&copy; All rights belong to SusEyez.inc and <Link to="https://jsonfakery.com/job-posts" target='_blank'>JSONFakery</Link></p>
    </div>
  )
}

export default Footer