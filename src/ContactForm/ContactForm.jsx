import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nfkakfx', 'template_kq901jc', form.current, {
                publicKey: 'ppBTHbbqUqJS-dq5J',
            })
            .then(
                () => {
                    // Success message using SweetAlert2
                    Swal.fire({
                        title: 'Success!',
                        text: 'Email sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then(() => {
                        // Reset the form after successful submission
                        form.current.reset();
                    });
                },
                (error) => {
                    // Error message using SweetAlert2
                    Swal.fire({
                        title: 'Error!',
                        text: `Error: ${error.text}`,
                        icon: 'error',
                        confirmButtonText: 'Try Again',
                    });
                }
            )
            .catch((error) => {
                // In case of unforeseen errors (e.g., network failure, etc.)
                console.error(error);
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    return (
        <div className="flex justify-center items-center">
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="border-2 p-8 rounded-lg shadow-xl w-full max-w-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-center text-white text-4xl mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Us
                </motion.h2>

                <motion.label
                    htmlFor="user_name"
                    className="text-white text-sm mb-2 block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Name
                </motion.label>
                <motion.input
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your name"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                />

                <motion.label
                    htmlFor="user_email"
                    className="text-white text-sm mb-2 block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Email
                </motion.label>
                <motion.input
                    type="email"
                    name="user_email"
                    id="user_email"
                    className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your email"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />

                <motion.label
                    htmlFor="message"
                    className="text-white text-sm mb-2 block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Message
                </motion.label>
                <motion.textarea
                    name="message"
                    id="message"
                    className="w-full p-3 mb-6 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your message"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />

                <motion.input
                    type="submit"
                    value="Send"
                    className="w-full py-3 bg-slate-500 text-white rounded-md hover:bg-teal-600 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                />
            </motion.form>
        </div>
    );
};

export default ContactForm;
