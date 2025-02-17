import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
          <div className='about'>Contact Us</div>
         <div className='about_design'>
        <div className='about_1'></div>
        <div className='who'>Get In Touch</div>
        <div className='about_1'></div>
      </div>
        <div className="max-width">
           
            <div className="contact-content">
                <div className="column left">
                    
                    <p>If you have any questions, comments, or inquiries, please don't hesitate to get in touch with me. Whether you're interested in collaborating on a project, discussing potential job opportunities, or just want to say hello, I'm always happy to hear from new people. You can reach me through the contact form on my portfolio website, or by emailing me directly. I look forward to hearing from you!</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Vivek kumar</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Surampalem ,Andhra pradesh</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">vks7633a@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required name="Name"/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required name="Email"/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required name="Subject"/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message" required name="Message"></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
