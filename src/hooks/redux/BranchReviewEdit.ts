import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ImageData, ReviewDataState } from 'interfaces/redux/Store.interface';

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

export const BranchReviewEdit = createSlice({
    name: 'branchReviewEdit',
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

export const { setRepresentativeImage } = BranchReviewEdit.actions;
export const { setImageClear } = BranchReviewEdit.actions;
export const { setRemoveImage } = BranchReviewEdit.actions;
export const { setImage } = BranchReviewEdit.actions;
export const { setEnlargedImage } = BranchReviewEdit.actions;
export const { setDescription } = BranchReviewEdit.actions;
export const { setBranchID } = BranchReviewEdit.actions;
export const { setDate } = BranchReviewEdit.actions;
export const { setFrameColor } = BranchReviewEdit.actions;
export const { setParty } = BranchReviewEdit.actions;
export const { setCameraShot } = BranchReviewEdit.actions;
export const { setHashtag } = BranchReviewEdit.actions;
export const { setTools } = BranchReviewEdit.actions;
export const { setHairIron } = BranchReviewEdit.actions;
export const { setPublicOpen } = BranchReviewEdit.actions;
export default BranchReviewEdit;
