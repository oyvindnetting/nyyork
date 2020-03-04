import styled from 'styled-components';

export const HamburgerButton = styled.div`
  img {
    position: absolute;
    display: block;
    z-index: 1000;
    left: 45%;
    top: 115px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`;
