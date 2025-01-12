export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1
          className="scroll-m-20 text-5xl font-bold tracking-tight text-center mb-4 
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          Kontakt
        </h1>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-center text-muted-foreground mb-8">
              Skontaktuj się z nami
            </p>
            <div className="space-y-4">
              <p>Email: kontakt@galeria.pl</p>
              <p>Telefon: +48 123 456 789</p>
              <p>Adres: ul. Fotograficzna 123, 00-000 Warszawa</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
