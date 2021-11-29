import React, { Children } from 'react'
import Header from '../Components/header/Header'
import './Layouts.scss'
export default function PaddedLayout(props: any) {
    return (
        <div className="padded-layout">
            <Header></Header>
            {props.children}
        </div>
    )
}
