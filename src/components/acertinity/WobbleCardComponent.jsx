"use client";
import { WobbleCard } from "../ui/wobble-card";

export default function WobbleCardComponent({children, className}) {
  return (
      <WobbleCard className={className}>
        {children}
      </WobbleCard>
  );
}
