import styled from "styled-components";

const StyleHeader = styled.div `
display: none;
@media (min-width: 912px) {
    display: block;
}
`

export const SideBar = (props) => {
    return (
        <StyleHeader>
            <svg
                width="613"
                height="1080"
                viewBox="0 0 613 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                   d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={props.color}
                />
            </svg>
        </StyleHeader>
    )
}