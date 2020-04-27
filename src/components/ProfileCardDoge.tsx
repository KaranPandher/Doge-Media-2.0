import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
// import stephane from '../img/ProfilePictures/stephane.jpg'
import doge from '../img/ProfilePictures/dogeprofilepicture.png'

const CardExampleCardProps = () => (
  <Card 
    image= {doge}
    header='Doge'
    meta='(often /ˈdoʊdʒ/ DOHJ, /ˈdoʊɡ/ DOHG)'
    description='is an Internet meme that became popular in 2013. The meme typically consists of a picture of a Shiba Inu dog accompanied by multicolored text in Comic Sans font in the foreground. The text, representing a kind of internal monologue, is deliberately written in a form of broken English.'
    extra={extra}
  />
)

const extra = (
  <div>
    <Icon name='user' />
    1600 Followers
  </div>
)

export default CardExampleCardProps