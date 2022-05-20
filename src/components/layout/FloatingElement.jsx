import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: ${colors.floatingElementBg};
  border-radius: 15px;
`;

const UnpaddedWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: ${colors.floatingElementBg};
  border-radius: 15px;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
  hidePadding = false,
}) {
  return hidePadding ? (
    <UnpaddedWrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </UnpaddedWrapper>
  ) : (
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
