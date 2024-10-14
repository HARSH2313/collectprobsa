// components/sections/CallToAction.js
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="bg-accent text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Financial Situation?</h2>
        <p className="text-xl mb-8">Contact us today to explore how we can assist you in achieving financial stability and growth!</p>
        <Button href="/contact" variant="primary">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
