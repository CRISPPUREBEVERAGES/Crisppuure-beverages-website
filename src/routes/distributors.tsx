import { createFileRoute } from "@tanstack/react-router";
import { DistributorSection, PageHero, WhoWeServeSection } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Partner With CRISPPURE | Distributors";
const description =
  "Partner with CRISPPURE BEVERAGES to supply packaged drinking water to retail, hotels, offices and events.";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DistributorsPage,
});

function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor & B2B Supply"
        title="Partner With CRISPPURE"
        subtitle="Looking for a reliable packaged drinking water supplier for your retail outlet, hotel, restaurant, office, event or business? Connect with CRISPPURE BEVERAGES."
      />
      <DistributorSection />
      <WhoWeServeSection />
      <section className="bg-sky-soft/40 py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl">
              Distributor & Bulk Order Enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and our distribution team will contact you promptly.
            </p>
          </div>
          <div className="mt-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
