export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cancellation Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                We understand that sometimes you may need to cancel your order. This policy outlines the conditions and
                procedures for order cancellations to ensure a smooth experience for all our customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. When You Can Cancel</h2>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-green-900 mb-3">✅ Free Cancellation Window</h3>
                <p className="text-green-800">
                  You can cancel your order free of charge within <strong>2 hours</strong> of placing it, provided the
                  order hasn't been processed or shipped.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Order Status and Cancellation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Order Confirmed</h4>
                  <p className="text-gray-700">✅ Can be cancelled without charges</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Order Processing</h4>
                  <p className="text-gray-700">⚠️ May be cancelled with potential charges</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">Order Packed</h4>
                  <p className="text-gray-700">⚠️ Cancellation charges may apply</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">Order Shipped</h4>
                  <p className="text-gray-700">❌ Cannot be cancelled (return process applies)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How to Cancel Your Order</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Online Cancellation</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
                <li>Log into your account</li>
                <li>Go to "My Orders" section</li>
                <li>Find the order you want to cancel</li>
                <li>Click "Cancel Order" button</li>
                <li>Select cancellation reason</li>
                <li>Confirm cancellation</li>
                <li>You'll receive a confirmation email</li>
              </ol>

              <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Phone Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You can also cancel by calling our customer service:</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Phone:</strong> +91 1800-123-4567
                  <br />
                  <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST
                  <br />
                  <strong>Have Ready:</strong> Order number and registered email/phone
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cancellation Charges</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Free Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">No charges apply when you cancel:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Within 2 hours of placing the order</li>
                <li>Before the order enters processing stage</li>
                <li>Due to our error (wrong item, damaged item, etc.)</li>
                <li>Due to significant delivery delays on our part</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.2 Cancellation Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following charges may apply for late cancellations:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Order Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cancellation Fee</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Refund Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Confirmed</td>
                      <td className="border border-gray-300 px-4 py-2">Free</td>
                      <td className="border border-gray-300 px-4 py-2">Immediate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Processing</td>
                      <td className="border border-gray-300 px-4 py-2">₹25 or 2% of order value</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Packed</td>
                      <td className="border border-gray-300 px-4 py-2">₹50 or 5% of order value</td>
                      <td className="border border-gray-300 px-4 py-2">5-7 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Process</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Refund Methods</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds for cancelled orders will be processed to your original payment method:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Credit/Debit Cards:</strong> 5-10 business days
                </li>
                <li>
                  <strong>Digital Wallets:</strong> 3-7 business days
                </li>
                <li>
                  <strong>UPI:</strong> 1-3 business days
                </li>
                <li>
                  <strong>Net Banking:</strong> 5-10 business days
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.2 Refund Amount</h3>
              <p className="text-gray-700 leading-relaxed">
                The refund amount will be the total order value minus any applicable cancellation charges and
                non-refundable fees (such as convenience charges, if any).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Special Cases</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Bulk Orders</h3>
              <p className="text-gray-700 leading-relaxed">
                For orders above ₹10,000, special cancellation terms may apply. Please contact our customer service for
                assistance with bulk order cancellations.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.2 Customized Items</h3>
              <p className="text-gray-700 leading-relaxed">
                Orders containing customized or personalized items cannot be cancelled once production has begun. These
                items are also not eligible for returns.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.3 Perishable Goods</h3>
              <p className="text-gray-700 leading-relaxed">
                Orders containing perishable items (fresh produce, dairy, etc.) have a shorter cancellation window of 30
                minutes from order placement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Automatic Cancellations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may automatically cancel your order in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Payment failure or declined transactions</li>
                <li>Product unavailability or stock issues</li>
                <li>Inability to deliver to your address</li>
                <li>Suspected fraudulent activity</li>
                <li>Technical errors in pricing or product information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                In case of automatic cancellation, you'll receive immediate notification and a full refund within 3-5
                business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Partial Cancellations</h2>
              <p className="text-gray-700 leading-relaxed">
                You can cancel individual items from a multi-item order, provided the remaining items meet our minimum
                order requirements. Partial cancellations follow the same timeline and fee structure as full
                cancellations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact for Cancellations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">For cancellation assistance or questions:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> cancellations@yourstore.com
                  <br />
                  <strong>Phone:</strong> +91 1800-123-4567
                  <br />
                  <strong>WhatsApp:</strong> +91 98765-43210
                  <br />
                  <strong>Live Chat:</strong> Available on our website 24/7
                  <br />
                  <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                This cancellation policy may be updated from time to time. Any changes will be posted on this page with
                an updated revision date. We recommend reviewing this policy periodically to stay informed of any
                changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
