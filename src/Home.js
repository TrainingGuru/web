import {Link} from "react-router-dom";

const styles = {
    container: {
        // add styles here as needed
    }
}

export const Home = () => {
    return (
        <div style={styles.container}>
            <Link to="/hometrainer">Go to Trainer Home</Link>

                home
        </div>
    )
}
