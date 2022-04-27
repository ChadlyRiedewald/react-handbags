import React from 'react';
import './App.css';
import Button from './Button';
import imgOne from './assets/bag_1.png';
import imgTwo from './assets/bag_2.png';
import imgThree from './assets/bag_3.png';
import imgFour from './assets/bag_4.png';
import imgBrand from './assets/brand.png';
import imgOurStory from './assets/our_story.png';
import Product from './Product';
import Tile from './Tile';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name='to the collection' />
                <Button name='shop all bags' />
                <Button name='pre-orders' disable={true} />
            </nav>
            <main>
                <Product
                    span='Best seller'
                    img={imgOne}
                    productName='The handy bag'
                    price='€400,-'
                />
                <Product
                    span='Best seller'
                    img={imgTwo}
                    productName='The stylish bag'
                    price='€250,-'
                />
                <Product
                    span='New collection'
                    img={imgThree}
                    productName='The simple bag'
                    price='€300,-'
                />
                <Product
                    span='New collection'
                    img={imgFour}
                    productName='The trendy bag'
                    price='€150,-'
                />
            </main>
            <footer>
                <Tile
                    title='The Brand'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis nesciunt numquam optio animi? Enim sunt cum accusantium debitis alias.'
                />
                <Tile img={imgBrand} />
                <Tile img={imgOurStory} />
                <Tile
                    title='Our Story'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam velit, possimus similique, porro eligendi cupiditate omnis, assumenda earum nisi dignissimos commodi magni qui! Commodi, ratione perspiciatis neque sint vitae deserunt?'
                />
            </footer>
        </>
    );
}

export default App;
