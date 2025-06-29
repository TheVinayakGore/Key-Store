import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FiCopy, FiEye } from "react-icons/fi";

const Demo = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-primary p-20 border border-primary rounded-xl">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-20 w-full">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
              <p className="mb-6">
                KeyStore is intuitive interface makes password management
                effortless. Watch how easy it is to add, organize, and retrieve
                your credentials.
              </p>
              <div className="flex space-x-4">
                <Link href="#try-now">
                  <Button
                    variant="default"
                    className="text-white bg-primary hover:bg-primary/80 hover:scale-110 duration-300"
                  >
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/20 p-4 hover:scale-110 duration-300 rounded-lg">
              <div className="bg-white text-black p-6 rounded shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Google Account</h3>
                  <div className="flex space-x-3 text-primary">
                    <button>
                      <FiCopy size={18} />
                    </button>
                    <button>
                      <FiEye size={18} />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-60">Email</p>
                    <p className="font-medium">user@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-60">Password</p>
                    <p className="font-mono">••••••••</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-60 mb-2">Category</p>
                    <span className="inline-block px-4 py-1 text-xs text-primary border border-primary rounded">
                      Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
