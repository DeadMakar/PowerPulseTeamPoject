import styled from 'styled-components';

export const PrifileContentBox = styled.div`
  @media (min-width: 1440px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 60%;
      transform: translateX(-50%);
      width: 1px;
      background-color: rgba(239, 237, 232, 0.2);
    }

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding-bottom: 44px;
  }
`;
