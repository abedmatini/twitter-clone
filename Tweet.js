import React from "react"

const Tweet = ({ text, author, date }) => {
    // const text = 'THis is an example'
    return <div>
        
        <h3>{text.toUpperCase()}</h3>
        <h6>{author}</h6>
        <h6>{date}</h6>
    
    </div>
}

export default Tweet