import styles from "@/components/css/HomeSection1.module.css"
import Image from "next/image"

import imagePrincipale from '@/public/home/car.jpg'

export default function HomeSection1()
{
    return <section className={styles.homeSection1}>
        <div className={styles.divPrincipale}>
            
            <span className={styles.date}>10 - 25 Septembre 2024 | Ottawa(ontario), Canada</span>
            <h1 className={styles.titrePrincipale}>cars sanctuary 2024</h1>
            <div className={styles.decompte}>
                <span className={styles.jours}><p>Days</p>90 </span>
                <span className={styles.heures}><p>Hours</p>06 </span>
                <span className={styles.minutes}><p>Minutes</p>38 </span>
                <span className={styles.secondes}><p>secondes</p>48 </span>
            </div>
            <div className={styles.menubutton}>
                <a href="#" className={styles.homeButton}>Get your pass now</a>
            </div>
        </div>
        <div className={styles.divSecondaire}>
            <h2>Car<span>Auction</span></h2>
            <p>
                Ne manquez pas l'evenements mondial où les légendes prennent vie, où chaque voiture est une œuvre d'art 
                et une  pièce d'histoire. Du 10 au 25 Septembre, nous vous invitons à explorer et à enchérir sur une collection 
                exclusive des voitures les plus emblématiques de tous les temps.
                Prenez place dans notre salle des enchères virtuelle et ressentez l'excitation monter à mesure que les offres s'envolent.
                    Que vous soyez collectionneur chevronné ou amateur passionné, chaque enchère est une opportunité de posséder un 
                    morceau de l'histoire automobile.
            </p>
        </div>
    </section>
}