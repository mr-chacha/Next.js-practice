import React from "react";

type Props = {
  params: {
    pants: string; // pants는 폴더명임
  };
};
export default function page({ params }: Props) {
  return <h1>{params.pants}제품설명페이지</h1>;
}
// 미리 경로만들기
export function generateStaticParams() {
  const products = ["skirt", "pants"];
  return products.map((products) => ({ pants: products }));
}
