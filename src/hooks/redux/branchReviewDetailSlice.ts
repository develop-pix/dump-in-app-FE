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
    photoBoothId: null,
};

export const branchReviewDetailSlice = createSlice({
    name: 'branchReviewDetail',
    initialState,
    reducers: {
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
            state.concept = [...action.payload];
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
        setPhotoBoothId(state, action: PayloadAction<string | null>) {
            state.photoBoothId = action.payload;
        },
    },
});

export const {
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
    setPhotoBoothId,
} = branchReviewDetailSlice.actions;

export default branchReviewDetailSlice;
