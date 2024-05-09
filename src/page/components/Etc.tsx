import Heading from "@/components/Heading";
import UnorderedList from "@/components/UnorderedList";

export default function Etc() {
  return (
    <>
      <Heading level={2}>기타</Heading>
      <hr className="pb-4" />
      <UnorderedList
        contents={[
          <>
            메이크마이웨딩 어플리케이션 및 어드민 외주 개발 (
            <a href="https://play.google.com/store/apps/details?id=com.makemywedding">
              안드로이드
            </a>{" "}
            /{" "}
            <a href="https://apps.apple.com/us/app/%EB%A9%94%EC%9D%B4%ED%81%AC%EB%A7%88%EC%9D%B4%EC%9B%A8%EB%94%A9-%ED%95%84%EC%88%98-%EC%9B%A8%EB%94%A9-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1595743450">
              IOS
            </a>{" "}
            앱 다운로드),
          </>,
          {
            className: "list-none",
            element: (
              <UnorderedList
                className="list-[circle]"
                contents={[
                  "앱 초기 설계 및 주요 기능(웨딩 리뷰 글, 업체 정보, 커뮤니티, 마이페이지 등) 개발",
                  "운영자 어드민 개발(리뷰 작성, 리뷰 상품 태그 기능, 업체 관리 등)",
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
