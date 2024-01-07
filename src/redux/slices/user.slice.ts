import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {AxiosError} from "axios";
import {userService} from "../../services";

interface IState {
    users: IUser[];
}
const initialState: IState = {
    users: []
}

const getAll = createAsyncThunk<IUser[], void>(
    "userSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);
const createUser = createAsyncThunk<IUser, { user: IUser }>(
    "userSlice/createUser",
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.createUser(user)
            console.log(data);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
});

const {reducer: userReducer, actions} = slice;

const userActions = {
    ...actions,
    getAll,
    createUser
}

export {
    userReducer,
    userActions
};
