import React from "react";

function FormField(props) {
    return (<div className="mt-8 mx-24">
        <label className="text-cinza text-sm">{props.label}:</label>
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
            onChange={props.handleChange}
            value={props.value}
        />
    </div>);
}

export default FormField;