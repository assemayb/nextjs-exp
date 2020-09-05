import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Posts from "../posts.json";
import Link from "next/link";

function Home() {
  const allBlogs = Posts;
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <div>
        <p>This is some boilerplate text.</p>
      </div>
      <div>
        <h3>All the available posts</h3>
        {Object.entries(allBlogs).map((val, indx) => {
          return (
            <div style={{ color: "blue", fontSize: "20px" }}>
              <Link href={`/blog/${val[0]}`}>
                <a>{val[1].title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
