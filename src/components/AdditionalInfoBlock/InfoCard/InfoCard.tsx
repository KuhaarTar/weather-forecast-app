import './InfoCard.scss'
import React from "react";

export const InfoCard = (props:{icon:string,value:string,tittle:string}) => {
    return (
        <div className={'info-card'}>
            <img src={props.icon} alt={'icon'}/>
            <div className={'text-info'}>
                <p>{props.tittle}</p>
                <p>
                    <b>{props.value}</b>
                </p>
            </div>
        </div>
    )
}