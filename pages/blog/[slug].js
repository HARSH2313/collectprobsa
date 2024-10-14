// pages/blog/[slug].js
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Image from 'next/image'; // Import the Image component

// Sample data. In a real application, fetch this from an API or database.
const blogPosts = {
  "top-strategies-effective-debt-recovery": {
    title: "Top Strategies for Effective Debt Recovery",
    excerpt: "Discover effective techniques to recover debts efficiently.",
    content: "Full content of the article goes here...",
    image: "/images/blog/debt-recovery.jpg",
  },
  "understanding-legal-aspects-debt-management": {
    title: "Understanding the Legal Aspects of Debt Management",
    excerpt: "Learn about the legalities surrounding debt management.",
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
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
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
          <Image
            src={post.image}
            alt={post.title}
            width={800} // Set appropriate width
            height={400} // Set appropriate height
            className="mb-6 rounded-lg"
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
