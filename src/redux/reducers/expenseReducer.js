import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
        updateExpense: (state, action) => {
            const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
            if (index !== -1) {
                state.expenses[index] = action.payload;
            }
        },
    },
});

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
