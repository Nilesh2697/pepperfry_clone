import axios from "axios";
import {
    GET_DATA_REQUEST_ONE,
    GET_DATA_FAILURE_ONE,
    GET_DATA_REQUEST_TWO,
    GET_DATA_FAILURE_TWO,
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
    GET_DATA_SUCCESS_ONE,
    GET_DATA_SUCCESS_TWO,
    GET_DATA_SUCCESS_THREE,
    GET_DATA_SUCCESS_FOUR,
    GET_DATA_SUCCESS_FIVE,
    GET_DATA_SUCCESS_SIX,
    GET_DATA_SUCCESS_SEVEN,
    GET_DATA_SUCCESS_EIGHT,
    GET_DATA_REQUEST_COMPLETE,
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
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

const getDataRequestOne = () => {
    return {
        type: GET_DATA_REQUEST_ONE,
    };
};

const getDataFailureOne = () => {
    return {
        type: GET_DATA_FAILURE_ONE,
    };
};

const getDataRequestTwo = () => {
    return {
        type: GET_DATA_REQUEST_TWO,
    };
};

const getDataFailureTwo = () => {
    return {
        type: GET_DATA_FAILURE_TWO,
    };
};

const getDataRequestThree = () => {
    return {
        type: GET_DATA_REQUEST_THREE,
    };
};

const getDataFailureThree = () => {
    return {
        type: GET_DATA_FAILURE_THREE,
    };
};

const getDataRequestFour = () => {
    return {
        type: GET_DATA_REQUEST_FOUR,
    };
};

const getDataFailureFour = () => {
    return {
        type: GET_DATA_FAILURE_FOUR,
    };
};

const getDataRequestFive = () => {
    return {
        type: GET_DATA_REQUEST_FIVE,
    };
};

const getDataFailureFive = () => {
    return {
        type: GET_DATA_FAILURE_FIVE,
    };
};

const getDataRequestSix = () => {
    return {
        type: GET_DATA_REQUEST_SIX,
    };
};

const getDataFailureSix = () => {
    return {
        type: GET_DATA_FAILURE_SIX,
    };
};

const getDataRequestSeven = () => {
    return {
        type: GET_DATA_REQUEST_SEVEN,
    };
};

const getDataFailureSeven = () => {
    return {
        type: GET_DATA_FAILURE_SEVEN,
    };
};

const getDataRequestEight = () => {
    return {
        type: GET_DATA_REQUEST_EIGHT,
    };
};

const getDataFailureEight = () => {
    return {
        type: GET_DATA_FAILURE_EIGHT,
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
        // dispatch(getDataRequest());
        try {
            // const requestOne =
            one === null
                ? dispatch(getDataSuccessOne([]))
                : dispatch(getDataRequestOne()) &&
                  (await axios
                      .get(one)
                      .then((res) => dispatch(getDataSuccessOne(res.data)))
                      .catch(() => dispatch(getDataFailureOne())));

            two === null
                ? dispatch(getDataSuccessTwo([]))
                : dispatch(getDataRequestTwo()) &&
                  (await axios
                      .get(two)
                      .then((res) => dispatch(getDataSuccessTwo(res.data)))
                      .catch(() => dispatch(getDataFailureTwo())));

            three === null
                ? dispatch(getDataSuccessThree([]))
                : dispatch(getDataRequestThree()) &&
                  (await axios
                      .get(three)
                      .then((res) => dispatch(getDataSuccessThree(res.data)))
                      .catch(() => dispatch(getDataFailureThree())));

            four === null
                ? dispatch(getDataSuccessFour([]))
                : dispatch(getDataRequestFour()) &&
                  (await axios
                      .get(four)
                      .then((res) => dispatch(getDataSuccessFour(res.data)))
                      .catch(() => dispatch(getDataFailureFour())));

            five === null
                ? dispatch(getDataSuccessFive([]))
                : dispatch(getDataRequestFive()) &&
                  (await axios
                      .get(five)
                      .then((res) => dispatch(getDataSuccessFive(res.data)))
                      .catch(() => dispatch(getDataFailureFive())));

            six === null
                ? dispatch(getDataSuccessSix([]))
                : dispatch(getDataRequestSix()) &&
                  (await axios
                      .get(six)
                      .then((res) => dispatch(getDataSuccessSix(res.data)))
                      .catch(() => dispatch(getDataFailureSix())));

            seven === null
                ? dispatch(getDataSuccessSeven([]))
                : dispatch(getDataRequestSeven()) &&
                  (await axios
                      .get(seven)
                      .then((res) => dispatch(getDataSuccessSeven(res.data)))
                      .catch(() => dispatch(getDataFailureSeven())));

            eight === null
                ? dispatch(getDataSuccessEight([]))
                : dispatch(getDataRequestEight()) &&
                  (await axios
                      .get(eight)
                      .then((res) => dispatch(getDataSuccessEight(res.data)))
                      .catch(() => dispatch(getDataFailureEight())));

            // const requestTwo =
            //     two === null
            //         ? []
            //         : await axios.get(two).then((res) => res.data);
            // const requestThree =
            //     three === null
            //         ? []
            //         : await axios.get(three).then((res) => res.data);
            // const requestFour =
            //     four === null
            //         ? []
            //         : await axios.get(four).then((res) => res.data);
            // const requestFive =
            //     five === null
            //         ? []
            //         : await axios.get(five).then((res) => res.data);

            // const requestSix =
            //     six === null
            //         ? []
            //         : await axios.get(six).then((res) => res.data);
            // const requestSeven =
            //     seven === null
            //         ? []
            //         : await axios.get(seven).then((res) => res.data);

            // const requestEight =
            //     eight === null
            //         ? []
            //         : await axios.get(eight).then((res) => res.data);

            //You can console here to see all the requests like requestOne, requestTwo, requestThree, etc...

            // dispatch(getDataSuccessOne(requestOne));
            // dispatch(getDataSuccessTwo(requestTwo));
            // dispatch(getDataSuccessThree(requestThree));
            // dispatch(getDataSuccessFour(requestFour));
            // dispatch(getDataSuccessFive(requestFive));
            // dispatch(getDataSuccessSix(requestSix));
            // dispatch(getDataSuccessSeven(requestSeven));
            // dispatch(getDataSuccessEight(requestEight));
        } catch (err) {
            console.log(err);
            // dispatch(getDataFailure());
        }
    };
