import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Career() {
  return (
    <>
      <Heading level={2}>경력</Heading>
      <hr className="pb-4" />
      <UnorderedList
        contents={[
          {
            className: "list-none -ml-6",
            element: (
              <Heading level={3}>한국신용데이터 (22.08 ~ 재직 중)</Heading>
            ),
          },
          <>
            <a href="https://talk.cashnote.kr/">커뮤니티 서비스</a> 개편
          </>,
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "커뮤니티 서비스 프로젝트 설계 및 개발",
                  "MVP 네이티브 서비스를 모바일 웹뷰로 개편",
                  "AB 테스트를 통한 가설 검증 및 기능 개선",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "커뮤니티 어드민 서비스 개편",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "어드민 프로젝트 설계 및 개발",
                  "커뮤니티 콘텐츠 제작에 필요한 WYSIWYG 에디터 자체 개발",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          <>
            장부 서비스(
            <a href="https://play.google.com/store/apps/details?id=cashnote.com.albatross&hl=ko&gl=US">
              안드로이드
            </a>{" "}
            /{" "}
            <a href="https://apps.apple.com/kr/app/%EC%BA%90%EC%8B%9C%EB%85%B8%ED%8A%B8/id1459090715">
              IOS
            </a>{" "}
            앱 다운로드) 개발
          </>,
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "주요 기능(세금, 비용 등) 개편",
                  "레거시 API 제거",
                  "레거시 프로젝트의 페이지 현재 프로젝트로 이관",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
        ]}
      />
      <br />
      <UnorderedList
        contents={[
          {
            className: "list-none -ml-6",
            element: <Heading level={3}>타운즈 (21.04 ~ 22.08)</Heading>,
          },
          <>
            <a href="https://www.towncar.co.kr/">타운카(차량공유 서비스)</a> 앱
            개발
          </>,
          "앱 기반 환경 및 배포 플로우 구축",
          {
            className: "list-none h-1",
            element: <></>,
          },
        ]}
      />
      <br />
      <UnorderedList
        contents={[
          {
            className: "list-none -ml-6",
            element: <Heading level={3}>루브릭랩스 (19.07 ~ 21.03)</Heading>,
          },
          "중견기업 인사 성과 관리 앱 개발",
          "인사 성과 관리 데스크톱 웹 개발",
          "사내 인트라넷 페이지 인사관리 웹 서비스 연동",
        ]}
      />
    </>
  );
}
