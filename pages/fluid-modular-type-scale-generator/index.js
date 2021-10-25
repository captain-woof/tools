import TwoColumnLayout from "../../components/molecules/two-column-layout"
import FluidModularSidebar from "./sidebar"
import { GlobalStateProvider } from "./globalState"
import Preview from "./preview"

export default function FluidModularTypeScale() {

    return (
        <TwoColumnLayout>
            <GlobalStateProvider>
                <FluidModularSidebar />
                <Preview />
            </GlobalStateProvider>
        </TwoColumnLayout>
    )
}