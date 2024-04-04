"use client";
import context from "./context";
import { useContext } from "react";
export default function contextHandler() {
  const result = useContext(context);
  return result;
}
