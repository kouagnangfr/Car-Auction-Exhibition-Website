'use client'

import styles from "./css/Footer.module.css"

import Image from "next/image"
import gmail from "@/public/reseaux socios/gmail.png"
import maps from "@/public/reseaux socios/google-maps.png"
import instagram from "@/public/reseaux socios/instagram.png"
import pinterest from "@/public/reseaux socios/pinterest.png"
import telephone from "@/public/reseaux socios/telephone.png"
import twitter from "@/public/reseaux socios/twitter.png"
import youtube from "@/public/reseaux socios/youtube.png"
import interrogation from "@/public/reseaux socios/interrogation.png"
import facebook from "@/public/reseaux socios/facebook.png"

export default function Footer({setPage})
{
    return <footer className={styles.footer}>
        <div className="footer-container"> 
            <div className={styles.mainDiv + " " + "container d-flex justify-content-between"}>
                <div className="container d-flex justify-content-around">
                    <div>
                        <h3>Cars<span>Auctions</span></h3>
                        <span className={styles.follow}>Follow us on :</span>
                        <div>
                            <Image src={pinterest} alt="Logo pinterest"/>
                            <Image src={instagram} alt="Logo instagram" />
                            <Image src={twitter} alt="Logo twitter" />
                            <Image src={youtube} alt="Logo youtube" />
                            <Image src={facebook} alt="Logo facebook" />
                        </div>
                    </div>
                    <div>
                        <h4>Pages</h4>
                        <p><a href="#" onClick={() => setPage('Home')}>Home</a></p>
                        <p><a href="#" onClick={() => setPage('About')}>About</a></p>
                        <p><a href="#" onClick={() => setPage('Cars')}>Cars</a></p>
                        <p><a href="#" onClick={() => setPage('Pricing')}>Pricing</a></p>
                        <p><a href="#" onClick={() => setPage('Contact')}>Contact</a></p>
                    </div>
                </div>
                <div className="container d-flex justify-content-around">
                    <div >
                        <h4>Legal</h4>
                        <p><a href="#">Privacy</a></p>
                        <p><a href="#">Sales Policy</a></p>
                        <p><a href="#">Terms & Condition</a></p>
                        <p><a href="#">Cookie Policy</a></p>
                    </div>
                    <div>
                        <h4>Contacts US</h4>
                        <p><Image src={maps} alt="Logo maps" />Ottawa, Toronto, LasVegas</p>
                        <p><Image src={telephone} alt="Logo telephone" /> +1 (000) 000 0000</p>
                        <p><a href="mailto:CarsAuctions@gmail.com"><Image src={gmail} alt="Logo Gmail" />CarsAuctions@gmail.com</a></p>
                        <p><a href="#"><Image src={interrogation} alt="interrogation" />Faq</a></p>
                    </div>  
                </div>                
            </div>
            <div className= {styles.copyR + " " + "container d-flex justify-content-center"}>
                <div className="text-center row">
                    <span className={styles.line}>&copy;2024 <mark>Cars<span>Auction</span> </mark> all right reserved</span>
                    <span>&copy;Developed by Franck Kouagnang & Abdella Naoui   -|-  &copy;College la cite</span>
                </div>
            </div>
        </div>      
    </footer>
}