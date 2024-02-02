'use client'

import styles from '@/components/css/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Ajoute toutes les icônes solidaires à la bibliothèque
library.add(fas);

export default function Header({setPage})
{
    //Fonction pour afficher la barre de recherche ou non
    const [hidden, setHidden] = useState(true);
    const toggle = () =>
    {
        setHidden(!hidden);
    }

    return <header className={styles.header}>
        <div className={styles.mainContainer}>
            <div className={styles.navBar + " " + styles.container}>
                <FontAwesomeIcon icon="bars" className={styles.icon + " " + styles.menuIcon}/>
                <a href="#" className={styles.logo}>Cars<span>Auctions</span></a>
                {/*Nav-list */}
                <ul className={styles.navbarList}>
                    <li>
                        <a href="#" className={styles.active} onClick={() => setPage('Home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setPage('About')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setPage('Cars')}>
                            Cars
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setPage('Pricing')}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setPage('Contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
                {/*Search icon and search box */}
                <div className={styles.utility}>
                    <FontAwesomeIcon icon="magnifying-glass" className={styles.icon + " " + styles.searchIcon + " " + styles.active} onClick={toggle}/>
                    <FontAwesomeIcon icon="circle-half-stroke" className={styles.icon}/>
                </div>
                {!hidden &&    
                    <div className={styles.searchBox}>
                        <input type="search" name="search-box" id="" placeholder='Search your car here .....' />
                    </div> 
                }    
            </div>
        </div>
    </header>
}