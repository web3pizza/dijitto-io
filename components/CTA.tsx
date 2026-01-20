import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  const wallets = [
    { name: 'MyDoge', image: '/images/mydoge.webp' },
    { name: 'Trust Wallet', image: '/images/trustwallet.png' },
    { name: 'Exodus', image: '/images/exodus.png' },
    { name: 'Coinbase Wallet', image: '/images/coinbasewallet.png' },
    { name: 'SafePal', image: '/images/safepal.png' },
    { name: 'Atomic', image: '/images/atomic.jpeg' },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Accept Cryptocurrency?
          </h2>
          <p className="text-lg md:text-xl mb-4 text-blue-50 max-w-4xl mx-auto leading-relaxed">
            DijittoExpress is here to revolutionize the way retailers and their customers embrace
            cryptocurrency. With our seamless integration, real-time pricing, and a team of experts
            behind us, we're your go-to solution for effortless Bitcoin, Litecoin, and Dogecoin acceptance.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-12">
            Join us on this exciting journey!
          </p>
          <a
            href="https://app.dijitto.io/request"
            className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Supported Wallets */}
        <div className="mt-16 border-t border-white/20 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Compatible with Popular Wallets
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 w-24 h-24 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <Image
                  src={wallet.image}
                  alt={wallet.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
