"use client";

import { useState, useEffect } from "react";
import AppNavigationLocaleSwitcher from "./AppNavigationLocaleSwitcher";
import { useTranslations } from "next-intl";

export default function MenubarDemo() {
  const t = useTranslations("Navbar"); // Obtém as traduções do namespace "menu"
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null; // Previne renderização no servidor
  }

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Fecha o menu ao clicar em uma opção
  };

  return (
    <div className="container mx-auto">
      <header
        className={`fixed top-2 z-50 transition-all duration-500 rounded-lg container ${
          isScrolled || isMobileMenuOpen
            ? "backdrop-blur-xl bg-gray-900/30"
            : "bg-transparent"
        }`}
      >
        <nav className="text-white p-4 ">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold" style={{ flex: 2 }}>
              Lucas Gonçalves
            </a>

            {/* Botão do menu mobile */}
            <div className="lg:hidden ">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none mx-5 "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu de navegação */}
            <div
              className={`${
                isMobileMenuOpen ? "block " : "hidden"
              } lg:flex lg:items-center lg:justify-end lg:space-x-4 transition-all duration-900`}
              style={{ flex: 6 }}
            >
              <a
                href="#about"
                className="block py-1 px-4 my-1 lg:inline-block hover:text-gray-300 border-2 border-gray-300 rounded-full bg-transparent"
                onClick={handleMenuItemClick}
              >
                {t("about")}
              </a>
              <a
                href="#experience"
                className="block py-1 px-4 my-1 lg:inline-block hover:text-gray-300 border-2 border-gray-300 rounded-full bg-transparent"
                onClick={handleMenuItemClick}
              >
                {t("experience")}
              </a>
              <a
                href="#skills"
                className="block py-1 px-4 my-1 lg:inline-block hover:text-gray-300 border-2 border-gray-300 rounded-full bg-transparent"
                onClick={handleMenuItemClick}
              >
                {t("skills")}
              </a>
              <a
                href="#contact"
                className="block py-1 px-4 my-1 lg:inline-block hover:text-gray-300 border-2 border-gray-300 rounded-full bg-transparent"
                onClick={handleMenuItemClick}
              >
                {t("contact")}
              </a>

              <AppNavigationLocaleSwitcher />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
