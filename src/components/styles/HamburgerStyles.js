import styled from 'styled-components';

export const HamburgerButton = styled.div`
  img {
    position: absolute;
    display: block;
    z-index: 1000;
    right: 10%;
    top: 135px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    transition: all 0.2s ease;
  	outline: none;
    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`;
