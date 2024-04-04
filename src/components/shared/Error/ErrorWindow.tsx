import React from "react";
// @ts-ignore
import sadCloud from "./../../../assets/imgs/sad-cloud-v2.png";
import './ErrorWindow.scss'

export const ErrorWindow = (props: { error: Error, onClose: () => void }) => {

    return (
        <div className={"shadow-background"}>
            <section className={'error-wrapper'}>
                <div className={'img-container'}>
                    <img src={sadCloud} alt={'error'}/>
                </div>
                <h2>Oops , something went wrong :(</h2>
                <p>Error message: {props.error.message}</p>
                <button onClick={props.onClose}>Try agrain!</button>
            </section>
        </div>
    )
}