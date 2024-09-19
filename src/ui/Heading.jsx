import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.5rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      width: 500;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
    `}

    line-height:5rem;
  color: var(--color-dark-purple);
`;

export default Heading;
