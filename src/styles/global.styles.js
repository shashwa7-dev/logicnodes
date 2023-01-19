import * as styled from "styled-components";

//mixins
const flexCol = styled.css`
  display: flex;
  flex-direction: column;
`;
const flexColCenter = styled.css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const flexRowCenter = styled.css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const gridCenter = styled.css`
  display: grid;
  place-items: center;
`;
export const mixins = {
  flexCol,
  flexColCenter,
  flexRowCenter,
  gridCenter,
};
export const GlobalStyles = styled.createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    -webkit-tap-highlight-color: transparent; /* transparent with keyword */
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  /* Set core body defaults */
  body {
    ${mixins.flexCol}
    text-rendering: optimizeSpeed;
    line-height: 1.25;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture,
  svg {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    cursor: pointer;
  }

  /*Hide Arrows From Input Number*/
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  /*hide choose file btn from input filed*/
  input[type="file"] {
    display: none;
  }
  a {
    color: var(--color-dull);
    cursor: pointer;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .user_data {
    position: absolute;
    top: 50px;
    right: 50px;
    border: 1px solid;
    border-radius: 0.5rem;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 1rem;
    background: grey;
    color:white;
  }
`;
