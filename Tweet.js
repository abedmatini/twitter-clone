import React from "react"
import { Card } from 'react-bootstrap'

const Tweet = ({ text, author, date }) => {
    // const text = 'THis is an example'
    return <div>
        <Card style={{ width: '50rem', margin: 'auto', marginBottom: '30px'}}>
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Body>{text}</Card.Body>
            </Card.Body>
        </Card>
    
    </div>
}

export default Tweet