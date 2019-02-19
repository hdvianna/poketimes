import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

import { connect } from 'react-redux';


const Home = ({posts}) => {
    console.log(posts);
    const postList = posts.length ? posts.map(post => {
        return <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
                <Link to={'/'.concat(post.id)}>
                    <span className="card-title red-text">
                        {post.title}
                    </span>
                </Link>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
    }) : (
            <div className="center">
                Sorry, no posts. =(...
            </div>
        );

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);