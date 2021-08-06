import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>BG SOLUÇÕES.</h1>{" "}
      <Link href="/about">
        <a>Sobre</a>
      </Link>
    </div>
  );
}
