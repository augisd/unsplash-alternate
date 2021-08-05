import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// TODO: Move somewhere safe?
const API_BASE = 'https://api.unsplash.com'
const API_KEY = 'gNbNocl6vqw3jVkpGJKQrqiDBQVFPGmYjUOM-qp6IgY'

export interface PhotoDetailsType {
    id: string;
    created_at: string;
    description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    alt_description: string;
    user: {
        name: string;
        profile_image: {
            small: string;
            medium: string;
            large: string
        }
    };
    exif: {
        make: string;
        model: string;
        focal_length: string;
        aperture: string;
        exposure_time: string;
        iso: number;
    }
}

export interface PhotoDetailsState {
    status: 'idle' | 'loading' | 'failed';
    details: PhotoDetailsType | null;
}

const initialState: PhotoDetailsState = {
    status: 'idle',
    details: null
}

export const fetchPhoto = createAsyncThunk(
    'photos/fetchPhoto',
    async (id: string) => {
        const response = await fetch(`${API_BASE}/photos/${id}?client_id=${API_KEY}`)
        const data = response.json()

        return data
    })

export const photoDetailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPhoto.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPhoto.fulfilled, (state, action) => {
            state.details = action.payload
            state.status = 'idle'
        })        
    }
})

export default photoDetailsSlice.reducer;
