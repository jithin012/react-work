import React from 'react';

import './_main_5.scss';

export default function Main_5() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start Booking Now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  id="name"
                  className="form__input"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="small"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small Tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="large"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large Tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
