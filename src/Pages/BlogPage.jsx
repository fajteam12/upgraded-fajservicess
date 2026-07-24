import Blog1 from "../Components/Blog/Blog1";
import Breadcrumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
    return (
        <>
            <Breadcrumb />
            <div>
                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30 text-center mb-0">Blogs</h1>
                    </div>
                </section>
                <Blog1></Blog1>
            </div>
        </>

    );
};

export default BlogPage;
