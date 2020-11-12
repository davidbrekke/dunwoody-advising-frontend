import { FaCentercode } from 'react-icons/fa'
import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.primary ? 'var(--dun-red)' : 'var(--white)'};
    color: ${props => props.primary ? 'var(--white)' : 'var(--dun-red)'};
    font-size: 1em;
    margin: 1em;
    padding: .25em .75em;
    border: 2px solid var(--dun-red);
    border-radius: .35em;  
    cursor: pointer;
    transition: transform 200ms;
    &:hover {
        transform: scale(1.06);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
       background: ${props => props.primary ? 'var(--white)' : 'var(--dun-red)'};
        color: ${props => props.primary ? 'var(--dun-red)' : 'var(--white)'};
    }
`

export const IconBtn = styled.div`
    color: ${props => props.trash ? 'var(--dun-red)' : 'var(--white)'};
    border-radius: .5em;
    padding: .5em;
    margin: 2em 3em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1.5);
    transition: transform 200ms;
    &:hover {
        transform: scale(1.75);
        background: var(--clear);
    }
`

export const Logo = styled.img`
    height: 3em;
    cursor: pointer;
    margin: 2em 5em;
    transition: transform 200ms;   
    &:hover {
        transform: scale(1.05);
    }
`
export const LogNav = styled.img`
    height: 2.5em;
    cursor: pointer;
    padding: 2em 5em;
    border-radius: .5em;
    background: var(--dun-red);
    transition: transform 200ms;   
    &:hover {
        transform: scale(1.05);
    }
`

export const HeaderContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
`
export const HeaderNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Nav = styled.div`
    position: absolute;
    left: 1em;
    top: 1em;
    height: min-content;
    width: min-content;
    background: var(--whiteClear);
    border-radius: .5em;
`

export const NavItem = styled.div`
    color: var(--dun-red);
    border-radius: .5em;
    padding: 1em;
`

export const navStyles = {
    content : {
        top: '1em',
        left: '1em',
        width: 'min-content',
        height: 'min-content',
        borderRadius: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3)'
    },
    overlay: {
        background: 'var(--clear)'
    }
}
export const navLinkStyles = {
    color: 'var(--white)',
    background: 'var(--dun-red)',
    borderRadius: '.5em',
    padding: '1em 2em',
    textDecoration: 'none',
    text: '2em',
    margin: '1em',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, .3)'
}
export const landingLinkStyles = {
    textDecoration: 'none',
    color: 'var(--dun-red)',
    fontSize: '.75em'
}
export const modalStyles = {
    content : {
        margin: 'auto',
        top: 0, left: 0, bottom: 0, right: 0,
        minWidth: '50%',
        maxWidth: '75%',
        height: 'min-content',
        position: 'absolute',
        borderRadius: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3)'
    },
    overlay: {
        background: 'var(--clear)'
    }
}

export const Container = styled.div`
    background: white;
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: .75em;
`
export const Title = styled.h1`
    color: var(--dark-text);
    margin-bottom: 1em;
`
export const InputTitle = styled.p`
    color: var(--dark-text);
    margin-top: .5em;
`
export const Input = styled.input`
    border: solid 2px var(--dun-red);
    padding: 1em;
    margin: 1rem;
    border-radius: 5px;
    font-size: 16px;
    color: var(--dark-text);
    outline: none;
    transition: transform 200ms;   
    &:focus {
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
        transform: scale(1.02);
    }
`

export const TextAreaInput = styled.textarea`
    border: solid 2px var(--dun-red);
    background: white;
    padding: 1em;
    margin: 1rem;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    color: var(--dark-text);
    outline: none;
    transition: transform 200ms;   
    &:focus {
        transform: scale(1.02);
    }
`
export const Select = styled.select`
    margin: 1em;
    appearance: none;
    padding: .5em 1em;
    border: 2px solid var(--dun-red);
    font-size: 1em;
    cursor: pointer;
    outline: none;
    transition: transform 200ms;   
    &:focus {
        transform: scale(1.02);
    }
`
export const Option = styled.option`
    background: red;
`
export const Btn = styled.button`
    background: ${props => props.primary ? 'var(--dun-red)' : 'white'};
    color: ${props => props.primary ? 'white' : 'var(--dun-red)'};
    padding: .5rem 1.5rem;
    border: none;
    border-radius: .25rem;
    margin: .5rem;
    font-size: 1em;
    transition: transform 200ms;   
    cursor: pointer;
    &:hover {
        background: var(--dun-red-hover);
        transform: scale(1.05);
    }
`
export const BtnDel = styled.button`
    background: ${props => props.primary ? 'var(--dun-red)' : ''};
    color: ${props => props.primary ? 'white' : 'var(--dun-red)'};
    padding: .5rem 1rem;
    padding-bottom: .70em;
    border: none;
    border-radius: .25rem;
    margin: .5rem;
    font-size: 1em;
    transition: transform 200ms;   
    cursor: pointer;
    &:hover {
        background: var(--dun-red-hover);
        transform: scale(1.05);
    }
`
export const BtnDisable = styled.button`
    padding: .5rem 1.5rem;
    border: none;
    border-radius: .25rem;
    background: var(--dun-red-disabled);
    margin: .5rem;
    color: white;
    font-size: 1em;
`
export const AddCourseBtn = styled.div`
    color: green;
    border-radius: .25em;
    background: transparent;
    margin: 1em;
    padding-top: .26em;
    transform: scale(1.25);
    transition: transform 100ms;
    &:hover {
        cursor: pointer;
        transform: scale(1.5);
    }
`

export const EditCourseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const EditCourseTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CourseInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const CourseContainer = styled.div`
background: white;
padding: .25rem .5rem;
margin: .25em;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: .25em;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
transition: transform 100ms;
&:hover {
    cursor: pointer;
    transform: scale(1.06);
}
`

export const CourseBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;

`
export const CourseInfoContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const FooterLink = styled.a`
    text-decoration: none;
    margin: 1em 1.5em;
    color: white;
    cursor: pointer;
    transition: transform 100ms;
    &:hover {
        transform: scale(1.25);
}
`