import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comments",
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, actions) => {
            state.comments.push({
                id: actions.payload.id,
                comments: [actions.payload.comments],
            });
        },
    }
})

export const { addComments } = commentSlice.actions;
export default commentSlice.reducer;