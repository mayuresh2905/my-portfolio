import Image from 'next/image';
import React from 'react';
import webdev from "../assets/webdev_icon.png";
import data from "../assets/Data_icon.png";
import ml from "../assets/machine-learning.png";
import testing from "../assets/software-testing.png";


const skillIcons = [
    {icon: <Image src={webdev} alt="Web Development" width={140} height={140}/>, label: "Web Development"},
    {icon: <Image src={data} alt="Web Development" width={140} height={140}/>, label: "Data Analysis"},
    {icon: <Image src={ml} alt="Web Development" width={140} height={140}/>, label: "Machine learning"},
    {icon: <Image src={testing} alt="Web Development" width={140} height={140}/>, label: "Testing"},

]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className="text-white max-w-[950px] mx-auto p-8 text-center">
            <h2 className="text-6xl font-bold mb-4">What I do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                {skillIcons.map((skill, index) => (
                    <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className="mt-2">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;