import { createSlice } from '@reduxjs/toolkit';

import { ReviewDetailState } from 'interfaces/redux/Store.interface';

const initialState: ReviewDetailState = {
    id: null,
    image: [],
    concept: [],
    isMine: false,
    isLiked: false,
    userNickname: null,
    createdAt: null,
    updatedAt: null,
    content: null,
    mainThumbnailImageUrl: null,
    date: null,
    frameColor: null,
    participants: 0,
    cameraShot: null,
    goodsAmount: null,
    curlAmount: null,
    isPublic: true,
    viewCount: 0,
    likeCount: 0,
    photoBoothBrandName: null,
    photoBoothName: null,
};

export const homeReviewDetailSlice = createSlice({
    name: 'homeReviewDetail',
    initialState,
    reducers: {
        setHomeReview(state, action) {
            state.id = action.payload.id;
            state.image = [...action.payload.image];
            state.concept = [...action.payload.concept];
            state.isMine = action.payload.isMine;
            state.isLiked = action.payload.isLiked;
            state.userNickname = action.payload.userNickname;
            state.content = action.payload.content;
            state.mainThumbnailImageUrl = action.payload.mainThumbnailImageUrl;
            state.date = action.payload.date;
            state.frameColor = action.payload.frameColor;
            state.participants = action.payload.participants;
            state.cameraShot = action.payload.cameraShot;
            state.goodsAmount = action.payload.goodsAmount;
            state.curlAmount = action.payload.curlAmount;
            state.likeCount = action.payload.likeCount;
            state.photoBoothBrandName = action.payload.photoBoothBrandName;
            state.photoBoothName = action.payload.photoBoothName;
        },
    },
});

export const { setHomeReview } = homeReviewDetailSlice.actions;

export default homeReviewDetailSlice.reducer;
