import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import hinesLogo from "public/work/hines-logo.jpeg";
import perishipLogo from "public/work/periship-logo.jpeg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";

export const metadata: Metadata = {
  title: "About | Brian Ruiz",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="mb-8 lg:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meLily}
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m Junaid Ahmed!</p>

            <p>
              I thrive on crafting elegant code, continually pursuing inventive
              approaches to elevate software excellence.
            </p>
            <p>
              In addition to coding, I also make{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/channel/@brianruizy"
              >
                Instagram
              </Link>{" "}
              pictures & reels, where I focus on photography, creative reels,
              capturing and sharing moments through my lens.
            </p>
            <p>
              When I&apos;m away from my workstation I am probably lifting
              weights, or engaged in capturing photos :)
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:junaidharal5@gmail.com">email me</Link>.
            </p>
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              {new Date().getFullYear() - 2020}+ years of professional
              development experience.
            </p>
            <p>
              I&apos;ve been part of dynamic projects where I've contributed to
              the development of impactful applications. My expertise lies in
              creating robust and scalable software solutions, and I continually
              seek opportunities to refine and expand my skill set.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Hines",
    time: "2022 -",
    imageSrc: hinesLogo,
    link: "https://hines.com",
  },
  {
    title: "Software Engineer",
    company: "PeriShip",
    time: "2021 - 2022",
    imageSrc: perishipLogo,
    link: "https://peripharma.com/",
  },
  {
    title: "Python Developer",
    company: "CAMS",
    time: "2019 - 2020",
    imageSrc: camsLogo,
    link: "https://camstex.com",
  },
  {
    title: "Coding Camp Instructor",
    company: "University of Houston",
    time: "2019",
    imageSrc: uhdLogo,
    link: "https://www.uhd.edu/",
  },
];
