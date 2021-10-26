import TwoColumnLayout from "../../components/molecules/two-column-layout"
import FluidModularSidebar from "./sidebar"
import GlobalStateProvider from "./globalState"
import Preview from "./preview"
import ExportDialog from "./exportDialog"

export default function FluidModularTypeScale() {

    return (
        <GlobalStateProvider>
            <TwoColumnLayout>
                <FluidModularSidebar />
                <Preview />
            </TwoColumnLayout>
            <ExportDialog />
        </GlobalStateProvider>
    )
}