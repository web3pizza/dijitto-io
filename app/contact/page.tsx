'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.dijitto.io/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please email us directly at aaron@dijitto.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Ready to start accepting cryptocurrency payments? Contact us today and join the future of retail payments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Temporarily hidden for Apple approval */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#169EDD] focus:border-transparent text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#169EDD] focus:border-transparent text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#374151] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#169EDD] focus:border-transparent text-gray-900"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#169EDD] focus:border-transparent resize-none text-gray-900"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          */ }

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-[#169EDD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-[#374151]">Email</p>
                    <a href="mailto:aaron@dijitto.io" className="text-[#169EDD] hover:underline">
                      aaron@dijitto.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-[#169EDD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-[#374151]">Location</p>
                    <p className="text-[#374151]">Wilmington, Delaware</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Temporarily hidden for Apple approval */}
            {/* <div className="bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Join the growing number of retailers accepting cryptocurrency with DijittoExpress.
              </p>
              <a
                href="https://app.dijitto.io/request"
                className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Join the Waitlist
              </a>
            </div> */}

            {/* FAQ Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Common Questions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-[#374151]">How long does setup take?</p>
                  <p className="text-[#374151]">Most merchants can be up and running within 24-48 hours.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#374151]">What cryptocurrencies do you support?</p>
                  <p className="text-[#374151]">We currently support Bitcoin (BTC), Litecoin (LTC), and Dogecoin (DOGE).</p>
                </div>
                <div>
                  <p className="font-semibold text-[#374151]">Are there transaction fees?</p>
                  <p className="text-[#374151]">Contact us for detailed pricing information tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */} {/* Closing div for grid - commented out with form */}
        </div>
      </div>
    </main>
  );
}
