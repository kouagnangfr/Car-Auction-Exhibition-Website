import styles from "@/components/css/Cars.module.css"

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import car2 from "@/public/home/car2.jpg"
import car4 from "@/public/home/car4.jpg"
import car5 from "@/public/home/car5.jpg"
import car6 from "@/public/home/car6.jpg"
import car7 from "@/public/home/car7.jpeg"
import car8 from "@/public/home/car8.jpg"

export default function Cars()
{
    return  <section className={styles.cars + " " + styles.sectionPadding + " " + styles.section}>
        <div className={styles.container}>
        <div className={styles.row}>
                <div className={styles.bigTitle}>Get Your <span>dream Car</span></div>
        </div>
            <div className={styles.row}>
                <div className={styles.carsFilter}>
                    <button type="button" className={styles.active} data-filter="all">All</button>
                    <button type="button" data-filter="web-design">Sport</button>
                    <button type="button" data-filter="photography">familial</button>
                    <button type="button" data-filter="wordpress">Antique</button>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.carsItem} data-category="Sport">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car6} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>Sport</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carsItem} data-category="Sport">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car2} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>Sport</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carsItem} data-category="Sport">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car7} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>familiale</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carsItem} data-category="Sport">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car4} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>Sport</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carsItem} data-category="Antique">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car5} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>Antique</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carsItem} data-category="Sport">
                    <div className={styles.carsItemInner}>
                        <div className={styles.carsImg}>
                        <Image src={car8} alt="voiture1" />
                        </div>
                        <div className={styles.carsInfo}>
                            <h4>Sport</h4>
                            <div className={styles.icon}>
                            <FontAwesomeIcon icon="magnifying-glass" className={styles.ico}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}