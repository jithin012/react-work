import React from 'react';

import img1 from '../img/nat-1-large.jpg';
import img2 from '../img/nat-2-large.jpg';
import img3 from '../img/nat-3-large.jpg';

import './_main_1.scss';

export default function Main_1() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <a href="" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={img1} alt="" className="composition__photo composition__photo--p1"/>
            <img src={img2} alt="" className="composition__photo composition__photo--p2"/>
            <img src={img3} alt="" className="composition__photo composition__photo--p3"/>

          </div>
        </div>
      </div>
    </section>
  )
}
