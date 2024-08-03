import { motion } from "framer-motion";
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import bread from "../../assets/images/bread.png";
import Leaf from "../../assets/images/leaf.png";
import spoon from "../../assets/images/spoon.png";
import tea from "../../assets/images/tea.png";


export const SlideUp = (delay) => {
    return {
        hidden: {
            y: "100%",
            opacity:0,
        },
        show:{
            y :0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay : delay,
            },
        },
    };
};

const Hero = () => {
  return (
    <main>
        <div className="container min-h-[600px]
        flex justify-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2
            gap-12 lg:gap-24 place-items-center
            justify-between">
                {/* Text content here */}
                <div className="space-y-3 mt-14 text-center
                md:text-left md:mt-0">
                    <motion.h1
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="relative text-5xl
                    lg:text-7xl
                    xl:text-8xl font-bold uppercase text-outline
                    text-transparent">Savor 
                        <img src={Leaf} alt=""
                        className='absolute w-[50px] top-0
                        right-0 md:right-[100px]'/>
                    </motion.h1>
                    <motion.h1
                   variants={SlideUp(1)}
                   initial="hidden"
                    whileInView="show"
                    className='text-5xl lg:text-7xl
                    xl:text-8xl font-bold uppercase text-brown-dark'>EVERY BITE</motion.h1>
                    <motion.p
                     variants={SlideUp(1.5)}
                     initial="hidden"
                    whileInView="show"
                    className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing
                        Voluptates,
                        asperiores velit rerum quas eum dolorem delectus?</motion.p>

                        <motion.button 
                        variants={SlideUp(2)}
                        initial="hidden"
                        whileInView="show"
                        className='btn-primary  inline-block !mt-10'>
                            <IoCartOutline className='inline mr-2'/>
                            Order Now
                        </motion.button>
                </div>
                {/* Image content here */}
                <div className='relative'>
                    <motion.img
                    initial={{ opacity: 0, rotate: 20, x:200,
                        y:100 }}
                    whileInView= {{ opacity: 1, rotate: 0, x:0,
                        y: 0 }}
                    transition={{ duration: 0.8 }}
                    src={tea} alt ='' 
                    className='w-[500px] img-shadow'/>
                    <motion.img
                    initial={{ opacity: 0, rotate: 120, x:200,
                        y:100 }}
                    whileInView= {{ opacity: 1, rotate: 75, x:0,
                        y: 0 }}
                    transition={{ duration: 0.8 }}
                    src={spoon} alt=' '  className="w-[450px]
                    absolute bottom-[-90px] -left-16 rotate-[65deg] img-shadow"/>
                    <motion.img
                    initial={{ opacity: 0, rotate: 20, x:200,
                        y:100 }}
                    whileInView= {{ opacity: 1, rotate: 0, x:0,
                        y: 0 }}
                    transition={{ duration: 0.8 }}
                    
                    
                    src={bread} alt=' ' className='w-[350px]
                    absolute top-[-90px] right-[-150px] md;right-[-160px] rotate-[45deg] img-shadow'/>
                </div>
            </div>
        </div>

        {/*Background yellow*/}
        <motion.div
        initial={{ opacity: 0, rotate: 60, x:200,
            y:200 }}
        whileInView= {{ opacity: 1, rotate: 40, x:0,
            y: 0 }}
            transition={{ duration: 0.8 }}
        
        className='w-[2500px] h-[2500px] rounded-3xl
        bg-pink-400  absolute top-[-30%] left-[70%] z-0'></motion.div>

    </main>

  )
}

export default Hero
