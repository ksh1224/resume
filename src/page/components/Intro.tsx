import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Intro() {
  return (
    <>
      <Heading level={2}>소개</Heading>
      <hr className="pb-4" />
      <UnorderedList
        contents={[
          {
            className: "list-none -ml-6",
            element: (
              <Heading level={3}>사용자 경험 중심의 프로덕트 개선</Heading>
            ),
          },
          "사용자의 니즈와 행동 패턴을 깊이 있게 이해하며, 이를 바탕으로 프로덕트를 개선하고 서비스 품질을 높이기 위해 노력하고 있습니다.",
          "끊임없이 사용성에 대해 고민하고 새로운 개발 방식을 탐색하며 서비스를 발전시키고 있습니다.",
          {
            className: "list-none -ml-6",
            element: (
              <>
                <br />
                <Heading level={3}>UX/UI 이해와 협업</Heading>
              </>
            ),
          },
          "프론트엔드 업무에서 뛰어난 서비스를 제공하기 위해서는 UX/UI에 대한 깊이 있는 이해가 필수적이라고 생각합니다.",
          "기획자, 디자이너와 긴밀한 소통과 협업을 통해 서비스를 개선해 나가고 있습니다.",
          {
            className: "list-none -ml-6",
            element: (
              <>
                <br />
                <Heading level={3}>새로운 기술 탐구와 적용</Heading>
              </>
            ),
          },
          "기술 동향을 주시하며 새로운 기술들을 탐구하고 실험해 보고 있습니다.",
          "새로운 기술 트렌드를 읽고 적용하는 것을 즐기고 있습니다. 우수한 기술들을 선별하여 프로덕트에 적용하고 있습니다.",
        ]}
      />
    </>
  );
}
