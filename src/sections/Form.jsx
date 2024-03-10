import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
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
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
        </form>
    );
}

// export default function Form() {
//     return (
//         <section className="contact">
//             <form id="contact-form">
//                 <!-- To simplify the tutorial, the value is static. -->
//                 <input type="hidden" name="contact_number" value="697483">
//                     <label>Name</label>
//                     <input type="text" name="user_name">
//                         <label>Email</label>
//                         <input type="email" name="user_email">
//                             <label>Message</label>
//                             <textarea name="message"></textarea>
//                             <input type="submit" value="Send">
//                             </form>

//             <h2 className="contact-title">Me contacter</h2>

//             <form action="" id="contact-form">
//                 <div className="form-input">
//                     <label htmlFor="user_name">Nom : </label>
//                     <input type="text" name="user_name" placeholder="Nom" />
//                 </div>
//                 <div className="form-input">
//                     <label htmlFor="user_email">E-mail : </label>
//                     <input type="email" name="user-email" placeholder="e-mail" />
//                 </div>
//                 <div className="form-input message">
//                     <label htmlFor="user_message">Message : </label>
//                     <textarea name="user_message" placeholder="Message" id="" cols="30" rows="10"></textarea>
//                 </div>
//                 <input type="submit" value="Envoyer" />

//             </form>
//         </section>
//     )
// }