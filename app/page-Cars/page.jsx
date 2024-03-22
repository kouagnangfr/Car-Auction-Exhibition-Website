import styles from "@/components/css/Cars.module.css"

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import carsData from '@/public/gallerie-cars.json'

library.add(fas);

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Vehicules | CarAuction',
    description : 'Presenttion des differents vehicules que nous disposons et qui seront vendus aux encheres',
    openGraph:
    {
        title: 'Vehicules | CarAuction',
        description : 'Presenttion des differents vehicules que nous disposons et qui seront vendus aux encheres',
        images:['/cars/car1.jpg']
    }
}

export default function Cars() {
    return (
        <section className={`${styles.cars} ${styles.sectionPadding} ${styles.section}`}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.bigTitle}>Get Your <span>dream Car</span></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.carsFilter}>
                        <button type="button" className={styles.active} data-filter="all">All</button>
                        <button type="button" data-filter="Sport">Sport</button>
                        <button type="button" data-filter="Familiale">familiale</button>
                        <button type="button" data-filter="Antique">Antique</button>
                        <button type="button" data-filter="Other">Other</button>
                    </div>
                </div>
                <div className={styles.row}>
                    {carsData.map((car, index) => (
                        <div key={index} className={styles.carsItem} data-category={car["data-category"]}>
                            <div className={styles.carsItemInner}>
                                <div className={styles.carsImg}>
                                    <Image src={car.src} alt={car.alt} width={600} height={600} loading={car.loading} priority={true}/>
                                </div>
                                <div className={styles.carsInfo}>
                                    <h4>{car.title}</h4>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon="magnifying-glass" className={styles.ico} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}