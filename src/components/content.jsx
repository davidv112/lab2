// Define a functional component called Content
const Content = () => {

    return (
        <div>
            {/* Main heading */}
            <h1>Hello World!</h1>

            {/* Subheading showing the current local time.
                new Date().toLocaleTimeString() gets the current time 
                in the user’s locale format. */}
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

// Export Content so it can be imported and used in other files (like App.js)
export default Content;
