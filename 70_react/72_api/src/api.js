import axios from 'axios'

// music

// const getMusicList = async () => {
//     dispatch({ type: "LOADING" });
//     try {
//         // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
//         const response = await axios.get("http://127.0.0.1:5000/musicList");
//         console.log(response);
//         dispatch({ type: "SUCCESS", data: response.data });
//     } catch (e) {
//         console.log(e);
//         dispatch({ type: "ERROR", error: e });
//     }
// };

export const getMusicList = async () => {
    const response = await axios.get("http://127.0.0.1:5000/musicList");
    return response.data;
};

// const getMusic = async () => {
//     dispatch({ type: "LOADING" });
//     try {
//         // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
//         const response = await axios.get(`http://127.0.0.1:5000/musicList/${id}`);
//         console.log(response);
//         dispatch({ type: "SUCCESS", data: response.data });
//     } catch (e) {
//         console.log(e);
//         dispatch({ type: "ERROR", error: e });
//     }
// };

export const getMusic = async ({ id }) => {
    const response = await axios.get(`http://127.0.0.1:5000/musicList/${id}`);
    return response.data;
};

// movie
export const getMovieList = async () => {
    const response = await axios.get("http://127.0.0.1:5000/movieList");
    return response.data;
}

export const getMovie = async ({ id }) => {
    const response = await axios.get(`http://127.0.0.1:5000/movieList/${id}`);
    return response.data;
}