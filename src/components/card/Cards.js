import React from 'react';
import { CardItem } from '..';
import './Cards.css';
import { img9, img2, img8, img4 } from '../../assets/';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic Destinations</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Island of Bali in a Private Cruise'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img8}
              text='Ride through the Saaharah Desert on a guided camel tour'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Play Football on Top of Mountains'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
