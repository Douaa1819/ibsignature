"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* top: brand + icons */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <Link
            href="/"
            aria-label="IB Signature — Home"
            className="text-lg font-semibold tracking-tight hover:opacity-90"
          >
            IB Signature
          </Link>

          {/* Contact icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@partnershotels.ma"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[--color-highlight]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-[--color-highlight]" />
            </a>
            <a
              href="tel:+212 661 215 698"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[--color-highlight]"
              aria-label="Call"
            >
              <Phone className="h-4 w-4 text-muted-foreground group-hover:text-[--color-highlight]" />
            </a>
            <a
              href="https://maps.app.goo.gl/Az6yAzeCSjjvhwQH9"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[--color-highlight]"
              aria-label="Location"
            >
              <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-[--color-highlight]" />
            </a>
          </div>
        </div>


        <nav aria-label="Footer" className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-foreground underline decoration-[--color-highlight] underline-offset-4"
                        : "text-muted-foreground hover:text-foreground hover:underline hover:decoration-[--color-highlight] underline-offset-4"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      
        <div className="mt-8 flex items-center justify-between border-t pt-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IB Signature.</p>
          <p>Premium property management.</p>
        </div>
      </div>
    </footer>
  );
}
