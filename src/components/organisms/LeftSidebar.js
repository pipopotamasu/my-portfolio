import { css } from "@emotion/core";

const leftSidebarLayout = css`
  width: 200px;
  height: 100vh;
  background-color: #242424;
`

const Header = () => (
  <div css={leftSidebarLayout}>
    hoge
  </div>
);

export default Header;
