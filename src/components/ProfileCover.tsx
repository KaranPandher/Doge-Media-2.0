import React from "react";
import { Image, Segment, Responsive } from "semantic-ui-react";

const ImageExampleFluid = () => (
  <Segment.Group>
    <Responsive as={Segment} minWidth={768}>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        fluid
      />
      Visible only if display has <code>768px</code> width and higher
    </Responsive>
  </Segment.Group>
);

export default ImageExampleFluid;
