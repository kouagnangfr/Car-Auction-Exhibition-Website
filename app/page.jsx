import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Home1 from "@/components/Home";

library.add(faCoffee, faCheckSquare, faTimesCircle);

export default function Home() 
{
  return (
    <main>
      <Home1/>
    </main>
  );
}
