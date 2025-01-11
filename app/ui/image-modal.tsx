import Image from 'next/image';

interface ImageModalProps {
  selectedImage: number | null;
  closeModal: () => void;
}

export default function ImageModal({
  selectedImage,
  closeModal,
}: ImageModalProps) {
  if (selectedImage === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div className="relative max-w-4xl w-full aspect-square">
        <Image
          src={`https://picsum.photos/1200/1200?random=${selectedImage}`}
          alt={`Powiększone zdjęcie ${selectedImage}`}
          fill
          className="object-contain"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
