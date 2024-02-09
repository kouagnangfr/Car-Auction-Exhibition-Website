'use client'

import styles from "@/components/css/HomeSection2.module.css";

export default function Home2 ({setPageHome})
{
    return <div className={styles.home2}>
        <div className={styles.w50}>
        <h4>Pour tout les passionner de vehicules, </h4>
        <h1>Cars<span className={styles.logoSpan}>Auctions</span> <span className={styles.presente}>Presente: </span></h1>
        <p>""la plus grande vente aux enchères de véhicules jamais au Canada, venez découvrir une sélection exceptionnelle de véhicules anciens 
            et modernes. Rejoignez-nous pour une expérience automobile unique. Réservez vos dates dès maintenant !""
        </p>
        <p className={styles.date}><span className={styles.date}>10 - 25 Septembre 2024 | Ottawa(ontario), Canada</span></p>  
        <button onClick={() => setPageHome('Home1')}>PRECEDENTE</button>
        </div>
    </div>
}