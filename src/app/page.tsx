"use client";

import AboutSection from "@/app/AboutSection";
import ExperienceSection from "@/app/ExperienceSection";
import SkillsSection from "@/app/SkillsSection";
import Bubble, {
  BubbleCluster,
  BubbleLayer,
  BubbleLayerBoundary,
} from "@/components/Bubble";
import Footer from "@/components/Footer";
import enjson from "@/messages/en.json";
import ptbrjson from "@/messages/pt-br.json";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import "react-vertical-timeline-component/style.min.css";

// Define os tipos para os dados de experiência e habilidades
type ExperiencePosition = {
  title: string;
  company: string;
  description: string;
  period: string;
  skills: string[];
};

type ExperienceData = {
  experience: {
    positions: ExperiencePosition[];
  };
};

type Skill = {
  nome: string;
  icon: string;
  nivel: number;
};

export default function Page() {
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(
    null
  );
  const [skills, setSkills] = useState<Skill[]>([]);

  const locale = useLocale();

  useEffect(() => {
    const getData = async () => {
      setExperienceData(locale == "en" ? enjson : ptbrjson); // Armazenando o JSON na variável 'data'
    };

    getData();

    setSkills([
      { nome: "ReactJS", icon: "react", nivel: 3 },
      { nome: "TypeScript", icon: "typescript", nivel: 3 },
      { nome: "Laravel", icon: "laravel", nivel: 3 },
      { nome: "Node.js", icon: "nodejs", nivel: 2 },
      { nome: "AngularJS", icon: "angularjs", nivel: 1 },
      { nome: "MySQL", icon: "mysql", nivel: 3 },
      { nome: "PostgreSQL", icon: "postgresql", nivel: 2 },
      { nome: "Next.js", icon: "nextjs", nivel: 1 },
      { nome: "Firebase", icon: "firebase", nivel: 1 },
      { nome: "Git", icon: "git", nivel: 3 },
    ]);
  }, [locale]);

  return (
    <div className="min-h-screen">
      {/* <ParticlesBackground /> Adicione o componente de partículas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/black-blur-background-1.jpg')",
          filter: "blur(10px) brightness(0.7)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          position: "fixed",
        }}
      />
      <main className="relative z-10 px-4 py-10 container mx-auto min-h-screen text-white">
        <BubbleLayerBoundary className="bg-dark darken-4">
          <main>
            <AboutSection />
            <ExperienceSection
              experienceData={experienceData?.experience?.positions || []}
            />
            <SkillsSection skills={skills} />
          </main>
          <BubbleLayer travel={400}>
            <Bubble
              size={170}
              thickness={20}
              blur={2}
              top="20%"
              left="5%"
              bottom="0"
              opacity={0.25}
            />
            <Bubble
              size={110}
              thickness={15}
              blur={2}
              top="17%"
              left="5%"
              bottom="0"
              opacity={0.1}
            />
            <Bubble
              size={130}
              thickness={15}
              blur={2}
              top="5%"
              right="6%"
              bottom="0"
              opacity={0.25}
            />
            <Bubble
              size={95}
              thickness={11}
              blur={2}
              top="30%"
              right="6%"
              opacity={0.35}
            />

            <BubbleCluster duration={15} left="3%" bottom="2%">
              <Bubble size={300} thickness={45} blur={5} opacity={0.1} />
              <Bubble size={80} thickness={13} blur={2} opacity={0.1} />
            </BubbleCluster>
          </BubbleLayer>

          <BubbleLayer travel={300}>
            <Bubble
              size={55}
              thickness={8}
              blur={4}
              top="65%"
              left="15%"
              opacity={0.07}
            />

            <Bubble
              size={140}
              thickness={20}
              blur={2}
              top="60%"
              right="6%"
              opacity={0.35}
            />

            <Bubble
              size={90}
              thickness={20}
              blur={2}
              top="50%"
              right="8%"
              opacity={0.35}
            />

            <Bubble
              size={180}
              thickness={30}
              blur={2}
              top="45%"
              left="6%"
              opacity={0.1}
            />

            <BubbleCluster duration={15} left="40%" top="2%">
              <Bubble size={30} thickness={10} blur={5} opacity={0.06} />
              <Bubble size={40} thickness={13} blur={2} opacity={0.1} />
            </BubbleCluster>
          </BubbleLayer>
        </BubbleLayerBoundary>
      </main>
      <Footer />
    </div>
  );
}
