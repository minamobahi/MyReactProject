import React from "react";
import {MDBMask, MDBView , MDBBtn} from "mdbreact";

export default class CardView extends React.Component{
    render(){
        return (
            <MDBView className={`${this.props.cardType} rounded m-1`} hover zoom>
                <a href="#">
                    <img
                        src={this.props.game.imageUrl}
                        className="img-fluid card-img"
                        alt=""
                    />
                    <MDBMask className="d-flex flex-column justify-content-center" overlay="indigo-strong">
                        <p className="white-text text-center font-weight-bold">{this.props.game.name}</p>
                        <MDBBtn className="rounded sunny-morning-gradient align-self-center font-weight-bold" size="sm"><b>شروع بازی</b></MDBBtn>
                    </MDBMask>
                </a>
            </MDBView>
        )
    }
}