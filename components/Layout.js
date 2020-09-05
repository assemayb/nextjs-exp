import Link from "next/link";
import { useRouter } from "next/router";

export default (Layout) => {
  return (
    <div>
      <nav style={styles.nav}>
        <>
          <Link href={"/"}>
            <a style={styles.page}>
              <h3>home</h3>
            </a>
          </Link>
          <Link  href={"/about"}>
            <a style={styles.page}>
              <h3>about</h3>
            </a>
          </Link>

          <Link  href={"/profile"}>
            <a style={styles.page}>
              <h3>profile</h3>
            </a>
          </Link>
        </>
      </nav>
      <main>{Layout.content}</main>

      <section>
        <footer style={styles.footer}>
          <h1>footer and stuff</h1>
        </footer>
      </section>
    </div>
  );
};

const styles = {
  nav: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cadetBlue",
  },
  page: {
    fontSize: "20px",
    marginLeft: "4rem"
  },
  footer: {
    padding: "2rem",
    backgroundColor: "cadetBlue",
    textAlign: "center",
  },
};
