import React from 'react';
import '../css/main.css';

export class AppContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <p>
          <strong>Dear Hiring Managers,</strong>
        </p>
        <div className="article-body">
          <p>
            It was a pleasure to know that you are opening for a{' '}
            <em>full-stack engineer</em> position at SP Digital and I think I
            would be a good fit.
          </p>
          <p>
            I have acquired some experience as a full-stack developer,
            especially in system integration and cutting edge web technology.
            Moreover, beside my strong proficiency in JavaScript, I have also
            delivered production-proof code written in Go, Java and PHP
            programming languages.
          </p>
          <p>
            Solving business problems using technology is an interesting field
            and I believe that the position at SP Digital would give me an
            opportunity to fulfil my passion for technology. Therefore, I would
            like to apply for this challenge and hope that we will have a chance
            to build great things together.
          </p>
        </div>
        <p>
          Thank you for consideration. I’m looking forward to hearing from you.
        </p>
        <p>
          Regards,
          <br />
          Andrew Le
          <br />
          <small>
            <a href="mailto:lekhacman@outlook.com">lekhacman@outlook.com</a> |
            +65 8768 6989
          </small>
        </p>
      </div>
    );
  }
}
