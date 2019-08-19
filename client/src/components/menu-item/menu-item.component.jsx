import React from "react";
import { withRouter } from "react-router-dom";


//import styled components
import {MenuItemBackground, ContentDiv, ContentTitle, ContentSubtitle, MenuItemContainer  } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemBackground imageUrl={imageUrl}/>
      <ContentDiv>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentDiv>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
