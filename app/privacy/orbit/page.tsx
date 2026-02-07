export const metadata = {
  title: 'Privacy Policy - Dijitto Orbit | Dijitto Inc',
  description: 'Dijitto Orbit privacy policy - how we collect, use, and protect your information in our mobile loyalty app.',
};

export default function OrbitPrivacyPage() {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Privacy Policy
        </h1>
        <p className="text-xl text-[#374151] mb-8">Dijitto Orbit Mobile App</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#374151] mb-6">
            <strong>Last updated:</strong> February 8, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Introduction</h2>
            <p className="text-[#374151] mb-4">
              Dijitto Inc (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Dijitto Orbit mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, and protect your information when you use our App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li><strong>Phone Number:</strong> Used for account authentication via SMS verification</li>
              <li><strong>Display Name:</strong> Optional name you choose to display on leaderboards</li>
              <li><strong>Cryptocurrency Wallet Addresses:</strong> Addresses you register for loyalty point tracking</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li><strong>Device Information:</strong> Device type, operating system version</li>
              <li><strong>Usage Data:</strong> App interactions, features used, transaction history within the app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Camera Access</h2>
            <p className="text-[#374151] mb-4">
              Our App requests camera permission solely for the purpose of scanning QR codes to facilitate cryptocurrency transactions. We do not store, transmit, or process any images captured by your camera. The camera is used only in real-time for QR code scanning.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">How We Use Your Information</h2>
            <p className="text-[#374151] mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Authenticate your account</li>
              <li>Track and display your loyalty points (OR and OM)</li>
              <li>Process cryptocurrency transactions you initiate</li>
              <li>Display leaderboard rankings</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Your cryptocurrency private keys are encrypted on your device and stored securely</li>
              <li>We use industry-standard security measures to protect your data</li>
              <li>Phone numbers and account data are stored on secure servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Third-Party Services</h2>
            <p className="text-[#374151] mb-4">
              Our App may interact with:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li><strong>Cryptocurrency Networks:</strong> Bitcoin, Litecoin, and Dogecoin blockchains for transaction processing</li>
              <li><strong>SMS Providers:</strong> For sending verification codes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Your Rights</h2>
            <p className="text-[#374151] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#374151] mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of optional features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Children&apos;s Privacy</h2>
            <p className="text-[#374151] mb-4">
              Our App is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Changes to This Policy</h2>
            <p className="text-[#374151] mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Contact Us</h2>
            <p className="text-[#374151] mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-[#F3F4F6] p-6 rounded-lg">
              <p className="text-[#374151] mb-2">
                <strong>Dijitto Inc</strong>
              </p>
              <p className="text-[#374151]">
                <strong>Email:</strong> <a href="mailto:privacy@dijitto.com" className="text-[#169EDD] hover:underline">privacy@dijitto.com</a>
              </p>
            </div>
          </section>

          <p className="text-[#374151] text-sm mt-8 pt-8 border-t border-gray-200">
            This privacy policy is effective as of February 8, 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
