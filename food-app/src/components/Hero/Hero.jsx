import { motion } from "framer-motion";
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import banana from "../../assets/images/banana2.png";
import Food from "../../assets/images/food.png";
import Leaf from "../../assets/images/leaf.png";
import spoon from "../../assets/images/spoon.png";


const SlideUp = (delay) => {
    return {
        initial: {
            y: "100%",
            opacity:0,
        },
        animate:{
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
        flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2
            gap-12 lg:gap-24 place-items-center
            justify-between">
                {/* Text content here */}
                <div className="space-y-3 mt-14 text-center
                md:text-left md:mt-0">
                    <motion.h1
                    variants={SlideUp(0.5)}
                    initial="initial"
                    whileInView="animate"
                    className="relative text-5xl
                    lg:text-7xl
                    xl:text-8xl font-bold uppercase text-outline
                    text-transparent">Yummy
                        <img src={Leaf} alt=""
                        className='absolute w-[50px] top-0
                        right-0 md:right-[100px]'/>
                    </motion.h1>
                    <h1 className='text-5xl lg:text-7xl
                    xl:text-8xl font-bold uppercase'>BREAKFAST</h1>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing
                        Voluptates,
                        asperiores velit rerum quas eum dolorem delectus?</p>

                        <button className='btn-primary  inline-block !mt-10'>
                            <IoCartOutline className='inline mr-2'/>
                            Order Now
                        </button>
                </div>
                {/* Image content here */}
                <div className='relative'>
                    <img src={Food} alt ='' 
                    className='w-[450px] img-shadow'/>
                    <img src={spoon} alt=' '  className="w-[350px]
                    absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"/>
                    <img src={banana} alt=' ' className='w-[400px]
                    absolute top-[-30px] right-[-130px] md;right-[-160px] img-shadow'/>
                </div>
            </div>
        </div>

    </main>

  )
}

export default Hero
