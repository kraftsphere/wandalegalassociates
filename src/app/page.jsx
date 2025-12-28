import MasterLayout from "@/components/home/MasterLayout";

export const metadata = {
  title: "W and A Legal Associates | Trusted Law Firm in Mumbai",

  description:
    "Mumbai-based full-service law firm established in 1997, providing ethical and result-oriented legal solutions across civil, criminal, property, and corporate matters.",

  openGraph: {
    title: "W and A Legal Associates | Trusted Law Firm in Mumbai",
    description:
      "Established in 1997, W and A Legal Associates delivers ethical and practical legal solutions with professionalism and trust.",
    url: "https://www.wandalegalassociates.in",
  },

  alternates: {
    canonical: "https://www.wandalegalassociates.in",
  },
};

export default function Home() {
  return (
    <>
      <MasterLayout />
    </>
  );
}
