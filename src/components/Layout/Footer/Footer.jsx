import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <h4 className={css.heading}>Contact details:</h4>
      <ul>
        <li className={css.item}>
          <h6 className={css.subheading}>EB email</h6>
          <a href="mailto:aiesecinszczecin@gmail.com" className={css.link}>
            aiesecinszczecin@gmail.com
          </a>
        </li>
        <li className={css.item}>
          <h6 className={css.subheading}>LC Tg chat</h6>
          <a
            href="https://bit.ly/AIESEC_SZCZECIN"
            target="_blanc"
            rel="noopener noreferrer nofollow"
            className={css.link}
          >
            https://bit.ly/AIESEC_SZCZECIN
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
