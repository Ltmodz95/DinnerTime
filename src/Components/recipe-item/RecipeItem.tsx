import React from 'react'
import { Rating } from 'react-simple-star-rating';
import clock from '../../assets/images/clock.png';
import profile from '../../assets/images/profile.jpg';
import serving from '../../assets/images/serving.png';
import './RecipeItem.scss'
export default function RecipeItem() {
    return (
        <div className="recipe-item-container">
            <img className="recipe-img" src="https://assets.afcdn.com/recipe/20150901/17089_w420h344c1cx1500cy2250.jpg" />
            <h4>Chicken</h4>
            <Rating
                size={25}
                onClick={() => { }}
                readonly={true}
                ratingValue={3}
            />
            <p>Easy</p>
            <div className="time-serving">
                <div>
                    <img src={clock}/> 15 Mins.
                </div>
                <div>
                    <img src={serving}/> 3 Serv.
                </div>
            </div>

            <div className="author">
                <img src={profile}/>
                <div className="info">
                    <span className="name">mohamed</span>
                </div>
            </div>

            <div className="ingridients">
                <span><b>Ingridients</b></span>
                <span>2 Items</span>
            </div>

            <div className="ingridients-items">
                <div className="ingridient-item">
                    <div className="image"></div>
                    <span className="name"><b>Fool</b></span>
                </div>
                <div className="ingridient-item">
                    <div className="image"></div>
                    <span className="name"><b>Fool</b></span>
                </div>
                <div className="ingridient-item">
                    <div className="image"></div>
                    <span className="name"><b>Fool</b></span>
                </div>
                <div className="ingridient-item">
                    <div className="image"></div>
                    <span className="name"><b>Fool</b></span>
                </div>
                <div className="ingridient-item">
                    <div className="image"></div>
                    <span className="name"><b>Fool</b></span>
                </div>
            </div>
        </div>
    )
}
