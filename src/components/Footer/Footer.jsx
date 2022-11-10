import css from './Footer.module.css';
export const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.Container}>
        <p className={css.Content}>&#169;2022</p>
      </div>
    </footer>
  );
};
