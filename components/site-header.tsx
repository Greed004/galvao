'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/site-config'
import { QuoteButton } from '@/components/cta-buttons'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur transition-shadow',
        scrolled ? 'border-border shadow-sm' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — início`}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[15px] font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              Elétrica &amp; Infraestrutura
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <QuoteButton size="md" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 sm:px-6">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <QuoteButton
            size="lg"
            className="mt-3 w-full"
            href="#orcamento"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}
