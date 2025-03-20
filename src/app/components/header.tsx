import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";


type HeaderProps = {
  siteData: {
    address: string;
    email: string;
    phone: string;
    instagram: string;
    facebook: string;
    headerLogo?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
};

export default function Header({ siteData }: HeaderProps) {
  return (
    <div className="header flex justify-between absolute w-full">
      <HeaderLogo imageData={siteData.headerLogo || { asset: { url: "" }, alt: "" }}/>
      <div className="self-start">
      <Navigation siteData={siteData} />
      </div>
    </div>
  );
}
