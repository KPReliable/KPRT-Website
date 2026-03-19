import IndustriesWeServe from "@/app/components/IndustriesWeServe/IndustriesWeServe";
// import "@/app/styles/header.css";
// import "@/app/globals.css"
// import "@/app/styles/industries.css"
// import "@/app/styles/homepage.css"

export const metadata = {
  title: "Industries We Serve | QualityInspect",
  description:
    "Quality inspection and audit services across Automotive, Electronics, Heavy Machinery, Consumer Goods, Textiles and more — Pan India.",
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesWeServe />
    </main>
  );
}