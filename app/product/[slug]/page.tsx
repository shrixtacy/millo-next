import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductByHandle, getProducts } from "@/lib/shopify";
import ProductDetail from "@/components/ProductDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await getProducts(50).catch(() => []);
  return products.map((p) => ({ slug: p.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductByHandle(params.slug).catch(() => null);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: product.images.edges[0]?.node.url
        ? [{ url: product.images.edges[0].node.url }]
        : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductByHandle(params.slug).catch(() => null);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
