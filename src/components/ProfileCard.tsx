import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import stephane from '../img/ProfilePictures/stephane.jpg'

const CardExampleCardProps = () => (
  <Card
    image= {stephane}
    header='Stephane Valentine'
    meta='"Wont Leave on a miss"'
    description='Stephane is a sound graphic designer living in Edmonton. Who enjoys playing basketball and petting random dogs.'
    extra={extra}
  />
)

const extra = (
  <div>
    <Icon name='user' />
    16 Followers
  </div>
)

export default CardExampleCardProps