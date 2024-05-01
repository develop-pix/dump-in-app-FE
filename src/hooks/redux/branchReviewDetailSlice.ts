import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ConceptData, ReviewDetailState, ReviewImageData } from 'interfaces/redux/Store.interface';

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

export const branchReviewDetailSlice = createSlice({
    name: 'branchReviewDetail',
    initialState,
    reducers: {
        setReview(state, action) {
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
        setReviewID(state, action: PayloadAction<number | null>) {
            state.id = action.payload;
        },
        setImage(state, action: PayloadAction<ReviewImageData[]>) {
            state.image = [...action.payload];
        },
        setImageClear(state) {
            state.image = [];
        },
        setConcept(state, action: PayloadAction<ConceptData[]>) {
            state.concept = [...state.concept, ...action.payload];
        },
        setConceptClear(state) {
            state.concept = [];
        },
        setIsMine(state, action: PayloadAction<boolean>) {
            state.isMine = action.payload;
        },
        setIsLiked(state, action: PayloadAction<boolean>) {
            state.isLiked = action.payload;
        },
        setUserNickname(state, action: PayloadAction<string | null>) {
            state.userNickname = action.payload;
        },
        setContent(state, action: PayloadAction<string | null>) {
            state.content = action.payload;
        },
        setMainThumbnailImageUrl(state, action: PayloadAction<string | null>) {
            state.mainThumbnailImageUrl = action.payload;
        },
        setDate(state, action: PayloadAction<string | null>) {
            state.date = action.payload;
        },
        setFrameColor(state, action: PayloadAction<string | null>) {
            state.frameColor = action.payload;
        },
        setParticipants(state, action: PayloadAction<number>) {
            state.participants = action.payload;
        },
        setCameraShot(state, action: PayloadAction<string | null>) {
            state.cameraShot = action.payload;
        },
        setGoodsAmount(state, action: PayloadAction<boolean | null>) {
            state.goodsAmount = action.payload;
        },
        setCurlAmount(state, action: PayloadAction<boolean | null>) {
            state.curlAmount = action.payload;
        },
        setLikeCount(state, action: PayloadAction<number>) {
            state.likeCount = action.payload;
        },
    },
});

export const {
    setReview,
    setReviewID,
    setImage,
    setImageClear,
    setConcept,
    setConceptClear,
    setIsMine,
    setIsLiked,
    setUserNickname,
    setContent,
    setMainThumbnailImageUrl,
    setDate,
    setFrameColor,
    setParticipants,
    setCameraShot,
    setGoodsAmount,
    setCurlAmount,
    setLikeCount,
} = branchReviewDetailSlice.actions;

export default branchReviewDetailSlice.reducer;
