import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 500ms ease;
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
    border-color: #fff;
    border-style: solid;
    border-width: 2px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`
