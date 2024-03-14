import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Home1 from "@/components/Home";

library.add(faCoffee, faCheckSquare, faTimesCircle);

export const metadata = 
{
    title: 'Home | CarAuction',
    description : "Page d'accueil de notre site web CarAuction contenant une breve description et les objectifs de ce dernier",
    openGraph:
    {
        title: 'Home | CarAuction',
        description : "Page d'accueil de notre site web CarAuction contenant une breve description et les objectifs de ce dernier",
        images:['/home/Background-home2.png']
    }
}


export default function Home() 
{
  return (
    <main>
      <Home1/>
    </main>
  );
}
