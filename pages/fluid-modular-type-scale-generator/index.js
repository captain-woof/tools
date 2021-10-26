import TwoColumnLayout from "../../components/molecules/two-column-layout"
import FluidModularSidebar from "./sidebar"
import GlobalStateProvider from "./globalState"
import Preview from "./preview"
import ExportDialog from "./exportDialog"
import Seo from "../../components/atoms/seo"

export default function FluidModularTypeScale() {
    return (
        <>
            <Seo title="Fluid-Modular Type-scale Generator" description="This is a tool to quickly generate the CSS stylesheet of your design system using Sohail's idea of the 'Fluid-Modular Type scale'." url={`https://${process.env.NEXT_PUBLIC_APP_ORIGIN}/fluid-modular-type-scale-generator`} keywords="type scale, modular scale, fluid typography, how to implement fluid typography in css, how to implement modular scale typography in css" />
            <GlobalStateProvider>
                <TwoColumnLayout>
                    <FluidModularSidebar />
                    <Preview />
                </TwoColumnLayout>
                <ExportDialog />
            </GlobalStateProvider>
        </>
    )
}