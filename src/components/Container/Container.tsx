import './Container.scss'
import React from "react";
import {ChildrenProps} from "../../models/appTypes";

const Container = (props: ChildrenProps) => {
    return (
        <div className={'blocks-container'}>
            {props.children}
        </div>
    )
}

export default Container