import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Dougie Richardson
        </p>
        <p className="footer__version">{__SITE_VERSION__}</p>
      </div>
    </footer>
  );
}
