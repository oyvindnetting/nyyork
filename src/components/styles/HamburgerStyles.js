import styled from 'styled-components';

export const HamburgerButton = styled.div`
  img {
    position: absolute;
    display: block;
    z-index: 1000;
    left: 40%;
    top: 135px;
    width: 80px;
    height: 80px;
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
