import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations'
import { logout } from '../auth/operations';

// Функция для обработки состояния ожидания (pending)
const handlePending = state => {
    state.isLoading = true;
};

// Функция для обработки ошибок (rejected)
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        // Обработка начала загрузки списка контактов
        builder

            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;// Записываем загруженные контакты в состояние
            })
            .addCase(fetchContacts.rejected, handleRejected)


            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(contact => contact.id !== action.payload.id)
                // console.log(action.payload)
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logout.fulfilled, (state) => {
                state.items = [];// Очищаем список контактов при выходе пользователя
                state.isLoading = false;
                state.error = null;
            })

    },
});




export const contactsReducer = contactsSlice.reducer;