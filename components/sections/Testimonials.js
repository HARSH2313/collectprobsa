// components/sections/Testimonials.js
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with CollectPro transformed our approach to debt management. Their expertise and commitment made all the difference in recovering our outstanding debts efficiently.",
    clientName: "Rahul Verma",
    position: "CFO",
    company: "Verma Manufacturing Pvt. Ltd.",
    photo: "/images/testimonials/rahul-verma.jpg",
  },
  {
    quote: "The team’s transparency and dedication gave us peace of mind during a challenging time. We highly recommend CollectPro for their professional and effective services.",
    clientName: "Anita Kapoor",
    position: "Owner",
    company: "Kapoor Retail Solutions",
    photo: "/images/testimonials/anita-kapoor.jpg",
  },
  {
    quote: "Their tailored solutions led to significant improvements in our cash flow. CollectPro’s approach is both strategic and compassionate, making them an invaluable partner.",
    clientName: "Sanjay Mehta",
    position: "CEO",
    company: "Mehta Tech Innovations",
    photo: "/images/testimonials/sanjay-mehta.jpg",
  },
  {
    quote: "CollectPro’s legal expertise was instrumental in reclaiming our property swiftly and smoothly. Their professionalism and efficiency exceeded our expectations.",
    clientName: "Priya Singh",
    position: "Real Estate Investor",
    company: "Singh Properties",
    photo: "/images/testimonials/priya-singh.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-white">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 relative mr-6">
                <Image
                  src={testimonial.photo}
                  alt={`${testimonial.clientName} Photo`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-text dark:text-white">{testimonial.clientName}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.position} at {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
