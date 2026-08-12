import Blog1 from "../Components/Blog/Blog1";
import Breadcrumb from "../Components/Common/BreadCumb";
import PageHero from "../Components/PageHero/PageHero";

const BlogPage = () => {
  return (
    <main>
      <PageHero
        eyebrow="Latest News"
        title="Blog & Updates"
        minHeight="clamp(300px, 31vw, 400px)"
        backgroundImage={{
          src: "/img/blog/blog-hero-top.webp",
          alt: "",
          width: 1920,
          height: 700,
        }}
        overlay={0.85}
      />

      <Breadcrumb />
      <Blog1 />
    </main>
  );
};

export default BlogPage;
