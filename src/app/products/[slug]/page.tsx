import { Product, getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import jeans from "../../../../public/images/jeans.jpg";
import tshirt from "../../../../public/images/tshirt.jpg";
import shoes from "../../../../public/images/shoes.jpg";

// 청바지, 티셔츠, 부츠

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 상세 페이지</h1>
      {product.name == "청바지" && <Image src={jeans} alt={product.name} />}
      {product.name == "티셔츠" && <Image src={tshirt} alt={product.name} />}
      {product.name == "부츠" && <Image src={shoes} alt={product.name} />}
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거야 (SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
