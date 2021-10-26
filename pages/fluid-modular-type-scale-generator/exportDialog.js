import Dialog from "../../components/atoms/dialog";
import { Heading3 } from "../../components/atoms/headings";
import Codeblock from "./codeBlock";
import { useGlobalState } from "./globalState";

export default function ExportDialog({ wide }) {
    const { state, dispatch } = useGlobalState()

    return (
        <Dialog wide isOpen={state?.exportDialogOpen} setIsOpen={(newIsOpen) => { dispatch({ type: 'SET_EXPORT_DIALOG_OPEN', isOpen: newIsOpen }) }} dialogBoxStyle={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Heading3>Export</Heading3>
            <Codeblock />
        </Dialog>
    )
}