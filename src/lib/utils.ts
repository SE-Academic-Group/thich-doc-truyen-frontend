import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const sleep = async (nSecs = 1000) =>
  await new Promise((resolve) => setTimeout(resolve, nSecs));
