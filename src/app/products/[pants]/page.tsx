import React from "react";

type Props = {
  params: {
    pants: string; // pants는 폴더명임
  };
};
//metadata로 제품의 이름을 params로 가져와서 확인
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의이름 : ${params.pants}`,
  };
}
export default function page({ params }: Props) {
  return <h1>{params.pants}제품설명페이지</h1>;
}
// 미리 경로만들기
export function generateStaticParams() {
  const products = ["skirt", "pants"];
  return products.map((products) => ({ pants: products }));
}
