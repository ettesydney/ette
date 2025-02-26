import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import ImageHelper from './helpers/imageHelper';
import facebook from '../../../public/facebook-svgrepo-com.svg';
import instagram from '../../../public/instagram-svgrepo-com.svg';

export default async function Footer() {
  const siteData = await client.fetch(GENERIC_QUERY);

  return (
    <footer className="w-full dark-bg text-primary pt-8 h-dvh relative">
      <div className="flex flex-col items-center w-full mt-[5rem] lg:mt-[3rem] lg:justify-center lg:h-[90%]">

        {/* Operating Hours (Now Above Contact Info) */}
        <div className="text-center mb-6 lg:hidden">
          <ul>
            {siteData.hours.map((hour: string, index: number) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Footer Image */}
        <div className="mb-6 mx-[8rem]">
          <ImageHelper
            img={siteData.footerImage?.asset?.url}
            alt={siteData.footerImage?.alt || 'Primary Image'}
            width={350}
            height={200}
          />
        </div>

        {/* Contact Info (Now Below Operating Hours) */}
        <div className="lg:hidden text-center mb-6">
          <ul>
            <li>{siteData.address}</li>
            <li>
              <a href={`mailto:${siteData.email}`} className="hover:underline">{siteData.email}</a>
            </li>
            <li>
              <a href={`tel:${siteData.phone}`} className="hover:underline">{siteData.phone}</a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block text-center mb-6 lg:mt-[2rem]">
          <ul>
            {siteData.hours.map((hour: string, index: number) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mb-6 hidden lg:flex lg:mt-[2rem]">
          <a href={siteData.instagram} target='_blank'>
            <ImageHelper img={instagram} alt="Instagram" width={22} height={22} />
          </a>
          <a href={siteData.facebook} target='_blank'>
            <ImageHelper img={facebook} alt="Facebook" width={20} height={20} />
          </a>
        </div>

      </div>

      {/* Bottom Row (Visible only on lg and above, Positioned at the bottom of the page) */}
      <div className="absolute bottom-10 lg:bottom-0 w-full lg:flex lg:flex-row lg:items-end lg:justify-between lg:p-4 lg:gap-6 lg:h-auto">
        
        {/* Left Side - Join the Family Button */}
        <div className="flex-1 text-center lg:text-left lg:mb-2">
          <a className="button px-4 py-2 w-[200px]" href={siteData.joinTheFamilyLink} target="_blank">
            Join the Family
          </a>
        </div>

        {/* Center - Footer Logo (Now Always Centered) */}
        <div className="flex-1 flex justify-center mt-[2rem] lg:mt-0">
          <ImageHelper
            img={siteData.footerLogo?.asset?.url}
            alt={siteData.footerLogo?.alt || 'Footer Logo'}
            width={100}
            height={100}
            className='relative top-[15px] lg:top-0'
          />
        </div>

        {/* Right Side - Contact Details (Hidden on Mobile, Visible on Desktop) */}
        <div className="flex-1 hidden lg:block text-right">
          <ul>
            <li>{siteData.address}</li>
            <li>
               <a href={`mailto:${siteData.email}`} className="hover:underline">{siteData.email}</a>
            </li>
            <li>
              <a href={`tel:${siteData.phone}`} className="hover:underline">{siteData.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
