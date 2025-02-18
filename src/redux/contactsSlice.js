import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
  items: [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   fetchInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchSuccess(state, action) {
  //     state.isLoading = false;
  //     state.isError = null;
  //     state.items = action.payload;
  //   },
  //   fetchError(state, action) {
  //     state.isLoading = false;
  //     state.isError = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { fetchInProgress, fetchSuccess, fetchError } =
//   contactsSlice.actions;
