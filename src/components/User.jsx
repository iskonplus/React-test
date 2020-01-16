import React from "react";

export const User = props => {
    return (
        <div className = "user_block_padding">
        <div className = "user_block">
            <div className = "user_data">
                <div>Name:</div>
                <div>{props.name}</div>
            </div>
            <div className = "user_data">
                <div>Age:</div>
                <div>{props.age}</div>
            </div>
            <div className = "user_data">
                <div>Sex:</div>
                <div>{props.sex}</div>
            </div>
        </div>
        </div>
    )
}