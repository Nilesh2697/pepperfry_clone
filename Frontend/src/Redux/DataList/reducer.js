import {
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS_ONE,
    GET_DATA_SUCCESS_TWO,
    GET_DATA_SUCCESS_THREE,
    GET_DATA_SUCCESS_FOUR,
    GET_DATA_SUCCESS_FIVE,
    GET_DATA_REQUEST_COMPLETE,
    GET_DATA_SUCCESS_SIX,
    GET_DATA_SUCCESS_SEVEN,
    GET_DATA_SUCCESS_EIGHT,
} from "./actionTypes";

const initState = {
    dataListLoading: false,
    dataListError: false,
    dataListOne: [],
    dataListTwo: [],
    dataListThree: [],
    dataListFour: [],
    dataListFive: [],
    dataListSix: [],
    dataListSeven: [],
    dataListEight: [],
};

export const DataListReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                dataListLoading: true,
                dataListError: false,
            };
        }
        case GET_DATA_FAILURE: {
            return {
                ...state,
                dataListError: true,
            };
        }
        case GET_DATA_SUCCESS_ONE: {
            return {
                ...state,
                dataListError: false,
                dataListOne: payload,
            };
        }
        case GET_DATA_SUCCESS_TWO: {
            return {
                ...state,
                dataListError: false,
                dataListTwo: payload,
            };
        }
        case GET_DATA_SUCCESS_THREE: {
            return {
                ...state,
                dataListError: false,
                dataListThree: payload,
            };
        }
        case GET_DATA_SUCCESS_FOUR: {
            return {
                ...state,
                dataListError: false,
                dataListFour: payload,
            };
        }

        case GET_DATA_SUCCESS_FIVE: {
            return {
                ...state,
                dataListError: false,
                dataListFive: payload,
            };
        }

        case GET_DATA_SUCCESS_SIX: {
            return {
                ...state,
                dataListError: false,
                dataListSix: payload,
            };
        }
        case GET_DATA_SUCCESS_SEVEN: {
            return {
                ...state,
                dataListError: false,
                dataListSeven: payload,
            };
        }
        case GET_DATA_SUCCESS_EIGHT: {
            return {
                ...state,
                dataListError: false,
                dataListEight: payload,
            };
        }

        case GET_DATA_REQUEST_COMPLETE: {
            return {
                ...state,
                dataListLoading: false,
            };
        }

        default:
            return state;
    }
};
