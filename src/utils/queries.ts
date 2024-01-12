import { useMediaQuery } from "@/hooks/useMediaQuery";

export const useLaptopLMediaQuery = () => {
  return useMediaQuery("(max-width: 1440px)");
}

export const useLaptopMediaQuery = () => {
  return useMediaQuery("(max-width: 1024px)");
}

export const useTabletMediaQuery = () => {
  return useMediaQuery("(max-width: 768px)");
}

export const useMobileMediaQuery = () => {
  return useMediaQuery("(max-width: 360px)");
}