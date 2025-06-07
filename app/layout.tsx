import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Sistema de Farmacia',
  description: 'Sistema de gestión para farmacia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  )
}