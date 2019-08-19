import styled /*{ css }*/ from "styled-components";
import { Link } from "react-router-dom";

//first, make the header container
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

//We need a logo container as well, but it'll be link
//To actually style a component instead of a basic HTML element, we can use different notation for our styled import
//styled(<insteadComponentHere>)
export const LogoContainer = styled(Link)`
     height: 100%;
    width: 70px;
    padding: 25px;
`;

//Now, options container, it's a div element so we use this notation
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;



//if we want to use one style for different elements (like a component and a div), we should import the css from styled-component library.

//css import allows us to write a block of CSS that we can pass in to the components, so we don't have to write duplicate code

//no need after adding as prop
// const OptionContainerStyles = css`
//     cursor: pointer;
//     padding: 10px 15px;
// `;

//Now use this for shared components (in this case, a Link and a div shares this classes(styles))

export const OptionLink = styled(Link)`
    cursor: pointer;
    padding: 10px 15px;
`;

//no need for this after as prop
// export const OptionDiv = styled.div`
//     ${OptionContainerStyles};
// `;

//If the only difference between shared styles is the element types, it's possible to write this even shorter by passing props to components in component.jsx file
/*
    eg: 

    Since option is shared between link and div, let's define it once

    export const OptionLink = styled(Link)`
       cursor: pointer;
        padding: 10px 15px; 
    `

    and in our component.jsx file, for div, use it like this
    <OptionLink as="div" ...otherProps >

    it's possible to use components inside "as" prop
    <OptionLink as={Link} ...>
    
*/