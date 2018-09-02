import React from "react";

class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title"> The Weather Finder </h1>
                <h3 className="title-container__subtitle"> Please enter your City and Country to find out the Weather conditions. </h3>
            </div>   
        );
    }
}
export default Titles;