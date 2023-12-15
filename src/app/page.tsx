import Counter from "@/components/Counter";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function Home() {
  // notFound();
  return (
    <>
      <h1>홈페이지!!! 버전4</h1>
      <Counter></Counter>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
