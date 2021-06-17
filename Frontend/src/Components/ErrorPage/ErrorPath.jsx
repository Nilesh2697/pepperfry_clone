import React from 'react'
import styled from "styled-components"

const Errorbgd = styled.div`
    width: 100%;
    height: 500px;
    background-color: #F5F5F5;
    border: 1px solid #F5F5F5;
`
const Errtitle = styled.div`
    width: 60%;
    height: auto;
    margin: auto;
    text-align: center;
    margin-top: 2%;
`
const ImageBox = styled.div`
    width: 90%;
    height: 400px;
    margin: 2% auto;
    padding-bottom: 50px;
`

const ErrorPath = () => {
    return (
        <Errorbgd>
            <Errtitle>
                <h2>Not All Open Doors Lead To Paradise</h2>
                <strong>Looks like you've walked into a weird place.<br />This is probably not the page you were looking for.</strong>
                <ImageBox>
                    <img style={{width: "100%", height: "100%"}} src="https://ii1.pepperfry.com/media/wysiwyg/banners/404-new.svg" alt="error" />
                </ImageBox>
            </Errtitle>
        </Errorbgd>
    )
}

export {ErrorPath}
