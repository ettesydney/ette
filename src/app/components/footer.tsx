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
    <footer
      className="w-full min-h-screen dark-bg text-primary pt-8 lg:pt-0 flex flex-col items-center justify-center relative"
      id="contact"
    >
      <div className="flex flex-col items-center w-full mt-[5rem] lg:mt-[3rem] lg:justify-center flex-grow lg:h-[90dvh]">
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
          <div className="mb-6 mx-[8rem] max-w-[25vw]">
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
        <div className="flex items-center gap-4 mb-6 hidden lg:flex lg:mt-[2rem]">
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

        {/* Join the Family (Mobile) */}
        {siteData.joinTheFamilyLink && (
          <div className="lg:hidden flex-1 text-center">
            <a className="button px-4 py-2 w-[200px]" href={siteData.joinTheFamilyLink} target="_blank">
              Join the Family
            </a>
          </div>
        )}
      </div>

      {/* Bottom Section (Pinned to Bottom on Desktop) */}
      <div className="lg:mt-auto w-full lg:flex lg:flex-row lg:items-end lg:justify-between lg:p-4 lg:gap-6 lg:h-auto">
        {/* Join the Family (Desktop) */}
        {siteData.joinTheFamilyLink && (
          <div className="hidden lg:block flex-1 text-center lg:text-left lg:mb-2">
            <a className="button px-4 py-2 w-[200px]" href={siteData.joinTheFamilyLink} target="_blank">
              Join the Family
            </a>
          </div>
        )}

        {/* Footer Logo - Now Stays at Bottom */}
        {siteData.footerLogo?.asset?.url && (
          <div className="flex-1 flex justify-center mb-[1rem] lg:mb-0 mt-[2rem] lg:mt-0">
            <ImageHelper
              img={siteData.footerLogo.asset.url}
              alt={siteData.footerLogo.alt || 'Footer Logo'}
              width={100}
              height={100}
            />
          </div>
        )}

        {/* Contact Info (Desktop Only) */}
        <div className="flex-1 hidden lg:block text-right">
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
      </div>
    </footer>
  );
}
