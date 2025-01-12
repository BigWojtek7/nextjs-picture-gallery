export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1
          className="scroll-m-20 text-5xl font-bold tracking-tight text-center mb-4 
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          O Nas
        </h1>
        <div className="mt-8 prose prose-lg mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            Poznaj naszą pasję do fotografii
          </p>
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-6xl text-purple-400">
                &quot;
              </span>

              <p className="text-2xl font-medium text-gray-700 leading-relaxed text-center px-8">
                Nasza galeria to miejsce, gdzie sztuka spotyka się z
                technologią. Stworzyliśmy tę przestrzeń, aby dzielić się pięknem
                fotografii z całym światem.
              </p>

              <span className="absolute -bottom-12 -right-4 text-6xl text-purple-400">
                &quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
