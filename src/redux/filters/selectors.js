import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../../redux/contacts/selectors'

// используется для фильтрации списка контактов
export const selectNameFilter = state => state.filter.name;

// Фильтрует список контактов на основе значения фильтра
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter) || contact.number.includes(filter));
    }
);