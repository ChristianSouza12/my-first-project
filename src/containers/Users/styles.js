import styled from "styled-components"
import Background from "../../assets/bg image.svg"



export const Container = styled.div`

    background: url("${Background}");
    background-size : cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:42px;
    height: 100%;
    min-height: 100vh;
    


`
export const IMG = styled.img`

margin-top: 30px;

`




export const Button = styled.button`
width: 342px;
height: 74px;
font-weight: 700;
border-radius: 14px;
background:transparent;
color:white;
border: 1px solid white;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
gap:20px;
transition: .2s;
margin-top: 120px;



&:hover{
    opacity: .8;

}
&:active{
    opacity: .5;



}

img{
    transform: rotateY(180deg);
}
`

export const User = styled.li`
display:flex;
justify-content: space-around;
height:58px;
align-items: center;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
border-radius: 14px;
outline: none;
border:none;
margin-top: 20px;



p{
    color: rgba(255, 255, 255, 1);
font-size: 20px;
font-weight: 400;
line-height: 28px;

}


button{
    background:none;
    border: none;
    cursor:pointer;
}




`
