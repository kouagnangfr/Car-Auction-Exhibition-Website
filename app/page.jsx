import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faCheckSquare, faTimesCircle);

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() 
{
  return (
    <main className={styles.main}>
      
    </main>
  );
}
