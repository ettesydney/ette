import About from './components/sections/about';
import Functions from './components/sections/functions';
import Intro from './components/sections/intro';
import Menu from './components/sections/menu';
import WhatsOn from './components/sections/whatsOn';

export default function Home() {

  return (
    <div className="site-bg w-full">
      <section data-section='dark' className='h-dvh dark-section'>
        <Intro />
      </section>
      <section data-section='light' className='light-section'>
        <About />
      </section>
      <section data-section='light' className='light-section'>
        <Menu />
      </section>
      <section data-section='light' className='light-section'>
        <Functions />
      </section>
      <section data-section='light' className='light-section'>
        <WhatsOn />
      </section>
    </div>
  );
}
