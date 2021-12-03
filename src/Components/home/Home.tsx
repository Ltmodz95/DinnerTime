import React, { useState } from 'react'
import './Home.scss'
import axios from 'axios';
import backgroundVideo from '../../assets/videos/background.mp4'
import { Link } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';
export default function Home() {

    const [recipes, setRecipes] = useState([])
    const [searched, setSearched] = useState(false)

    const handleSearchChange = (e: any) => {
        if(e.target.value != '')
        {
            axios.get(`https://hidden-bayou-38352.herokuapp.com/recipes/search?key=${e.target.value}`)
            .then((response:any) => {
                console.log(response)
                setRecipes(response.data)
                setSearched(true)
            })
        }
        else
        {
            setRecipes([])
            setSearched(false)
        }

    }

    return (
        <div className="home-container">
            <main>
                <h1>Dinner Time</h1>
                <div className="search-container">
                    <DebounceInput
                     minLength={3}
                     debounceTimeout={400}
                     onChange={handleSearchChange}
                    placeholder="Search for something yummy" />
                    <div className={`filterd-data ${searched ? 'display-search-results':''}`}>
                        {recipes.map((recipe: any, index) => {
                            return (<div className="item" key={index}>
                                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                            </div>)
                        })}
                    </div>
                </div>
                <div className="all-recipes"><Link to="/recipes">Show them all am so hungry!!</Link></div>
            </main>
            <video autoPlay loop muted>
                <source src={backgroundVideo}></source>
            </video>
        </div>
    )
}
