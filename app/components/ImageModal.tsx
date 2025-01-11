import Image from 'next/image';

interface ImageModalProps {
  selectedImage: number | null;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  selectedImage,
  closeModal,
}) => {
  if (!selectedImage) return null;

  return (
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
  );
};

export default ImageModal;
