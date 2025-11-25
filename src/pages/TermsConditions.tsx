import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Terms & Conditions - Nexus Energy Solutions"
        description="Nexus Energy Solutions Terms & Conditions"
      />
      <PageHero
        title="Terms & Conditions"
        subtitle="Terms and conditions for using our website"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Terms & Conditions' }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms apply to all visitors of the Nexus Energy Solutions website. By using the site, visitors accept the stated conditions; those who do not agree should discontinue use. Nexus Energy may update the Legal Notice at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Website Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The website information—including text, images, data, and videos—is intended to be accurate and complete, but Nexus Energy provides no warranties regarding correctness, suitability, or non-infringement and is not liable for any use of such information. The company may change website content without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Restrictions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visitors may not modify, duplicate, or use website content for commercial or illegal purposes. Unauthorized use may result in legal action. Messages submitted through the "Contact Us–Enquiry" section may be reviewed; Nexus Energy is not responsible for their content. Offensive or unlawful submissions may be deleted, and users will bear any resulting legal liabilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Links to third-party websites are provided for convenience and do not imply endorsement. Nexus Energy is not responsible for third-party content. All trademarks and copyrighted materials on the site belong to Nexus Energy or its licensors and may not be used without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nexus Energy is not liable for indirect or consequential losses, system failures, malware, or any damages arising from use or unavailability of the website. Personal information is handled according to the site's Privacy Policy, and use of the site signifies acceptance of those terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All matters related to this website are governed by the laws of India. Disputes not resolved through amicable negotiation will fall under the exclusive jurisdiction of courts in Thane, Maharashtra, India.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;

