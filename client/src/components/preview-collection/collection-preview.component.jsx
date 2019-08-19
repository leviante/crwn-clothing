import React from "react";


//import styled-components
import { CollectionPreviewContainer, TitleContainer, PreviewWrapper } from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewWrapper>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewWrapper>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
