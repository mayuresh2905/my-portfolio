"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from "../assets/imginify.jpeg";
import project2 from "../assets/Yoom.jpeg";
import project3 from "../assets/RecruitPro.jpeg";



const projects = [
    {
        title: "Imaginify: AI Based SAAS For Image Editing",
        desc: "Built a secure system for user authentication, profile management, and credit-based access to AI-driven image tools.Developed advanced image processing features like restoration, recolouring, object removal, and generative fill.Designed a responsive UI with advanced search, community showcases, and Stripe integration for credit purchases.",
        devstack: "Next.js, Tailwind, TypeScript, Cloudinary AI, Stripe, Clerk,MongoDB",
        link: "https://imaginify-delta-cyan.vercel.app",
        git: "https://github.com/mayuresh2905/imaginify",
        src: project1

    },
    {
        title: "Yoom: Video Conferencing Web Application",
        desc: "Built with Next.js and TypeScript, offering secure authentication via Clerk and real-time meeting functionalities powered by getStream. Users can create, join, and manage meetings with features like recording, screen sharing, participant controls, and scheduling future sessions. Designed with a responsive UI using Tailwind CSS and shadcn, it ensures a seamless experience while maintaining security, privacy, and scalability.",
        devstack: "Next.js, Tailwind, TypeScript, getStream, Stripe, Clerk",
        link: "https://yoom-qt8u.vercel.app/",
        git: "https://github.com/mayuresh2905/yoom",
        src: project2

    },
    {
        title: "RecruitPro: Job Recruitment Management System with HR Analytics Dashboard",
        desc: "Designed a machine learning model using Random Forest Classifier to predict job placements based on factors like academic performance, work experience, and specialization.Developed a Flask-based web application with interactive dashboards for real-time predictions and data-driven HR insights using visualizations like pie charts and bar plots.Streamlined recruitment processes by leveraging data pre-processing and machine learning to improve hiring efficiency, accuracy, and decision-making.",
        devstack: "HTML, CSS, JavaScript, Python, Flask, Sci-kit learn, Pandas, Matplotlib",
        link: "https://recruitpro.onrender.com",
        git: "https://github.com/mayuresh2905/RecruitPro",
        src: project3

    }
]

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='profolio'>
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
            Selected <span className='text-orange-400'>Projects</span>
        </h1>
        <div className='px-6 md:px-0 max-w-[1200px] mx-auto space-y-24'>
            {projects.map((project,index) =>(
                <motion.div 
                  key={index}
                  initial={{opacity:0,y:75}}
                  whileInView={{ opacity:1, y: 0}}
                  viewport={{once: true}}
                  transition={{ duration: 0.5, delay:0.25}}
                  className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                  >
                    <div className='space-y-2 max-w-[550px]'>
                        <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                        <h2 className='text-4xl'>{project.title}</h2>
                        <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                        <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className='mr-6'>Website Link</a>
                            <a href= {project.git}>Git</a>
                        </div>


                    </div>

                    <div className='flex justify-center items-center'>
                        <Image 
                           src={project.src}
                           alt={project.title}
                           className='h-[350px] w-[500px] object-cover border rounded border-gray-700'
                        />
                    </div>
                  </motion.div>
            ))}
        </div>

    </div>
  )
}

export default Portfolio