'use client';
import Link from 'next/link';
import Image from 'next/image'; // use next/image for optimized loading

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/">
      <img src="/ajiet-logo.svg" alt="AJIET Logo" className="h-10 w-auto" />
      </Link>
      <ul className="flex gap-6 text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};