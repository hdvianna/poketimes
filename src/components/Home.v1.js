import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({
                posts: response.data.slice(0, 10)
            });
        });
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? posts.map( post => {
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
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default Home;