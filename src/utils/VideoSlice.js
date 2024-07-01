import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [],
    },
    reducers: {
        storeVideos : (state, action) => {
            state.videos = action.payload;
        },
    },
});

export const { storeVideos } = videoSlice.actions;
export default videoSlice.reducer;