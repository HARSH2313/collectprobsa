// pages/blog/[slug].js
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

// Sample data. In a real application, fetch this from an API or database.
const blogPosts = {
  "top-strategies-effective-debt-recovery": {
    title: "Top Strategies for Effective Debt Recovery",
    content: "Full content of the article goes here...",
    image: "/images/blog/debt-recovery.jpg",
  },
  "understanding-legal-aspects-debt-management": {
    title: "Understanding the Legal Aspects of Debt Management",
    content: "Full content of the article goes here...",
    image: "/images/blog/legal-aspects.jpg",
  },
  // Add more posts as needed
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts[slug];

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - CollectPro Banking Support Agency</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover mb-6 rounded-lg"
          />
          <div className="prose lg:prose-xl">
            <p>{post.content}</p>
            {/* Add more content as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
