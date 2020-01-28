import React from "react";
import ReactDOM from "react-dom";
//mdb stylesheets
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// import myImage from './images/parandesholovel.jpg';

import { MDBContainer } from "mdbreact";

//my components
import CardView from "./components/CardView";
import './styles/my-styles.css';
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


let myImage = require("./images/parandesholovel.jpg");

let sampleGame = {
    name : "پرنده شل و ول",
    imageUrl : `url(${myImage})`,
    rate : 3.3
};

const myCard = (
    // <MDBContainer className="mt-5">
    //     <CardView cardType="card-square" game={sampleGame}></CardView>
    //     {/*<CardView cardType="card-landscape" game={sampleGame}></CardView>*/}
    // </MDBContainer>
    <div>
        <div className="row">
            <div className="col-md-4">
                <CardView cardType="card-square" game={sampleGame}></CardView>
            </div>
            <div className="col-md-4">
                <CardView cardType="card-square" game={sampleGame}></CardView>
            </div>
            <div className="col-md-2">
                <FontAwesomeIcon icon={farStar}/>
            </div>
        </div>
    </div>
);

ReactDOM.render(myCard , document.getElementById("root"));