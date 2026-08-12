import BlogDetails from "../Components/BlogDetails/BlogDetails";
import BlogArticleHeader from "../Components/BlogDetails/BlogArticleHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Common/BreadCumb";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setLoadError(false);

    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/blog.json`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Unable to load blog data (${response.status})`);
        }
        const data = await response.json();
        setAllPosts(Array.isArray(data) ? data : []);
        const post = data.find(item => item.slug === slug);
        setBlogPost(post || data[0]);
        setLoadError(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error('Error fetching blog data:', error);
          setLoadError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
    return () => controller.abort();
  }, [slug]);

  if (isLoading) {
    return <BlogArticleHeader loading />;
  }

  if (loadError || !blogPost) {
    return <BlogArticleHeader />;
  }

  return (
    <main>
      <BlogArticleHeader post={blogPost} />
      <Breadcrumb />
      <BlogDetails blogPostData={blogPost} allPostsData={allPosts} />
    </main>
  );
};

export default BlogDetailsPage;
