import Textfield from "../atoms/textfield";

export default function TextfieldSuggestive({ name, label, color, bgColor, inputProps, datalistItems }) {
    return (
        <>
            <Textfield list={`${name}-datalist`} name={name} label={label} color={color} bgColor={bgColor} inputProps={{ ...inputProps, list: `${name}-datalist` }} />
            <datalist id={`${name}-datalist`}>
                {datalistItems.map((datalistItem, index) => (
                    <option key={index} value={datalistItem.value}>{datalistItem.name}</option>
                ))}
            </datalist>
        </>
    )
}