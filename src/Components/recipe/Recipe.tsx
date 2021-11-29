import React from 'react'
import { useParams } from 'react-router';
import clock from '../../assets/images/clock.png';
import serving from '../../assets/images/serving.png';
import comment from '../../assets/images/comment.png';
import './Recipe.scss';
import { Rating } from 'react-simple-star-rating';

export default function Recipe() {

    const { id } = useParams();

    return (
        <div className="recipe-container">
            <div className="basic-info">
                <h1>Agneau à l'abricot (recette turque)</h1>
                <div className="data">
                    <div><img src={clock}/> &nbsp;5 min</div>
                    <div><img src={serving}/> &nbsp;3 serv.</div>
                    <div>Easy</div>
                    <div><img src={comment}/> &nbsp;5</div>
                </div>
                <br/>
                <Rating
                size={25}
                onClick={() => { }}
                readonly={true}
                ratingValue={3}
            />
            </div>
            <div className="more-info">
                <div className="ingridents-steps">
                    <div>
                        <h3>Ingridents:</h3>
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                            <li>a</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Steps:</h3>
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                            <li>a</li>
                        </ul>
                    </div>
                </div>
                <div className="recipe-image">
                    <img src="https://assets.afcdn.com/recipe/20150901/17089_w420h344c1cx1500cy2250.jpg"/>
                </div>
            </div>
        </div>
    )
}
