import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
//배열을 만들고
const products = ["skirt", "pants", "shirt", "shoes"];
export default function page() {
  return (
    <>
      <h1>제품소개페이지</h1>
      <ul>
        {/* 배열을 만든걸 map을 돌려서 보여주고 그안에 링크로 products/이름이동하게함 */}
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
