import React from 'react'
import './Blog.css'
import Section1 from './Section1'
import Section2 from './Section2'


export default function Blog() {
    return (
        <div className="Box">
            <div className='container m-10 p-0'>
                <div className="title p-5">
                    <a href="#">Home</a>
                </div>

                <div className="container-fluid d-flex gap-4 flex-wrap">
                    <div className="left-section ">  <Section1 /></div>
                    <div className="right-section "><Section2 /></div>
                </div>
            </div>
        </div>
    )
}
