export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Clazzy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/dashboard/documents"
                className="text-gray-700 hover:text-gray-900"
              >
                Documentos
              </a>
              <a
                href="/dashboard/templates"
                className="text-gray-700 hover:text-gray-900"
              >
                Templates
              </a>
              <a
                href="/dashboard/libraries"
                className="text-gray-700 hover:text-gray-900"
              >
                Bibliotecas
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
