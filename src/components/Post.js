import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

const Post = ( { post, deletePost, history } ) => {
    console.log(deletePost);
    const postJSX = post ? (
        <div className="post">
            <h4 className="center">
                {post.title}
            </h4>
            <p>
                {post.body}
            </p>
            <div className="center">
                <button className="btn grey" onClick={ () => { deletePost(post.id); history.push('/'); } }>
                    Delete
                </button>
            </div>
        </div>
    ) : (
            <div className="center">Loading post ...</div>
        );
    return (
        <div className="container">
            {postJSX}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.postId;
    console.log(state, id, state.posts.find(post => post.id === id));
    return {
        post: state.posts.find(post => post.id === id)
    }
};

/** 
 * dispatch é o método dispatch do store 
 * Retorna um objeto mapeando as funções que 
 *  são executadas para disparar eventos. A função 
 *  será encarregada por despachar a ação, que será 
 *  tratada pelo reducer
 *  
 * */
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            console.log('id to delete', id);
            dispatch(deletePost(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);