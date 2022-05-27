import { type } from "os";
import React from "react";
import { text } from "stream/consumers";
import style from './style.module.scss';
export class Button extends React.Component < {text?: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void }
    > {
    render(){
        const { type = "button" ,text = "Button",onClick} = this.props;
        return (
            <button type={type} onClick={onClick} className={style.botao}>
                {text}
            </button>
        )
    }
}