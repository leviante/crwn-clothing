import styled from "styled-components";

//bg-image
export const MenuItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-position: center;
    background-size: cover;
`;

//content
export const ContentDiv = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
`;

//title and subtitle
export const ContentTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

//menu item
export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${(props) => props.size ? "380px" : "240px"};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover{
      cursor: pointer;
  }

  &:hover ${MenuItemBackground}{
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover ${ContentDiv}{
    opacity: 1;
  }

  @media screen and (max-width: 800px){
    height: 200px;
  }
`;