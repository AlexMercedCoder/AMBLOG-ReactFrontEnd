import React from 'react';
import './postscontainer.css';
import Posts from './posts';

export default class PostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          posts:[],
        };
      }

      componentDidMount() {
        fetch("https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                posts: result.items
              });
              console.log(this.state.posts);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              });
            }





  render(){
      return (
            <div>
                {this.state.posts.map(post => {return <Posts title={post.fields.blogTitle} content={post.fields.blogContent} key={post.sys.id}/>})}
            </div>
    )}
}
