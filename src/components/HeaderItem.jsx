/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ href, children }) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      <Link
        to={href}
        className={`${
          pathname === href && "border-b-4"
        } pb-1 text-lg hover:text-secondary text-white font-semibold`}
      >
        {children}
      </Link>
    </>
  );
};
