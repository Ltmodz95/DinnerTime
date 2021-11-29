import React from 'react'
import RecipeItem from '../recipe-item/RecipeItem'
import './Recipes.scss'
export default function Recipes() {
    return (
            <main>
                <div className="recipes-container">
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                </div>
            </main>
    )
}
