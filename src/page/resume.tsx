import Heading from "@/components/Heading";
import Spacer from "@/components/Spacer";
import Information from "./components/Information";
import Intro from "./components/Intro";
import Career from "./components/Career";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Etc from "./components/Etc";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col items-center pt-[6.25rem]">
        <main className="max-w-[47.5rem] px-6">
          <Heading level={1}>Frontend Engineer - 권수현</Heading>
          <Spacer className="h-3" />
          <Information />
          <Spacer className="h-12" />
          <Intro />
          <Spacer className="h-8" />
          <Career />
          <Spacer className="h-28" />
          <Project />
          <Spacer className="h-16" />
          <Skill />
          <Spacer className="h-12" />
          <Etc />
          <Spacer className="h-12" />
        </main>
      </div>
    </>
  );
}
