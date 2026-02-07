export const metadata = {
  title: 'Privacy Policy | DijittoExpress',
  description: 'DijittoExpress privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#374151] mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">1. Introduction</h2>
            <p className="text-[#374151] mb-4">
              DijittoExpress ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cryptocurrency payment processing platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. Information We Collect</h2>
            <p className="text-[#374151] mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Business contact information (name, email, phone number)</li>
              <li>Business details (company name, location, industry)</li>
              <li>Cryptocurrency wallet addresses (public keys only)</li>
              <li>Transaction data for payment processing</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#374151] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Provide, maintain, and improve our payment processing services</li>
              <li>Process cryptocurrency transactions on your behalf</li>
              <li>Communicate with you about services, updates, and support</li>
              <li>Monitor and analyze usage patterns to enhance user experience</li>
              <li>Ensure compliance with legal and regulatory requirements</li>
              <li>Detect and prevent fraud or unauthorized transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. Non-Custodial Nature</h2>
            <p className="text-[#374151] mb-4">
              DijittoExpress is a non-custodial platform. We do not store, hold, or have access to your private keys or cryptocurrency funds. You maintain complete control over your digital assets at all times.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Information Sharing</h2>
            <p className="text-[#374151] mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Blockchain networks (public transaction data only)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Data Security</h2>
            <p className="text-[#374151] mb-4">
              We implement industry-standard security measures to protect your information, including encryption, secure storage, and access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Your Rights</h2>
            <p className="text-[#374151] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">8. Cookies and Tracking</h2>
            <p className="text-[#374151] mb-4">
              We use cookies and similar tracking technologies to improve your experience, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">9. Changes to This Policy</h2>
            <p className="text-[#374151] mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Effective Date."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">10. Contact Us</h2>
            <p className="text-[#374151] mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-[#F3F4F6] p-6 rounded-lg">
              <p className="text-[#374151] mb-2">
                <strong>Email:</strong> <a href="mailto:aaron@dijitto.io" className="text-[#169EDD] hover:underline">aaron@dijitto.io</a>
              </p>
              <p className="text-[#374151]">
                <strong>Location:</strong> Wilmington, Delaware
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
