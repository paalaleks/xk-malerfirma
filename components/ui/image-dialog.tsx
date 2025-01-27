"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function ImageDialog({ isOpen, onClose, src, alt }: ImageDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Bilde</DialogTitle>
      <DialogContent className="max-w-[95vw] h-auto p-4">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 95vw, 90vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
