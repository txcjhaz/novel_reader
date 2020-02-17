import React from "react";

class Paragraph extends React.Component{
    render() {
        return (
            <p className="chapter-paragraph">
                &ensp;&ensp;&ensp;&ensp;{this.props.content}
            </p>
        );
    }
}

export default Paragraph;