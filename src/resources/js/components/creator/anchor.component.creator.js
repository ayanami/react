import React, { useState } from 'react';
import '../../../css/common/anchor.css';

export const createAnchor = ChildComponent => {
    return (props) => {

        const [disabled, setDisable] = useState(false);

        const handler = () => {
            setDisable(true);
            props.listener?.();
        }
        return (
            <a href={props.href}
                className={props?.className}
                onClick={handler.bind(this)}
                style={disabled ? { pointerEvents: "none" } : null}>
                <ChildComponent />
            </a>
        );
    }
}