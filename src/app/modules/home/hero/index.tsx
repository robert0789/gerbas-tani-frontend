"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="w-full h-full -z-10">
          <Image
            src={
              "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
            }
            alt="Gerbas"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            className="w-full -z-10"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-80 z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
              82:34:20:14
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Gerbas Tani akan dimulai pada bulan Agustus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
