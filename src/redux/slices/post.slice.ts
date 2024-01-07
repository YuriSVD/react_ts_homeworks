import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces";
import {AxiosError} from "axios";
import {postService} from "../../services";

interface IState {
    posts: IPost[]
}

const initialState: IState = {
    posts: []
}

const getAll = createAsyncThunk<IPost[], void>(
    "postSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const createPost = createAsyncThunk<IPost, { post: IPost; }>(
    "postSlice/createPost",
    async ({post}, {rejectWithValue}) => {
        try {
            const {data} = await postService.createPost(post);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
})

const {reducer:postReducer, actions} = slice;

const postActions = {
    ...actions,
    getAll,
    createPost
};
export {postReducer, postActions};