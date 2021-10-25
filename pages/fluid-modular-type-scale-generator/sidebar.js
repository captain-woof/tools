import Sidebar from "../../components/atoms/sidebar"
import styled from 'styled-components'
import { Heading3 } from "../../components/atoms/headings"
import Textfield from '../../components/atoms/textfield'
import TextfieldSuggestive from '../../components/molecules/textfield-suggestive'
import { useGlobalState } from "./globalState"

/* https://sohail-saha.in/blog/posts/how-to-use-fluid-typography-with-modular-scale-in-css */

// Sidebar contents wrapper (for margin)
const SidebarContentWrapper = styled.div`
    height: fit-content;
    width: fit-content;

    & > * + * {
        margin-top: var(--sp-500);
    }
`

// The modular scale
const modularScale = [
    { name: '1.067 - Minor Second', value: 1.067 },
    { name: '1.125 - Major Second', value: 1.125 },
    { name: '1.200 - Minor Third', value: 1.200 },
    { name: '1.250 - Major Third', value: 1.250 },
    { name: '1.333 - Perfect Fourth', value: 1.333 },
    { name: '1.414 - Augmented Fourth', value: 1.414 },
    { name: '1.500 - Perfect Fifth', value: 1.500 },
    { name: '1.618 - Golden Ration', value: 1.618 }
]

export default function FluidModularSidebar() {
    const { state, dispatch } = useGlobalState()
    return (
        <Sidebar>
            <SidebarContentWrapper className='sidebar-content-wrapper'>
                <Heading3>Fluid-Modular Type scale generator</Heading3>
                <Textfield name='fs-base' label='Base size (px)' inputProps={{
                    type: 'number',
                    min: 0.00,
                    step: 0.01,
                    value: state?.fsBase,
                    onChange: (e) => { dispatch({ type: 'SET_FS_BASE', value: e.target.value }) }
                }} />
                <TextfieldSuggestive name='fs-factor-min' label='Scale (min)' inputProps={{
                    type: 'number',
                    min: 0.00,
                    step: 0.001,
                    value: state?.fsFactorMin,
                    onChange: (e) => { dispatch({ type: 'SET_FS_FACTOR_MIN', value: e.target.value }) }
                }} datalistItems={modularScale} />
                <TextfieldSuggestive name='fs-factor-max' label='Scale (max)' inputProps={{
                    type: 'number',
                    min: 0.00,
                    step: 0.001,
                    value: state?.fsFactorMax,
                    onChange: (e) => { dispatch({ type: 'SET_FS_FACTOR_MAX', value: e.target.value }) }
                }} datalistItems={modularScale} />
                <Textfield name='lh-min' label='Line height (min)' inputProps={{
                    type: 'number',
                    min: 0.00,
                    step: 0.01,
                    value: state?.lhMin,
                    onChange: (e) => { dispatch({ type: 'SET_LH_MIN', value: e.target.value }) }
                }} />
                <Textfield name='lh-max' label='Line height (max)' inputProps={{
                    type: 'number',
                    min: 0.00,
                    step: 0.01,
                    value: state?.lhMax,
                    onChange: (e) => { dispatch({ type: 'SET_LH_MAX', value: e.target.value }) }
                }} />
            </SidebarContentWrapper>
        </Sidebar>
    )
}