import Layout from "@/components/layout";
import Link from "next/link";

export default function Nosotros() {
  return (
    <div>
      <Layout title={"Nosotros"} description="Sobre nosotros, guitarLA">
        {/* <a href="/">Ir a Inicio</a> */}
        <Link href="/">Ir a inicio</Link>
        <h1>Nosotros</h1>
      </Layout>
    </div>
  );
}
