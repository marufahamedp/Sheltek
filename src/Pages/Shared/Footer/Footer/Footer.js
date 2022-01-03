import React from 'react';

const Footer = () => {
    return (
        <div className="pt-5">
            <div className='container border-top pt-3'>
            <div className="row text-light">
                <div className="col-lg-4">
                    <div className="">
                    <h3 className="a">CodePick JS</h3>
                    <p>We will try to explain the difficult problems easily.So let's grow some coding knowledge in simple way</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="a">Contact US</h3>
                    <address>
                        <p><i class="fas fa-phone-alt"></i> +8801315560101</p>
                        <p><i class="fas fa-envelope"></i> marufamdp@gmail.com</p>
                        <p><i class="fas fa-location-arrow"></i> Jamgora, Ashulia, Savar, Dhaka, Bangladesh</p>
                    </address>
                </div>
                <div className="col-lg-4">
                    <h3 className="a">Follow Us On</h3>
                    <div className="fs-4 social">
                    <a href="https://www.facebook.com/CodePickjs" target="_blank" className="text-decoration-none text-light"><i class="fab fa-facebook-square"></i> <span>Facebook</span></a>
                    </div>
                    <div className="fs-4 social">
                    <a href="https://www.linkedin.com/in/codepickjs/" target="_blank" className="text-decoration-none text-light"><i class="fab fa-linkedin"></i> <span>Facebook</span></a>
                    </div>
                </div>
            </div>
            <p className='text-center m-0 py-2'>Copyright © 2021 Programming-hero.com</p>
        </div>
        </div>
    );
};

export default Footer;