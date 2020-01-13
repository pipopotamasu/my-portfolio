import { css } from "@emotion/core";

const leftSidebarLayout = css`
  width: 200px;
  height: 100vh;
  background-color: #242424;
`

const LeftSidebar = () => (
  <div css={leftSidebarLayout}>
    hoge
  </div>
);

export default LeftSidebar;
