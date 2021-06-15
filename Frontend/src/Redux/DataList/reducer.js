import {
    GET_DATA_SUCCESS_ONE,
    GET_DATA_SUCCESS_TWO,
    GET_DATA_SUCCESS_THREE,
    GET_DATA_SUCCESS_FOUR,
    GET_DATA_SUCCESS_FIVE,
    GET_DATA_SUCCESS_SIX,
    GET_DATA_SUCCESS_SEVEN,
    GET_DATA_SUCCESS_EIGHT,
    GET_DATA_REQUEST_ONE,
    GET_DATA_FAILURE_ONE,
    GET_DATA_FAILURE_TWO,
    GET_DATA_REQUEST_TWO,
    GET_DATA_REQUEST_THREE,
    GET_DATA_FAILURE_THREE,
    GET_DATA_REQUEST_FOUR,
    GET_DATA_FAILURE_FOUR,
    GET_DATA_REQUEST_FIVE,
    GET_DATA_FAILURE_FIVE,
    GET_DATA_REQUEST_SIX,
    GET_DATA_FAILURE_SIX,
    GET_DATA_REQUEST_SEVEN,
    GET_DATA_FAILURE_SEVEN,
    GET_DATA_REQUEST_EIGHT,
    GET_DATA_FAILURE_EIGHT,
} from "./actionTypes";

const initState = {
    dataListLoadingOne: false,
    dataListErrorOne: false,
    dataListLoadingTwo: false,
    dataListErrorTwo: false,
    dataListLoadingThree: false,
    dataListErrorThree: false,
    dataListLoadingFour: false,
    dataListErrorFour: false,
    dataListLoadingFive: false,
    dataListErrorFive: false,
    dataListLoadingSix: false,
    dataListErrorSix: false,
    dataListLoadingSeven: false,
    dataListErrorSeven: false,
    dataListLoadingEight: false,
    dataListErrorEight: false,
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
        case GET_DATA_REQUEST_ONE: {
            return {
                ...state,
                dataListLoadingOne: true,
                dataListErrorOne: false,
            };
        }
        case GET_DATA_FAILURE_ONE: {
            return {
                ...state,
                dataListLoadingOne: false,
                dataListErrorOne: true,
            };
        }

        case GET_DATA_REQUEST_TWO: {
            return {
                ...state,
                dataListLoadingTwo: true,
                dataListErrorTwo: false,
            };
        }
        case GET_DATA_FAILURE_TWO: {
            return {
                ...state,
                dataListLoadingTwo: false,
                dataListErrorTwo: true,
            };
        }

        case GET_DATA_REQUEST_THREE: {
            return {
                ...state,
                dataListLoadingThree: true,
                dataListErrorThree: false,
            };
        }
        case GET_DATA_FAILURE_THREE: {
            return {
                ...state,
                dataListLoadingThree: false,
                dataListErrorThree: true,
            };
        }

        case GET_DATA_REQUEST_FOUR: {
            return {
                ...state,
                dataListLoadingFour: true,
                dataListErrorFour: false,
            };
        }
        case GET_DATA_FAILURE_FOUR: {
            return {
                ...state,
                dataListLoadingFour: false,
                dataListErrorFour: true,
            };
        }

        case GET_DATA_REQUEST_FIVE: {
            return {
                ...state,
                dataListLoadingFive: true,
                dataListErrorFive: false,
            };
        }
        case GET_DATA_FAILURE_FIVE: {
            return {
                ...state,
                dataListLoadingFive: false,
                dataListErrorFive: true,
            };
        }

        case GET_DATA_REQUEST_SIX: {
            return {
                ...state,
                dataListLoadingSix: true,
                dataListErrorSix: false,
            };
        }
        case GET_DATA_FAILURE_SIX: {
            return {
                ...state,
                dataListLoadingSix: false,
                dataListErrorSix: true,
            };
        }

        case GET_DATA_REQUEST_SEVEN: {
            return {
                ...state,
                dataListLoadingSeven: true,
                dataListErrorSeven: false,
            };
        }
        case GET_DATA_FAILURE_SEVEN: {
            return {
                ...state,
                dataListLoadingSeven: false,
                dataListErrorSeven: true,
            };
        }
        case GET_DATA_REQUEST_EIGHT: {
            return {
                ...state,
                dataListLoadingEight: true,
                dataListErrorEight: false,
            };
        }
        case GET_DATA_FAILURE_EIGHT: {
            return {
                ...state,
                dataListLoadingEight: false,
                dataListErrorEight: true,
            };
        }
        case GET_DATA_SUCCESS_ONE: {
            return {
                ...state,
                dataListLoadingOne: false,
                dataListErrorOne: false,
                dataListOne: payload,
            };
        }
        case GET_DATA_SUCCESS_TWO: {
            return {
                ...state,
                dataListLoadingTwo: false,
                dataListErrorTwo: false,
                dataListTwo: payload,
            };
        }
        case GET_DATA_SUCCESS_THREE: {
            return {
                ...state,
                dataListLoadingThree: false,
                dataListErrorThree: false,
                dataListThree: payload,
            };
        }
        case GET_DATA_SUCCESS_FOUR: {
            return {
                ...state,
                dataListLoadingFour: false,
                dataListErrorFour: false,
                dataListFour: payload,
            };
        }

        case GET_DATA_SUCCESS_FIVE: {
            return {
                ...state,
                dataListLoadingFive: false,
                dataListErrorFive: false,
                dataListFive: payload,
            };
        }

        case GET_DATA_SUCCESS_SIX: {
            return {
                ...state,
                dataListLoadingSix: false,
                dataListErrorSix: false,
                dataListSix: payload,
            };
        }
        case GET_DATA_SUCCESS_SEVEN: {
            return {
                ...state,
                dataListLoadingSeven: false,
                dataListErrorSeven: false,
                dataListSeven: payload,
            };
        }
        case GET_DATA_SUCCESS_EIGHT: {
            return {
                ...state,
                dataListLoadingEight: false,
                dataListErrorEight: false,
                dataListEight: payload,
            };
        }

        default:
            return state;
    }
};
