import { createFileRoute } from "@tanstack/react-router";
import {
  CtaSection,
  DistributorSection,
  PageHero,
  ProductsSection,
} from "@/components/site/Sections";
import { extendedProducts, products } from "@/lib/brand";

const title = "Our Products | CRISPPURE BEVERAGES";
const description =
  "CRISPPURE packaged drinking water in 1 Litre, 500ml, 250ml and 200ml bottles for every occasion.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Range"
        title="Our Products"
        subtitle="Refreshing hydration for every occasion."
      />
      {/* 4 Main Standard Sizes */}
      <ProductsSection
        showHeading={false}
        productList={products}
      />
      {/* Bulk & Dispenser Packaging */}
      <ProductsSection
        eyebrow="Commercial & Bulk Range"
        title="Larger Formats & Dispensers"
        subtitle="Designed for families, gatherings, workplaces and dispensers."
        showHeading={true}
        productList={extendedProducts}
      />
      <DistributorSection />
      <CtaSection />
    </>
  );
}
