import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./constants";

const chatSlice = createSlice({
    name: "chart",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if(state.messages.length > LIVE_CHAT_LIMIT) {
                state.messages.shift();
            }
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;