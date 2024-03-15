import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title={"Inicio"} description={"Blog de música, "}>
        <h1>Hola Mundo en Next</h1>
        <Link href="/nosotros">Nosotros</Link>
        {/* <a href="/nosotros">Nosotros</a> */}
      </Layout>
    </>
  );
}
