import LineGradient from "../components/LineGradient";
import  { motion } from "framer-motion";



const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({title, link }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition
    duration-500 bg-pink-400 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-700`;
    const projectTitle =title.split(" ").join("-") .toLowerCase();

    return (
        <motion.a href={link} target="_blank" rel="noopener noreferrer">
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">{title}</p>
            </div>
            <img
              src={`../assets/${projectTitle}.jpeg`}
              alt={projectTitle}
              className="w-70 h-75 object-cover"
            />
          </motion.div>
        </motion.a>
      );
    };
    
const Projects = () => {
    
    return (
        <section id="projects" className="mt-10">
            {/* HEADINGS */}
            <motion.div
                className="md:w-1/4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity:1, y: 0 }
          }}
        >
            <div>
            <p className="font-playfair font-semibold text-4xl mb-5">
             MY<span className="text-blue-600">PROJECTS</span>
            </p>

            </div>
            <LineGradient width="w-1/4" />
                </motion.div>

                {/* PROJECTS */}
             <div className="flex justify-center">
             <motion.div
                className="sm:grid sm:grid-cols-3 m-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={container}
        >

            {/* ROW 1 */}
            <div
            className="flex justify-center text-center items-center p-10 bg-blue-600 max-w-[400px] 
            max-h-[400px] text-2xl font-playfair font-semibold"
            >
                USER INTERFACE DESIGNS
            </div>
            <Project
            title="Artstudio website"
            link="https://www.behance.net/gallery/179795943/ArtStudio-website-UIUX-CASE-STUDY"
          ></Project>
            <Project title="Ecommerce website"
            link="https://www.behance.net/gallery/182988579/ECOMMERCE-WEBSITE-CASE-STUDY?"
          >
            </Project>
           

            {/* ROW 2 */}
            <Project title="Pharmacy landing page" 
            link="https://www.behance.net/gallery/181854869/Pharmacy-Landing-Page">
            </Project>
            <Project title="Redesigned Cjs landing page" 
            link="https://www.behance.net/gallery/181852445/Cjs-Redesigned-landing-page?">
            </Project>
           
            </motion.div>
             </div>
        </section>
    )
}

export default Projects;