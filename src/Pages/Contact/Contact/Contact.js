import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import code from '../../../images/maruf-hero.png';
import TopHeader from '../../Shared/Header/TopHeader/TopHeader';
init("user_ZcmjbMUxGCv0CvbvMW2x7");

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_milkijf', 'template_cbi6r5b', form.current, 'user_ZcmjbMUxGCv0CvbvMW2x7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <TopHeader></TopHeader>
            <div className="sticky-top">
            <NavBar></NavBar>
            </div>
            <div className="container"> 

          <div className="row mt-5">
              <div className="col-lg-6 ">
             <div className="">
             <div >
           <h4 className="my-3">Contact Me</h4>
           <form ref={form} onSubmit={sendEmail}>
                <label className="form-label">Name</label>
                <input  className="form-control" type="text" name="user_name" />
                <label className="form-label" >Email</label>
                <input  className="form-control" type="email" name="user_email" />
                <label className="form-label" >Message</label>
                <textarea className="form-control" cols="30" name="message" />
            <div className="text-end">
            <button className="my-3 btn codepickjs-btn" type="submit">SEND MESSAGE</button>
            </div>
              
            </form>
           </div>
             </div>
              </div>
              <div className="col-lg-6">
                <img className='w-100' src={code} alt="" />
              </div>
          </div>
       
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;