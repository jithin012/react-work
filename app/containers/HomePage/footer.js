import React from 'react';

import logo from './img/logo-green-2x.png';
import './_footer.scss';

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link" />
                Company
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" />
                Contact us
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" />
                Carriers
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" />
                Privacy
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" />
                Terms
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built my{' '}
            <a href="" className="footer__link">
              jithin
            </a>
            . Copyright &copy; by Jithin
          </p>
        </div>
      </div>
    </footer>
  );
}
