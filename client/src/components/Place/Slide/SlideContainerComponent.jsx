/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import ImageSectionComponent from './ImageSection/ImageSectionComponent.jsx';
import ScoreAndReviewSectionComponent from './ScoreAndReviewSection/ScoreAndReviewSectionComponent.jsx';
import RoomAndBedSectionComponent from './RoomAndBedSection/RoomAndBedSectionComponent.jsx';
import CostSectionComponent from './CostSection/CostSectionComponent.jsx';

const SlideHyperlink = styled.a`
  border-radius: 8px;
  display: block;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  color: inherit;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
`;

const RoomNameSectionWrapper = styled.div`
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 400;
  color: #222222;
  word-break: break-all;
  font-size: 16px;
  line-height: 20px;
`;

const SlideContainerComponent = ({props, handleLike}) => {
  const {id} = props.place;
  const {listing_name} = props.place;
  const path = window.location.href;
  let port = path.includes('3000') ? '3000' : '3004';
  return (
    <div
      className='slideOuterDiv/_1yfus1e'
      style={{
        height: '100%',
      }}
    >
      <div
        className='slideInnerDiv/_e296pg'
        style={{
          position: 'relative',
        }}
      >
        <SlideHyperlink
          href={`http://${window.location.hostname}:${port}/${id}`}
          target='_blank'
          rel='noopener'
        >
        </SlideHyperlink>
        <div
          className="_fcpquh"
          style={{
            marginBottom: '10px',
          }}
        >
          <ImageSectionComponent
            props={props}
            handleLike={handleLike}
          >
          </ImageSectionComponent>
        </div>
        <ScoreAndReviewSectionComponent
          props={props}>
        </ScoreAndReviewSectionComponent>
        <RoomAndBedSectionComponent
          props={props}>
        </RoomAndBedSectionComponent>
        <RoomNameSectionWrapper>
          {listing_name}
        </RoomNameSectionWrapper>
        <CostSectionComponent
          props={props}>
        </CostSectionComponent>
      </div>
    </div>
  )
}

export default SlideContainerComponent;