import React from "react";

export default class LadnscapeCard extends React.Component{
    render() {

        return(
            <div
                className="gc-game-card gc-pointer"
                style={{backgroundImage : this.props.imageUrl , backgroundColor : "red", width: "400px" , height : "200px"}}
            ></div>
        )
    }

}