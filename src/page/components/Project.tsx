import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Project() {
  return (
    <>
      <Heading level={2}>프로젝트</Heading>
      <hr className="pb-4" />
      <Heading level={3}>
        1. 장부 서비스 프로젝트 개선 작업 (한국신용데이터)
      </Heading>
      <UnorderedList
        contents={[
          "문제",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "긴 빌드 속도로 인해 생산성 저하",
                  "기존에 사용 중이던 라이브러리 버전이 낮아 라이브러리들의 최신 기술을 사용하지 못함",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "목표",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "빌드 속도 축소로 생산성 향상",
                  "라이브러리 버전 최신화",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "해결 과정",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "기존에 cra로 관리하던 프로젝트를 webpack으로 바꾸면서 불필요해진 라이브러리 제거",
                  "typescript 관련 라이브러리 최신 버전 업데이트 후 패키지매니저 yarn -> pnpm 전환, 번들러 webpack -> vite 전환",
                  "husky 및 lint-staged 도입 후 컴파일, 린트 커밋할 때 검사하도록 변경하고 빌드 시 린트 검사 옵션 제거",
                  "기존에 사용 중인 react router 라이브러리 최신버전 업데이트 및 라우터 자동화 코드 개편",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "성과",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "기존 9~10초인 빌드 속도를 2~3초 대로 개선",
                  "페이지 내부에서 라우팅 시 전체 렌더링되는 이슈 수정",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "기술 스택",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "TypeScript, Vite, React Router, TanStack Query, Tailwind CSS, 등",
                ]}
              />
            ),
          },
        ]}
      />
      <br />
      <Heading level={3}>2. 커뮤니티 서비스 개편 (한국신용데이터)</Heading>
      <UnorderedList
        contents={[
          "문제",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "지표 상승을 위해 UX/UI 개편 필요",
                  "레거시 API 레이턴시 이슈로 인한 서비스 품질 저하",
                  "백엔드 엔지니어 퇴사로 인한 추가 개발 지연",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "목표",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "API latency 축소 및 서비스 안정화",
                  "사용자에게 자연스러운 사용자 경험 제공",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "해결 과정",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "기존 기능 유지보수를 위해 MVP API 개발하던 백엔드 엔지니어의 도움을 받아 관리되지 않는 graphql API 제거(기존 DB 유지)",
                  "사용자에게 더 나은 경험을 주기 위해 UI 개편 및 영역별 에러 처리(기존 API 유지)",
                  "신규 백엔드 엔지니어 입사 후 DB 마이그레이션 및 Dual Write(백/프론트) 기능 별 무중단 배포 작업 진행",
                  "콘텐츠 에디터 element ssr 처리를 통해 가장 느린 콘텐츠 페이지 성능 최적화",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "성과 및 과제",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "개편 중 사용성 문제 최소화 및 목표 달성 성공",
                  "전반적인 페이지들의 성능 최적화 작업 필요",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "기술 스택",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "TypeScript, Next.js, TanStack Query, Tailwind CSS, Graphql, 등",
                ]}
              />
            ),
          },
        ]}
      />
      <br />
      <Heading level={3}>
        3. 커뮤니티 서비스 어드민 개편 (한국신용데이터)
      </Heading>
      <UnorderedList
        contents={[
          "문제",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "레거시 어드민에서 발생한 여러 문제들(작업 내용이 유실, 데이터 조회 문제 등)로 인해 운영자의 생산성이 저하",
                  "기존 에디터 이슈로 인한 잦은 문제 발생으로 인해 운영자의 생산성이 저하",
                  "유지 보수가 되지 않아 추가 기능이나 이슈 대응이 안됨",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "목표",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "기능 개선을 통해 운영자의 생산성 향상",
                  "신규 피쳐 개발을 통해 운영자의 생산성 향상",
                  "파트타이머, 외부 인력도 사용 가능 하도록 개발",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "해결 과정",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "OpenAPI 기반 data fetching 유틸과 쉽게 커스텀할 수 있게 자체 UI 컴포넌트 추가를 통해 백엔드 엔지니어들도 간단한 어드민 프론트 피쳐를 만들 수 있게 개발",
                  "콘텐츠 제작에 필요한 에디터를 데스크톱, 모바일 대응 가능한 ProseMirror 라이브러리 기반 WYSIWYG 에디터 자체 개발",
                  "권한별 컴포넌트 및 훅을 개발하여 페이지 및 기능 접근 관리",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "성과",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "운영자의 생산성 향상 및 외부 인력 어드민 활용하여 콘텐츠 질 향상",
                  "백엔드 엔지니어들도 기능 추가 및 수정하기 쉽게 개발하여 신속한 이슈 대응",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "기술 스택",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "TypeScript, React, React Router, TanStack Query, Vite, Tailwind CSS, 등",
                ]}
              />
            ),
          },
        ]}
      />
      <br />
      <Heading level={3}>4. 타운카 회원 가입 플로우 개편 (타운즈)</Heading>
      <UnorderedList
        contents={[
          "문제",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "입력해야 하는 정보가 많고 인증 절차가 복잡해 가입률이 저하됨",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "목표",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={["가입 플로우를 간소화를 통한 가입률 증가"]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "해결 과정",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "OCR API를 테스트해 본 결과 CLOVA OCR가 성능이 제일 좋아 도입",
                  '"본인 인증 -> 거주지 인증 -> 운전면허증 인증" 플로우를 "운전면허증 인증(OCR 후 경찰청 면허 검증 스크래핑) -> 본인 인증(OCR 및 SSO 정보 활용) -> 거주지 인증(OCR 정보 일부 활용)"으로 변경하여 플로우를 간소화',
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "성과",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "회원 가입 플로우 간소화 성공",
                  "두 배 이상의 가입률 상승",
                ]}
              />
            ),
          },
          {
            className: "list-none h-1",
            element: <></>,
          },
          "기술 스택",
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "React Native, CodePush, Redux, Webpack, Firebase, Bootstrap v4 등",
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
