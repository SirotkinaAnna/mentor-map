import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        location: [],

    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        actionSearch(state, action) {
            state.location = ({
                ip: action.payload.ip,

                city: action.payload.location.city,
                region: action.payload.location.region,
                postalCode: action.payload.location.postalCode,


                timezone: action.payload.location.timezone,
                isp: action.payload.isp,
                lat: action.payload.location.lat,
                lng: action.payload.location.lng
            })


        },
        firstSearch(state, action) {
            state.location = ({
                lat: action.payload.latitude,
                lng: action.payload.longitude,
                city: action.payload.city,
                postalCode: action.payload.postal,
                region: action.payload.country_code,
                ip: action.payload.IPv4

            })
        }

    }
})

export const { changeSearchTerm, actionSearch, firstSearch } = searchSlice.actions;
export const SearchReducer = searchSlice.reducer;