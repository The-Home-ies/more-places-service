/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import PlaceReWrite from '../../Place/PlaceRewrite.jsx';

const SliderContainerBot = styled.div`
  margin-right: 0px;
  overflow-x: hidden;
  position: relative;
`;

const Slider = styled.ul`
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
  height: 100%;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

class SliderContainerBotComponent extends React.Component {
  constructor(props) {
    super(props);

    const {activeIndex} = this.props;

    this.state = {
      activeIndex: activeIndex,
    }
  }

  render() {
    const {places, activeIndex, translate, transition} = this.props;
    return (
      <SliderContainerBot>
        <Slider
        >
          {places.map((place, index) => {
            return (
              <PlaceReWrite
              activeIndex={activeIndex}
              translate={translate}
              transition={transition}
              key={place.id}
              index={index}
              place={place}
              />
            )
          })}
        </Slider>
      </SliderContainerBot>
    )
  }
}

export default SliderContainerBotComponent;