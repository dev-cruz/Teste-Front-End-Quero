const initialState = {
    data: [],
    modalFilters: {
        city: 'all',
        course: 'all',
        presential: true,
        remotely: true,
        price: 10000
    },
    isLoading: false,
    selectedScholarships: {}
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_CITY':
            return {
                ...state,
                modalFilters: {...state.modalFilters, city: action.city}
            }
        case 'UPDATE_COURSE':
            return {
                ...state,
                modalFilters: {...state.modalFilters, course: action.course}
            }
        case 'UPDATE_PRESENTIAL':
            return {
                ...state,
                modalFilters: {...state.modalFilters, presential: action.presential}
            }
        case 'UPDATE_REMOTELY':
            return {
                ...state,
                modalFilters: {...state.modalFilters, remotely: action.remotely}
            }
        case 'UPDATE_PRICE':
            return {
                ...state,
                modalFilters: {...state.modalFilters, price: action.price}
            }
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.data
            }
        case 'SET_ISLOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'RESET_STATE':
            return {
                ...initialState,
                data: state.data
            }
        default:
            return state;
    }
}