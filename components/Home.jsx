'use client'

import styles from "@/components/css/Home.module.css"
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";

import { useState } from "react";

export default function Home ()
{
  //Variable permettant de changer l'accueil
  const [pageHome, setPageHome] = useState('Home1');

  return <>
      { 
          pageHome === 'Home1' ? 
            <Home1 setPageHome = {setPageHome}/>
          : pageHome === 'Home2' ?
            <Home2 setPageHome = {setPageHome}/>
          :
            <Error404/>
      }
      <div className={styles.divSecondaire}>
          <h2>Presententat<span>ion</span></h2>
          <p>
              Ne manquez pas l'evenements mondial où les légendes prennent vie, où chaque voiture est une œuvre d'art 
              et une  pièce d'histoire. Du 10 au 25 Septembre, nous vous invitons à explorer et à enchérir sur une collection 
              exclusive des voitures les plus emblématiques de tous les temps.
              Prenez place dans notre salle des enchères virtuelle et ressentez l'excitation monter à mesure que les offres s'envolent.
              Que vous soyez collectionneur chevronné ou amateur passionné, chaque enchère est une opportunité de posséder un 
              morceau de l'histoire automobile.
          </p>
      </div>
  </>
}