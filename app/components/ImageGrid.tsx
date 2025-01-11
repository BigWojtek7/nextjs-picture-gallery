import Image from 'next/image';

interface ImageGridProps {
  images: number[];
  openModal: (image: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, openModal }) => {
  return (
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
  );
};

export default ImageGrid;
