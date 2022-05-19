import React from 'react';
import styled from 'styled-components';

var bgColor = '#1c1c36';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: ${bgColor};
  border-radius: 15px;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
