// stage 2  >> action and its return 2 things (Type, Payload)

export function movieList(){

    return{
        type : "MOVIE_LIST",
        payload : [
            {id:1, name : "Avengers"}, {id:2, name : "iron Man"}, {id:3, name : "Thor"},
        ]
    }
}