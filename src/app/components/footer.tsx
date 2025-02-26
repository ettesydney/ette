import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import ImageHelper from './helpers/imageHelper';
import facebook from '../../../public/facebook-svgrepo-com.svg';
import instagram from '../../../public/instagram-svgrepo-com.svg';

export default async function Footer() {
  const siteData = await client.fetch(GENERIC_QUERY);

  return (
    <footer className="w-full dark-bg text-primary pt-8">
      <div className="flex flex-col items-center w-full mt-[5rem]">

        {/* Operating Hours (Now Above Contact Info) */}
        <div className="text-center mb-6 md:hidden">
          <ul>
            {siteData.hours.map((hour: string, index: number) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Footer Image */}
        <div className="mb-6 mx-[7rem]">
          <ImageHelper
            img={siteData.footerImage?.asset?.url}
            alt={siteData.footerImage?.alt || 'Primary Image'}
            width={300}
            height={200}
          />
        </div>

        {/* Contact Info (Now Below Operating Hours) */}
        <div className="md:hidden text-center mb-6">
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

        <div className="hidden md:block text-center mb-6">
          <ul>
            {siteData.hours.map((hour: string, index: number) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mb-6">
          <a href={siteData.instagram} target='_blank'>
            <ImageHelper img={instagram} alt="Instagram" width={22} height={22} />
          </a>
          <a href={siteData.facebook} target='_blank'>
            <ImageHelper img={facebook} alt="Facebook" width={20} height={20} />
          </a>
        </div>

        {/* Bottom Row (Still Visible on All Screens) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between flex-end w-full p-4 gap-6">

          {/* Left Side - Join the Family Button */}
          <div className="flex-1 text-center md:text-left">
            <a className="button px-4 py-2" href={siteData.joinTheFamilyLink} target="_blank">
              Join the Family
            </a>
          </div>

          {/* Center - Footer Logo (Now Always Centered) */}
          <div className="flex-1 flex justify-center mt-[5rem] md:mt-0">
            <ImageHelper
              img={siteData.footerLogo?.asset?.url}
              alt={siteData.footerLogo?.alt || 'Footer Logo'}
              width={100}
              height={100}
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
      </div>
    </footer>
  );
}
