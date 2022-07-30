import React from "react";
import CGPAChart from '../subComponents/Cgpachart'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'

const Container = styled.div`
background-color: #FAE6FA;
width: 100%;
height:auto;
padding-bottom: 5rem;
`
const MarksComponent = ()=>{

    return(
        <>
        <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
            <CGPAChart />
        </Container>
        </>
    )
}

export default MarksComponent;