export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-card mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-bold">LearningQarslan</span>
            </div>
            <p className="text-secondary text-sm">
              Platform pembelajaran online terpercaya untuk mengembangkan keterampilan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Kursus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dukungan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Komunitas
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Syarat Layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Kebijakan Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary">
            <p>&copy; {currentYear} LearningQarslan. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
