"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ReactTyped } from "react-typed";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div>
        <div className="flex justify-center mb-6 pt-20">
          {/* <img
            src="/img/profile.jpg"
            alt="Lucas Gonçalves"
            className="w-36 h-36 rounded-full border-4 border-white"
          /> */}
        </div>
        <div className="text-center mb-6 pt-20">
          <ReactTyped
            className="text-4xl font-bold text-white"
            strings={[t("title")]}
            typeSpeed={40}
          />

          {/* <Typist
            typingSpeed={300}
            startDelay={300}
            deletingSpeed={0}
            className="text-4xl font-bold text-white"
            sentences={[t("title")]}
            loop={false}
          /> */}
        </div>
        <div className="text-center">
          {/* <h1 className="text-4xl font-bold text-white">{t("title")}</h1> */}
          <p className="mt-4 text-2xl text-gray-200">{t("description1")}</p>
          <p className="mt-4 text-2xl text-gray-200">{t("description2")}</p>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="http://github.com/lucasgferreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 text-lg">
              <i className={`devicon-github-plain mr-2 h-4 w-4`}></i>{" "}
              {t("github")}
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-goncalves-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{ backgroundColor: "#0077B5" }}
              className="text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 text-lg"
            >
              <i className={`devicon-linkedin-plain mr-2 h-4 w-4`}></i>
              {t("linkedin")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
