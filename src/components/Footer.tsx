import React from "react";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="py-6" style={{ position: "relative" }}>
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-xl bg-gray-900/30 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-2xl font-semibold">{t("contact")}</h2>
            <p className="mt-2">{t("description")}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row items-center">
              <a
                href="mailto:lucasgoncalves.developer@gmail.com"
                className="flex items-center justify-center border border-white-600 text-white rounded-lg py-1 px-2 mb-4 md:mb-0 md:mr-4 hover:bg-white hover:text-gray-900 transition duration-300 w-40"
              >
                <MailIcon className="mr-2" size={16} />
                {t("email")}
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-goncalves-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center border border-white-600 text-white rounded-lg py-1 px-2 mb-4 md:mb-0 md:mr-4 hover:bg-white hover:text-gray-900 transition duration-300 w-40"
              >
                <i
                  className="devicon-linkedin-plain mr-2"
                  style={{ fontSize: "20px" }}
                />
                {t("linkedin")}
              </a>

              <a
                href="https://github.com/lucasgferreira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center border border-white-600 text-white rounded-lg py-1 px-2 hover:bg-white hover:text-gray-900 transition duration-300 w-40"
              >
                <i
                  className="devicon-github-original mr-2"
                  style={{ fontSize: "20px" }}
                />
                {t("github")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-gray-700 mt-4 pt-4 text-center text-gray-400 text-sm">
        {t("footer", { year: new Date("2024-10-20").getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
