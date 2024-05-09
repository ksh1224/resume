import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Information() {
  return (
    <>
      <Heading level={2}>정보</Heading>
      <hr className="pb-4" />
      <UnorderedList
        contents={[
          "이름: 권수현",
          <>
            전화번호: <a href="tel:010-6436-9548">010-6436-9548</a>
          </>,
          <>
            이메일: <a href="3a9lyd1224@gmail.com">3a9lyd1224@gmail.com</a>
          </>,
          <>
            github:{" "}
            <a href="https://github.com/ksh1224">https://github.com/ksh1224</a>
          </>,
        ]}
      />
    </>
  );
}
