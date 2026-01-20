import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              DijittoExpress
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Non-custodial Cryptocurrency Wallet Integration
            </p>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              For Retail POS Systems
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Real-time BTC, LTC & DOGE Acceptance Made Easy
            </h2>
            <p className="text-lg mb-8 text-blue-50 max-w-2xl">
              DijittoExpress empowers retailers to embrace the world of cryptocurrency without any hassle,
              offering real-time acceptance of Bitcoin, Litecoin, and Dogecoin seamlessly integrated into
              your existing POS systems. It's the ultimate solution for sophisticated retailers who are
              passionate about blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.dijitto.io/request"
                className="bg-white text-[#1E3A8A] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block text-center"
              >
                Join the Waitlist
              </a>
            </div>
          </div>

          {/* Crypto Logo Triangle */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
              {/* Triangle Formation */}
              {/* Bitcoin at top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-full shadow-2xl hover:scale-110 transition-transform">
                <Image
                  src="/images/btcIcon.png"
                  alt="Bitcoin"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              {/* Litecoin at bottom left */}
              <div className="absolute bottom-0 left-8 bg-white p-8 rounded-full shadow-2xl hover:scale-110 transition-transform">
                <Image
                  src="/images/ltcIcon.png"
                  alt="Litecoin"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              {/* Dogecoin at bottom right */}
              <div className="absolute bottom-0 right-8 bg-white p-8 rounded-full shadow-2xl hover:scale-110 transition-transform">
                <Image
                  src="/images/dogeIcon.png"
                  alt="Dogecoin"
                  width={120}
                  height={120}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
