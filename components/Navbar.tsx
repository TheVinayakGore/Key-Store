"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { IoMdLogIn } from "react-icons/io";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <Link href="/sign-in" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KeyStore Logo"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold tracking-tight">KeyStore</span>
        </Link>
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Button asChild>
              <Link href="/sign-in">
                <span className="responsive-themBtn text-sm leading-none px-5 text-white">
                  Login
                </span>
                <IoMdLogIn className="block sm:hidden hover:text-white p-2 w-10 h-10" />
              </Link>
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}