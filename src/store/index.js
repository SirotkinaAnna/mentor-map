import { configureStore } from "@reduxjs/toolkit";
import { SearchReducer, changeSearchTerm, actionSearch, firstSearch } from "./searchSlice";

const store = configureStore({
    reducer: {
        search: SearchReducer
    }

})

export { store, changeSearchTerm, actionSearch, firstSearch };
