import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const SmallCardImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallCardH4 = styled.h4 `
    margin-bottom: 15px;
`
const SmallCardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function SmallCard(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg src={ props.imagem } />
            <SmallCardDiv>
                <SmallCardH4>{ props.nome }</SmallCardH4>
                <p>{ props.descricao }</p>
            </SmallCardDiv>
        </SmallCardContainer>
    )
}

export default SmallCard;