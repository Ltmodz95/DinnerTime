import React from 'react'
import { Rating } from 'react-simple-star-rating';
import clock from '../../assets/images/clock.png';
import profile from '../../assets/images/profile.jpg';
import serving from '../../assets/images/serving.png';
import './RecipeItem.scss'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import foodPlaceHolder from '../../assets/images/food-placeholder.png';
import { Link } from 'react-router-dom';
export default function RecipeItem(props: any) {

    const { recipe } = props
    return (
        <div className="recipe-item-container">
            <img className="recipe-img"src={recipe?.image_url || foodPlaceHolder} />
            <h4 >{recipe.name}</h4>
            <Rate
                count={5}
                onChange={() => { }}
                disabled={true}
                allowHalf={true}
                value={recipe?.rate}
            />
            <p>{recipe.difficulty}</p>
            <div className="time-serving">
                <div>
                    <img src={clock} /> {recipe?.total_time}
                </div>
                <div>
                    <img src={serving} /> {recipe?.people_quantity}  Servs.
                </div>
            </div>

            <div className="author">
                <img src={profile} />
                <div className="info">
                    <span className="name">{recipe?.author}</span>
                </div>
            </div>

            <div className="ingridients">
                <span><b>Ingridients</b></span>
                <span>{recipe?.ingridents.length} &nbsp;Items</span>
            </div>

            <div className="ingridients-items">
                {recipe?.ingridents?.map((ingrident: any, key: any) => {
                    return (<div key={key} className="ingridient-item">
                        <div className="image"></div>
                        <span className="name"><b>{ingrident.name}</b></span>
                    </div>)
                })}
            </div>
            <Link className="read-more" to={`recipe/${recipe.id}`}>Read More</Link>
        </div>
    )
}
