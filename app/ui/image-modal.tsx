import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageModalProps {
  selectedImage: number | null;
  closeModal: () => void;
}

export default function ImageModal({
  selectedImage,
  closeModal,
}: ImageModalProps) {
  const open = selectedImage !== null;

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-7xl bg-transparent border-0 p-0 mx-auto">
        <DialogTitle className="sr-only">
          Zoomed image {selectedImage}
        </DialogTitle>
        <div className="relative aspect-square max-h-[90vh] w-full flex items-center justify-center">
          {selectedImage && (
            <Image
              src={`https://picsum.photos/1200/1200?random=${selectedImage}`}
              alt={`Powiększone zdjęcie ${selectedImage}`}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          )}
          <DialogClose className="absolute top-4 right-4 rounded-full p-2 bg-black/50 hover:bg-black/75 transition-colors">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
