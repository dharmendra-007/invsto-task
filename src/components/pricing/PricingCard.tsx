"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

const tiers = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

export default function PricingCard() {
  const [yearly, setYearly] = useState(false);
  const [tierIndex, setTierIndex] = useState(2); // Default: 100K

  const tier = tiers[tierIndex];
  const price = yearly ? tier.price * 0.75 : tier.price;

  return (
    <Card className="w-[90vw] md:w-[50vw] lg:w-[30vw] shadow-xl rounded-2xl bg-background py-0 md:py-6">
      <CardContent className="p-8 flex flex-col gap-6 px-4 md:px-6">
        {/* medium device */}
        <div className="md:flex flex-col gap-6 hidden">
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-wide text-sm text-muted-foreground">
              {tier.views} Pageviews
            </span>
            <span className="text-3xl font-bold text-foreground">
              ${price.toFixed(2)}
              <span className="text-base font-normal text-muted-foreground">
                / month
              </span>
            </span>
          </div>

          {/* Slider */}
          <Slider
            defaultValue={[tierIndex]}
            max={tiers.length - 1}
            step={1}
            onValueChange={(val) => setTierIndex(val[0])}
            className="w-full"
          />
        </div>

        {/* mobile device */}
        <div className="flex flex-col gap-6 md:hidden">
          <span className="uppercase tracking-wide text-xs font-semibold text-muted-foreground">
            {tier.views} Pageviews
          </span>
          {/* Slider */}
          <Slider
            defaultValue={[tierIndex]}
            max={tiers.length - 1}
            step={1}
            onValueChange={(val) => setTierIndex(val[0])}
            className="w-full"
          />
          <span className="text-3xl font-bold text-foreground">
            ${price.toFixed(2)}
            <span className="text-base font-normal text-muted-foreground">
              / month
            </span>
          </span>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <span className="text-muted-foreground">Monthly Billing</span>
          <Switch checked={yearly} onCheckedChange={setYearly} />
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Yearly Billing</span>
            <Badge className=" text-orange-500 bg-orange-100 text-xs">
              <span className="visible md:hidden">-</span>
              <span>25% </span>
              <span className="hidden md:block">discount</span>
            </Badge>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Features */}
          <ul className="space-y-2 text-sm">
            {["Unlimited websites", "100% data ownership", "Email reports"].map(
              (feature) => (
                <li key={feature} className="flex items-center justify-center md:justify-start gap-2">
                  <Image src="/images/icon-check.svg" height={10} width={10} alt="checkmark" />
                  <span>{feature}</span>
                </li>
              )
            )}
          </ul>

          {/* CTA Button */}
          <Button variant={"cta"} className="h-10 px-10 hover:bg-[hsl(228,34%,42%)] dark:bg-[hsl(228,34%,49%)] dark:text-white dark:hover:bg-[hsl(228,43%,56%)]">Start my trial</Button>
        </div>
      </CardContent>
    </Card>
  );
}