import React from "react";
import { Icon, Item, Grid } from "semantic-ui-react";

import stephane from "../img/ProfilePictures/dog3.png";
import karan from "../img/ProfilePictures/dog2.png";
import marvin from "../img/ProfilePictures/dog5.png";
import marat from "../img/ProfilePictures/dog4.png";
import doge from "../img/ProfilePictures/dogeprofilepicture.png";

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
                Human: Stephane / Breed: German Shepherd Malamute / Hobby: <Icon name="trophy" color="yellow" /> YEG Fetch Champ
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                I can't believe i lost my humans ball at the park again! It's an
                orange ball that has the word "Step" marking on it! No idea what
                it means. My human said he won't get me another one till this is
                found! Please Re-Bark!
                <br />
                <br />
                #WhosAGoodDog #BarksUp #FetchLife #AtTheParkWithMyWoes
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
                Human: Karan / Breed: Pitbull / Hobby: Chew Toys Destroyer 
                <Icon name="football ball" color="blue" />
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
                <Icon color="green" name="plus" />
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
              <Item.Header
                as="a"
                href="../Profile-Marvin"
                style={{ maxWidth: 550 }}
              >
                Sniphersz
              </Item.Header>
              <Item.Meta style={{ maxWidth: 550 }}>
                Human: Marvin / Breed: Bichon Frise Poopdle Mix / Hobby: Paw Patroller 
                <Icon name='shield' color="green" />
                <Icon name='thumbs up outline' color="purple" />
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                Just another day on patrolling the house. Wondering if i'll be able to get a nap in today during my shift. Heard my human saying he's gonna go for a nap. I'm gonna sneak a nap in too...sshhh
                <br />
                <br />
                #NapTown #SleepingOnTheJob #BarksUp
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 2000 Votes
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
              <Item.Header
                as="a"
                href="../Profile-Marat"
                style={{ maxWidth: 550 }}
              >
                Goucho
              </Item.Header>
              <Item.Meta style={{ maxWidth: 550 }}>
                Human: Marat / Breed: Unkown Mix / Hobby: Barking at humans for no reason
                 <Icon name='talk' color="red" />
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                Some human came up to my door today and dropped of some package that had "Amazon". Wonder if my human finally ordered something for me. <Icon name='food' color="purple" />
                <br />
                <br />
                #WhoIAmKidding #Hungry #WoofWoof
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 150 Votes
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              as="a"
              href="../Profile-Doge"
              size="small"
              src={doge}
            />
          <Item.Content>
              <Item.Header
                as="a"
                href="../Profile-Doge"
                style={{ maxWidth: 550 }}
              >
                Doge
              </Item.Header>
              <Item.Meta style={{ maxWidth: 550 }}>
                Human: None / Breed: Shiba Inu / Hobby: Mining Dogecoin <Icon name='money' color="green"/> <Icon name='clock outline' color="blue"/>
              </Item.Meta>
              <Item.Content style={{ maxWidth: 550 }}>
                Thinking of getting into Dogecoin? Get in on the ground floor! Start mining Cryptocurrency today! <Icon name='money' color="purple" />
                <br />
                <br />
                #DollaDollaBills #Success #SuchMoney #SoGood
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" />
                <Icon color="red" name="minus" /> 150 Votes
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid>
    );
  }
}
