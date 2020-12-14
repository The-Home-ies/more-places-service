/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const CostSection = styled.div`
  -webkit-box-align: center;
  align-items: center;
  color: rgb(34, 34, 34);
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const CostSectionComponent = ({props}) => {
  const {cost_per_night} = props.place;
  return (
    <div style={{
      marginTop: '4px',
      position: 'relative',
    }}>
        <CostSection>
          <span
            className='costPerNight'
            style ={{
            fontWeight: '800'
            }}
          >
            ${cost_per_night}
          </span>
          <span>
            &nbsp;/ night&nbsp;
          </span>
        </CostSection>
    </div>
  )
}

export default CostSectionComponent;