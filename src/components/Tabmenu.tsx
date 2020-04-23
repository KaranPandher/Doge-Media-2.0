import React from 'react'
import { Tab } from 'semantic-ui-react'

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'olive',
//     'green',
//     'teal',
//     'blue',
//     'violet',
//     'purple',
//     'pink',
//     'brown',
//     'grey',
//   ]

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><h1>Tab 1 Content</h1>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur, arcu sit amet convallis gravida, velit libero tincidunt sem, viverra egestas augue magna ut odio. Nunc convallis ultricies dui aliquam ultrices. Fusce ultrices mi iaculis leo ornare vehicula. Duis elementum viverra felis. Suspendisse mollis lectus a vulputate porttitor. Pellentesque commodo libero vitae suscipit ultrices. In porttitor turpis non enim lacinia, et finibus metus blandit. Aliquam nisi nisl, egestas a sagittis vel, vehicula ac diam. Morbi pulvinar diam nec leo bibendum tempor. Vestibulum consectetur enim eget tincidunt vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec tellus ac leo vehicula rutrum. Praesent hendrerit bibendum turpis a posuere. In at orci eu elit lobortis euismod.
  </Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane><h1>Tab 2 Content</h1>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur, arcu sit amet convallis gravida, velit libero tincidunt sem, viverra egestas augue magna ut odio. Nunc convallis ultricies dui aliquam ultrices. Fusce ultrices mi iaculis leo ornare vehicula. Duis elementum viverra felis. Suspendisse mollis lectus a vulputate porttitor. Pellentesque commodo libero vitae suscipit ultrices. In porttitor turpis non enim lacinia, et finibus metus blandit. Aliquam nisi nisl, egestas a sagittis vel, vehicula ac diam. Morbi pulvinar diam nec leo bibendum tempor. Vestibulum consectetur enim eget tincidunt vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec tellus ac leo vehicula rutrum. Praesent hendrerit bibendum turpis a posuere. In at orci eu elit lobortis euismod.
  </Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane><h1>Tab 3 Content</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur, arcu sit amet convallis gravida, velit libero tincidunt sem, viverra egestas augue magna ut odio. Nunc convallis ultricies dui aliquam ultrices. Fusce ultrices mi iaculis leo ornare vehicula. Duis elementum viverra felis. Suspendisse mollis lectus a vulputate porttitor. Pellentesque commodo libero vitae suscipit ultrices. In porttitor turpis non enim lacinia, et finibus metus blandit. Aliquam nisi nisl, egestas a sagittis vel, vehicula ac diam. Morbi pulvinar diam nec leo bibendum tempor. Vestibulum consectetur enim eget tincidunt vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec tellus ac leo vehicula rutrum. Praesent hendrerit bibendum turpis a posuere. In at orci eu elit lobortis euismod.
  </Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
