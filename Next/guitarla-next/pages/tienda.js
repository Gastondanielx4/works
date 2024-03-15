import Layout from "@/components/layout";
import Link from "next/link";

export default function Tienda() {
  return (
    <div>
      <Layout
        title={"Tienda Virtual"}
        description="Tienda Virtual, venta de guitarras, instrumentos, GuitarLA"
      >
        {/* <a href="/">Ir a Inicio</a> */}
        <Link href="/">Ir a inicio</Link>
        <h1>Tienda Virtual</h1>
      </Layout>
    </div>
  );
}
