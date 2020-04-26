import React from "react";
import {Item, Icon} from "semantic-ui-react";
import Doge from '../img/ProfilePictures/dogeprofilepicture.png'

const description= [
  'is an Internet meme that became popular in 2013. The meme typically consists of a picture of a Shiba Inu dog accompanied by multicolored text in Comic Sans font in the foreground. The text, representing a kind of internal monologue, is deliberately written in a form of broken English.'
].join(' ')

const ItemCardDoge = () => (
    <Item.Group>
    <Item>
      <Item.Image size= 'medium' src = {Doge} alt = "Doge Logo" />
      <Item.Content>
        <Item.Header as='a'><h2>Cute Dog</h2></Item.Header>
        <p></p>
        <p>{extra}</p>
        <h4>(often /ˈdoʊdʒ/ DOHJ, /ˈdoʊɡ/ DOHG)</h4>
        <Item.Description>
          <p>{description}</p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
)

const extra = (
  <div>
    <Icon name='user' />
    23546 Followers
  </div>
)

export default ItemCardDoge

