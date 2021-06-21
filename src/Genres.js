function Genres(props) {

    return (
        <div>
            <h1>Genres: {props.genres}</h1>
            <input
                name="genres"
                onChange={props.handleChange}
            ></input>
        </div>
    )
}

export default Genres;