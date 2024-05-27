import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --light-1: #ffffff;
    --gray-1: #fafafb;
    --gray-2: #4f4f4f;
    --gray-3: #828282;
    --gray-4: #bdbdbd;
    --gray-5: #a9a9a9;
    --gray-6: #f2f2f2;
    --gray-7: #f6f8fb;
    --gray-8: #e0e0e0;
    --shadow: rgba(0, 0, 0, 0.1);
    --blue-1: #2f80ed;
    --blue-2: #97bef4;
    --blue-3: #4e93ec;
    --green-1: #219653;
    --green-2: rgb(247, 255, 233);

    --font-1: "Montserrat", sans-serif;
    --font-2: "Poppins", sans-serif;
    --font-3: "Noto Sans", sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    background-color: var(--gray-1);
    height: 100%;
  }

  #root {
    height: 100%;
  }

  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .wrapper {
    min-height: 100%;
    @media screen and (max-height: 500px) {
      min-height: auto;
    }
  }

  @keyframes move {
  from {
    left: -100px;
  }
  to {
    left: 100%;
  }
}
`;

export default GlobalStyles;
