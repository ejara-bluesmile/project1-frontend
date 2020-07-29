import React from "react";

const TextArea = ({ name, label, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                className="form-control"
                id={name}
                rows="3">
                {label}
            </textarea>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
export default TextArea;