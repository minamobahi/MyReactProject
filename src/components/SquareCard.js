import React from "react";
import Rating from "react-rating";


import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faStarHalf} from "@fortawesome/free-solid-svg-icons/faStarHalf";
import { faStar as farStar} from "@fortawesome/free-regular-svg-icons"

// import '../styles/fontawsome5.12.0/css/all.min.css'

import ReactStars from 'react-rating-stars-component'

export default class SquareCard extends React.Component{
    render() {
        // const SVGIcon = (props) =>
        //     <svg className={props.className} pointerEvents="none">
        //         <use xlinkHref={props.href} />
        //     </svg>;
        // const ratingChanged = (newRating) => {
        //     console.log(newRating)
        // }
        return (
            // <div style={{width: "200px" , height : "200px"}}>
                <div
                    className="gc-game-card gc-pointer"
                    style={{backgroundImage : this.props.imageUrl}}
                >
                    <div className="gc-footer">
                        <div className="row card-name">{this.props.gameName}</div>
                        {/*<div className="row card-rate">*/}
                        {/*    <ReactStars*/}
                        {/*        count={5}*/}
                        {/*        // onChange={ratingChanged}*/}
                        {/*        size={16}*/}
                        {/*        edit={false}*/}
                        {/*        value={3.5}*/}
                        {/*        half={true}*/}
                        {/*        emptyIcon={<FontAwesomeIcon icon={farStar}/>}*/}
                        {/*        halfIcon={<FontAwesomeIcon icon={faStarHalf}/>}*/}
                        {/*        fullIcon={<FontAwesomeIcon icon={farStar}/>}*/}
                        {/*        color2={'#ffd700'} />*/}
                        {/*</div>*/}


                        <div className="row card-rate">
                            <Rating
                                readonly={true}
                                initialRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={farStar}/>}
                                fullSymbol={<FontAwesomeIcon icon={faStar}/>}
                            />
                        </div>

                        {/*<div className="row"><MDBRating data={[{choosed : true}]}/></div>*/}
                    </div>


                </div>
            // </div>

        )
    }
}