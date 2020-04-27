import React from "react";
import { Icon, Image, Item, Grid } from "semantic-ui-react";

import stephane from "../img/ProfilePictures/dog3.png";
import karan from "../img/ProfilePictures/dog2.png";
import marvin from "../img/ProfilePictures/dog5.png";
import marat from "../img/ProfilePictures/dog4.png";
import doge from "../img/ProfilePictures/dogeprofilepicture.png";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

export interface NewsFeedProps {}

export default class NewsFeedContent extends React.Component<NewsFeedProps> {
  render() {
    return (
      <Grid>
        <Item.Group>
          <br />
          <Item>
            <Item.Image
              as="a"
              href="../Profile-Stephane"
              size="small"
              src={stephane}
            />
            <Item.Content>
              <Item.Header
                as="a"
                href="../Profile-Stephane"
                style={{ maxWidth: 550 }}
              >
                Mishu
              </Item.Header>
              <Item.Meta style={{ maxWidth: 550 }}>
                Human: Stephane / Breed: German Shepherd Malamute / 2X{" "}
                <Icon name="trophy" color="yellow" /> YEG Fetch Champ
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                I can't believe i lost my owners ball at the park again! It's an
                orange ball that has the word "Step" marking on it! No idea what
                it means. My owner said he won't get me another one till this is
                found! Please Re-Bark!
                <br />
                <br />
                #WhosAGoodDog #BarksUp #FetchLife #AtTheParkWithMyWoes
                #DownWithCollars
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" />{" "}
                <Icon color="red" name="minus" /> 50 Votes
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              as="a"
              href="../Profile-Karan"
              size="small"
              src={karan}
            />
            <Item.Content>
              <Item.Header
                as="a"
                href="../Profile-Karan"
                style={{ maxWidth: 550 }}
              >
                Rosie
              </Item.Header>
              <Item.Meta style={{ maxWidth: 550 }}>
                Human: Karan / Breed: Pitbull / Destroyer of Chew Toys{" "}
                <Icon name="football ball" color="blue" />{" "}
                <Icon name="hand lizard outline" color="blue" />
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                Got a toy that needs chewing? Need a running partner? Look no
                futher! i'm your dog!
                <br />
                <br />
                #ChewToysDontStandAChance #BarksUp #FetchLife
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" />{" "}
                <Icon color="red" name="minus" /> 150 Votes
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              as="a"
              href="../Profile-Marvin"
              size="small"
              src={marvin}
            />

            <Item.Content>
              <Item.Header as="a" href="../Profile-Marvin">
                Marvin Incognito
              </Item.Header>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 300 Votes
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              as="a"
              href="../Profile-Marat"
              size="small"
              src={marat}
            />

            <Item.Content>
              <Item.Header as="a" href="../Profile-Marat">
                Marat Sochi
              </Item.Header>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 80 Votes
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image as="a" href="../Profile-Doge" size="small" src={doge} />

            <Item.Content>
              <Item.Header as="a" href="../Profile-Doge">
                Doge "The Logo"
              </Item.Header>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 8000 Votes
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid>
    );
  }
}
