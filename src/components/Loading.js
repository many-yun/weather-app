import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/spinner.gif';

const Loading = () => {
   return <SpinnerImage src={spinner} alt="로딩중" />;
};

export default Loading;

const SpinnerImage = styled.img`
   width: 30px;
   vertical-align: middle;
`;
