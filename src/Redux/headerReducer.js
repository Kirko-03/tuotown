import { createAction, createReducer} from '@reduxjs/toolkit'

const initialState = {
    menu:false
}

export const openCloseMenu = createAction('OPENCLOSEMENU')


export default createReducer(initialState,{
    [openCloseMenu]:function (state){
        state.menu = !state.menu
    }
})
console.log(openCloseMenu)

// Can still subscribe to the store

