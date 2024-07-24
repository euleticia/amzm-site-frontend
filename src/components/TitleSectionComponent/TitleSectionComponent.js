import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TitleSectionComponent = ({ title, backgroundImage }) => {
  const [backgroundOffset, setBackgroundOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setBackgroundOffset(scrollY * - 0.4);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: `center ${backgroundOffset}px`,
    minHeight: '300px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    transition: 'background-position 0.1s ease-out',
  };

  const maskStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const titleStyle = {
    position: 'relative',
    zIndex: 1,
    fontFamily: 'Prompt',
    fontWeight: 400,
    fontSize: '50px',
  };

  return (
    <section style={sectionStyle}>
      <div style={maskStyle}></div>
      <h2 style={titleStyle}>{title}</h2>
    </section>
  );
};

TitleSectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default TitleSectionComponent;
