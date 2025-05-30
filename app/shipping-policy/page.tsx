export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Shipping Coverage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We currently ship to all locations within India. International shipping is not available at this time,
                but we're working to expand our reach globally in the future.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">1.1 Serviceable Areas</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All major cities and metropolitan areas</li>
                <li>Tier 2 and Tier 3 cities</li>
                <li>Rural areas (where courier services are available)</li>
                <li>Union Territories and remote locations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">1.2 Non-Serviceable Areas</h3>
              <p className="text-gray-700 leading-relaxed">
                We cannot deliver to certain remote locations, military bases, or areas with restricted access. You'll
                be notified during checkout if your area is not serviceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Shipping Methods and Timeframes</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-900 mb-3">🚚 Standard Shipping</h3>
                  <ul className="text-blue-800 space-y-2">
                    {/* <li>
                      <strong>Metro Cities:</strong> 2-4 business days
                    </li>
                    <li>
                      <strong>Other Cities:</strong> 3-6 business days
                    </li>
                    <li>
                      <strong>Rural Areas:</strong> 5-8 business days
                    </li> */}
                    <li>
                      <strong>Cost:</strong> ₹40 (Free above ₹499)
                    </li>

                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-900 mb-3">⚡ Express Shipping</h3>
                  <ul className="text-green-800 space-y-2">
                    {/* <li>
                      <strong>Metro Cities:</strong> 1-2 business days
                    </li>
                    <li>
                      <strong>Other Cities:</strong> 2-3 business days
                    </li>
                    <li>
                      <strong>Rural Areas:</strong> 3-5 business days
                    </li> */}
                    <li>
                      <strong>Cost:</strong> ₹99
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-medium text-yellow-900 mb-3">🏃‍♂️ Same-Day Delivery</h3>
                <p className="text-yellow-800">
                  Available in selected cities (Narsaroapata) for orders
                  placed before 2:00 PM. Additional charges: ₹199
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Shipping Costs</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Standard Shipping Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Order Value</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Shipping Cost</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Below ₹499</td>
                      <td className="border border-gray-300 px-4 py-2">₹40</td>
                      <td className="border border-gray-300 px-4 py-2">2-6 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">₹499 - ₹999</td>
                      <td className="border border-gray-300 px-4 py-2">Free</td>
                      <td className="border border-gray-300 px-4 py-2">2-6 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Above ₹999</td>
                      <td className="border border-gray-300 px-4 py-2">Free</td>
                      <td className="border border-gray-300 px-4 py-2">2-6 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 Special Item Shipping</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Fragile Items:</strong> Additional ₹25 for special packaging
                </li>
                <li>
                  <strong>Oversized Items:</strong> Calculated based on dimensions and weight
                </li>
                <li>
                  <strong>Perishable Goods:</strong> Express shipping mandatory (₹99)
                </li>
                <li>
                  <strong>Bulk Orders (&gt;20kg):</strong> Custom shipping rates apply
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Order Processing</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Processing Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Order Confirmation</h4>
                    <p className="text-gray-600">Within 30 minutes of payment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Order Processing</h4>
                    <p className="text-gray-600">4-24 hours (business days only)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Packaging & Dispatch</h4>
                    <p className="text-gray-600">Within 24-48 hours of processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Out for Delivery</h4>
                    <p className="text-gray-600">Based on shipping method selected</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.2 Cut-off Times</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Same-day delivery:</strong> Orders before 2:00 PM
                </li>
                <li>
                  <strong>Next-day processing:</strong> Orders before 6:00 PM
                </li>
                <li>
                  <strong>Weekend orders:</strong> Processed on next business day
                </li>
                <li>
                  <strong>Holiday orders:</strong> May experience delays
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Order Tracking</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 How to Track</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Log into your account</li>
                <li>Go to "My Orders" section</li>
                <li>Click on the order you want to track</li>
                <li>View real-time tracking information</li>
                <li>Get SMS/email updates automatically</li>
              </ol>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.2 Tracking Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You'll receive tracking information via:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Email notifications at key milestones</li>
                <li>SMS updates for dispatch and delivery</li>
                <li>Real-time tracking on our website</li>
                <li>WhatsApp updates (if opted in)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Delivery Information</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Delivery Attempts</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We make up to 3 delivery attempts</li>
                <li>24-48 hours between each attempt</li>
                <li>Customer notification before each attempt</li>
                <li>Package returned to warehouse after failed attempts</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.2 Delivery Requirements</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Someone must be available to receive the package</li>
                <li>Valid ID proof may be required</li>
                <li>Signature confirmation for high-value items</li>
                <li>Age verification for restricted products</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.3 Safe Delivery Options</h3>
              <p className="text-gray-700 leading-relaxed">
                In case you're not available, we offer safe delivery options like leaving packages with trusted
                neighbors, building security, or designated safe locations (with prior arrangement).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Special Shipping Conditions</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">7.1 Perishable Items</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Shipped via temperature-controlled logistics</li>
                <li>Express delivery mandatory</li>
                <li>Delivery within 24-48 hours of dispatch</li>
                <li>Special insulated packaging included</li>
                <li>No delivery on weekends for perishables</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">7.2 Fragile Items</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Extra protective packaging at no additional cost</li>
                <li>Handled with special care throughout transit</li>
                <li>Insurance coverage included for high-value fragile items</li>
                <li>Photo documentation of packaging process</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">7.3 Large/Heavy Items</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>White glove delivery service available</li>
                <li>Installation assistance for applicable items</li>
                <li>Advance appointment scheduling required</li>
                <li>Ground floor delivery standard (stairs/elevator charges may apply)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Shipping Delays</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">8.1 Common Causes</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Weather conditions and natural disasters</li>
                <li>High demand during festivals and sales</li>
                <li>Incorrect or incomplete delivery address</li>
                <li>Customs clearance (for certain products)</li>
                <li>Carrier delays or transportation issues</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">8.2 Our Response</h3>
              <p className="text-gray-700 leading-relaxed">
                In case of delays, we will proactively notify you via email and SMS. If the delay exceeds 2 business
                days beyond the estimated delivery date, you may be eligible for shipping fee refund or compensation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Shipping</h2>
              <p className="text-gray-700 leading-relaxed">
                Currently, we only ship within India. We are working on expanding our shipping capabilities to
                international destinations. Please check back for updates on international shipping availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Packaging</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">10.1 Eco-Friendly Packaging</h3>
              <p className="text-gray-700 leading-relaxed mb-4">We are committed to sustainable packaging practices:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Recyclable and biodegradable materials</li>
                <li>Minimal packaging to reduce waste</li>
                <li>Reusable packaging options where possible</li>
                <li>Plastic-free packaging for most items</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">10.2 Package Security</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Tamper-evident sealing for all packages</li>
                <li>Quality checks before dispatch</li>
                <li>Insurance coverage for high-value items</li>
                <li>Photo documentation of packaging process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact for Shipping Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-4">For shipping-related queries or issues:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> shipping@trioMart.com
                  <br />
                  <strong>Phone:</strong> +91 9553866040
                  <br />
                  <strong>WhatsApp:</strong> +91 9553866040
                  <br />
                  <strong>Live Chat:</strong> Available on our website 24/7
                  <br />
                  <strong>Hours:</strong> Monday-Saturday, 9:00 AM - 7:00 PM IST
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                This shipping policy is subject to change based on operational requirements and service improvements.
                Any updates will be posted on this page with an updated revision date. We recommend reviewing this
                policy periodically to stay informed of any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
