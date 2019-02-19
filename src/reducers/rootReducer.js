const initState = {
    posts: [
        {id: '1', title: 'Veniam nisi qui voluptate ipsum enim nulla Lorem.' },
        {id: '2', title: 'Veniam nisi qui voluptate ipsum enim nulla Lorem.' },
        {id: '3', title: 'Veniam nisi qui voluptate ipsum enim nulla Lorem.' }
    ]
};

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_POST') {
        let posts = state.posts.filter(post => post.id !== action.id);        
        return {
            ...state,
            posts: posts
        }
    }
    return state;
};

export default rootReducer;
