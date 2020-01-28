import React from "react";
import {MDBMask, MDBView , MDBBtn} from "mdbreact";
import SquareCard from "./SquareCard";
import LadnscapeCard from "./LandscapeCard";


export default class CardView extends React.Component{
    render(){
        // return (
        //     <MDBView className={`${this.props.cardType} rounded m-1`} hover zoom>
        //         <a href="#">
        //             <img
        //                 src={this.props.game.imageUrl}
        //                 className="img-fluid card-img"
        //                 alt=""
        //             />
        //             <MDBMask className="d-flex flex-column justify-content-center" overlay="indigo-strong">
        //                 <p className="white-text text-center font-weight-bold">{this.props.game.name}</p>
        //             </MDBMask>
        //         </a>
        //     </MDBView>
        // )

        // return (
        //     <MDBView rounded hover zoom>
        //         <a href="#" style={{display: "block"}}>
        //         <img
        //             src={this.props.game.imageUrl}
        //             className="img-fluid"
        //             alt=""
        //         />
        //         <div className="card-mask">
        //             <p className="text-center white-text">{this.props.game.name}</p>
        //         </div>
        //
        //             {/*<MDBMask overlay="indigo-strong">*/}
        //             {/*    <p className="text-center white-text">{this.props.game.name}</p>*/}
        //             {/*</MDBMask>*/}
        //         </a>
        //     </MDBView>
        // )

        switch (this.props.cardType) {
            case "card-square":
                return <SquareCard imageUrl={this.props.game.imageUrl} gameName={this.props.game.name} rate={this.props.game.rate}/>;

            case "card-landscape":
                return <LadnscapeCard imageUrl={this.props.game.imageUrl}/>;

            default:
                return null;

        }

    }
}