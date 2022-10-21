import styled from "styled-components";

export const MovieDetaileContainer = styled.div`
// width: 100%;
// align-items: center;
// justify-content: center;
// text-align: center;
display: block;
flex-direction: column;
`

export const HeaderContainer = styled.div `
display: flex;

@media (max-width: 840px){
    display: flex;
    flex-direction: column;
}
`

export const ImgMovieDetailed = styled.img`
width: 400px;
display: flex;
// position: relative;
padding: 25px;
`

export const Detailes = styled.div `
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 25px;
padding: 20px;
font-size: 18px;
`

export const H3 = styled.h3`
display: flex;
`

export const H2 = styled.h2`
margin-top: 20px;
`

export const ImgPoster = styled.img`
width: 200px;
`

export const MovieCrewCard = styled.div`
color: #FFF;
align-items: center;
justify-content: center;
padding: 10px;
margin: 15px;
text-align: center;
`

export const InformationContainer = styled.div`
background: #DFDFDF;
`
export const MovieCrew = styled.div`
display: flex;
flex-wrap: wrap;
`

export const MovieCastCard = styled.div`
color: #000;
align-items: center;
justify-content: center;
background: #FFF;
padding: 10px;
margin: 15px;
text-align: center;
`

export const MovieCastContainer = styled.div`
display: flex;
overflow-y: scroll;
`