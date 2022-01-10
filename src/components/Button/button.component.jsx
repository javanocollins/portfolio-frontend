import React from 'react'
import styled from "styled-components"

const ButtonStyle = styled.button`
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) => props.hoverColor};
        transition: all .2s
    }
`

const Button = ({title, activeColor}) => {
    return (
        <ButtonStyle 
        className={`bg-gray-100 p-4 text-sm`}
        hoverColor={activeColor}
        >
            {title}
        </ButtonStyle>
    )
}

export default Button
