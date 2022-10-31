import instagram from "../components/image/instagram.png";
import telegram from "../components/image/telegram.png";
import twitter from "../components//image/twitter.png";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-5 d-flex align-items-center">
          <span className="text-muted">
            Copyright © 2022 Rodrigo Villegas. All Rights Reserved.
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3 red1">
            <a
              className="text-muted"
              href="http://instagram.com"
              rel="noopener noreferrer"
              title="Instagram"
            >
             <img src={instagram} width="50" alt="logo" />
            </a>
          </li>
          <li className="ms-3 red2">
            <a
              className="text-muted"
              href="http://twitter.com"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <img src={twitter} width="50" alt="logo" />
            </a>
          </li>
          <li className="ms-3 red3">
            <a
              className="text-muted"
              href="https://web.telegram.org"
              target={"_blank"}
              rel="noopener noreferrer"
              title="Telegram"
            >
              <img src={telegram} width="50" alt="logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
