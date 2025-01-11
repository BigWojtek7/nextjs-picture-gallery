'use client';

import { useState } from 'react';
import ImageGrid from '@/app/ui/image-grid';
import ImageModal from '@/app/ui/image-modal';
import LoadMoreButton from '@/app/ui/load-more-button';

export default function GalleryPage() {
  const [images, setImages] = useState(
    Array.from({ length: 6 }, (_, i) => i + 1)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const loadMoreImages = () => {
    setIsLoading(true);
    setTimeout(() => {
      setImages((prev) => [
        ...prev,
        ...Array.from({ length: 6 }, (_, i) => prev.length + i + 1),
      ]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Galeria Zdjęć
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Odkryj piękno w każdym kadrze
        </p>

        <ImageGrid
          images={images}
          openModal={(image) => setSelectedImage(image)}
        />

        <ImageModal
          selectedImage={selectedImage}
          closeModal={() => setSelectedImage(null)}
        />

        <LoadMoreButton loadMoreImages={loadMoreImages} isLoading={isLoading} />
      </div>
    </main>
  );
}
