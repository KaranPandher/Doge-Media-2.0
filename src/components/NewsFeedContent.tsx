import React from 'react';
import { Icon, Image, Item, Grid } from 'semantic-ui-react';

import stephane from '../img/ProfilePictures/stephane.jpg';
import karan from '../img/ProfilePictures/karan.jpg';
import marvin from '../img/ProfilePictures/marvin.png';
import marat from '../img/ProfilePictures/marat.jpg';
import doge from '../img/ProfilePictures/dogeprofilepicture.png';

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleExtraContent = () => (
  <Grid>
  <Item.Group>
  <h1>Your Newsfeed</h1>
    <Item>
      <Item.Image as='a' href="../Profile-Stephane" size='small' src={stephane} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Stephane">Stephane Apples</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 50 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Item.Image as='a' href="../Profile-Karan" size='small' src={karan} />

      <Item.Content>
        <Item.Header as='a'>Karan Father</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 150 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image as='a' href="../Profile-Marvin" size='small' src={marvin} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Marvin">Marvin Incognito</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 300 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image as='a' href="../Profile-Marat" size='small' src={marat} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Marat">Marat Sochi</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 80 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image as='a' href="../Profile-Doge" size='small' src={doge} />

      <Item.Content>
        <Item.Header as='a' href="../Profile-Doge">Doge</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='plus' />
          <Icon color='red' name='minus' /> 8000 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </Grid>
)

export default ItemExampleExtraContent