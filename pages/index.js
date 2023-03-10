import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { getAllPostData } from "../lib/posts";

function HomePage({ postData }) {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const apiPostData = await getAllPostData();
  const postData = apiPostData.map((post) => {
    return {
      title: post.params.title,
      slug: post.params.slug,
      dateAdded: post.params.dateAdded,
    };
  });

  return {
    props: {
      postData,
    },
  };
}
