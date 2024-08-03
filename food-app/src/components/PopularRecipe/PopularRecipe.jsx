import { motion } from 'framer-motion'
import React from 'react'
import food2 from "../../assets/images/food2-plate.png"
import panner from "../../assets/images/panner.png"
import banner from "../../assets/images/pav.png"
import { SlideUp } from '../Hero/Hero'

const PopularRecipeData =  [
    {
        id: 1,
        name: "Butter Panner",
        img: panner,
        price: "Rs.320",
        delay:0.4,
    },
    {
        id: 2,
        name: "Salad",
        img: food2,
        price: "Rs.120",
        delay:0.8,
    },
    {
        id: 3,
        name: "Fried Tofu",
        img: banner,
        price: "Rs.350",
        delay:1.2,
    },
]

const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"show"}
        className='text-4xl text-center font-leagueGothic
        font-semibold uppercase py-8'>{""}Our Popular Recipe
        </motion.h3>

        {/*card section*/}
        <div
            
            className="grid grid-cols-1
            sm :grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {PopularRecipeData.map((item) =>{
                    return (
                        <motion.div 
                        variants={SlideUp(item.delay)}
                    initial="hidden"
                    whileInView="show"
                        className="group bg-white/50 shadow-xl
                        p-3 rounded-xl">
                            <img
                            src={item.img}
                            alt=""
                            className='w-44 mx-auto img-shadow
                            group-hover:scale-x-110
                            group-hover:translate-y-[-50px]
                            group-hover:translate-x-10
                            group-hover:rotate-[50deg] transition-all
                            duration-700'/>
                            <div>
                                <button className='btn-primary 
                                group-hover:mb-3 opacity-0 
                                group-hover:opacity-100'>Buy Now</button>
                                <h3 className='text-xl font-semibold'>{item.name}</h3>
                                <p
                                className='text-xl font-bold text-pink-400'>{item.price}</p>
                            </div>
                            </motion.div>
                    );
                })}


</div>
      </div>
    </section>
  )
}

export default PopularRecipe
