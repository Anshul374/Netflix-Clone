import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

//So this is what happened below when we do this  
// instance.get("/foo-bar");
// https://api.themoviedb.org/3/foo-bar

export default instance;