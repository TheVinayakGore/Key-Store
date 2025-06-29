import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-10 md:py-20 mt-12 shadow-inner">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-5">
        <Link href="/" className="flex items-center gap-3 text-4xl font-bold tracking-tight">
          <Image
            src="/logo.png"
            alt="KeyStore Logo"
            width={100}
            height={100}
            className="w-12 h-12"
          />
          KeyStore
        </Link>
        <p className="text-sm opacity-80 text-center max-w-xl">
          Secure your digital life with KeyStore. End-to-end encrypted,
          cloud-synced, and zero-knowledge password management for peace of
          mind.
        </p>
        <div className="flex gap-2 my-5">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://x.com/keystore"
              target="_blank"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/keystore"
              target="_blank"
              aria-label="GitHub"
            >
              <FiGithub className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com/company/keystore"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LuLinkedin className="size-5" />
            </Link>
          </Button>
        </div>
        <span className="text-xs opacity-80">
          &copy; {new Date().getFullYear()} KeyStore. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
