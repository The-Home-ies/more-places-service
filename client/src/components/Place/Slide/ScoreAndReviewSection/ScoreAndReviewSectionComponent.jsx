/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import PlaceStarSectionComponent from './PlaceStarSectionComponent.jsx';

const ScoreAndReviewSectionWrapper = styled.div`
  margin-bottom: 6px;
  -webkit-box-align: center;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  display: flex;
  width: 100%;
`;

const ScoreAndReviewSection = styled.div`
  margin-right: 10px;
  animation-duration: 0.3s;
  animation-name: keyframe_18jn58a;
  animation-timing-function: ease-in-out;
  opacity: 1;
  visibility: visible;
`;

const ScoreAndReviewSectionInner = styled.span`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  font-size: 14px;
  line-height: 18px;
`;

const ScoreAndReviewSectionComponent = ({props}) => {
  const {score} = props.place;
  const {review_count} = props.place;
  return (
    <ScoreAndReviewSectionWrapper>
      <ScoreAndReviewSection>
        <ScoreAndReviewSectionInner>
          <PlaceStarSectionComponent>
          </PlaceStarSectionComponent>
          <span className='placeScore' style={{
            color: 'rgb(34, 34, 34)'
          }}>
            {score}
          </span>
          <span className='placeReview' style={{
            color: 'rgb(113, 113, 113)'
          }}>
            ({review_count})
          </span>
        </ScoreAndReviewSectionInner>
      </ScoreAndReviewSection>
    </ScoreAndReviewSectionWrapper>
  )
}

export default ScoreAndReviewSectionComponent;