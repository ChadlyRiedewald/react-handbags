import React from 'react';

function Tile({img, title, text}) {
    return (
        <section>
            <img src={img} alt='' />
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}

export default Tile;
