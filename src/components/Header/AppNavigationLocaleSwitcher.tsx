"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/config";
import updateLocale from "./updateLocale";

export default function AppNavigationLocaleSwitcher() {
  const t = useTranslations("Navbar"); // Obtém as traduções do namespace "menu"

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  async function action(data: FormData) {
    setIsOpen(false);
    await updateLocale(data);
    router.refresh(); // Refetch the page to receive markup that uses the latest value from the cookie
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="block py-2 px-4 my lg:inline-block hover:text-gray-300  rounded-full bg-transparent"
      >
        {t("language")}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-gray-900/90 shadow-lg rounded z-10">
          <form action={action}>
            <LocaleButton locale="en" />
            <LocaleButton locale="pt-br" />
          </form>
        </div>
      )}
    </div>
  );
}

function LocaleButton({ locale }: { locale: Locale }) {
  const curLocale = useLocale();

  // URLs das imagens das bandeiras
  const flagImages = {
    en: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", // Bandeira dos EUA
    "pt-br":
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", // Bandeira do Brasil
  };

  return (
    <button
      className={`flex items-center gap-2 p-2 hover:bg-gray-800 backdrop-blur-xl w-full text-left ${
        curLocale === locale ? "font-bold" : ""
      }`}
      name="locale"
      type="submit"
      value={locale}
    >
      <img
        src={flagImages[locale]}
        alt={`Idioma ${locale.toUpperCase()}`}
        className="w-6 h-4"
      />
      {locale.toUpperCase()}
    </button>
  );
}
