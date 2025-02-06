import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaLinkedin, FaMessage, FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Contactform = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log('Form data:', formObject);

        emailjs
            .sendForm('service_e8p1neo', 'template_s8krlgc', form.current, {
                publicKey: 'mqsRNuZNVsLKk5VQE',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!');
                    console.log(result);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };



    return (
        <div className='bg-gray-900 text-white flex flex-col lg:flex-row sm:items-start sm:justify-center gap-10 py-10 px-5'>
            <div className='space-y-10'>
                <div className='space-y-5'>
                    <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4278d] to-[#8260b4]'>DO YOU HAVE A PROJECT TO DISCUSS?</h1>
                    <div className='flex items-center gap-3 text-4xl'>
                        <p>GET IN TOUCH</p>
                        <i> <FaMessage></FaMessage> </i>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl'>CONTACT</h1>
                        <p className='text-blue-500 underline'>uthso119464@gmail.com</p>
                        <p>Contact number: +8801861976409</p>
                        <div className='flex text-3xl gap-3'>
                            <p> <a href="mailto:uthso119464@gmail.com"> <SiGmail /> </a>  </p>
                            <p> <a href="https://wa.me/1861976409"> <FaWhatsapp />  </a>  </p>
                        </div>

                    </div>
                    <div className="text-white space-y-2">
                        <div>
                            <h1 className="text-3xl">SOCIAL MEDIA</h1>
                        </div>
                        <div className="text-3xl flex items-center justify-start gap-5">
                            <Link to="https://www.linkedin.com/in/md-sihab-mahmud-uthso-147651317"><FaLinkedin></FaLinkedin></Link>
                            <Link to="https://www.facebook.com/profile.php?id=61554984268601"><FaFacebook></FaFacebook></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='lg:w-1/2 w-full'>
                <form className='flex flex-col gap-3 w-full' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='p-2 rounded-lg' type="text" name="user_name" />
                    <label>Email</label>
                    <input className='p-2 rounded-lg' type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='p-2 rounded-lg' name="message" />
                    {/* <input className='px-2  bg-blue-700' type="submit" value="Send" /> */}
                    <button className='btn btn-primary w-30' type='submit' value="Send">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contactform;