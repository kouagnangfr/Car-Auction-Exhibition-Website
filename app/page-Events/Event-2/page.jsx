'use client'

import Link from 'next/link'

import styles from "@/components/css/HomeSection2.module.css";

export default function Home2 ()
{
    return <div className={styles.home2}>
        <div className={styles.w50}>
        <h4>Pour tout les passionner de vehicules, </h4>
        <h1>Cars<span className={styles.logoSpan}>Auctions</span> <span className={styles.presente}>Presente: </span></h1>
        <p>""la plus grande vente aux enchères de véhicules jamais au Canada, venez découvrir une sélection exceptionnelle de véhicules anciens 
            et modernes. Rejoignez-nous pour une expérience automobile unique. Réservez vos dates dès maintenant !""
        </p>
        <p className={styles.date}><span className={styles.date}>15 - 25 October 2024 | Montreal(Quebec), Canada</span></p>  
        <Link href="/page-Events/Event-1"><button >Previous Event</button></Link>
        </div>
    </div>
}