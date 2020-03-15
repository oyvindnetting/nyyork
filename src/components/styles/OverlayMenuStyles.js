import styled from 'styled-components';
import nyYorkColors from '../constants/colors';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 9999;
  background: ${nyYorkColors.yellow};
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${nyYorkColors.gray};
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 20px;

    .whiteLogo {
      max-width: 300px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 0 20px 0;
      }

      li.overlayActive {
        color: ${nyYorkColors.pink};
      }

      a {
    
        transition: all 0.3s ease;
        text-decoration: none;
        font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 2.2rem;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${nyYorkColors.yellow};
        color: ${nyYorkColors.gray} !important;
        border: 10px solid ${nyYorkColors.gray};
        letter-spacing: 1.1px;

        :hover {
          color: ${nyYorkColors.pink};
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;

    :hover {
      transform: rotate(180deg);
    }
  }
`;
