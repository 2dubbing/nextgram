"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren } from "react";

export default function ModalLayout({ children }: PropsWithChildren) {
  const segment = useSelectedLayoutSegment();
  console.log("segment: ", segment);

  if (segment !== "(.)photos") {
    return null;
  }

  return children;
}
