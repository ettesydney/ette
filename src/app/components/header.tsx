import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className="header flex justify-between lg:absolute w-full">
      <div className="">
      <HeaderLogo />
      </div>
      <div className="self-start">
      <Navigation />
      </div>
    </div>
  );
}
