'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from '@/components/css/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Ajoute toutes les icônes solidaires à la bibliothèque
library.add(fas);

export default function Header()
{
    //Fonction pour activer ou desactiver la barre de recherche 
    const [hidden, setHidden] = useState(true);
    const toggle = () =>
    {
        setHidden(!hidden);
    }

    //Fonction pour afficher ou desactiver le menu Hamburger
    const [hambuger, setHambuger] = useState(false);
    const toggleHam = () =>
    {
        setHambuger(!hambuger);
    }

    const pathname = usePathname();

    return <header className={styles.header}>
        <div className={styles.mainContainer}>
            <div className={styles.navBar + " " + styles.container}>
                <button aria-label="Ouvrir le menu" onClick={toggleHam} style={{ backgroundColor: '#couleurDeFond', color: '#couleurDeTexte' }}>
                    <FontAwesomeIcon icon="bars" className={styles.icon + " " + styles.menuIcon} />
                </button>
                <Link href="/" className={` ${styles.logo}`} >Cars<span>Auctions</span></Link>
                {/*Nav-list */}
                <ul className={`${styles.navbarList} ${hambuger ? styles.affichageNav : ''}`}>
                    <li>
                        <Link href="/page-Events/Event-1" className={pathname === '/page-Events/Event-1' || pathname === '/page-Events/Event-2' ? styles.active : ''}>
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/page-Cars" className={pathname === '/page-Cars' ? styles.active : ''}>
                            Cars
                        </Link>
                    </li>
                    <li>
                        <Link href="/page-Pricing" className={pathname === '/page-Pricing' ? styles.active : ''}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/page-Contact" className={pathname === '/page-Contact' ? styles.active : ''}>
                            Contact
                        </Link>
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