import React, { useEffect, useState } from 'react'
import { SliderData } from "./SliderData"
import "./Card.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useGlobalState as healthrate } from '../pages/health';
const Card = () => {
  const [slide] = useState(SliderData);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (current < 0) {
      setCurrent(lastIndex);
    }
    if (current > lastIndex) {
      setCurrent(0);
    }
  }, [current, slide]);

  const nextSlide = () => {
    setCurrent(current === slide.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slide.length - 1 : current - 1);
  };

  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }

      setStyle(newStyle);
    }, 200);

    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    )
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div className='section-center'>
        {slide.map((slideframe, index) => {
          const { name, jump, health,speed, image } = slideframe;
          { console.log({ slideframe }) }
          let position = "nextSlide";
          if (index === current) {
            position = "activeSlide";
          }
          if (index === current - 1 || (current === 0 && index === slide.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={index}>
              <div className="maincontainer">
                <div className='div1'>
                  <img className='card-image' src={image} alt={name} /></div>
                <div className='div2'>
                  <h3>{name}</h3>
                  <div className="progresses">
                    <div className="sub-progress">
                      <h4 className='health'>Health</h4>
                      <Progress  done={parseInt(healthrate("health"))} />
                    </div>
                    <div className="sub-progress">
                      <h4 className='speed'>Speed</h4>
                      <Progress  done={speed} />
                    </div>
                    <div className="sub-progress">
                      <h4  className='jump'>Jump</h4>
                      <Progress done={jump} />
                    </div>
                  </div>

                </div>
              </div>
            </article>

          );
        })}
      </div>
    </section>
  );
};
export default Card