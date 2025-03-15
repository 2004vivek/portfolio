import React from "react";
import { motion } from "framer-motion";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    try {
      const response=await axios.post("https://portfolio-a56a.onrender.com/api/contact",data)
      console.log(response)
      toast.success("Message Sent Successfully!");
      reset()

    } catch (error) {
      console.log(error?.response?.message||error?.message)
      toast.error("Error Occured Please Resend Your Details")
    }
 
  };

  return (
    <section id="contact" className="contact-section">
      {/* <div className="section-header"> */}
      <div className="about">Contact</div>
      <div className="about_design">
        <div className="about_1"></div>
        <div className="who">Contact With Me</div>
        <div className="about_1"></div>
      </div>
      {/* </div> */}
      <div className="contact-content">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img className="profile-img" src="./contact.png" alt="Profile" />
          <div>
            <h3>Vivek Kumar</h3>
            <p>Full Stack Developer</p>
            <p>
              Feel free to reach out to me for collaborations, internships,
              projects, or even just to say hi! I'm always open to exciting
              opportunities.
            </p>
            <p>Phone: 8102169611</p>
            <p>Email: vks7633a@gmail.com</p>
            <div className="social-icons">
              <span style={{cursor:'pointer'}}  className="icon-hover">
                <div
                  onClick={() =>
                    (window.location.href = "mailto:vks7633a@gmail.com")
                  }
                >
                  <SiMinutemailer fontSize={"32px"} />
                </div>
              </span>
              <span style={{cursor:'pointer'}} className="icon-hover">
                <div
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vivek-kumar-472592258/",
                      "_blank"
                    )
                  }
                >
                  <TiSocialLinkedinCircular fontSize={"32px"} />
                </div>
              </span>
              <span style={{cursor:'pointer'}} className="icon-hover">
              <div
                  onClick={() =>
                    window.open(
                      "https://x.com/VivekKumar74183",
                      "_blank"
                    )
                  }
                >
                  <AiFillTwitterCircle fontSize={"32px"} />
                </div>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="contact-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={`w-full p-2 rounded`}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
 
      <div className="form-group mb-2">
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phone", { 
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit phone number",
            },
          })}
          className={`w-full p-2 rounded `}
        />
        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
      </div>

      <div className="form-group mb-2">
        <input
          type="email"
          placeholder="Email"
          {...register("email", { 
            required: "Email is required", 
            pattern: { 
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
              message: "Enter a valid email address" 
            } 
          })}
          className={`w-full p-2 rounded `}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group mb-2">
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: "Subject is required" })}
          className={`w-full p-2 rounded `}
        />
        {errors.subject && <p className="error-message">{errors.subject.message}</p>}
      </div>

      <div className="form-group mb-2">
        <textarea
          rows="8"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className={`w-full p-2 rounded `}
        ></textarea>
        {errors.message && <p className="error-message">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
      >
        Send Message
      </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
