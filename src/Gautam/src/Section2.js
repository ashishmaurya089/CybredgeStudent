import React from 'react'
import './Section2.css'
import { Button } from 'react-bootstrap'
import RecentPost from './RecentPost'
import icon from './assets/search_logo.png'
import TagsBtn from './TagsBtn'


export default function Section2() {
  return (
    <div className='section2 flex-wrap shadow-lg'>
      <h4 className='me-2 p-4'>Search</h4>
      <form action="#" className='formBox d-flex'>
        <input type="text" />
        <Button className='searchBtn rounded-start-0' variant="danger"><img className='w-100' src={icon} alt="error" /></Button>
      </form>
      <div className="categories">
        <h4 className='my-4'>Categories</h4>
        <div className='my-2'>General <span>(25)</span></div>
        <div className='my-2'>Lifestyle (12)</div>
        <div className='my-2'>Travel (5)</div>
        <div className='my-2'>Design (22)</div>
        <div className='my-2'>Creative (8)</div>
        <div className='my-2'>Education (14)</div>
      </div>
      <div className="recentPost"> 
        <div><RecentPost/></div>
      </div>
      <div className="tags">
        <h4>Tags</h4>
        <div className="tagsBtn d-flex flex-wrap ">
          <TagsBtn text={'App'}/>
          <TagsBtn text={'IT'}/>
          <TagsBtn text={'Business'}/>
          <TagsBtn text={'Mac'}/>
          <TagsBtn text={'Design'}/>
          <TagsBtn text={'Office'}/>
          <TagsBtn text={'Creative'}/>
          <TagsBtn text={'Studio'}/>
          <TagsBtn text={'Smart'}/>
          <TagsBtn text={'Tips'}/>
          <TagsBtn text={'Marketing'}/>
        </div>
      </div>
    </div>
  )
}

