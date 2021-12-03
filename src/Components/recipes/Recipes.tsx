import React,{useEffect, useState} from 'react'
import RecipeItem from '../recipe-item/RecipeItem'
import axios from 'axios';
import './Recipes.scss'
import ReactPaginate from 'react-paginate';
export default function Recipes() {

    const [recipes, setrecipes] = useState([])
    const [selectedPage, setselectedPage] = useState(0)
    const [totalCount, settotalCount] = useState(0)
    const handlePageClick = (e:any)=>{
        setselectedPage(e.selected)
    }
    useEffect(()=>{
        axios.get(`http://127.0.0.1:3000/recipes?offset=${selectedPage}`)
        .then((response: any) => {
            console.log(response)
            setrecipes(response.data.recipes)
            settotalCount(response.data.meta.total_count)
        })
    },[selectedPage])
    return (
            <main>
                <div className="recipes-container">
                    {recipes.map((recipe:any)=>{
                       return <RecipeItem recipe={recipe}></RecipeItem>
                    })}
                </div>

                <ReactPaginate
                className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalCount/10}
        previousLabel="< previous"
      />
            </main>
    )
}
