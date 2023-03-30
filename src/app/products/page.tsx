import Link from "next/link";
import React from "react";

type Props = {
  params: {
    pants: string; // pants는 폴더명임
  };
};
export default function page({ params }: Props) {
  return (
    <>
      <h1>제품소개페이지</h1>
      <ul>
        <Link href="/product/skirt">
          <li> skirt</li>
        </Link>
      </ul>
    </>
  );
}
