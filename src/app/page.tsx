// src/app/page.tsx (Home page - remains a server component)
import About from './components/sections/about';
import Functions from './components/sections/functions';
import Intro from './components/sections/intro';
import Menu from './components/sections/menu';

export default async function Home() {

  return (
    <div className="home w-full">
      <div className='h-dvh'>

     <Intro />
      </div>
      <div className='h-dvh'>
     <About />
     </div>
     <Menu />
     <Functions />
    </div>
  );
}
