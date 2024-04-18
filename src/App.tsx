import Heading from "@/components/Heading";
import Spacer from "@/components/Spacer";
import UnorderedList from "@/components/UnorderedList";
import InformationTag from "./components/InformationTag";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center pt-[6.25rem]">
        <main className="max-w-[47.5rem] px-6">
          <Heading level={1}>Software Engineer, Frontend</Heading>
          <InformationTag
            contents={["권수현", "010-6436-9548", "3a9lyd1224@gmail.com"]}
          />
          <Spacer className="h-[4.5rem]" />
          <Heading level={3}>저를 소개합니다.</Heading>
          <UnorderedList
            contents={[
              "5년 차 프론트엔드 개발자로 여러 스타트업에서 웹/앱 서비스를 개발하고 있습니다.",
              "항상 사용자 경험을 개선하고, 생산성을 높이며, 서비스 품질을 향상시키는 것을 목표로 하고 있습니다.",
              "이를 위해, 사용성에 대한 끊임없는 고민과 새로운 개발 방식의 탐색을 통해 서비스를 개선하고 있습니다.",
            ]}
          />
          <br />
          <UnorderedList
            contents={[
              {
                className: "list-none -ml-6",
                element: (
                  <Heading level={3}>
                    한국신용데이터에서 일을 하고 있습니다. (22.08 ~ 재직 중)
                  </Heading>
                ),
              },
              "네이티브와 MVP로 만들어진 있던 커뮤니티 서비스(모바일 웹뷰)를 개편했습니다. (기여도 90%)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "입사 후 1년 동안 프로젝트 초기 세팅부터 배포 후 커뮤니티 기반 기능을 독자적으로 개발하였습니다.",
                      "기존에 관리 안되던 레거시 api를 프론트엔드 프로젝트에서 완전히 제거했습니다.",
                      "기획자가 없던 시기에 다른 커뮤니티의 레퍼런스를 참고하고 사용자의 사용성을 고려해 기능을 개발했습니다.",
                      "SEO를 도입하기 위해 Next.js를 기반 웹 애플리케이션을 만들었습니다.",
                      "API 연동에 리소스를 줄이기 위해 OpenAPI를 도입했습니다.",
                    ]}
                  />
                ),
              },
              {
                className: "list-none",
                element: <br />,
              },
              "커뮤니티 어드민을 신규로 만들었습니다. (기여도 100%)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "입사 후 1년 동안 프로젝트 초기 세팅부터 배포 후 어드민 기반 기능을 설계 개발하였습니다.",
                      "운영자들의 생산성을 키우기 위해 기본 컴포넌트와 WYSIWYG 에디터를 자체 개발하였습니다.",
                      "배포 시간을 줄이고 번들링 리소스에 힘을 덜 쓰기 위해 Vite로 웹 애플리케이션을 번들링 했습니다.",
                    ]}
                  />
                ),
              },
              {
                className: "list-none",
                element: <br />,
              },
              "커뮤니티에서 AB 테스트를 도입하여 서비스 개선하였습니다.",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "Hackle이라는 AB테스트 SaaS를 사용하여 테스트를 진행했습니다.",
                      "기존 핫이슈 UI와 개선된 디자인의 UI를 비교하기 위해 AB 테스트를 설계하고 실행했습니다.",
                      {
                        className: "list-none",
                        element:
                          "-> 개선된 UI는 기존 대비 전환율을 2배 향상시켜 개선된 UI로 적용했습니다.",
                      },
                      "키워드와 행동을 기반으로 개인화된 추천 콘텐츠 및 스토리에 대한 AB 테스트를 설계하고 실행했습니다.",
                      {
                        className: "list-none",
                        element:
                          "-> 개인화된 추천 방식을 도입한 그룹이 30%가 넘는 개선율을 보여 개인화를 도입했습니다.",
                      },
                    ]}
                  />
                ),
              },
              {
                className: "list-none",
                element: <br />,
              },
              "지금은 사장님들의 매출/비용 관리 서비스(모바일 웹뷰)를 개발하고 있습니다.",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "레거시 api를 프론트엔드 프로젝트에서 완전히 제거하였습니다. (기여도 40%)",
                      "레거시 프로젝트의 페이지를 현재 페이지로 이관하고 있습니다. (기여도 35%)",
                      "공통 컴포넌트를 통합하고 개선하고 있습니다. (달력, 커스텀 스티키 헤더 등)",
                      "사장님들이 기존 페이지를 쓰기 편하게 사용성을 개선하고 있습니다.",
                    ]}
                  />
                ),
              },
              {
                className: "list-none -ml-6",
                element: (
                  <>
                    <br />
                    <Heading level={3}>
                      이전 회사들에서는 이런 일을 했습니다
                    </Heading>
                  </>
                ),
              },
              "차량공유 플랫폼인 타운카 서비스를 만들었습니다. (21.04 ~ 22.07)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "React Native로 앱 기반 환경 및 배포 플로우를 만들었습니다. (기여도 80%)",
                      "회원가입, 픽업/반납 프로세스, 카메라, 채팅 등 메인 피쳐를 개발했습니다. (기여도 70%)",
                      "복잡한 회원가입 프로세스를 개선하기 위해 OCR을 도입하여 사용자 입력을 간소화시켰습니다.",
                      "긴급이슈나 간단한 피쳐를 빠르게 배포하기 위해 CodePush를 도입했습니다.",
                    ]}
                  />
                ),
              },
              {
                className: "list-none",
                element: <br />,
              },
              "중견기업의 인사관리 시스템을 만들었습니다. (19.07 ~ 21.03)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "React Native를 이용한 안드로이드/iOS 앱을 개발했습니다(기여도 30%)",
                      "퍼블리싱 일정 부분 참여했고 그 외에 모든 부분을 독자적으로 개발했습니다.",
                      "사내 인트라넷 페이지와 인사관리 웹페이지를 연동하였습니다.",
                    ]}
                  />
                ),
              },
            ]}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Heading level={3}>이런 경험을 했습니다.</Heading>
          <UnorderedList
            contents={[
              "프로젝트 1: 커뮤니티 서비스 개편 및 API 개발 (한국신용데이터)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "레거시 서비스의 퍼포먼스 이슈로 서비스 개편이 필요했지만, 팀 내 백엔드 엔지니어가 퇴사하여 개편 작업에 차질이 생겼습니다. 그래서 사용자가 가장 불편해하는 기능을 우선시하여, 팀에 새로운 백엔드 엔지니어가 합류할 때까지 레거시 서비스 API를 활용해 프론트의 레거시를 제거하고 UX/UI를 개편하기로 결정했습니다. 이 전략 덕분에 지표는 꾸준히 상승했고, 백엔드 엔지니어들이 팀에 합류한 후 레거시 api 제거까지 성공하여 지표 상승과 서비스의 안정성을 모두 해결할 수 있었습니다.",
                    ]}
                  />
                ),
              },
              "프로젝트 2: 커뮤니티 어드민 개편 (한국신용데이터)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "소규모 커뮤니티 서비스의 특성상, 유저에게 유용한 정보 제공과 글 관리가 중요했지만 운영자들이 레거시 어드민을 사용하면서 여러 문제들(작업 내용이 유실, 데이터 조회 문제 등)로 인해 생산성이 저하되었습니다. 이 문제를 해결하고자 기획자가 없는 상황에서 백엔드 엔지니어들과 함께 운영자들의 의견을 수집하여 어드민 정책을 수립하여 개편하였습니다. 이로 인해, 운영자들의 생산성을 크게 향상시킬 수 있었습니다.",
                    ]}
                  />
                ),
              },
              "프로젝트 3: 차량 공유 서비스 가입 플로우 개선 (타운즈)",
              {
                className: "list-none",
                element: (
                  <UnorderedList
                    className="list-[circle]"
                    contents={[
                      "차량 공유 서비스의 가입 플로우를 개선하는 작업을 진행했습니다. 복잡한 인증 절차로 가입률이 낮아 기능 적으로 축소할 수 있는 법을 찾아보았고, OCR 기술을 활용하여 가입 플로우를 간소화하기로 결정했습니다. 네이버에서 제공하는 운전면허증 관련 OCR API를 찾아, 이를 가입 플로우에 통합하여 본인 인증, 거주지 인증, 운전면허증 인증 절차를 간소화했습니다. 운전면허증 인증을 가입 절차의 첫 단계로 설정하고, 본인 정보와 주소 정보를 자동으로 입력한 후 사용자가 수정할 수 있도록 했습니다. 이 변경으로 가입률이 크게 상승했습니다.",
                    ]}
                  />
                ),
              },
            ]}
          />
          <br />
          <Heading level={3}>이런 기술을 가지고 일했습니다.</Heading>
          <UnorderedList
            contents={[
              "커뮤니티 서비스: TypeScript, Next.js, TanStack Query, Tailwind CSS, 등",
              "커뮤니티 어드민: TypeScript, React, React Router, TanStack Query, Vite, Tailwind CSS, 등",
              "장부 서비스: TypeScript, React, TanStack Query, React Router, Tailwind CSS, Graphql, 등",
            ]}
          />
          <br />
          <Heading level={3}>과거에는 이런 기술을 썼습니다.</Heading>
          <UnorderedList
            contents={[
              "React Native, CodePush, Redux, Webpack, Firebase, Bootstrap v4 등",
            ]}
          />
          <br />
        </main>
      </div>
    </>
  );
}
