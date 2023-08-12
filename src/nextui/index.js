"use client";
import { NextUIProvider } from "@nextui-org/react";
export default function NextUi({ childern }) {
  return <NextUIProvider>{childern}</NextUIProvider>;
}
