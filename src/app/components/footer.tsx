import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import ImageHelper from './helpers/imageHelper';
import facebook from '../../../public/facebook-svgrepo-com.svg';
import instagram from '../../../public/instagram-svgrepo-com.svg';

export default async function Footer() {

  const siteData = await client.fetch(GENERIC_QUERY)

  return (
    <footer className="w-full dark-bg text-primary">
      <div className="flex flex-col items-center justify-between min-h-screen text-center w-full">
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center w-full flex-grow">
          
          {/* Footer Image */}
          <div>
            <ImageHelper 
              img={siteData.footerImage?.asset?.url} 
              alt={siteData.footerImage?.alt || 'Primary Image'} 
              width={300} 
              height={200} 
            />
          </div>
  
          {/* Operating Hours */}
          <div>
            <ul>
              {siteData.hours.map((hour: string, index: number) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={siteData.instagram} target='_blank'>
              <ImageHelper img={instagram} alt="Instagram" width={22} height={22} />
            </a>
            <a href={siteData.facebook} target='_blank'>
              <ImageHelper img={facebook} alt="Facebook" width={20} height={20} />
            </a>
          </div>
        </div>
  
        {/* Contact Row (Pinned to Bottom) */}
        <div className="flex justify-between items-end w-full p-4 min-h-[120px]">
          
          {/* Left Side - Join the Family Button (Pinned to Bottom) */}
          <div className="flex-1 flex justify-start items-end">
            <button className="">
              Join the Family
            </button>
          </div>
  
          {/* Center - Footer Logo (Properly Centered) */}
          <div className="flex-1 flex justify-center">
            <ImageHelper 
              img={siteData.footerLogo?.asset?.url} 
              alt={siteData.footerLogo?.alt || 'Footer Logo'} 
              width={150} 
              height={150} 
            />
          </div>
  
          {/* Right Side - Contact Details (Pinned to Bottom) */}
          <div className="flex-1 flex justify-end items-end text-right">
            <ul>
              <li>{siteData.address}</li>
              <li>
                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </li>
              <li>
                <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </li>
            </ul>
          </div>
  
        </div>
  
      </div>
    </footer>
  );
  
  

}

