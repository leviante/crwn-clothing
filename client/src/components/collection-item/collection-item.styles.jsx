import styled from "styled-components";

//import necessary components
import CustomButton from "../custom-button/custom-button.component";
import {CollectionPageContainer} from "../../pages/collection/collection.styles";


//img div with dynamic rendering using props
export const ImageDiv = styled.div`
    width: 100%;
    height: 95%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    &:hover{
        opacity:0.8;
    }
`;

//collection footer
export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

//name and price
export const NameSpan = styled.span`
      width: 90%;
      margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
      width: 10%;
`;

//customButton
export const CustomCollectionItemButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

//collection-item div container

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${CustomCollectionItemButton}{
     display: flex;
      opacity: 0.85;
  }

  ${CollectionPageContainer} &{
      margin-bottom:30px;
  }
`;
