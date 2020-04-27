import React from "react";
import {Item, Icon} from "semantic-ui-react";
import Marvin from '../img/ProfilePictures/dog5.png'

const description= [
    'Mauris at justo sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus rhoncus neque sapien, egestas varius diam vulputate nec. Nulla eget odio aliquam, mollis lectus sit amet, bibendum nisl. Nunc feugiat magna ac orci ullamcorper, vestibulum euismod mauris ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras convallis ipsum eget dui consectetur, eget eleifend dolor molestie. Nunc sit amet posuere ex. Fusce eget pharetra purus. Suspendisse potenti. In eleifend ex id nulla semper congue. Sed tincidunt ullamcorper neque id lacinia. Nulla efficitur imperdiet consectetur. Morbi rutrum vel orci nec malesuada.'
].join(' ')

const ItemCardMarvin = () => (
    <Item.Group>
    <Item>
      <Item.Image size= 'medium' src = {Marvin} alt = "Marvin Logo" />

      <Item.Content>
        <Item.Header as='a'>Marvin Incognito</Item.Header>
        <p></p>
        <p>{extra}</p>
        <h4>Come visit me in the park!</h4>
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
    3122 Followers
  </div>
)

export default ItemCardMarvin

