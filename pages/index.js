import { LobotomizedContainer } from '../components/atoms/container'
import Grid from '../components/atoms/grid'
import { Heading1 } from '../components/atoms/headings'
import Toolcard from '../components/molecules/toolcard'
import { LinkExternal } from '../components/atoms/link'
import Textfield from '../components/atoms/textfield'
import styled from 'styled-components'
import { useState } from 'react'
import Seo from '../components/atoms/seo'

const SearchboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: flex-end;

    @media (max-width: 480px){
        justify-content: center;
        margin-bottom: var(--sp-500);
    }
`

/* List of tools */
const toolsData = [
    {
        name: 'Fluid-Modular Type Scale Generator',
        description: 'A generator to quickly create a boilerplate CSS stylesheet to implement the Fluid-Modular type scale in your project.',
        url: '/fluid-modular-type-scale-generator'
    }
]

export default function Index() {
    /* Searchbox states */
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Seo title="Tools by Sohail" description="This is the homepage of 'Tools by Sohail', a site housing tools to aid in development." url={`https://${process.env.NEXT_PUBLIC_APP_ORIGIN}/`} keywords="dev tools, developer tools, open source tools, frontend tools, frontend, sohail saha, captain woof, captain-woof"/>
            <LobotomizedContainer>
                <Heading1 style={{ margin: '0 0 0 1rem', userSelect: 'none' }}>
                    Tools
                </Heading1>
                <p style={{ marginLeft: '1rem' }}>Below is a collection of tools I created. Almost every tool I make will be accompanied by <LinkExternal style={{ fontWeight: '600' }} href="https://sohail-saha.in/blog/">a blog post.</LinkExternal></p>
                <p style={{ marginLeft: '1rem' }}>Feel free to use any of them for your work.</p>
                <SearchboxWrapper>
                    <Textfield label="Search" name="search" style={{ width: 'clamp(240px, 30%, 300px)' }} inputProps={{ value: searchTerm, onChange: (e) => { setSearchTerm(e.target.value) } }} />
                </SearchboxWrapper>
                <Grid wrap style={{ marginTop: 'var(--sp-500)' }}>
                    {toolsData
                        .filter((toolData) => { return toolData.name.toLowerCase().indexOf(searchTerm) !== -1 })
                        .map((toolData, index) => (
                            <Toolcard key={index} name={toolData.name} description={toolData.description} url={toolData.url} />
                        ))}
                </Grid>
            </LobotomizedContainer>
        </>
    )
}