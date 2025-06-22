import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = 'https://jsonfakery.com/jobs/random/100';

const useFetchJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        let cancelToken = axios.CancelToken.source();
        setLoading(true);
        setError(null);

        axios.get(BASE_URL, {cancelToken: cancelToken.token})
        .then((res) => {
            setJobs(res.data);
            setLoading(false);
        })
        .catch((e) => {
            if (axios.isCancel(e)) return;
            setError(e);
            setLoading(false);
        });

        return () => {
            cancelToken.cancel();
        };
    }, []);

   

    return { jobs, loading, error };
}

export default useFetchJobs

// import { useReducer, useEffect } from "react";
// import axios from 'axios';

// const ACTIONS = {
//     MAKE_REQUEST: 'make-request',
//     GET_DATA: 'get-data',
//     ERROR: 'error'
// }



// // const reducer = (state, action) => {
// //     switch (action.type) {
// //         case ACTIONS.MAKE_REQUEST:
// //             return { loading: true, jobs: [] }
// //         case ACTIONS.GET_DATA:
// //             return { ...state, loading: false, jobs: action.payload.jobs }
// //         case ACTIONS.ERROR:
// //             return { ...state, loading: false, error: action.payload.error, jobs: [] }
// //         default:
// //             return state;
// //     }
// // }

// const useFetchJobs = (params, page) => {
//     const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

//     useEffect(() => {
//         const cancelToken = axios.CancelToken.source()
//         dispatch({ type: ACTIONS.MAKE_REQUEST })
//         axios.get(BASE_URL, {
//             cancelToken: cancelToken.token,
//             params: { markdown: true, page: page, ...params }
//         }).then(res => {
//             dispatch({ type: ACTIONS.GET_DATA, payload: {jobs: res.data } })
//         }).catch(e => {
//             if (axios.isCancel(e)) return
//             dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
//         })

//         return () => {
//             cancelToken.cancel()
//         }
//     }, [params, page])

//     return (state);
// }

// export default useFetchJobs

