import React from "react";

const TextArea = ({ name, label, error }) => {
    return (
        <div className="form-group">
            <textarea
                name={name}
                className="form-control"
                id={name}
                rows="3"
                placeholder={name}>
            </textarea>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
export default TextArea;