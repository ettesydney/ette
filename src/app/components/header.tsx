import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";


type HeaderProps = {
  siteData: {
    address: string;
    email: string;
    phone: string;
  };
};

export default function Header({ siteData }: HeaderProps) {
  return (
    <div className="header flex justify-between absolute w-full">
      <HeaderLogo />
      <div className="self-start">
      <Navigation siteData={siteData} />
      </div>
    </div>
  );
}
