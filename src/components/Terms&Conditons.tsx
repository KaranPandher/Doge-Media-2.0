import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalExampleShorthand = () => (
  <Modal
    trigger={<Button color="blue">Terms &amp; Conditons</Button>}
    header="Terms &#38; Conditions for Doge Media!"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus fermentum dolor, vitae porta mi pellentesque et. Etiam id iaculis neque. Proin vitae vulputate nibh, condimentum vehicula nulla. Integer nibh massa, aliquam vel sem eu, mollis volutpat nunc. Nam volutpat nisi quis metus fringilla, eget maximus leo euismod. Morbi luctus sit amet ante ac cursus. Proin pharetra nibh rutrum elit mollis, sit amet lobortis dolor auctor. Phasellus turpis libero, lacinia in sem id, rhoncus efficitur tortor. Donec molestie accumsan ornare. Vestibulum finibus euismod nisi, non vestibulum nulla lobortis vel. Curabitur in porta neque. Integer vitae tincidunt metus.

    Mauris at justo sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus rhoncus neque sapien, egestas varius diam vulputate nec. Nulla eget odio aliquam, mollis lectus sit amet, bibendum nisl. Nunc feugiat magna ac orci ullamcorper, vestibulum euismod mauris ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras convallis ipsum eget dui consectetur, eget eleifend dolor molestie. Nunc sit amet posuere ex. Fusce eget pharetra purus. Suspendisse potenti. In eleifend ex id nulla semper congue. Sed tincidunt ullamcorper neque id lacinia. Nulla efficitur imperdiet consectetur. Morbi rutrum vel orci nec malesuada.
    
    Maecenas non nunc nunc. Nulla facilisi. Cras a sem id metus vulputate ullamcorper vitae vel nisi. Suspendisse laoreet lorem ut dui tristique ultrices. Sed pellentesque, lorem vel ultricies pulvinar, risus est venenatis felis, vitae tempus velit tellus et velit. Sed tristique dictum leo, sed egestas ligula auctor non. Curabitur tempor dictum lectus, non sagittis urna scelerisque eu. Quisque mauris nulla, semper quis semper id, sodales ac ex. Donec suscipit eros sed urna semper sollicitudin. Donec sagittis elit risus, consectetur fermentum nulla egestas et. Etiam eros ex, feugiat vel imperdiet vitae, congue congue dui. Sed iaculis magna sit amet erat eleifend, eu rhoncus eros finibus. Morbi ultrices velit erat, ut semper lectus pretium in.
    
    Maecenas at nunc vitae sapien efficitur ultricies id eu arcu. Morbi nec elit maximus, rutrum lorem sed, ullamcorper magna. Aliquam malesuada sodales scelerisque. Morbi consequat velit ac tortor tempus porta. Cras iaculis turpis lacus, non euismod nunc porttitor vitae. Aliquam suscipit libero ac neque feugiat cursus. Pellentesque gravida feugiat posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque malesuada finibus purus eu consectetur. Nulla egestas nec felis quis convallis. Vestibulum luctus eros non velit vestibulum lacinia. Duis lobortis at turpis eget fringilla.
    
    Pellentesque ut leo a mi pulvinar aliquam vel vel sapien. Suspendisse tristique euismod sagittis. Nullam semper dignissim dapibus. Fusce pharetra tempor nisl, lobortis facilisis massa volutpat sed. In sit amet nibh quis elit aliquam maximus at ut massa. Pellentesque sapien velit, fermentum vel mattis non, convallis at tellus. Ut mattis tincidunt elementum. Nam nec velit bibendum, euismod tortor id, imperdiet nunc. Duis porta, eros vel luctus iaculis, nisl urna elementum nibh, ac ultricies magna erat vitae dolor. Nullam ornare risus id nulla sodales ultricies. In egestas eu purus a molestie. Phasellus consequat nisl sed tincidunt dignissim."
    actions={["Disagree", { key: "done", content: "Agree", positive: true }]}
  />
);

export default ModalExampleShorthand;
