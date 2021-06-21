function Cadence(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="cadence">
                    <h1>
                    What's your target running cadence?
                    </h1>
                    <h3>{props.cadence}</h3>
                </label>
                <input
                    id="cadence"
                    name="cadence"
                    type="number"
                    onChange={props.handleChange}
                    value={props.cadence}
                />
                <button>
                    Next
                </button>
            </form>
        </div>
    )
}

export default Cadence;