let rerenderEntireTree = () => {
    console.log('hi')
}
let state = {
    dialogsPage: {
        messages: [{ id: 1, message: "Hello Kid!" },
        { id: 2, message: "Where is Lamar?" },
        { id: 3, message: "Did you do it?" },],
        dialogs: [{ id: 1, name: "Michael" },
        { id: 2, name: "Trevor" },
        { id: 3, name: "Lester" },
        ],
    },
    profilePage: {
        posts: [
            { id: 1, message: "Hello world" },
            { id: 2, message: "My first app" },
            { id: 3, message: "Where's my God?" },
            {
                id: 4,
                message: "Once you're in the Hell. Only the Devil can help you out}",
            },
        ],
        newPostText: ' '
    },
}

export const addPost = () => {
    let newPost = {
        id: 5, message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
} 

export default state;