import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import clock from '../../assets/images/clock.png';
import serving from '../../assets/images/serving.png';
import comment from '../../assets/images/comment.png';
import foodPlaceHolder from '../../assets/images/food-placeholder.png';
import money from '../../assets/images/money.png'
import user from '../../assets/images/user.png'
import './Recipe.scss';
import axios from 'axios';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';


export default function Recipe() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState<any>(null)
    useEffect(() => {
        axios.get(`https://hidden-bayou-38352.herokuapp.com/recipes/${id}`)
            .then((response: any) => {
                setRecipe(response.data)
            })
    }, [id])

    return (
        <div className="recipe-container">
            <div className="basic-info">
                <h1>{recipe?.name}</h1>
                <h5>by {recipe?.author}</h5>
                <div className="data">
                    <div><img src={clock} /> &nbsp;{recipe?.total_time}(Prep: {recipe?.prep_time} + Cooking: {recipe?.cook_time})</div>
                    <div><img src={serving} /> &nbsp;{recipe?.people_quantity} Serv.</div>
                    <div>{recipe?.difficulty}</div>
                    <div><img src={money} /> &nbsp;{recipe?.budget}</div>
                    <div><img src={comment} /> &nbsp;{recipe?.comments?.length}</div>
                </div>
                <br />
                <Rate
                    count={5}
                    onChange={() => { }}
                    disabled={true}
                    allowHalf={true}
                    value={recipe?.rate}
                />
            </div>
            <div className="tags">
                {recipe?.tags.map((tag: any, key: any) => {
                    return (<div key={key} className="tag-item">
                        {tag.name}
                    </div>)
                })}

            </div>
            <div className="more-info">
                <div className="ingridents-steps">
                    <div>
                        <h3>Ingridents:</h3>
                        <ul>
                            {recipe?.ingridents?.map((ingrident: any, key: any) => {
                                return (<li key={key}>{ingrident.name}</li>)
                            })}
                        </ul>
                    </div>

                    {
                        recipe?.author_tip ? <div>
                            <h3>Author Tip:</h3>
                            <p>{recipe?.author_tip}</p>
                        </div> : null
                    }

                </div>
                <div className="recipe-image">
                    <img src={recipe?.image_url || foodPlaceHolder} />
                </div>
            </div>
            <h3>
                What people think:
            </h3>
            <div className="comments">
                {recipe?.comments.map((comment: any, key: any) => {
                    return (
                    <div key={key} className="comment-item">
                        <div className="image-name">
                            <img src={user} />
                            <p>Jhon{key}</p>
                        </div>
                        <div className='comment-text'>
                            <p>{comment.text}</p>
                        </div>
                    </div>)
                })}

            </div>
        </div>
    )
}
