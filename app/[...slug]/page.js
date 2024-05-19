import { BlockRenderer } from "components/BlockRenderer";
import { notFound } from "next/navigation";
import { getPage } from "utils/getPage";
import { getSEO } from "utils/getSEO";

export default async function Page({ params }) {
  const data = await getPage(params.slug.join("/"));
  if (!data) {
    notFound();
  }
  console.log({ data });
  return (
    <div>
      <BlockRenderer blocks={data} />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const seo = await getSEO(params.slug.join("/"));
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
