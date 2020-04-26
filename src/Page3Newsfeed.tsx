import * as React from "react";
import { RootState } from "./store";
import ItemExampleExtraContent from "./components/NewsFeedContent";
import MessageExampleList from "./components/ListMessage";
import { addPost, removePost } from "./store/newsfeed/action";
import { Post } from "./store/newsfeed/types";
import { connect } from "react-redux";
import { $CombinedState } from "redux";

// newsfeed

export interface Page3Props {
  ddPostsFromFeed: typeof addPost;
  removePostsFromFeed: typeof removePost;
  posts: Post[];
}

export class Page3 extends React.Component<Page3Props> {
  public render() {
    return (
      <div>
        <MessageExampleList />
        {this.props.posts.map((posts) => {
          return <p>posts</p>;
        })}
        <ItemExampleExtraContent />
      </div>
    );
  }
}

const mapStateToProps = ( state: RootState) => {
  return {
    posts: state.feed.posts
  }
}

export default connect(
  mapStateToProps,
  {addPost, removePost}
)(Page3);