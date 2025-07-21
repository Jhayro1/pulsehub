"use client";

import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { LogIn, Home, BookOpen, Tags, Newspaper, Info } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
            <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
            {siteConfig.name}
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-foreground/70 font-medium">
            <Link href="/" className="flex items-center gap-1 hover:text-primary">
              <Home className="w-4 h-4" />
              Inicio
            </Link>
            <Link href="/docs" className="flex items-center gap-1 hover:text-primary">
              <BookOpen className="w-4 h-4" />
              Documentación
            </Link>
            <Link href="/pricing" className="flex items-center gap-1 hover:text-primary">
              <Tags className="w-4 h-4" />
              Precios
            </Link>
            <Link href="/blog" className="flex items-center gap-1 hover:text-primary">
              <Newspaper className="w-4 h-4" />
              Blog
            </Link>
            <Link href="/about" className="flex items-center gap-1 hover:text-primary">
              <Info className="w-4 h-4" />
              Nosotros
            </Link>
          </div>
        </div>

        {/* Right: Login */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90"
          >
            <LogIn className="w-4 h-4" />
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}
