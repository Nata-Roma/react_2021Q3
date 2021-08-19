import React, { useEffect, useRef } from 'react';
import './aboutPage.css';

const AboutPage = (): JSX.Element => {
  const aboutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      aboutRef.current.classList.add('about_enter');
    }, 300);
  }, []);

  return (
    <div className="about_wrapper" ref={aboutRef} data-testid="aboutPage" >
      <div className="about_message">About Page</div>
    </div>
  );
};

export default AboutPage;
