import { createSlice } from '@reduxjs/toolkit';

import { ImageData, ReviewDataState } from 'interfaces/redux/Store.interface';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ReviewDataState = {
    representativeImage: { imageURL: undefined, imageName: undefined },
    image: [],
    enlargedImage: { imageURL: undefined, imageName: undefined },
    description: null,
    branchID: undefined,
    date: null,
    frameColor: null,
    party: null,
    cameraShot: null,
    concept: [],
    tools: null,
    hairIron: null,
    publicOpen: true,
};

export const ReviewNewSlice = createSlice({
    name: 'reviewNew',
    initialState,
    reducers: {
        setRepresentativeImage(state, action: PayloadAction<ImageData>) {
            state.representativeImage.imageURL = action.payload.imageURL;
            state.representativeImage.imageName = action.payload.imageName;
        },
        setImage(state, action: PayloadAction<ImageData[]>) {
            state.image = [...state.image, ...action.payload];
        },
        setRemoveImage(state, action: PayloadAction<ImageData>) {
            state.image = state.image.filter(imageData => imageData.imageURL !== action.payload.imageURL);
        },
        setImageClear(state) {
            state.image = [];
        },
        setEnlargedImage(state, action: PayloadAction<ImageData>) {
            state.enlargedImage.imageURL = action.payload.imageURL;
            state.enlargedImage.imageName = action.payload.imageName;
        },
        setDescription(state, action: PayloadAction<string | null>) {
            state.description = action.payload;
        },
        setBranchID(state, action: PayloadAction<string | undefined>) {
            state.branchID = action.payload;
        },
        setDate(state, action: PayloadAction<Date | string | null>) {
            state.date = action.payload;
        },
        setFrameColor(state, action: PayloadAction<string | null>) {
            state.frameColor = action.payload;
        },
        setParty(state, action: PayloadAction<number | null>) {
            state.party = action.payload;
        },
        setCameraShot(state, action: PayloadAction<string | null>) {
            state.cameraShot = action.payload;
        },
        setHashtag(state, action: PayloadAction<string[]>) {
            state.concept = action.payload;
        },
        setTools(state, action: PayloadAction<boolean | null>) {
            state.tools = action.payload;
        },
        setHairIron(state, action: PayloadAction<boolean | null>) {
            state.hairIron = action.payload;
        },
        setPublicOpen(state, action: PayloadAction<boolean>) {
            state.publicOpen = action.payload;
        },
    },
});

export const { setRepresentativeImage } = ReviewNewSlice.actions;
export const { setImageClear } = ReviewNewSlice.actions;
export const { setRemoveImage } = ReviewNewSlice.actions;
export const { setImage } = ReviewNewSlice.actions;
export const { setEnlargedImage } = ReviewNewSlice.actions;
export const { setDescription } = ReviewNewSlice.actions;
export const { setBranchID } = ReviewNewSlice.actions;
export const { setDate } = ReviewNewSlice.actions;
export const { setFrameColor } = ReviewNewSlice.actions;
export const { setParty } = ReviewNewSlice.actions;
export const { setCameraShot } = ReviewNewSlice.actions;
export const { setHashtag } = ReviewNewSlice.actions;
export const { setTools } = ReviewNewSlice.actions;
export const { setHairIron } = ReviewNewSlice.actions;
export const { setPublicOpen } = ReviewNewSlice.actions;
export default ReviewNewSlice;
