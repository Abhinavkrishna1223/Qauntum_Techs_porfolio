"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { IoLocationOutline } from "react-icons/io5";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node js</li>
        <li>Express Js</li>
        <li>SQL + NoSql</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Next Js</li>
        <li>React Native</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Dropout from J.C. Bose University Of Science And Technology, YMCA,
          Faridabad
        </li>
        <li>
          Pursuing BCA from IGNOU(Indira Gandhi National Open University){" "}
        </li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2 Years + in this business build many Web and Mobile applications as shown in Projects section. Mostly build Edtech Websites and Ecommerce Websites. All Clients are satisfied with our work and assistance, Client trust and Project qaulity is our first priority. The websites and apps we build are working absolutely fine and performing well in thier category.
          {/* <p className=" flex items-center">
            <IoLocationOutline color="#A855F7" />{" "}
            <span>Bengaluru, Karnataka</span>
          </p> */}
        </li>
        {/* <li>
          {" "}
          1 Year as a MERN Stack Developer in Metversity Technologies Pvt.Ltd.
          <p className=" flex items-center">
            <IoLocationOutline color="#A855F7" /> <span>Noida, UP</span>
          </p>
        </li>
        <li>
          {" "}
          Currently working as Full Stack Developer in Balj Services Pvt.Ltd.
          <p className=" flex items-center">
            <IoLocationOutline color="#A855F7" /> <span>Noida, UP</span>
          </p>
        </li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="imGE"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            We are a fully dedicated software building firm with a passion for creating
            interactive and responsive web applications. We have experience of making all types of web applications as well as Mobile applications. Our dedicated team is always ready to take challanging and complex projects. We assure our clients quality work and less time quick software devlopment. We build projects in best cost and cheaper cost than you get in market.
          </p>
          <div className="flex flex-row justify-between mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tech Stacks
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
