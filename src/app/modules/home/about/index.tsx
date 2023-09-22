"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  return (
    <div className="w-full text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-row gap-x-16 py-24">
        <div className="w-1/2 flex flex-col gap-y-4">
          <div className="bg-gray-200 aspect-[3/2]"></div>
          <div className="flex flex-row gap-x-4">
            <div className="bg-gray-200 w-full aspect-[3/2]"></div>
            <div className="bg-gray-200 w-full aspect-[3/2]"></div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-y-4">
          <span>Dari Petani, Demi Petani, Untuk Petani</span>
          <h2 className="text-6xl font-black">Mahakarya yang Membumi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quaerat, voluptas?{" "}
          </p>
          <div className="w-full flex justify-end">
            <span>Info lebih lanjut</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-4">
              <div className="bg-gray-200 rounded-md w-full flex flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem. Quaerat, voluptas?
                </div>
              </div>
              <div className="bg-gray-200 rounded-md w-full flex flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem. Quaerat, voluptas?
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
            <div className="bg-gray-200 rounded-md w-full flex flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem. Quaerat, voluptas?
                </div>
              </div>
              <div className="bg-gray-200 rounded-md w-full flex flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem. Quaerat, voluptas?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
