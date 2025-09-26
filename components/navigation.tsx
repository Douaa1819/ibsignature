"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const panelRef = React.useRef<HTMLDivElement>(null)

  // Lock scroll quand le menu est ouvert (meilleure compat iOS)
  React.useEffect(() => {
    const el = document.documentElement
    const prev = el.style.overflow
    if (open) el.style.overflow = "hidden"
    return () => { el.style.overflow = prev }
  }, [open])

  // Fermer au changement de route
  React.useEffect(() => { setOpen(false) }, [pathname])

  // ESC + petit focus trap
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key !== "Tab" || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey && active === first) { last.focus(); e.preventDefault() }
      else if (!e.shiftKey && active === last) { first.focus(); e.preventDefault() }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      {/* ↓ z-index plus bas que le panel */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold heading-serif text-primary">IB Signature</span>
            </Link>
          </div>

          {/* Bouton mobile */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open main menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          {/* Liens desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Button asChild className="bg-[--color-highlight] text-[--color-highlight-foreground] hover:opacity-90">
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Overlay + Drawer (z-index au-dessus du header) */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden transition-opacity",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        {/* Overlay assombri */}
        <div
          className={cn("absolute inset-0 bg-black/35 transition-opacity", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />

        {/* Panneau */}
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className={cn(
            "absolute inset-y-0 right-0 w-full max-w-sm bg-background sm:ring-1 sm:ring-border shadow-xl",
            "translate-x-full transition-transform duration-300 ease-out",
            open && "translate-x-0"
          )}
          style={{
            // petit padding pour l’encoche iOS
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
              <span className="text-xl font-bold heading-serif text-primary">IB Signature</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          <div className="px-6 pb-6">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                      "hover:bg-muted",
                      pathname === item.href ? "text-[--color-highlight]" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
       <Button asChild variant="highlight">
  <Link href="/contact" onClick={() => setOpen(false)}>
    Become a Partner
  </Link>
</Button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
