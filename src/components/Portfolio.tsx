"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from "../assets/proj1.jpg";

const projects = [
    {
        title: "Shoppy: Ecommerce Web Application",
        desc: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "#",
        src: project1

    },
    {
        title: "Shoppy: Ecommerce Web Application",
        desc: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "#",
        src: project1

    },
    {
        title: "Shoppy: Ecommerce Web Application",
        desc: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "#",
        src: project1

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