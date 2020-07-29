import React, { Component } from 'react';
import Input from "./input.jsx";
import TextArea from './textArea.jsx';
class Form extends Component {
    state = {
        data: {},
        errors:{}
    };
      handleSubmit = e => {
        e.preventDefault();
        this.doSubmit();
      };
      handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
      };
    renderButton(label) {
        return (
            <button className= "btn btn-primary">
                {label}
            </button>
        )
    }

    renderInput(name, label, type="text") {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
    renderTextarea(name, label) {
        const { data, errors } = this.state;
        return (
            <TextArea
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
            
        );
    }
}
export default Form