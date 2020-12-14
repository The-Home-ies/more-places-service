/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  padding-top: 66.6667%;
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const ImageWrapperInner = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: static;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;

`;

const ImageWrapperInnerBot = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  visibility: hidden;

`;

const ImageWrapperInnerBot2nd = styled.div`
  -webkit-box-pack: center;
  display: flex;
  justify-content: center;
  white-space: nowrap;

`;
const ImageWrapperComponent = ({props}) => {
  const {picture_url} = props.place;
  return (
    <ImageWrapper
      aria-busy='false'>
      <ImageWrapperInner>
        <Image
          loading='lazy'
          aria-hidden='true'
          src={picture_url}
        >
        </Image>
        <ImageWrapperInnerBot>
        </ImageWrapperInnerBot>
        <ImageWrapperInnerBot2nd>
        </ImageWrapperInnerBot2nd>
      </ImageWrapperInner>
    </ImageWrapper>
  )
}

export default ImageWrapperComponent;