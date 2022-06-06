import { createSlice } from "@reduxjs/toolkit";

const postModalSlice = createSlice({
  name: "postModal",
  initialState: {
    isModalVisible: false,
    isPostEdit: false,
    post: {},
  },
  reducers: {
    openModal: (state) => {
      state.isModalVisible = true;
    },
    setPostEdit: (state, action) => {
      state.isPostEdit = action.payload.isEditing;
      state.post = action.payload.post;
      state.isModalVisible = !state.isModalVisible;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
      state.isPostEdit = false;
    },
    setPostText: (state, action) => {
      console.log("sate in setpost text", action.payload);
      state.post = action.payload;
    },
  },
});

export const { openModal, closeModal, setPostText, setPostEdit } =
  postModalSlice.actions;
export default postModalSlice.reducer;
