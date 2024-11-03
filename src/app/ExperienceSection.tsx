"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, X } from "lucide-react";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

type Experience = {
  title: string;
  company: string;
  description: string;
  period: string;
  skills: string[];
};

type ExperienceSectionProps = {
  experienceData: Experience[];
};

export default function ExperienceSection({
  experienceData,
}: ExperienceSectionProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section
      id="experience"
      style={{ scrollMarginTop: 100 }}
      className="relative min-h-screen"
    >
      <h2 className="text-3xl font-bold text-white my-10 text-center">
        Histórico Profissional
      </h2>
      <VerticalTimeline layout="2-columns">
        {experienceData?.map((experience, index) => (
          <VerticalTimelineElement
            visible={true}
            key={index}
            className="vertical-timeline-element--work"
            date={experience.period}
            iconClassName="backdrop-blur-xl bg-gray-900/20"
            contentStyle={{
              background: "transparent",
              padding: 0,
            }}
            icon={<BriefcaseBusiness />}
          >
            <motion.div
              layoutId={`card-${index}`} // Usando index como layoutId
              onClick={() => setSelectedId(selectedId === index ? null : index)}
              className="rounded-lg backdrop-blur-xl bg-gray-900/60 p-5 cursor-pointer"
            >
              <motion.h3 className="vertical-timeline-element-title text-2xl font-bold">
                {experience.title}
              </motion.h3>
              <motion.h4 className="vertical-timeline-element-subtitle text-lg font-semibold">
                {experience.company}
              </motion.h4>
              <motion.p className="text-gray-300">
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full mr-2 mt-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Animação do card expandido */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={`card-${selectedId}`} // Usando index como layoutId
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
          >
            <div className="relative rounded-lg backdrop-blur-xl bg-gray-900/80 p-5 container w-full">
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-3 right-3 text-white rounded-full border border-white p-2"
              >
                <X size={24} />
              </motion.button>
              {experienceData?.map(
                (experience, idx) =>
                  idx === selectedId && (
                    <div key={experience.title}>
                      <motion.h3 className="text-4xl md:text-5xl font-bold mb-5">
                        {experience.title}
                      </motion.h3>
                      <motion.h4 className="text-2xl md:text-3xl font-semibold mb-5">
                        {experience.company}
                      </motion.h4>
                      <motion.p className="text-gray-300 text-lg md:text-xl mb-5">
                        {experience.description}
                      </motion.p>
                      <motion.p className="text-gray-400 text-lg md:text-xl mb-5">
                        <strong>Período:</strong> {experience.period}
                      </motion.p>
                      <div className="flex flex-wrap">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full mr-2 mt-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
