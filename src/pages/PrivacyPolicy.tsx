import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Privacy Policy - Nexus Energy Solutions"
        description="Nexus Energy Solutions Privacy Policy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy' }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Nexus Energy Solutions ("Nexus Energy") values user privacy and applies this Privacy Policy to all its websites, products, and services. The Policy explains how personal data is collected, used, protected, shared, and the rights users have regarding their information. By using the website, users agree to the terms of this Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nexus Energy collects only necessary personal data, including web behavior data (IP address, browser details, analytics) and contact information (name, email, phone, etc.), for purposes such as website operation, communication, and responding to inquiries. Data is handled in accordance with legal principles of lawfulness, necessity, and integrity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The company uses strict technical, administrative, and physical safeguards—such as access control, encryption, monitoring, and anonymization—to protect data and retains it only as long as required for business or legal needs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Personal data is shared only with user consent, where legally required, for service delivery, or with trusted third-party providers. Transfers or public disclosures occur only with consent or under legal exceptions such as national security, legal investigations, or vital interest protection.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users have rights to access, correct, restrict, or delete their personal data and may withdraw consent at any time. Cookies and similar technologies are used to recognize users and improve website performance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Transfer</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Data may be transferred across borders with appropriate legal safeguards. Nexus Energy may update the Policy as needed and will post changes on the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For any queries or requests, users can contact the company's Data Protection Officer at <a href="mailto:info@nexusenergy.in" className="text-green-600 hover:text-green-700">info@nexusenergy.in</a> or <a href="tel:+916280602341" className="text-green-600 hover:text-green-700">+91 62806 02341</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

