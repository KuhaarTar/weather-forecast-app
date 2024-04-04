import '../AdditionalContentWrapper/AdditionalContentWrapper.scss'
import React from "react";
import {ChildrenProps} from "../../../models/appTypes";

export const AdditionalContentWrapper = (props: ChildrenProps) => {
    return (
        <div className={'additional-content'}>
            {props.children}
        </div>
    )
}