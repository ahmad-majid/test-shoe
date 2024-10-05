import React from "react";
import "../styles/FAQPage.css";

const FAQPage = () => {
  const faqData = [
    {
      question: "How can I place an order?",
      answer: "You can place an order by following these steps:",
      details: [
        "Browse our product catalog and select the item you want to purchase.",
        "Click on the 'Add to Cart' button to add the item to your shopping cart.",
        "Review the items in your cart and click 'Proceed to Checkout'.",
        "Provide your shipping and payment information.",
        "Review your order details and click 'Place Order'.",
        "You will receive an order confirmation email.",
      ],
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept a variety of payment methods, including:",
      details: [
        "Credit or debit cards (Visa, MasterCard, American Express)",
        "PayPal",
        "Apple Pay",
        "Google Pay",
        "Bank transfers (contact our support for details)",
      ],
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times may vary depending on your location and the shipping method you choose. We offer the following shipping options:",
      details: [
        "Standard Shipping: 3-5 business days",
        "Express Shipping: 1-2 business days",
        "International Shipping: 7-14 business days",
      ],
    },
    {
      question: "Can I return or exchange items?",
      answer:
        "Yes, we have a hassle-free return and exchange policy. Here are the key details:",
      details: [
        "Items must be returned within 30 days of purchase.",
        "Items must be in their original condition with all tags and packaging.",
        "Returns are free for defective or damaged items.",
        "To initiate a return or exchange, contact our customer support team.",
      ],
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is here to assist you. You can reach us through the following methods:",
      details: [
        "Email: support@example.com",
        "Phone: +1 (123) 456-7890",
        "Live Chat: Available on our website during business hours.",
      ],
    },
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
            <ul className="faq-details">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
