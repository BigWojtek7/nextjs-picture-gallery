'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
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

  const openModal = (image: number) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square relative">
                <Image
                  src={`https://picsum.photos/800/800?random=${image}`}
                  alt={`Zdjęcie ${image}`}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <Image
              src={`https://picsum.photos/800/800?random=${selectedImage}`}
              alt={`Powiększone zdjęcie ${selectedImage}`}
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            onClick={loadMoreImages}
            disabled={isLoading}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold 
                     shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 
                     disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Ładowanie...
              </>
            ) : (
              'Załaduj więcej'
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
