'use client'

import styles from "@/components/css/Contact.module.css"

import Image from "next/image"
import gmail from "@/public/reseaux socios/gmail.png"
import maps from "@/public/reseaux socios/google-maps.png"
import telephone from "@/public/reseaux socios/telephone.png"

import { useState } from 'react';

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //Validation
    const validationFormulaire = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        if (formData.name.trim() === '') {
            newErrors.name = '*Le nom ne peut pas être vide!!';
            isValid = false;
        }
        if (formData.email.trim() === '') {
            newErrors.email = '*Veillez entrer votre adresse courriel !!';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = '*Veuillez entrer une adresse couriel valide !!';
            isValid = false;
        }
        if (formData.subject.trim() === '') {
            newErrors.subject = '*Le sujet ne peut etre vide !!';
            isValid = false;
        }
        if (formData.message.trim() === '') {
            newErrors.message = '*Votre message ne peut pas etre vide!!';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = '*Le message doit avoir au moins 10 caracteres !!';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const isValidEmail = (email) => {
        const parties = email.split('@');
        if (parties.length !== 2 || parties[0] === '' || parties[1] === '') {
            return false;
        }
        const partiesDomaine = parties[1].split('.');
        if (partiesDomaine.length < 2 || partiesDomaine[partiesDomaine.length - 1].length < 2) {
            return false;
        }
        return true;
    };
    
    //Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationFormulaire()) {
            console.log('Formulaire soumis :', formData);
            toast.success('Votre message a ete bien recu!!');

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setErrors({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            console.log('Formulaire Non Soumis : car contient plusieurs erreurs!!');
        }
    };

    return (
        <section className={styles.contactSection + " " + styles.sectionPadding + " " + styles.contact}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.bigTitle}>Prenez <span>contact</span></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.contactItem}>
                        <div className={styles.contactItemInner}>
                            <Image src={telephone} alt="Logo telephone" />    
                            <span>Téléphone</span>
                            <p>+1 (000) 000 0000</p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.contactItemInner}>
                            <Image src={gmail} alt="Logo Gmail" />
                            <span>Email</span>
                            <p>CarsAuctions@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.contactItemInner}>
                            <Image src={maps} alt="Logo maps" />
                            <span>Adresse</span>
                            <p>Ottawa, Toronto, LasVegas</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.w50}>
                                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="name" placeholder="Nom" className={styles.inputControl} onChange={handleInputChange} value={formData.name} />
                                    </div>
                                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                    <div className={styles.inputGroup}> 
                                        <input type="text" name="email" placeholder="Email" className={styles.inputControl} onChange={handleInputChange} value={formData.email} />
                                    </div>
                                    {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
                                    <div className={styles.inputGroup}> 
                                        <input type="text" name="subject" placeholder="Sujet" className={styles.inputControl} onChange={handleInputChange} value={formData.subject} />
                                    </div>
                                </div>
                                <div className={styles.w50}>
                                    {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                                    <div className={styles.inputGroup}>
                                        <textarea name="message" className={styles.inputControl} placeholder="Message" onChange={handleInputChange} value={formData.message} cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.submitBtn}>
                                    <button type="submit" className={styles.btn1}>Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

       