// components/sections/Hero.js
import Button from "../ui/Button"
const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20" >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leave Your Financial Worries to Us!</h1>
        <p className="text-xl md:text-2xl mb-8">Your Partner in Effective Debt Resolution and Financial Recovery.</p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" href="/contact">
            Get Started
          </Button>
          <Button variant="outline" href="/services">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
