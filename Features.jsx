import React from 'react';
import { TrendingUp, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="text-green-600 w-10 h-10 mb-3" />,
    title: 'Data-Driven Insights',
    description: 'Make decisions based on historical performance and expert analysis.',
    detail: 'Our platform provides comprehensive historical data, so you can make informed decisions.',
  },
  {
    icon: <BarChart3 className="text-green-600 w-10 h-10 mb-3" />,
    title: 'Risk Assessment',
    description: 'Understand the risk associated with different investment options.',
    detail: 'Our tool helps match your risk tolerance with the right investments.',
  },
  {
    icon: <Shield className="text-green-600 w-10 h-10 mb-3" />,
    title: 'Educational Resources',
    description: 'Learn about investing fundamentals and advanced strategies.',
    detail: 'We provide guides from savings to mutual funds to grow your financial literacy.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why <span className="text-green-600">InvestWise</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{f.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
