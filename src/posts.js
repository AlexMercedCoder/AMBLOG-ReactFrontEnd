import React from 'react';
import './posts.css';

export default class Posts extends React.Component {

  render(){
      return (
            <div className="post">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
    )}
}
