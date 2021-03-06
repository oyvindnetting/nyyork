import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';

export const ContactFormWrapper = styled.form`

        width: 100%;
        label {
            display: block;
            text-align: center;
            font-weight: 300;
            font-size: 1.2rem;
            color: ${nyYorkColors.black};
        }
        input[type=submit] {
            text-align: center;
            background-color: ${nyYorkColors.gray};
            color: ${nyYorkColors.beige};
            padding: 10px 100px;
            font-weight: 700;
            min-width: 40%;
         
            @media screen and (max-width: 415px) {
                min-width: 80%;
            }

            font-size: 1.3rem;
            display: block;
            margin: 0 auto;
            &:hover {
                background-color: ${nyYorkColors.pink};
            } 
        }

        input[type=text], 
        input[type=email],
        textarea, 
        select{
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            border:1px solid #BEBEBE;
            padding: 10px;
            min-width: 40%;
            margin:20px auto;
            display: block;
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
            -ms-transition: all 0.30s ease-in-out;
            -o-transition: all 0.30s ease-in-out;
            outline: none;	
            border: 5px solid ${nyYorkColors.pink};
            @media screen and (max-width: 415px) {
                min-width: 80%;
            }

        }

        input[type=text]:focus, 
        input[type=date]:focus,
        input[type=datetime]:focus,
        input[type=number]:focus,
        input[type=search]:focus,
        input[type=time]:focus,
        input[type=url]:focus,
        input[type=email]:focus,
        textarea:focus, 
        select:focus{
            -moz-box-shadow: 0 0 8px ${nyYorkColors.pink};
            -webkit-box-shadow: 0 0 8px ${nyYorkColors.pink};
            box-shadow: 0 0 8px ${nyYorkColors.pink};
            border: 1px solid ${nyYorkColors.pink};
            display: block;

        }

        textarea {
            height: 200px;
        }
    
`;