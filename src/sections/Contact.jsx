import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('service_jimc75_portfolio', 'pf_contact_form_template', form.current, {
                publicKey: 'KhPYyrzU2AVXL5SsO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        alert('Votre message a bien été envoyé');
    };

    return (
        <section className="contact" id='contact'>
            <h2 className="contact-title">Me Contacter</h2>
            <form ref={form} onSubmit={sendEmail} className='contact-form' >
                <div className="contact-form-item">
                    <label>Nom *</label>
                    <input type="text" placeholder="Votre nom" name="user_name" required data-aos="zoom-out" data-aos-duration="1200" />
                </div>
                <div className="contact-form-item">
                    <label>E-mail *</label>
                    <input type="email" placeholder="Votre e-mail" name="user_email" required data-aos="zoom-out" data-aos-duration="1200" />
                </div>
                <div className="contact-form-item">
                    <label>Message *</label>
                    <textarea name="message" placeholder="Votre message" required data-aos="zoom-out" data-aos-duration="1200" />
                    <p>* = champ obligatoire</p>
                </div>
                <input type="submit" value="Envoyer" id='submit-button' />
            </form>
        </section>
    );
}