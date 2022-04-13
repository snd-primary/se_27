import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/layouts/underpage-layout.module.scss'


export default function UnderpageLayout({children}) {
  return (
    <div className={styles.container}>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}