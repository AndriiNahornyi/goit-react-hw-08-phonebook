import css from './Home.module.css';
export const Home = () => {
  return (
    <>
      <h1 className={css.HomeTitle}>Welcome To My Phonebook Homepage!</h1>
      <img
        className={css.Img}
        src="https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif"
        alt="teporary_image"
      />
    </>
  );
};
