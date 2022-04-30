import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z04ebs4', 'template_o6drcvq', form.current, 'psAwF_880JNnC9-90')
      e.target.reset();
  };
  return (
    <section id ="contact" >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
        
        <div className="container contact__container">
            <div className="contact__options">
              <article className='contact_option'>
                <MdOutlineEmail className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>Darshak Sondagar</h5>
                  <a href=" mailto:darshaksondagar48144@gmail.com" target='_blank'>Sent a message</a>
              </article>
              <article className='contact_option'>
                <BsWhatsapp className='contact_option-icon'/>
                  <h4>Whatsapp</h4>
                  <h5>+91 9512558153</h5>
                  <a href=" https://wa.me/9512558153?text=" target='_blank'>Sent a message</a>
              </article>
              <article className='contact_option'>
                <BsLinkedin className='contact_option-icon'/>
                  <h4>LinkedIn</h4>
                  <h5>Darshak Sondagar</h5>
                  <a href=" https://www.linkedin.com/in/darshak-sondagar-6a92711b5/" target='_blank'>Sent a message</a>
              </article>
            </div>
            {/* end of contact options */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}
