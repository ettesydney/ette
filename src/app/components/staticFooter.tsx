type StaticFooterProps = {
  siteData: {
    address: string;
    email: string;
    phone: string;
    subscribeLink: string;
  };
};

export default function StaticFooter({ siteData }: StaticFooterProps) {
  return (
    <div className="absolute bottom-0 w-full mix-blend-difference text-primary px-4 pb-4">
      <div className="flex justify-between items-end w-full"> {/* Changed items-center to items-end */}
        <div className="hidden lg:block"> {/* Removed alignment classes here */}
          <a 
            href={siteData.subscribeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button inline-block transition px-4 py-2 w-[200px] text-center"
          >
            Join the Family
          </a>
        </div>

        {/* Site Details - Bottom Right */}
        <div className="hidden lg:flex text-right">
          <ul className="">
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
    </div>
  );
}