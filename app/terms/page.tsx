export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>"Company"</strong> refers to our e-commerce platform and its operators
                </li>
                <li>
                  <strong>"User"</strong> refers to anyone who accesses or uses our website
                </li>
                <li>
                  <strong>"Services"</strong> refers to all features, content, and functionality offered through our
                  platform
                </li>
                <li>
                  <strong>"Products"</strong> refers to all items available for purchase on our platform
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use License</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on our website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 License Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by us at any time. Upon terminating your viewing of these materials or upon the termination
                of this license, you must destroy any downloaded materials in your possession whether in electronic or
                printed format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Account Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.2 Account Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your account at any time for violations of these terms or
                for any other reason we deem appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Orders and Payments</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Order Acceptance</h3>
              <p className="text-gray-700 leading-relaxed">
                All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order for any
                reason, including but not limited to product availability, errors in product information, or suspected
                fraudulent activity.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.2 Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                All prices are listed in Indian Rupees (INR) and are subject to change without notice. We strive to
                ensure pricing accuracy, but errors may occur. In case of pricing errors, we reserve the right to cancel
                orders or request additional payment.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.3 Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Payment must be received before order processing. We accept various payment methods including credit
                cards, debit cards, digital wallets, and UPI. All payments are processed securely through our payment
                partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Shipping and Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will make every effort to deliver products within the estimated timeframe, but delivery dates are not
                guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Delivery times are estimates and may vary</li>
                <li>We are not responsible for delays caused by shipping carriers</li>
                <li>Additional charges may apply for expedited shipping</li>
                <li>International shipping may be subject to customs duties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Returns and Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                Our return and refund policy is detailed in our separate Refund Policy document. By using our services,
                you agree to be bound by our current refund policy as posted on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You may not use our service:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive
                property of our company and its licensors. The service is protected by copyright, trademark, and other
                laws. Our trademarks and trade dress may not be used in connection with any product or service without
                our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
                implied, and hereby disclaim and negate all other warranties including without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall our company or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on our website, even if we or our authorized representative has been notified
                orally or in writing of the possibility of such damage. Because some jurisdictions do not allow
                limitations on implied warranties, or limitations of liability for consequential or incidental damages,
                these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you
                irrevocably submit to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@trioMart.com
                  <br />
                  <strong>Phone:</strong> +91 9553866040
                  <br />
                  <strong>Address:</strong> Narasaraopeta, Guntur, Andhra Pradhesh, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
