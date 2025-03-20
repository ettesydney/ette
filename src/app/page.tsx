import About from './components/sections/about';
import Functions from './components/sections/functions';
import Intro from './components/sections/intro';
import Menu from './components/sections/menu';
import WhatsOn from './components/sections/whatsOn';

export default function Home() {

  return (
    <div className="site-bg w-full">
      <section className='h-dvh dark-section'>
        <Intro />
      </section>
      <section id='about' className='pt-[3rem]'>
        <About />
      </section>
      <section id='menu' className='pt-[3rem]'>
        <Menu />
      </section>
      <section id='functions'  className='pt-[3rem]'>
        <Functions />
      </section>
      <section  id='whats-on'  className='pt-[3rem]'>
        <WhatsOn />
      </section>
    </div>
  );
}
