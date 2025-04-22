import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 text-center container mx-auto px-8">
      <h2 className="text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
        Use our tools to analyze different investment options and find what works best for your financial goals.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded text-lg">
        Get Started Today
      </button>
    </section>
  );
};

export default CTA;
