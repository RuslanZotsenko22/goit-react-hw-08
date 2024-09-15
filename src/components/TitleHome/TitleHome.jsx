import css from "./TitleHome.module.css";

const TitleHome = ({ children }) => {
  return <h1 className={css.title_home}>{children}</h1>;
};

export default TitleHome;
