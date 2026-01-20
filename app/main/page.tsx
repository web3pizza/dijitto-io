import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'DijittoExpress | Cryptocurrency Payment Processing for Retail',
  description: 'Non-custodial cryptocurrency wallet integration for retail POS systems. Accept Bitcoin, Litecoin, and Dogecoin with real-time pricing and seamless POS integration.',
};

export default function MainPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <CTA />
    </main>
  );
}
