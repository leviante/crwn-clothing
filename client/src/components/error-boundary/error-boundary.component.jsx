import React from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends React.Component{

    constructor(){ 
        super();

        this.state = {
            hasErrored: false
        }
    }
    //First lifecycle method that when React sees it knows that this component is an Error Boundary component.
    static getDerivedStateFromError(error){
       
        //This essentialy catches any error that gets thrown in any of the child component

        //process the error in here
        return { hasErrored: true };
    }

    //Second lifecycle method, gives us access to error and info about the error.
    //For example info can tell us which component threw an error.
    componentDidCatch(error, info){
        //do some side effects with error
        console.log(error);
    }


    render(){
        if(this.state.hasErrored) {
            return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={"https://i.imgur.com/3suxlvm.png"}/>
                <ErrorImageText>Sorry this page is broken</ErrorImageText>
            </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

