import React from 'react'
import styled from "styled-components"

const Prodinfo = styled.div`
    width: 90%;
    height: 500px;
    border: 1px solid;
    margin: auto;
    display: flex
`

const Prodimage = styled.div`
    width: 45%;
    height: 300px;
    border: 1px solid;
    display: flex;
`

const Proddetails = styled.div`
    width: 55%;
    height: 500px;
    border: 1px solid;
`

const Prodimagebox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid;
    position: relative;
    z-Index: 0
`

const Prodimagebtnprev = styled.div`
    width: 5%;
    height: 50px;
    border: 1px solid;
    margin: auto;
    z-Index: 1;
    position: absolute;
    cursor: pointer;
    margin-top: 8%;
    text-align: center
`

const Prodimagebtnnext = styled.div`
    width: 5%;
    height: 50px;
    border: 1px solid;
    margin: auto;
    z-Index: 1;
    position: absolute;
    cursor: pointer;
    margin-left: 35.2%;
    margin-top: 8%;
    text-align: center
`

const Image = styled.image`
    width: 100%;
    height: 100%;
`

const ProductPage = () => {
    return (
        <Prodinfo>
            <Prodimage>
                <Prodimagebtnprev>prev</Prodimagebtnprev>
                <Prodimagebox>
                    <Image src="" alt="" />
                </Prodimagebox>
                <Prodimagebtnnext>next</Prodimagebtnnext>
            </Prodimage>
            <Proddetails>Dm</Proddetails>
        </Prodinfo>
    )
}

export {ProductPage}
