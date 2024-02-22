import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationState } from 'interfaces/redux/Store.interface';

const initialState: LocationState = {
    latitude: null,
    longitude: null,
};

export const currentLocationSlice = createSlice({
    name: 'currentLocation',
    initialState,
    reducers: {
        setCurrentLocation(state, action: PayloadAction<LocationState>) {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const { setCurrentLocation } = currentLocationSlice.actions;
export default currentLocationSlice;
