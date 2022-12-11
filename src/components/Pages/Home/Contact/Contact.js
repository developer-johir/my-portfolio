import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m6zwekf', 'template_zusg9yq', form.current, 'dDHB8PzhRqpuqqOhV')
          .then((result) => {
              console.log(result.text);
              alert("Your sms is going. YEAH!")
          }, (error) => {
              console.log(error.text);
              alert("ops sorry for that you sms is not going")
          });
          e.target.reset()
      };
    




    // const sendEmail = (e)=>{
    // e.preventDefault()
    // emailjs.sendForm('service_m6zwekf', 'template_zusg9yq', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert("Your sms is going. YEAH!")
    //   }, (error) => {
    //       console.log(error.text);
    //       alert("ops sorry for that you sms is not going")
    //   });
    //   form.current.reset()
    // }
    return (
        <section className="contact-container" id="contact">
            <div className="contact-wrapper main-container">
                <div className="contact-top-header">
                    <h1 className="fw-bolder font-color-ping">CONTACT US</h1>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}  data-aos="zoom-in">
                        <div className="formContainer">
                            <input  className=" inputFiled" type="text" placeholder="First Name" name="name"/>
                            <input className=" inputFiled" type="text" placeholder="Last Name" name="name"/>
                            <input className=" inputFiled" type="text" placeholder="E-mail Address" name="email"/>
                            <input className=" inputFiled" type="text" placeholder="Place Number" name="number"/>
                        </div>
                    
                        <textarea className="textarea"rows="8" placeholder="Enter Your Messages" name="message"></textarea>
                        <input type="submit" className="submitBtn"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;