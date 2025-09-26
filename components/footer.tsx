"use client";

import Link from "next/link"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-xl font-bold heading-serif text-primary">
              IB Signature
            </Link>
            <p className="text-center text-xs leading-5 text-muted-foreground md:text-left">
              Expert property management specializing in short and medium-term rentals.
            </p>
            <div className="flex space-x-4 text-xs text-muted-foreground">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} IB Signature. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
