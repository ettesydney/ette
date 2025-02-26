import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className="header flex justify-between absolute w-full">
      <HeaderLogo />
      <div className="self-start">
      <Navigation />
      </div>
    </div>
  );
}
