// pages/careers.js

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { FaBriefcase, FaUserTie, FaLaptopCode } from 'react-icons/fa';

const jobOpenings = [
  {
    id: 1,
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'New York, NY',
    briefDescription:
      'Analyze financial data, prepare reports, and provide insights to support strategic decision-making.',
    detailedDescription: `### Responsibilities
- Conduct financial analysis and forecasting.
- Prepare financial reports and statements.
- Collaborate with cross-functional teams to support business objectives.
- Monitor financial performance and identify trends.

### Requirements
- Bachelor’s degree in Finance, Accounting, or related field.
- 2+ years of experience in financial analysis.
- Proficient in financial modeling and Excel.
- Strong analytical and problem-solving skills.

### Benefits
- Competitive salary and bonuses.
- Health, dental, and vision insurance.
- 401(k) with company match.
- Professional development opportunities.`,
  },
  {
    id: 2,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    briefDescription:
      'Develop and implement marketing strategies to increase brand awareness and drive sales.',
    detailedDescription: `### Responsibilities
- Create and execute comprehensive marketing plans.
- Manage social media channels and digital marketing campaigns.
- Analyze market trends and adjust strategies accordingly.
- Lead and mentor the marketing team.

### Requirements
- Bachelor’s degree in Marketing, Business, or related field.
- 5+ years of experience in marketing management.
- Strong understanding of digital marketing and SEO.
- Excellent leadership and communication skills.

### Benefits
- Flexible working hours.
- Remote work opportunities.
- Health, dental, and vision insurance.
- Paid time off and holidays.`,
  },
  {
    id: 3,
    title: 'Software Developer',
    department: 'Technology',
    location: 'San Francisco, CA',
    briefDescription:
      'Design, develop, and maintain software applications to support business operations.',
    detailedDescription: `### Responsibilities
- Develop and maintain web applications.
- Collaborate with designers and product managers.
- Write clean, scalable, and efficient code.
- Participate in code reviews and testing.

### Requirements
- Bachelor’s degree in Computer Science or related field.
- 3+ years of experience in software development.
- Proficient in JavaScript, React, and Node.js.
- Strong problem-solving abilities.

### Benefits
- Competitive salary with stock options.
- Health, dental, and vision insurance.
- Flexible working hours and remote options.
- Opportunities for career growth and advancement.`,
  },
  // Add more job openings as needed
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>Careers | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Join the CollectPro team! Explore our current job openings and become a part of a dedicated team committed to effective debt resolution and financial recovery."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at CollectPro</h1>
          <p className="text-xl md:text-2xl">
            Join our team and make a difference in the financial sector.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto mb-8 md:mb-0">
              <Image
                src="/images/careers-intro.jpg" // Ensure this image exists in public/images/
                alt="Careers at CollectPro"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Why Work with Us?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At CollectPro, we believe in fostering a collaborative and inclusive environment where every team member can thrive. Our commitment to professional growth, coupled with our dedication to client success, makes us a leader in the financial recovery industry.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We offer competitive salaries, comprehensive benefits, and opportunities for advancement. If you're passionate about making a tangible impact and eager to grow your career, CollectPro is the place for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Current Openings</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explore the exciting career opportunities available at CollectPro. We’re looking for talented individuals to join our team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => openModal(job)}>
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-primary w-6 h-6 mr-2" />
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{job.department} Department</p>
                <p className="text-gray-500 mb-4">{job.location}</p>
                <p className="text-gray-700 dark:text-gray-300">{job.briefDescription}</p>
                <Button variant="outline" className="mt-4">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <Modal isOpen={isModalOpen} closeModal={closeModal} title={selectedJob.title}>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={`/images/jobs/${selectedJob.id}.jpg`} // Ensure images are named as 1.jpg, 2.jpg, etc.
                alt={`${selectedJob.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{selectedJob.position}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              **Department:** {selectedJob.department}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              **Location:** {selectedJob.location}
            </p>
            <div className="prose dark:prose-dark">
              {/* Render markdown or formatted content */}
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(selectedJob.detailedDescription) }} />
            </div>
            <div className="mt-6 text-center">
              <Button variant="primary" href={`/apply?jobId=${selectedJob.id}`}>
                Apply Now
              </Button>
            </div>
          </Modal>
        )}
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Application Process</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We strive to make the application process as seamless and efficient as possible. Here’s how you can join our team:
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <FaUserTie className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Submit Your Application</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Send us your resume and cover letter through our online application form.
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <FaLaptopCode className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Interview</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Participate in a series of interviews to discuss your qualifications and fit for the role.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBriefcase className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Onboarding</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Once selected, you'll go through our onboarding process to integrate you into the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture & Benefits */}
      <section className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Company Culture & Benefits</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At CollectPro, we value our employees and strive to provide a supportive and enriching work environment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Work alongside a team of dedicated professionals committed to mutual success.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUserTie className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Access to training programs, workshops, and opportunities to advance your career.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLaptopCode className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Work Arrangements</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enjoy flexible hours and remote work options to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl md:text-2xl mb-8">
            Take the next step in your career and apply today!
          </p>
          <Button variant="primary" href="/apply">
            Apply Now
          </Button>
        </div>
      </section>
    </>
  );
};

// Utility function to convert markdown to HTML (you can use a library like marked or remark)
const markdownToHtml = (markdown) => {
  // For simplicity, replace markdown headers and bold syntax with HTML
  let html = markdown
    .replace(/^### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\n$/gim, '<br />');
  return html;
};

export default Careers;
