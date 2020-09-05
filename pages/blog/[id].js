import { useRouter } from "next/router";
import Head from 'next/head'
import posts from '../../posts.json'

const Blog = (props) => {
  const router = useRouter();
  const {post, pathname, asPath } = props
  console.log(pathname, asPath)

  return (
    <div>
    <Head>
      <title>{post.title.split(" ")[0]}</title>
    </Head>
    <div style={styles.mainContainer}>
      <h1>this is {router.query.id}</h1>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </div>
    </div>
  );
};

Blog.getInitialProps = ({ query, pathname, asPath, req}) => {
  return {
    post: posts[query.id],
    pathname,
    asPath
  }
}


const styles = {
  mainContainer: {
    padding: "4rem",
    color: "blue",
    margin: "10rem",
    textAlign: "center"
  },
};
export default Blog;
