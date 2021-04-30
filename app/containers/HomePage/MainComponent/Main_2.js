import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './_main_2.scss';

export default function Main_2() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon
              className="feature-box__icon icon-basic-world"
              icon={faCoffee}
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon className="feature-box__icon" icon={faCoffee} />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon className="feature-box__icon" icon={faCoffee} />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon className="feature-box__icon" icon={faCoffee} />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
