import { Header } from '../Header';
import { Footer } from '../Footer';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.LayoutContainer}>
      <Header />
      <main className={css.LayoutContent}>{children}</main>
      <Footer />
    </div>
  );
};
