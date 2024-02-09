import styles from "@/components/css/Contact.module.css"

import Image from "next/image"
import gmail from "@/public/reseaux socios/gmail.png"
import maps from "@/public/reseaux socios/google-maps.png"
import telephone from "@/public/reseaux socios/telephone.png"

export default function Contact()
{
    return <section className={styles.contactSection + " " + styles.sectionPadding + " " +styles.contact}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.bigTitle}>Get in <span>Touch</span></div>
            </div>
            <div className={styles.row}>
                <div className={styles.contactItem}>
                    <div className={styles.contactItemInner}>
                        <Image src={telephone} alt="Logo telephone" />    
                        <span>Phone</span>
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
                        <span>Address</span>
                        <p>Ottawa, Toronto, LasVegas</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.contactForm}>
                    <form action="">
                        <div className={styles.row}>
                            <div className={styles.w50}>
                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="Name" className={styles.inputControl}/>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" placeholder="Email" className={styles.inputControl}/>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="Subject" className={styles.inputControl}/>
                                </div>
                            </div>
                            <div className={styles.w50}>
                                <div className={styles.inputGroup}>
                                    <textarea name="" className={styles.inputControl} placeholder="Message" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.submitBtn}>
                                <button type="submit" className={styles.btn1}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
       