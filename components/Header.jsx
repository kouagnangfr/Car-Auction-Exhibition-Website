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
    //Fonction pour activer ou desactiver la barre de recherche 
    const [hidden, setHidden] = useState(true);
    const toggle = () =>
    {
        setHidden(!hidden);
    }

    //Fonction permettant determiner la navigation active et de faire le routage
    const [activePage, setActivePage] = useState('Home');
    const changeurPage = (page) =>
    {
        setPage(page);
        setActivePage(page);
    }

    //Fonction pour afficher ou desactiver le menu Hamburger
    const [hambuger, setHambuger] = useState(false);
    const toggleHam = () =>
    {
        setHambuger(!hambuger);
    }

    return <header className={styles.header}>
        <div className={styles.mainContainer}>
            <div className={styles.navBar + " " + styles.container}>
                <a href="#" onClick={toggleHam}><FontAwesomeIcon icon="bars" className={styles.icon + " " + styles.menuIcon} /></a>
                <a href="#" className={styles.logo} onClick={() => setPage('Home')}>Cars<span>Auctions</span></a>
                {/*Nav-list */}
                <ul className={`${styles.navbarList} ${hambuger ? styles.affichageNav : ''}`}>
                    <li>
                        <a href="#" className={activePage === 'Home' ? styles.active : ''} onClick={() => changeurPage('Home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className={activePage === 'About' ? styles.active : ''} onClick={() => changeurPage('About')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className={activePage === 'Cars' ? styles.active : ''} onClick={() => changeurPage('Cars')}>
                            Cars
                        </a>
                    </li>
                    <li>
                        <a href="#" className={activePage === 'Pricing' ? styles.active : ''} onClick={() => changeurPage('Pricing')}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className={activePage === 'Contact' ? styles.active : ''} onClick={() => changeurPage('Contact')}>
                            Contact
                        </a>
                    </li>
                    <a href="#" className={styles.closeNav} onClick={toggleHam}><FontAwesomeIcon icon="fa-solid fa-x" /></a>
                </ul>
                {/*Search icon and search box */}
                <div className={styles.utility}>
                    <FontAwesomeIcon icon="magnifying-glass" className={styles.icon + " " + styles.searchIcon + " " + styles.active} onClick={toggle}/>
                    <FontAwesomeIcon icon="circle-half-stroke" className={styles.icon}/>
                </div>  
            </div>    
        </div>
        {!hidden &&    
            <div className={styles.searchBox}>
                <input type="search" name="search-box" id="" placeholder='Search your car here .....' />
            </div> 
        }
    </header>
}