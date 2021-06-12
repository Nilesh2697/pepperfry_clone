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
    GET_DATA_SUCCESS_SIX,
    GET_DATA_SUCCESS_SEVEN,
    GET_DATA_SUCCESS_EIGHT,
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

const getDataSuccessSix = (payload) => {
    return {
        type: GET_DATA_SUCCESS_SIX,
        payload: payload,
    };
};
const getDataSuccessSeven = (payload) => {
    return {
        type: GET_DATA_SUCCESS_SEVEN,
        payload: payload,
    };
};
const getDataSuccessEight = (payload) => {
    return {
        type: GET_DATA_SUCCESS_EIGHT,
        payload: payload,
    };
};

const getDataSuccessAll = () => {
    return {
        type: GET_DATA_REQUEST_COMPLETE,
    };
};

export const getData =
    (
        one = null,
        two = null,
        three = null,
        four = null,
        five = null,
        six = null,
        seven = null,
        eight = null,
    ) =>
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

            const requestSix =
                six === null
                    ? []
                    : await axios.get(six).then((res) => res.data);
            const requestSeven =
                seven === null
                    ? []
                    : await axios.get(seven).then((res) => res.data);

            const requestEight =
                eight === null
                    ? []
                    : await axios.get(eight).then((res) => res.data);

            //You can console here to see all the requests like requestOne, requestTwo, requestThree, etc...

            dispatch(getDataSuccessOne(requestOne));
            dispatch(getDataSuccessTwo(requestTwo));
            dispatch(getDataSuccessThree(requestThree));
            dispatch(getDataSuccessFour(requestFour));
            dispatch(getDataSuccessFive(requestFive));
            dispatch(getDataSuccessSix(requestSix));
            dispatch(getDataSuccessSeven(requestSeven));
            dispatch(getDataSuccessEight(requestEight));
        } catch (err) {
            console.log(err);
            dispatch(getDataFailure());
        } finally {
            dispatch(getDataSuccessAll());
        }
    };
