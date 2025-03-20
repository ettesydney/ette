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
      <div className="w-full dark-bg text-primary flex flex-col h-dvh">
        {/* Main content area - vertically centered */}
        <div className="flex flex-col items-center justify-center w-full flex-grow py-8">
          {/* Operating Hours (Mobile) */}
          <div className="text-center mb-4 lg:hidden">
            <ul>
              {siteData?.hours?.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Footer Image - larger starting size but still responsive */}
          {siteData.footerImage?.asset?.url && (
            <div className="mb-4 px-4 flex justify-center w-full mb-10">
              <ImageHelper
                img={siteData.footerImage.asset.url}
                alt={siteData.footerImage.alt || 'Primary Image'}
                width={450}
                height={250}
                className="w-auto min-w-[250px] md:min-w-[300px] lg:min-w-[350px] max-w-[90%] max-h-[30vh] object-contain"
              />
            </div>
          )}

          {/* Contact Info (Mobile) */}
          <div className="lg:hidden text-center mb-4">
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
          <div className="hidden lg:block text-center mb-4">
            <ul>
              {siteData?.hours?.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Social Media Links (Desktop) */}
          <div className="flex items-center gap-4 mb-4 hidden md:flex">
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
          <div className="flex justify-center lg:hidden">
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
          <div className="flex justify-center items-end">
            {siteData.footerLogo?.asset?.url && (
              <ImageHelper
                img={siteData.footerLogo.asset.url}
                alt={siteData.footerLogo.alt || 'Footer Logo'}
                width={100}
                height={100}
                className="mx-auto w-auto h-auto max-h-[80px]"
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}