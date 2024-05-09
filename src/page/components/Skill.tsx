import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Skills() {
  return (
    <>
      <Heading level={2}>기술 스택</Heading>
      <hr className="pb-4" />
      <div className="grid grid-cols-2">
        <Heading level={3} className="col-span-2">
          Programming Language
        </Heading>
        <UnorderedList contents={["Javascript"]} />
        <UnorderedList contents={["Typescript"]} />
        <div className="col-span-2">
          <br />
          <Heading level={3}>Library and FrameWork</Heading>
        </div>
        <UnorderedList contents={["React"]} />
        <UnorderedList contents={["Next.js"]} />
        <UnorderedList contents={["Tailwind CSS"]} />
        <UnorderedList contents={["Redux"]} />
        <UnorderedList contents={["TanStack Query"]} />
        <UnorderedList contents={["React Router"]} />
        <UnorderedList contents={["React Native"]} />
        <div className="col-span-2">
          <br />
          <Heading level={3}>Bundler</Heading>
        </div>
        <UnorderedList contents={["Vite"]} />
        <UnorderedList contents={["Webpack"]} />
        <div className="col-span-2">
          <br />
          <Heading level={3}>DevOps</Heading>
        </div>
        <UnorderedList contents={["Docker"]} />
        <UnorderedList contents={["GitHub Action"]} />
        <UnorderedList contents={["AWS"]} />
        <UnorderedList contents={["Firebase"]} />
      </div>
    </>
  );
}
