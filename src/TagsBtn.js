import React from 'react'
import { Button } from 'react-bootstrap'
export default function TagsBtn(props) {
    return (
        <div>
            <Button className='px-2' variant="outline-danger">{props.text}</Button>
        </div>
    )
}
