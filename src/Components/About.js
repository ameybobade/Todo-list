import React from 'react'

export const About = () => {
    let myStyles={
        minHeight:"85vh",
    }
    let hStyle={
        minHeight: "100%",
        fontSize:"30px",
        fontWeight:"bold"
    }
    let paraStyle={
        fontSize:"25px",
    }

    return (
        <div className="container my-4" style={myStyles}>
            <h2 style={hStyle} className="text-center">About Us</h2>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam.</p>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam.</p>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam.</p>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam.</p>
        </div>
    )
}
