import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Mayuresh Prabhu</h1>
        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/mayuresh-prabhu-246453197" className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href="https://x.com/Main_hu_bhagwan?t=9YlarOGtu0-WEwxepD1LRg&s=08&mx=2" className='hover:text-gray-300'>
                <FaTwitter size={24}/>
            </a>
            <a href="https://www.instagram.com/woh_shant_ladka_2905" className='hover:text-gray-300'>
                <FaInstagram size={24}/>
            </a>
        </div>
    </div>
  )
}

export default Footer;