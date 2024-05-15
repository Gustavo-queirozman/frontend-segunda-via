import React from "react";
function Button(props){
    return(
        <input type="submit" value={props.value} className={props.className}/>
    );
}
export default Button;
