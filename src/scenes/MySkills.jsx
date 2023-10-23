import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import  { motion } from "framer-motion";
import ProfileImage from '../Assets/profile-image.png';







const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="">
         
            <div className="md:flex md:justify-betwen mt-10">
                <motion.div
                className="md:w-1/4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity:1, x: 0 }
          }}
        >
            <p className="font-playfair font-semibold text-4xl mb-5">
                MY <span className="text-blue-600">SKILLS</span>
            </p>
            <LineGradient width="w-1/4" />
            {/* <p className="mt-5 mb-2">
                "I specialize in creating captivating web experiences with a 
                strong foundation in design and development"
            </p> */}
                </motion.div>
             
            </div>
           
                        {/* SKILLS */}
                        <div className="md:flex md:justify-between mt-10 gap-32">
                            {/* EXPERIENCE */}
             <motion.div
             className="md:w-1/3 mt-10"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity:1, y: 0 }
             
             }}
             >
                {/* WEB DEVELOPMENT LANGUAGES */}
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl text-blue-600">01</p>
                        <p className="font-playfair font-semibold text-2xl">USER INTERFACE (UI)</p>

                    </div>
                    <div></div>
                </div>
                <p className="mt-5">
                *Proficient in Adobe XD, Sketch, and Figma. <br></br>
*Creating visually appealing and user-friendly interfaces. <br></br>
*Strong knowledge of color theory and typography. <br></br>
*Designing icons and graphics for web and mobile. <br></br>
*Consistently meeting brand guidelines and design standards.
                </p>
                </motion.div>
                <motion.div
             className="md:w-1/3 mt-10"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity:1, y: 0 }
             
             }}
             >
                {/* UI/UX DESIGN */}
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl text-pink-600">02</p>
                        <p className="font-playfair font-semibold text-2xl">USER EXPERIENCE DESIGN (UX)</p>

                    </div>
                    <div></div>
                </div>
                <p className="mt-5">
                *Conducting user research through interviews and surveys. <br></br>
*Creating wireframes and prototypes to visualize ideas. <br></br>
*Improving user experiences through navigation design. <br></br>
*Enhancing content strategy for better user engagement. <br></br>
*Usability testing and iterative design for optimal user satisfaction. <br></br>
                </p>
                </motion.div>
                <motion.div
             className="md:w-1/3 mt-10"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity:1, y: 0 }
             
             }}
             >
                {/* FRONTEND FRAMEWORKS */}
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-2xl">INTERACTION DESIGN</p>

                    </div>
                    <div></div>
                </div>
                <p className="mt-5">
                *Designing interactive elements like buttons and forms. <br></br>
*Incorporating animations and microinteractions. <br></br>
*Ensuring responsive design for various devices. <br></br>
*Enhancing user engagement and user flow. <br></br>
*Focusing on intuitive and engaging user interactions.
                </p>
                </motion.div>
                        </div>
        </section>

    )
};
export default MySkills;