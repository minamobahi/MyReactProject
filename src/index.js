import React from "react";
import ReactDOM from "react-dom";
//mdb stylesheets
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBContainer } from "mdbreact";

//my components
import CardView from "./components/CardView";
import './styles/my-styles.css';


let myImage = require("./images/parandesholovel.jpg");

let sampleGame = {
    name : "پرنده شل و ول",
    imageUrl : myImage
};

const myCard = (
    <MDBContainer className="mt-5">
        <CardView cardType="card-square" game={sampleGame}></CardView>
        <CardView cardType="card-landscape" game={sampleGame}></CardView>
    </MDBContainer>
);

ReactDOM.render(myCard , document.getElementById("root"));