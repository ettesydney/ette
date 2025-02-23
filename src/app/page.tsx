// src/app/page.tsx (Home page - remains a server component)
import About from './components/sections/about';
import Functions from './components/sections/functions';
import Intro from './components/sections/intro';
import Menu from './components/sections/menu';
import WhatsOn from './components/sections/whatsOn';

export default function Home() {

  return (
    <div className="site-bg w-full">
      <div className='h-dvh'>
        <Intro />
      </div>
      <div className='h-dvh'>
       <About />
      </div>
      <Menu />
      <Functions />
      <WhatsOn />
    </div>
  );
}
