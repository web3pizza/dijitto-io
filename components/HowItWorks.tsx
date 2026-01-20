export default function HowItWorks() {
  const features = [
    {
      title: 'Generate a Payment QR Code',
      description:
        'With DijittoExpress, we make it simple for customers to pay using cryptocurrency. We generate a unique QR code that contains your public address, allowing customers to complete transactions effortlessly with Bitcoin, Litecoin, or Dogecoin.',
    },
    {
      title: 'Real-Time Pricing Match',
      description:
        'We understand the importance of accurate conversions. DijittoExpress ensures that the pricing for each transaction aligns with the current trading value of your selected cryptocurrency, giving you up-to-date conversions from USD.',
    },
    {
      title: 'Transaction Confirmation & POS Integration',
      description:
        'DijittoExpress confirms each transaction on the blockchain and seamlessly integrates the payment information with your POS system. This smooth process facilitates the transfer of cryptocurrency funds from the customer\'s wallet to your POS wallet.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto">
            Accept cryptocurrency payments in three simple steps
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#169EDD] text-white rounded-full font-bold text-xl mb-3">
                {index + 1}
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#374151] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
