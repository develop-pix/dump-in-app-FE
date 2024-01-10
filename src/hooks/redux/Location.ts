import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
    latitude: number;
    longitude: number;
}
const initialState: LocationState = {
    latitude: 37.564362,
    longitude: 126.977011,
};

export const CurrentLocationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCurrentLocation(state, action: PayloadAction<LocationState>) {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const { setCurrentLocation } = CurrentLocationSlice.actions;
export default CurrentLocationSlice;
