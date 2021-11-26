import Footer from "./Footer";
import styles from "./Layout.module.css";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <NavBar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  );
}
