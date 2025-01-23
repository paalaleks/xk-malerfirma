import { useEffect } from "react";

export function useLockBodyScroll({ open }: { open: boolean }) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return; // Ensure body exists

    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    // Clean up function to remove the class when the component unmounts or open changes
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [open]);
}
