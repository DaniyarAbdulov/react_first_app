let store = {
    _state : {
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
        }},
    getState(){
        return this._state;
    },
    callSubscriber() {
            console.log('hi')
}, 
    addPost() {
    let newPost = {
        id: 5, message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
},
    updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
},
    subscribe (observer) {
    this._callSubscriber = observer;
}};

export default store;