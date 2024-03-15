import Layout from "@/components/layout";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Layout
        title={"Blog"}
        description="Blog de música, venta de guitarras, consejos, GuitarLA"
      >
        {/* <a href="/">Ir a Inicio</a> */}
        <Link href="/">Ir a inicio</Link>
        <h1>Blog</h1>
      </Layout>
    </div>
  );
}
