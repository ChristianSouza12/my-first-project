import styled from "styled-components"
import Background from "../../assets/bg image2.svg"


export const Container = styled.div`

    background: url("${Background}");
    background-size : cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:42px;
    height: 100vh;
    


`
export const IMG = styled.img`

margin-top: 30px;

`


export const InputLabel = styled.p`

font-size: 18px;
font-weight: 700;
line-height: 22px;

text-align: left;
color: rgba(238, 238, 238, 1);
margin-left: 25px;


`
export const Input = styled.input`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
padding: 15px, 20px, 15px, 25px;
border-radius: 14px;
border: none;
outline: none;
padding-left: 25px;
font-size: 20px;
font-weight: 400;
line-height: 28px;
color: rgba(255, 255, 255, 1);
margin-bottom: 35px;



`
export const Button = styled.button`
width: 342px;
height: 74px;
font-weight: 700;
border-radius: 14px;
background: rgba(0, 0, 0, 0.8);
color:white;
border: none;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
gap:20px;
transition: .2s;
margin-top: 130px;

&:hover{
    opacity: .8;

}
&:active{
    opacity: .5;
}
`




