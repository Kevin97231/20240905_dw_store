import { Link } from "react-router-dom";
import { HeaderItem } from "./HeaderItem";

export const NavBar = () => {
  const logoPath = "/src/assets/images/logo.png";

  return (
    <header className="px-5 shadow-lg navbar bg-neutral txt-neutral-content">
      <nav className="w-full">
        <Link to={"/"}>
          <img src={logoPath} alt="logo" className="h-10" />
        </Link>

        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <li>
              <HeaderItem href="/products">Nos produits</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/counter-redux">Compteur redux</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/mon-panier">Mon panier</HeaderItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
