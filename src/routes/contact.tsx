import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, PageHero } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Contact Us | CRISPPURE BEVERAGES";
const description =
  "Contact CRISPPURE BEVERAGES on +91 70550 86832 or wecare@crisppure.info for packaged drinking water enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact CRISPPURE"
        title="Let's Connect"
        subtitle="Have a business enquiry? We're here to help."
      />
      <ContactSection />
      <section className="bg-sky-soft/40 py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl">
              Send An Online Message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please share your requirement details and our representative will respond shortly.
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
