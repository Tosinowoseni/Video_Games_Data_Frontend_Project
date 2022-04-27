import axios from "axios";

const StatsButton = (props) => {
    // ..handle SubmitEvent
    function handleSubmit(event) {
        event.preventDefault();
        props.getByName(props.gameName);
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">STATS</button>
        </form>
    );
};
export default StatsButton;