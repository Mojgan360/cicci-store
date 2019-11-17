import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
}
const TitleWrapper = styled.div`
  background: var(--mainColor);
  text-align: ${props => (props.center ? "center" : "left")};
  .title-underline {
    background: var(--primaryColor);
    height: 0.25rem;
    width: 7rem;
    margin: ${props => (props.center ? "0 auto" : "0")};
  }
`;
