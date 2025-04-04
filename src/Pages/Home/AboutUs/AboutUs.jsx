/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { easeOut, motion } from "motion/react";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
const AboutUs = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
        <div className="w-1/3 ">
          <motion.img
            src={team1}
            alt=""
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={team2}
            alt=""
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-blue-400 shadow-2xl"
          />
          
        </div>
        <div className="w-1/2 ">
          <motion.h1 animate={{x:50}} transition={{duration:2,delay:1,ease:easeOut, repeat:Infinity}} className="text-5xl font-bold">Latest <motion.span animate={{color:["#ecff33","#584bad", "#cc5ebd"]}} transition={{duration:1.5 , repeat:Infinity}}>Blogs</motion.span> </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
