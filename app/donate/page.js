'use client';

import Script from "next/script";
import { useState } from "react";

export default function DonatePage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // Create order backend call
    const res = await fetch("/api/create-order", { method: "POST" });
    const order = await res.json();

    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      handler: async function (response) {
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const verifyJson = await verifyRes.json();
        if (verifyJson.success) {
          alert("Payment Successful!");
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return (
    <>
      {/* Must load Razorpay script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => console.log("Razorpay Loaded")}
      />

      <div className="w-full min-h-screen flex items-center justify-center">
        <button
          onClick={handlePayment}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
        >
          {loading ? "Processing..." : "Donate ₹500"}
        </button>
      </div>
    </>
  );
}
