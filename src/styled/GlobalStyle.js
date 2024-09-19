import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-grey-0: hsl(0, 0%, 100%);
  --color-pink-30: hsl(275, 100%, 97%);
  --color-grayish-purple-30: hsl(280.92deg 83.69% 54.31%);
  --color-grayish-purple-40: hsl(292, 16%, 49%);
  --color-dark-purple: hsl(292, 42%, 14%);
  --color-grey-300: #9ca3af;
  --color-grey-700: #374151;


  --backdrop-color: var(--color-pink-30);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}
@font-face {
  font-family: 'Work Sans Bold';
  src: url('/fonts/static/WorkSans-Bold.ttf') format('truetype'); /* برای فایل‌های ttf */

  font-family: 'Work Sans Regular';
  src: url('/fonts/static/WorkSans-Regular.ttf') format('truetype'); /* برای فایل‌های ttf */
}


body {
  font-family: 'Work Sans Bold', sans-serif;
  color: var(--color-dark-purple);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-0);
  color: var(--color-dark-purple);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-grey-30);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


::-webkit-scrollbar {
  width: 2px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: pink; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: pink; 
}

`;

export default GlobalStyle;
