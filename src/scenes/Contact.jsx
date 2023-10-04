import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
const {
    register,
    trigger,
    formState: {errors}
} = useForm();

const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
}

return (
    <section id="contact" className="mt-10">
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
                CONTACT<span className="text-blue-600"> ME</span>
            </p>

            </div>
            <LineGradient width="w-1/4" />
                </motion.div>
                
<div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
          className="mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity:1, y: 0 }
    }}
  >
    <form
     target="_blank"
     onSubmit={onSubmit}
     action="https://formsubmit.co/muliimaculate@gmail.com"
     method="POST"
    
    >
        <input className="w-full rounded-sm font-semibold placeholder-opaque-black p-3 text-black"
        type="text"
        placeholder="NAME"
        {...register("name", {
            required:true,
            maxLength:100,
        })}

        />
        {errors.name && (
            <p className="text-red-600 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max Length is 100 char."}
            </p>
        )}
      
      <input className="w-full rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
        type="text"
        placeholder="EMAIL"
        {...register("email", {
            required:true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z]{2,}$/i,
        })}

        />
         {errors.email && (
            <p className="text-red-600 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "pattern" && "Invalid email address"}
            </p>
        )}
      
      <textarea className="w-full rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
        type="text"
        placeholder="MESSAGE"
        rows="6"
        cols="60"
        {...register("email", {
            required:true,
            maxLength:2000
        })}

        />
         {errors.message && (
            <p className="text-red-600 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max Lenth is 2000 char."}
            </p>
        )}
        <button type="submit" className="rounded-sm py-3 px-7 font-semibold bg-blue-700 mt-5 hover:pink-600
        hover:text-white transition duration-500">
            SEND
        </button>
    </form>

          </motion.div>
          </div>
    </section>
)

};

export default Contact;