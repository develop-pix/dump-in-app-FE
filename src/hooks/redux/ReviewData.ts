import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
interface ImageData {
    imageURL: string | undefined;
    imageName: string | undefined;
}
interface ReviewDataState {
    representativeImage: ImageData;
    image: ImageData[];
    description: string | null;
    branchID: number | null | undefined;
    date: Date | null;
    frameColor: string | null;
    party: number | null;
    cameraShot: string | null;
    hashtag: string[];
    tools: boolean | null;
    hairIron: boolean | null;
    publicOpen: boolean;
}

const initialState: ReviewDataState = {
    representativeImage: { imageURL: undefined, imageName: undefined },
    image: [],
    description: null,
    branchID: undefined,
    date: null,
    frameColor: null,
    party: null,
    cameraShot: null,
    hashtag: [],
    tools: null,
    hairIron: null,
    publicOpen: true,
};

export const ReviewDataSlice = createSlice({
    name: 'reviewData',
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
        setDescription(state, action: PayloadAction<string | null>) {
            state.description = action.payload;
        },
        setBranchID(state, action: PayloadAction<number | null | undefined>) {
            state.branchID = action.payload;
        },
        setDate(state, action: PayloadAction<Date | null>) {
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
            state.hashtag = action.payload;
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

export const { setRepresentativeImage } = ReviewDataSlice.actions;
export const { setImageClear } = ReviewDataSlice.actions;
export const { setRemoveImage } = ReviewDataSlice.actions;
export const { setImage } = ReviewDataSlice.actions;
export const { setDescription } = ReviewDataSlice.actions;
export const { setBranchID } = ReviewDataSlice.actions;
export const { setDate } = ReviewDataSlice.actions;
export const { setFrameColor } = ReviewDataSlice.actions;
export const { setParty } = ReviewDataSlice.actions;
export const { setCameraShot } = ReviewDataSlice.actions;
export const { setHashtag } = ReviewDataSlice.actions;
export const { setTools } = ReviewDataSlice.actions;
export const { setHairIron } = ReviewDataSlice.actions;
export const { setPublicOpen } = ReviewDataSlice.actions;
export default ReviewDataSlice;
