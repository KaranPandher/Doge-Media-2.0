import React from 'react'
import { Label } from 'semantic-ui-react'

import stephane from '../img/ProfilePictures/stephane.jpg'
import karan from '../img/ProfilePictures/stephane.jpg'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img alt="stephane" src={stephane} />
      Stephane
      <Label.Detail>Podcaster</Label.Detail>
    </Label>
    <Label as='a' color='teal' image >
      <img alt="karan" src={karan} />
      Karan
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img alt="stephane" src={stephane} />
      Marvin
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
    <Label as='a' color='black' image>
      <img alt="stephane" src={stephane} />
      Marat
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default LabelExampleImage