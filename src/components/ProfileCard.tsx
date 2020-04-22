import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Followers
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Followers'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default CardExampleCardProps