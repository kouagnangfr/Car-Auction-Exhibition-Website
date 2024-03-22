'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export default function Footer()
{
    const pathname = usePathname();

    return <footer className={styles.footer}>
        <div className="footer-container"> 
            <div className={styles.mainDiv + " " + "container d-flex justify-content-between"}>
                <div className="container d-flex justify-content-around">
                    <div>
                        <h2>Cars<span>Auctions</span></h2>
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
                        <h3>Pages</h3>
                        <p>
                            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                                Home
                            </Link>
                        </p>
                        <p>
                            <Link href="/page-Events/Event-1" className={pathname === '/page-Events/Event-1' || pathname === '/page-Events/Event-2' ? styles.active : ''}>
                                Events
                            </Link>
                        </p>
                        <p>
                            <Link href="/page-Cars" className={pathname === '/page-Cars' ? styles.active : ''}>
                                Cars
                            </Link>
                        </p>
                        <p>
                            <Link href="/page-Pricing" className={pathname === '/page-Pricing' ? styles.active : ''}>
                                Pricing
                            </Link>
                        </p>
                        <p>
                            <Link href="/page-Contact" className={pathname === '/page-Contact' ? styles.active : ''}>
                                Contacts
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="container d-flex justify-content-around">
                    <div >
                        <h4>Legal</h4>
                        <p><Link href="#">Privacy</Link></p>
                        <p><Link href="#">Sales Policy</Link></p>
                        <p><Link href="#">Terms & Condition</Link></p>
                        <p><Link href="#">Cookie Policy</Link></p>
                    </div>
                    <div>
                        <h4>Contacts US</h4>
                        <p><Image src={maps} alt="Logo maps" />Ottawa, Toronto, LasVegas</p>
                        <p><Image src={telephone} alt="Logo telephone" /> +1 (000) 000 0000</p>
                        <p><a href="mailto:CarsAuctions@gmail.com"><Image src={gmail} alt="Logo Gmail" />CarsAuctions@gmail.com</a></p>
                        <p><Link href="#"><Image src={interrogation} alt="interrogation" />Faq</Link></p>
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