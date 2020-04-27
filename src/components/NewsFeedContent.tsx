import React from "react";
import { Icon, Item, Grid } from "semantic-ui-react";

import stephane from "../img/ProfilePictures/dog3.png";
import karan from "../img/ProfilePictures/dog2.png";
import marvin from "../img/ProfilePictures/dog5.png";
import marat from "../img/ProfilePictures/dog4.png";
import doge from "../img/ProfilePictures/dogeprofilepicture.png";

export interface NewsFeedProps {
}

export interface NewsFeedState {
  vote: number,
  voteTwo: number,
  voteThree: number,
  voteFour: number,
  voteFive: number
}


export default class NewsFeedContent extends React.Component<NewsFeedProps, NewsFeedState> {
  constructor(props: NewsFeedState){
    super(props);
    this.state = {
      vote: 500,
      voteTwo: 687,
      voteThree: 1132,
      voteFour: 984,
      voteFive: 1319
    };
  }

  upVote = () => {
    this.setState({ vote: this.state.vote + 1});
  }
  upVoteTwo = () => {
    this.setState({ voteTwo: this.state.voteTwo + 1});
  }
  upVoteThree = () => {
    this.setState({ voteThree: this.state.voteThree + 1});
  }
  upVoteFour = () => {
    this.setState({ voteFour: this.state.voteFour + 1});
  }
  upVoteFive = () => {
    this.setState({ voteFive: this.state.voteFive + 1});
  }

  downVote = () => {
    this.setState({ vote: this.state.vote - 1});
  }
  downVoteTwo = () => {
    this.setState({ voteTwo: this.state.voteTwo - 1});
  }
  downVoteThree = () => {
    this.setState({ voteThree: this.state.voteThree - 1});
  }
  downVoteFour = () => {
    this.setState({ voteFour: this.state.voteFour - 1});
  }
  downVoteFive = () => {
    this.setState({ voteFive: this.state.voteFive - 1});
  }

  render() {
    return (
      <Grid className = "NewsFeedcss">
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
                <Icon color="green" name="plus" onClick={this.upVote} />{" "}
                <Icon color="red" name="minus" onClick={this.downVote} /> {this.state.vote} Paws 
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
                #ChewToysDontStandAChance #BarksUp #WhatMakesAGoodDog
              </Item.Content>
              <Item.Extra style={{ maxWidth: 550 }}>
                <Icon color="blue" name="food" />
                Treats <Icon color="blue" name="headphones" />
                Re-Bark! <br />
                <Icon color="green" name="plus" onClick={this.upVoteTwo}/>
                <Icon color="red" name="minus" onClick={this.downVoteTwo}/> {this.state.voteTwo} Paws
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
                <Icon color="green" name="plus" onClick={this.upVoteThree}/>
                <Icon color="red" name="minus" onClick={this.upVoteThree}/> {this.state.voteThree} Paws
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
                <Icon color="green" name="plus" onClick={this.upVoteFour}/>
                <Icon color="red" name="minus" onClick={this.upVoteFour}/> {this.state.voteFour} Paws
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
                <Icon color="green" name="plus" onClick={this.upVoteFive}/>
                <Icon color="red" name="minus" onClick={this.upVoteFive}/> {this.state.voteFive} Paws
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid>
    );
  }
}
