import FadeInUpElement from "@/components/FadeInUpElement";
import Heading from "@/components/Heading";
import InformationTag from "@/components/InformationTag";
import Section from "@/components/Section";
import Spacer from "@/components/Spacer";
import UnorderedList from "@/components/UnorderedList";

export default function App() {
  return (
    <>
      <header className="fixed top-0 flex h-[4.25rem] w-full items-center bg-white px-6">
        <span className="font-black text-carrot-500 typo-subtitle2">수현</span>
      </header>
      <div className="flex flex-col items-center pt-[6.25rem]">
        <main className=" max-w-[47.5rem] px-6">
          <FadeInUpElement>
            <Heading level={1}>Software Engineer, Frontend - 권수현</Heading>
            <InformationTag contents={["KCD", "정규직", "경력"]} />
            <Spacer className="h-[4.5rem]" />
          </FadeInUpElement>
          <Section>
            <FadeInUpElement>
              <Heading level={3}>저를 소개해요</Heading>
              <p>
                5년차 프론트엔드 개발자로 여러 스타트업에서 웹/앱 서비스를
                개발하고있어요.
                <br />
                항상 사용자 경험을 개선하고, 생산성을 높이며, 서비스 품질을
                향상시키는 것을 목표로 하고있어요.
                <br />
                이를 위해, 사용성에 대한 끊임없는 고민과 새로운 개발 방식의
                탐색을 통해 서비스를 개선하고있어요.
              </p>
            </FadeInUpElement>
          </Section>
          <Section>
            <FadeInUpElement>
              <Heading level={3}>이런 일을 했어요</Heading>
              <p>
                <strong className="font-semibold">
                  현재는 한국신용데이터에서 일을 하고있어요(2022.08~)
                </strong>
              </p>
              <UnorderedList
                contents={[
                  "네이티브와 MVP로 만들어진 있던 커뮤니티 서비스(모바일 웹뷰)를 개편했어요",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "입사 후 1년동안 프로젝트 초기 세팅 부터 배포 후 커뮤니티 기반 기능을 혼자서 만들었어요",
                          "기존에 관리 안되던 레거시 api를 프론트 파트에서 완전 제거했어요",
                          "기획자가 없던 시기에 다른 커뮤니티의 레퍼런스를 참고하고 사용자의 사용성을 고려해 기능을 개발했어요",
                          "SEO를 도입하기 위해 Next.js를 기반 웹 어플리케이션을 만들었어요",
                          "API 연동에 리소스를 줄이기 위해 OpenAPI를 도입했어요",
                        ]}
                      ></UnorderedList>
                    ),
                  },
                  {
                    className: "list-none",
                    element: <br />,
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
            <FadeInUpElement>
              <UnorderedList
                contents={[
                  "커뮤니티 어드민을 신규로 만들었어요",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "입사 후 1년동안 프로젝트 초기 세팅 부터 배포 후 어드민 기반 기능을 혼자서 만들었어요",
                          "운영자들의 생산성을 키우기 위해 기본 컴포넌트와 WYSIWYG 에디터를 자체 개발하였어요",
                          "배포 시간을 줄이고 번들링 리소스에 힘을 덜쓰기 위해 Vite로 웹 어플리케이션을 번들링했어요",
                        ]}
                      ></UnorderedList>
                    ),
                  },
                  {
                    className: "list-none",
                    element: <br />,
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
            <FadeInUpElement>
              <UnorderedList
                contents={[
                  "커뮤니티에서 AB 테스트를 도입하여 서비스 개선하였어요",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "Hackle이라는 AB테스트 SaaS를 사용하여 테스트를 진행했어요",
                          "기존 핫이슈 UI와 개선된 디자인의 UI를 비교하기 위해 AB 테스트를 설계하고 실행했어요",
                          {
                            className: "list-none",
                            element:
                              "-> 개선된 UI는 기존 대비 전환률을 2배 향상시켜 개선된 UI로 적용했어요",
                          },
                          "키워드와 행동을 기반으로 개인화된 추천 콘텐츠 및 스토리에 대한 AB 테스트를 설계하고 실행했어요",
                          {
                            className: "list-none",
                            element:
                              "-> 개인화된 추천 방식을 도입한 그룹이 30%가 넘는 개선률을 보여 개인화를 도입했어요",
                          },
                        ]}
                      ></UnorderedList>
                    ),
                  },
                  {
                    className: "list-none",
                    element: <br />,
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
            <FadeInUpElement>
              <UnorderedList
                contents={[
                  "현재는 사장님들의 매출/비용 관리 서비스(모바일 웹뷰)를 개발하고 있어요",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "기존에 관리 안되던 레거시 api를 프론트 파트에서 완전 제거하고있어요(기여도 20%)",
                          "레거시 프로젝트의 페이지를 현재 페이지로 이관하고 있어요(기여도 20%)",
                          "공통 컴포넌트를 통합하고 개선하고 있어요(달력, 커스텀 스티키 헤더 등)",
                          "사장님들이 기존 페이지를 쓰기 편하게 사용성을 개선하고 있어요",
                        ]}
                      ></UnorderedList>
                    ),
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
            <FadeInUpElement>
              <p>
                <br />
                <strong className="font-semibold">
                  이전 회사들에서는 이런일을 했어요
                </strong>
              </p>
              <UnorderedList
                contents={[
                  "차량공유 플랫폼인 타운카 서비스를 만들었어요(2021.04~2022.07)",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "React Native로 앱 기반 환경 및 배포 플로우를 만들었어요(기여 80%)",
                          "회원가입, 픽업/반납 프로세스, 카메라, 채팅 등 메인 피쳐를 개발했어요(기여 70%)",
                          "복잡한 회원가입 프로세스를 개선하기 위해 OCR을 도입하여 사용자 입력을 간소화 시켰어요",
                          "긴급이슈나 간단한 피쳐를 빠르게 배포하기 위해 CodePush를 도입했어요",
                        ]}
                      ></UnorderedList>
                    ),
                  },
                  {
                    className: "list-none",
                    element: <br />,
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
            <FadeInUpElement>
              <UnorderedList
                contents={[
                  "중견기업의 인사관리 시스템을 만들었어요(2019.07~2021.03)",
                  {
                    className: "list-none",
                    element: (
                      <UnorderedList
                        className="list-[circle]"
                        contents={[
                          "React Native를 이용한 안드로이드/ios 앱을 개발했어요(기여 30%)",
                          "웹페이지는 퍼블리싱을 제외한 모든 부분 혼자서 개발했고 퍼블리싱 일정 부분 참여했어요",
                          "사내 인트라넷 페이지와 인사관리 웹페이지를 연동하였어요",
                        ]}
                      ></UnorderedList>
                    ),
                  },
                ]}
              ></UnorderedList>
            </FadeInUpElement>
          </Section>
          <Section>
            <FadeInUpElement>
              <Heading level={3}>이런 기술을 가지고 일했어요</Heading>
              <p>
                <strong className="font-semibold">
                  현재회사에선 이런 기술을 쓰고있어요
                </strong>
              </p>
              <UnorderedList
                contents={[
                  "커뮤니티 서비스: TypeScript, Next.js, TanStack Query, Tailwind CSS, 등",
                  "커뮤니티 어드민: TypeScript, React, React Router, TanStack Query, Vite, Tailwind CSS, 등",
                  "장부 서비스: TypeScript, React, TanStack Query, React Router, Tailwind CSS, Graphql, 등",
                ]}
              ></UnorderedList>
              <p>
                <br />
                <strong className="font-semibold">
                  과거에는 이런 기술을 썼어요
                </strong>
              </p>
              <UnorderedList
                contents={[
                  "React Native, CodePush, Redux, Webpack, Firebase, Bootstrap v4 등",
                ]}
              ></UnorderedList>
            </FadeInUpElement>
          </Section>
          <Section>
            <FadeInUpElement>
              <Heading level={3}>이쪽으로 연락해주세요</Heading>
              <UnorderedList
                contents={[
                  <p>
                    연락처: 👉<a href="tel:010-6436-9548">010-6436-9548</a>
                  </p>,
                  <p>
                    카톡: 👉
                    <a href="https://open.kakao.com/o/sIxQ63hg">
                      오픈 채팅 링크
                    </a>
                  </p>,
                ]}
              ></UnorderedList>
            </FadeInUpElement>
          </Section>
        </main>
      </div>
    </>
  );
}
