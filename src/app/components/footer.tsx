import ImageHelper from './helpers/imageHelper';
import facebook from '../../../public/facebook-svgrepo-com.svg';
import instagram from '../../../public/instagram-svgrepo-com.svg';

type FooterProps = {
  siteData: {
    address: string;
    email: string;
    phone: string;
    hours: string[];
    instagram: string;
    facebook: string;
    joinTheFamilyLink: string;
    footerImage?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
    footerLogo?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
};

export default function Footer({ siteData }: FooterProps) {
  return (
    <footer id="contact">
      <div className="w-full  dark-bg text-primary flex flex-col h-dvh">
        {/* Main content area - vertically centered */}
        <div className="flex flex-col items-center justify-center w-full flex-grow">
          {/* Operating Hours (Mobile) */}
          <div className="text-center mb-6 lg:hidden">
            <ul>
              {siteData?.hours?.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Footer Image */}
          {siteData.footerImage?.asset?.url && (
            <div className="mb-6 mx-[8rem] max-w-[30vw]">
              <ImageHelper
                img={siteData.footerImage.asset.url}
                alt={siteData.footerImage.alt || 'Primary Image'}
                width={350}
                height={200}
              />
            </div>
          )}

          {/* Contact Info (Mobile) */}
          <div className="lg:hidden text-center mb-6">
            <ul>
              <li>{siteData.address}</li>
              <li>
                <a href={`mailto:${siteData.email}`} className="hover:underline">
                  {siteData.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteData.phone}`} className="hover:underline">
                  {siteData.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (Desktop) */}
          <div className="hidden lg:block text-center mb-6 lg:mt-[2rem]">
            <ul>
              {siteData?.hours?.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Social Media Links (Desktop) */}
          <div className="flex items-center gap-4 mb-6 hidden md:flex lg:my-[2rem]">
            {siteData.instagram && (
              <a href={siteData.instagram} target="_blank" rel="noopener noreferrer">
                <ImageHelper img={instagram} alt="Instagram" width={22} height={22} />
              </a>
            )}
            {siteData.facebook && (
              <a href={siteData.facebook} target="_blank" rel="noopener noreferrer">
                <ImageHelper img={facebook} alt="Facebook" width={20} height={20} />
              </a>
            )}
          </div>
            <div className="flex justify-center lg:hidden"> {/* Removed alignment classes here */}
            <a 
              href={siteData.joinTheFamilyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="button inline-block transition px-4 py-2 w-[200px] text-center"
            >
              Join the Family
            </a>
          </div>
        </div>

        {/* Footer Logo - Always at bottom */}
        <div className="w-full mt-auto pb-4">
        
          <div className="flex justify-center min-h-[120px] items-end">
            {siteData.footerLogo?.asset?.url && (
              <ImageHelper
                img={siteData.footerLogo.asset.url}
                alt={siteData.footerLogo.alt || 'Footer Logo'}
                width={100}
                height={100}
                className="mx-auto"
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}