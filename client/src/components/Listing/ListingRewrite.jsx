/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SliderContainerTopComponent from './SliderContainerTop/SliderContainerTopComponent.jsx';
import SliderContainerBotComponent from './SliderContainerBot/SliderContainerBotComponent.jsx';

const SliderContainerWrapper = styled.div`
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 48px;
  -webkit-box-pack: start;
  -webkit-box-align: stretch;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  -webkit-font-smoothing: antialiased;
  height: auto;
`;

const SliderContainer = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;

`;

class ListingRewrite extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      listing: null,
      activeIndex: 0,
      translate: 0,
      transition: 0.45,
    }
    this.getListing = this.getListing.bind(this);
    this.moveLeft=this.moveLeft.bind(this);
    this.moveRight=this.moveRight.bind(this);
  }

  componentDidMount() {
    this.getListing(window.location.pathname);
  }

  getListing(path) {
    axios.get(`/api${path}places`)
    .then((res) => {
      console.log('data', res.data)
      this.setState({ // this triggers a re-render
        listing: res.data,
      })
      console.log('res', this.state.listing)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  moveLeft(event) {
    const places = this.state.listing;
    const {activeIndex} = this.state;
    const leftIndex = activeIndex > 0 ? activeIndex - 1 : places.length - 1;
    this.setState({
      activeIndex: leftIndex,
      translate: (leftIndex),
    })
  }

  moveRight(event) {
    const places = this.state.listing;
    const {activeIndex} = this.state;
    const rightIndex = activeIndex === places.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      activeIndex: rightIndex,
      translate: (rightIndex),
    })
  }

  render() {
    const places = this.state.listing;
    const {activeIndex, translate, transition} = this.state;
    console.log('place', places)
    if (!places) {
      return null;
    }
    return (
      <SliderContainerWrapper>
        <SliderContainer>
          <SliderContainerTopComponent
            moveLeft={this.moveLeft}
            moveRight={this.moveRight}
          >
          </SliderContainerTopComponent>
          <SliderContainerBotComponent
            activeIndex={activeIndex}
            translate={translate}
            transition={transition}
            places={places}>
          </SliderContainerBotComponent>
        </SliderContainer>
      </SliderContainerWrapper>
    )
  }
}

export default ListingRewrite;