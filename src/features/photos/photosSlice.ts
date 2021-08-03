import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

// TODO: Move somewhere safe?
const API_BASE = 'https://api.unsplash.com'
const API_KEY = 'gNbNocl6vqw3jVkpGJKQrqiDBQVFPGmYjUOM-qp6IgY'

export interface Photo {
    id: string;
    created_at: string;
    width: number;
    height: number;
    urls: PhotoUrls;
    alt_description: string;
    liked_by_user: boolean;
}

export interface PhotoUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

export interface PhotosState {
    status: 'idle' | 'loading' | 'failed';
    photos: Photo[];
}

const initialState: PhotosState = {
    status: 'idle',
    photos: []
}

export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async () => {
        try {
            const response = await fetch(`${API_BASE}/photos?client_id=${API_KEY}`)

            if (response.status === 200) {
                const data = response.json()

                return data
            }
        } catch (err) {
            console.log(err)

            throw err
        }
    }
)

export const photosSlice = createSlice({
    name: 'photos',
    initialState, 
    reducers: {like: (state, action: PayloadAction<string>) => {
        const photo = state.photos.find(photo => photo.id === action.payload)

        if (photo) {
            photo.liked_by_user = !photo.liked_by_user
        }
    }},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPhotos.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.status = 'idle'
            state.photos = action.payload
        })
    }
})

export const { like } = photosSlice.actions

export const selectLiked = (state: RootState) => state.photos.photos.filter(photo => photo.liked_by_user)

export default photosSlice.reducer