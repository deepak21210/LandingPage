import { MdEmail, MdLocationPin } from 'react-icons/md';
import {GiHamburgerMenu, GiTeacher} from 'react-icons/gi';
import { BiSolidStar, BiChevronDownCircle, BiPlusCircle, BiLogoYoutube, BiSolidPhoneIncoming, BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/Bi';
import './Little_nav.css'
import { useState } from 'react';

const Little_nav = () => {
 
        return (
        <>
            <div className='little_navbar'>

                <div className="left">
                    <div className='icon'>
                        <MdEmail />
                        <h3>hr@webdschools.com</h3>
                    </div>
                    <div className='icon'>
                        <BiSolidPhoneIncoming />
                        <h3>9876543210</h3>
                    </div>
                </div>

                <div className="right">
                    <div className="icon">
                        <MdLocationPin />
                        <h3>chennai</h3>
                    </div>
                    <div className='icon'>
                        <h3><BiLogoFacebookCircle /></h3>
                        <h3><BiLogoInstagramAlt /></h3>
                        <h3><BiLogoYoutube /></h3>
                    </div>

                  
                </div>

            </div>

            <div className="main_nav">

                <div className="main_logo">
                    <img src={"https://www.webdschool.com/asse/img/logo/logo-2.webp"} alt="" />
                </div>

                <ul className="main_list">
                    <li>Home</li>
                    <li>Online Courses</li>
                    <li>Offline Courses</li>
                    <li>Job Portal</li>
                    <li>Contact</li>
                    <li>More</li>
                </ul>
               
            </div>

            <div className="mobile_list">
                <ul>
                    <li>Home</li>
                    <li>Online Courses</li>
                    <li>Offline Courses</li>
                    <li>Job Portal</li>
                    <li>Contact</li>
                    <li>More</li>
                </ul>
            </div>
        </>
    )
}

export default Little_nav