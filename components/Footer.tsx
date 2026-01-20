import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-[#374151] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DijittoExpress</h3>
            <p className="text-gray-300 text-sm">
              Non-custodial cryptocurrency wallet integration for retail POS systems.
            </p>
            <p className="text-gray-300 text-sm mt-4">
              📍 Wilmington, Delaware
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#169EDD] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported Cryptocurrencies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Supported Cryptocurrencies</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Bitcoin (BTC)</li>
              <li>Litecoin (LTC)</li>
              <li>Dogecoin (DOGE)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} DijittoExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
