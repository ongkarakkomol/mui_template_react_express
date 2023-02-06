// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    // openItem: ['customer'],
    // openItemCollapse: ['customer'],
    openItem: ['userInfo.info'],
    openItemCollapse: [],
    openComponent: 'buttons',
    drawerOpen: false,
    componentDrawerOpen: true
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.openItem = action.payload.openItem;
        },

        activeComponent(state, action) {
            state.openComponent = action.payload.openComponent;
        },

        openDrawer(state, action) {
            state.drawerOpen = action.payload.drawerOpen;
        },

        openComponentDrawer(state, action) {
            state.componentDrawerOpen = action.payload.componentDrawerOpen;
        },

        activeItemCollapse(state, action) {
            state.openItemCollapse = action.payload.openItemCollapse;
        }
    }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, activeItemCollapse } = menu.actions;
