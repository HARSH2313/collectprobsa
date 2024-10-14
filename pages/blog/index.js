// pages/blog/index.js
import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Link from "next/link";

const articles = [
  {
    title: "Top Strategies for Effective Debt Recovery",
    excerpt:
      "Discover the essential strategies that can help you recover debts effectively while maintaining positive client relationships. From negotiation techniques to legal actions, learn how to maximize your recovery rates.",
    slug: "top-strategies-effective-debt-recovery",
    image: "/images/blog/debt-recovery.jpg",
  },
  {
    title: "Understanding the Legal Aspects of Debt Management",
    excerpt:
      "Navigating the legal landscape can be complex. This article outlines key legal considerations every business should know when managing and recovering debts, ensuring compliance and protection.",
    slug: "understanding-legal-aspects-debt-management",
    image: "/images/blog/legal-aspects.jpg",
  },
  {
    title: "How to Improve Cash Flow in Your Business",
    excerpt:
      "Learn practical tips and strategies to enhance your business’s cash flow and ensure financial stability. From budgeting techniques to revenue optimization, empower your business with better cash management.",
    slug: "how-improve-cash-flow-business",
    image: "/images/blog/cash-flow.jpg",
  },
  {
    title: "The Importance of Regular Financial Health Assessments",
    excerpt:
      "Regular financial health assessments can help identify potential issues before they escalate. Understand the benefits of proactive financial management and how it can safeguard your business.",
    slug: "importance-regular-financial-health-assessments",
    image: "/images/blog/financial-health.jpg",
  },
  {
    title: "Effective Communication Strategies During Debt Recovery",
    excerpt:
      "Maintaining clear and respectful communication during debt recovery is crucial for preserving business relationships. Explore strategies to communicate effectively with debtors while pursuing recovery.",
    slug: "effective-communication-strategies-debt-recovery",
    image: "/images/blog/communication-strategies.jpg",
  },
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Read our latest insights, tips, and updates related to debt management and financial recovery to empower your business decisions."
        />
      </Head>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Blog & Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <a className="text-primary font-semibold hover:underline">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination or Load More can be added here */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
