import * as React from "react";
import { RootState } from "./store";
import ItemExampleExtraContent from "./components/NewsFeedContent";
import MessageExampleList from "./components/ListMessage";
import { addPost, removePost } from "./store/newsfeed/action";
import { Post } from "./store/newsfeed/types";
import { connect } from "react-redux";
import { Form, TextArea, Input } from "semantic-ui-react";
import { Fragment } from "react";

export interface Page3Props {
  ddPostsFromFeed: typeof addPost;
  removePostsFromFeed: typeof removePost;
  posts: Post[];
}

export class Page3 extends React.Component<Page3Props> {

  newBark(e: any) 
  {
    e.preventDefault();
  }

  public render() {
    return (
      <Fragment>
        <MessageExampleList />
        <h1>Welcome to the Doge Park</h1>
        <ItemExampleExtraContent />
        <Form onSubmit={this.newBark}>
          <TextArea placeholder="Tell us more" />
        </Form>
        <br />
        <Input type="submit" value="Bark" />
        {this.props.posts.map((posts) => {
          return;
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.feed.posts,
  };
};

export default connect(mapStateToProps, { addPost, removePost })(Page3);
