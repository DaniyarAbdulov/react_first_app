const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
        }
    },
    _callSubscriber() {
        console.log('hi')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};
export default store;  