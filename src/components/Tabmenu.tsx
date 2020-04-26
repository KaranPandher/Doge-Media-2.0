import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  { menuItem: "Posts", pane: "Tab 1 Content Fusce fermentum at metus et venenatis. Curabitur lacinia posuere sapien vitae viverra. Maecenas dignissim molestie suscipit. Proin velit mauris, sollicitudin ut eros eget, laoreet egestas dolor. Vestibulum in ipsum mattis odio posuere pellentesque dictum nec lorem. Duis porta lectus diam, at vehicula mauris egestas vitae. Pellentesque id odio at augue molestie suscipit. Mauris quis nisi eleifend, convallis nibh ac, vestibulum mi. Proin euismod, odio vel convallis blandit, ligula odio ullamcorper augue, nec hendrerit nisl risus id odio. In vel tellus id enim maximus maximus nec eu ex. Quisque facilisis molestie eleifend. Nunc arcu diam, convallis ac venenatis in, pulvinar tincidunt erat. Etiam condimentum faucibus tristique" },

  { menuItem: "Followers", pane: "Tab 2 Content Fusce fermentum at metus et venenatis. Curabitur lacinia posuere sapien vitae viverra. Maecenas dignissim molestie suscipit. Proin velit mauris, sollicitudin ut eros eget, laoreet egestas dolor. Vestibulum in ipsum mattis odio posuere pellentesque dictum nec lorem. Duis porta lectus diam, at vehicula mauris egestas vitae. Pellentesque id odio at augue molestie suscipit. Mauris quis nisi eleifend, convallis nibh ac, vestibulum mi. Proin euismod, odio vel convallis blandit, ligula odio ullamcorper augue, nec hendrerit nisl risus id odio. In vel tellus id enim maximus maximus nec eu ex. Quisque facilisis molestie eleifend. Nunc arcu diam, convallis ac venenatis in, pulvinar tincidunt erat. Etiam condimentum faucibus tristique" },
  
  { menuItem: "Comments", pane: "Tab 3 Content Fusce fermentum at metus et venenatis. Curabitur lacinia posuere sapien vitae viverra. Maecenas dignissim molestie suscipit. Proin velit mauris, sollicitudin ut eros eget, laoreet egestas dolor. Vestibulum in ipsum mattis odio posuere pellentesque dictum nec lorem. Duis porta lectus diam, at vehicula mauris egestas vitae. Pellentesque id odio at augue molestie suscipit. Mauris quis nisi eleifend, convallis nibh ac, vestibulum mi. Proin euismod, odio vel convallis blandit, ligula odio ullamcorper augue, nec hendrerit nisl risus id odio. In vel tellus id enim maximus maximus nec eu ex. Quisque facilisis molestie eleifend. Nunc arcu diam, convallis ac venenatis in, pulvinar tincidunt erat. Etiam condimentum faucibus tristique" }
];

const TabExampleBasicAll = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabExampleBasicAll;
