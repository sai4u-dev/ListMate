export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer
                a comprehensive refund policy to ensure your peace of mind when shopping with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Eligibility</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 General Conditions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be eligible for a refund, your item must meet the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Item must be returned within 30 days of delivery</li>
                <li>Item must be in original condition and packaging</li>
                <li>Item must be unused and undamaged</li>
                <li>All original tags and labels must be attached</li>
                <li>Proof of purchase (order confirmation) must be provided</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Non-Refundable Items</h3>
              <p className="text-gray-700 leading-relaxed mb-4">The following items are not eligible for refunds:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Perishable goods (food items, fresh produce)</li>
                <li>Personal care items (cosmetics, hygiene products)</li>
                <li>Customized or personalized items</li>
                <li>Digital products and downloads</li>
                <li>Gift cards and vouchers</li>
                <li>Items damaged by misuse or normal wear</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 How to Request a Refund</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Log into your account and go to "My Orders"</li>
                <li>Find the order you want to return and click "Request Refund"</li>
                <li>Select the items you want to return and provide a reason</li>
                <li>Submit your refund request</li>
                <li>We'll review your request within 2-3 business days</li>
              </ol>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 Return Shipping</h3>
              <p className="text-gray-700 leading-relaxed">
                For eligible returns, we provide free return shipping. You'll receive a prepaid return label via email
                once your refund request is approved. If the return is due to our error (wrong item, damaged item),
                we'll cover all return shipping costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Timeline</h2>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Processing Timeline</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>
                    <strong>Request Review:</strong> 2-3 business days
                  </li>
                  <li>
                    <strong>Return Shipping:</strong> 3-7 business days
                  </li>
                  <li>
                    <strong>Inspection & Processing:</strong> 2-3 business days
                  </li>
                  <li>
                    <strong>Refund to Payment Method:</strong> 5-10 business days
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Total Timeline:</strong> Most refunds are completed within 12-23 business days from the initial
                request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Methods</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Original Payment Method</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will be processed to your original payment method:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Credit/Debit Cards:</strong> 5-10 business days
                </li>
                <li>
                  <strong>Digital Wallets:</strong> 3-7 business days
                </li>
                <li>
                  <strong>Net Banking:</strong> 5-10 business days
                </li>
                <li>
                  <strong>UPI:</strong> 1-3 business days
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.2 Store Credit</h3>
              <p className="text-gray-700 leading-relaxed">
                In some cases, we may offer store credit as an alternative to cash refunds. Store credit never expires
                and can be used for future purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Partial refunds may be granted in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Items returned without original packaging</li>
                <li>Items with minor damage not caused by our error</li>
                <li>Items returned after 30 days but within 60 days</li>
                <li>Items showing signs of use beyond normal inspection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Exchanges</h2>
              <p className="text-gray-700 leading-relaxed">
                We currently offer refunds rather than direct exchanges. If you need a different size, color, or model,
                please request a refund for the original item and place a new order for the desired item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Damaged or Defective Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">If you receive a damaged or defective item:</p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Contact us immediately (within 48 hours of delivery)</li>
                <li>Provide photos of the damaged item and packaging</li>
                <li>We'll arrange immediate replacement or full refund</li>
                <li>No return shipping required for damaged items</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For refund-related questions or to initiate a return:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> returns@yourstore.com
                  <br />
                  <strong>Phone:</strong> +91 1800-123-4568
                  <br />
                  <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST
                  <br />
                  <strong>Online:</strong> Use the "Request Refund" feature in your account
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update this refund policy at any time. Changes will be posted on this page with
                an updated revision date. Continued use of our services after changes constitutes acceptance of the new
                policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
