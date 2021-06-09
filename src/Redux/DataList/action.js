import axios from "axios";
import {
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS_ONE,
    GET_DATA_SUCCESS_TWO,
    GET_DATA_SUCCESS_THREE,
    GET_DATA_SUCCESS_FOUR,
    GET_DATA_SUCCESS_FIVE,
    GET_DATA_REQUEST_COMPLETE,
} from "./actionTypes";

const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST,
    };
};

const getDataFailure = () => {
    return {
        type: GET_DATA_FAILURE,
    };
};

const getDataSuccessOne = (payload) => {
    return {
        type: GET_DATA_SUCCESS_ONE,
        payload: payload,
    };
};

const getDataSuccessTwo = (payload) => {
    return {
        type: GET_DATA_SUCCESS_TWO,
        payload: payload,
    };
};
const getDataSuccessThree = (payload) => {
    return {
        type: GET_DATA_SUCCESS_THREE,
        payload: payload,
    };
};

const getDataSuccessFour = (payload) => {
    return {
        type: GET_DATA_SUCCESS_FOUR,
        payload: payload,
    };
};

const getDataSuccessFive = (payload) => {
    return {
        type: GET_DATA_SUCCESS_FIVE,
        payload: payload,
    };
};

const getDataSuccessAll = () => {
    return {
        type: GET_DATA_REQUEST_COMPLETE,
    };
};

export const getData =
    (one = null, two = null, three = null, four = null, five = null) =>
    async (dispatch) => {
        dispatch(getDataRequest());
        try {
            const requestOne =
                one === null
                    ? []
                    : await axios.get(one).then((res) => res.data);
            const requestTwo =
                two === null
                    ? []
                    : await axios.get(two).then((res) => res.data);
            const requestThree =
                three === null
                    ? []
                    : await axios.get(three).then((res) => res.data);
            const requestFour =
                four === null
                    ? []
                    : await axios.get(four).then((res) => res.data);
            const requestFive =
                five === null
                    ? []
                    : await axios.get(five).then((res) => res.data);

            console.log(
                requestOne,
                requestTwo,
                requestThree,
                requestFour,
                requestFive,
            );
            dispatch(getDataSuccessOne(requestOne));
            dispatch(getDataSuccessTwo(requestTwo));
            dispatch(getDataSuccessThree(requestThree));
            dispatch(getDataSuccessFour(requestFour));
            dispatch(getDataSuccessFive(requestFive));
        } catch (err) {
            dispatch(getDataFailure());
        } finally {
            dispatch(getDataSuccessAll());
        }
    };
