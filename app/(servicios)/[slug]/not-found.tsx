export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-red-600">
        Servicio no encontrado
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        El servicio que buscas no se encuentra disponible
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </a>
    </main>
  );
}
