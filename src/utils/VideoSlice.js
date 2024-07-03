import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [],
        shorts: [],
        live: [],
    },
    reducers: {
        storeVideos : (state, action) => {
            state.videos = action.payload;
        },
        storeShorts : (state, action) => {
            state.shorts = action.payload;
        },
        storeLiveVideos : (state, action) => {
            state.live = action.payload;
        },
    },
});

export const { storeVideos, storeShorts, storeLiveVideos } = videoSlice.actions;
export default videoSlice.reducer;