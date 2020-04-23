import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img alt="stephane" src='../img/selfie.jpg' />
      Stephane
      <Label.Detail>Podcaster</Label.Detail>
    </Label>
    <Label as='a' color='teal' image >
      <img alt="karan" src='../img/selfie.jpg' />
      Karan
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img alt="stephane" src='../img/selfie.jpg' />
      Marvin
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img alt="stephane" src='../img/selfie.jpg' />
      Marat
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default LabelExampleImage