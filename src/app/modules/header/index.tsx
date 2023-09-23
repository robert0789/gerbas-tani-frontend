"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Gerbas Tani", href: "/gerbas-tani" },
  { name: "Agro Asri Farm", href: "/agro-asri" },
  { name: "Produk", href: "/produk" },
  { name: "Pupuk", href: '/pupuk'},
  { name: "Kontak", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const useIsUserNotAtTop = (): boolean => {
    const [isUserNotAtTop, setIsUserNotAtTop] = useState(false);

    useEffect(() => {
      // Function to check if the user is not at the top
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsUserNotAtTop(true);
        } else {
          setIsUserNotAtTop(false);
        }
      };

      // Attach the event listener to the scroll event
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return isUserNotAtTop;
  };

  const isUserNotAtTop = useIsUserNotAtTop();

  return (
    <header className="fixed top-0 left-0 bg-white/75 backdrop-blur-md w-full z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Gerbas Tani"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <div
            className={clsx(
              "relative h-[100px] w-[100px] -m-4 transition-all",
              {
                "w-[75px] h-[75px]": isUserNotAtTop,
              }
            )}
          >
            <Image
              src={
                "https://drive.google.com/uc?id=11lA4uVtK7fSftWPowzjZW49xAG1hxB8W"
              }
              alt="Gerbas"
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>
        </a>
        <div className="flex flex-1 justify-end">
          <button onClick={toggleMenu} className="text-gray-900 font-bold">
            Menu
          </button>
        </div>
      </nav>
      <div
        className={clsx(
          "absolute top-0 right-0",
          "bg-black/25 text-white w-full h-screen z-10",
          "transition-transform",
          { "-translate-x-0": menuOpen, "translate-x-full ": !menuOpen }
        )}
        onClick={toggleMenu}
      >
        <div className="relative ml-auto bg-yellow-400 max-w-3xl w-full h-full p-8 z-10">
          <ul className="flex flex-col gap-y-4">
            {navigation.map((item, index) => (
              <li key={index} className="text-green-700 font-bold text-5xl">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="button"
              className="absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-10 w-10 text-green-700"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
