import styles from '@/components/css/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Ajoute toutes les icônes solidaires à la bibliothèque
library.add(fas);

export default function Header()
{
    return <header className={styles.header}>
        <div className={styles.mainContainer}>
            <div className={styles.navBar + " " + styles.container}>
                <FontAwesomeIcon icon="bars" className={styles.icon + " " + styles.menuIcon}/>
                <a href="#" className={styles.logo}>Cars<span>Auctions</span></a>
                {/*Nav-list */}
                <ul className={styles.navbarList}>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cars</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                {/*Search icon and search box */}
                <div className={styles.utility}>
                    <FontAwesomeIcon icon="magnifying-glass" className={styles.icon + " " + styles.searchIcon + " " + styles.active} />
                    <FontAwesomeIcon icon="circle-half-stroke" className={styles.icon} />
                </div>
                <div className={styles.searchBox}>
                    <input type="search" name="search-box" id="" placeholder='Search your car here .....' />
                </div>
                
                
            </div>
        </div>
    </header>
}