import PricingCard from "@/components/pricing/PricingCard";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 left-0">
        <div className="bg-[url(/images/bg-pattern.svg)] h-[60vh] w-screen bg-no-repeat bg-cover flex items-start justify-center">
        <div className="bg-[url(/images/pattern-circles.svg)] bg-center h-30 md:h-50 bg-no-repeat bg-contain translate-y-20 sm:translate-y-12 md:translate-y-24 text-[hsl(227,35%,25%)] flex justify-center flex-col font-man-rope gap-2">
          <span className="text-2xl md:text-3xl font-bold">Simple, traffic-based pricing</span>
          <span className="text-xs md:text-sm">sign-up for our 30-day trail.No credit card required.</span>
        </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 min-[350px]:-translate-y-1/4 max-[350px]:pb-10">
        <PricingCard />
      </div>
    </div>
  );
}
