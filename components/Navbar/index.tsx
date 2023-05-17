import Image from "next/image";

import icLogo from "../../public/images/navbar/Logo.svg";
// import logoMobile from "../../public/images/navbar/logomobile.svg";
// import logoMobile1 from "../../public/images/navbar/logo_mobile.svg";
import { useEffect, useState } from "react";
import ButtonConnect from "./ButtonConnect";
import { useRouter } from "next/router";
import ModalBuyNow from "components/ModalBuyNow/ModalBuyNow";

const dataMenu = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "How to buy",
    link: "#howtobuy",
  },
  {
    title: "Tokenomics",
    link: "#tokenomics",
  },
  {
    title: "Roadmap",
    link: "#roadmap",
  },
  {
    title: "ARB Bridge",
    link: "bridge",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("");
  const [showBuyNow, setShowBuyNow] = useState(false);

  const { asPath } = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (asPath === "/bridge") {
      setActive("bridge");
    } else {
      const hash = asPath.split("#")[1];
      setActive(`#${hash}` || "#home");
    }
  }, [asPath]);

  return (
    <>
      <div className="navbar w-full z-20 top-0 left-0 shadow-[0_4px_6px_rgba(49,11,49,0.08)] md:h-[60px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[10px] lg:p-[8px]">
          <a
            href="/"
            className="flex items-center w-[80px] lg:w-[126px] h-auto md:w-[116px]"
          >
            <Image
              src={icLogo}
              className="mr-3"
              alt="token logo"
              objectFit="contain"
              quality={100}
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>

          <div className="flex md:order-2 gap-x-3 items-center">
            <button
              onClick={() => setShowBuyNow(true)}
              type="button"
              className="w-[85px] lg:w-[120px] h-8 lg:h-[40px] font-font_primary text-color_text font-semibold bg-[#fff] text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]"
            >
              Buy Now
            </button>

            <ButtonConnect />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden md:items-center md:justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {dataMenu.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleNav();
                      setActive(item.link);
                    }}
                  >
                    <a
                      href={`/${item.link}`}
                      className={`block py-2 pl-3 pr-4 font-semibold font-font_primary text-[16px] leading-[24px] ${
                        active === item.link ? "text-[#EB2F96]" : "text-[#000]"
                      } text-opacity-100 hover:text-[#EB2F96]`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {showMenu && (
            <div className="w-full md:hidden" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {dataMenu.map((item, index) => {
                  return (
                    <li key={index} onClick={handleNav}>
                      <a
                        href={`/${item.link}`}
                        onClick={() => setShowMenu(false)}
                        className="block font-font_primary py-2 pl-3 pr-4 font-semibold text-[16px] leading-[24px] text-[#000] hover:text-[#EB2F96]"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      {showBuyNow && <ModalBuyNow setShowBuyNow={setShowBuyNow} />}
    </>
  );
};
export default Navbar;
