import styled, { css } from "styled-components";

const TextfieldWrapper = styled.div`
    position: relative;
    height: 3rem;
    border-radius: 4px;
    width: 100%;
`;

const Input = styled.input`
    ${({ theme, color }) => css`
        position: absolute;
        height: 100%;
        width: 100%;
        border: none;
        outline: 2px solid ${theme.colors.secondary.main};
        top: 0;
        left: 0;
        border-radius: inherit;
        padding: 0 1rem;

        &:focus {
          outline: ${color ? `2px solid ${color}` : `2px solid ${theme.colors.primary.main}`};
        }
    `}
`;

const Label = styled.label`
    ${({ theme, color, bgColor }) => css`
        position: absolute;
        height: fit-content;
        width: fit-content;
        top: 1rem;
        left: 1rem;
        color: ${theme.colors.secondary.dark};
        cursor: text;
        transition: ${theme.transition().normal};
        background-color: ${bgColor || theme.colors.background.light};

        ${Input}:focus + &,
        ${Input}:not(:placeholder-shown) + & {
          font-size: 0.85rem;
          top: -0.75rem;
          left: 0.75rem;
          padding: 0.25rem;    
        }

        ${Input}:focus + & {
          color: ${color || theme.colors.primary.main};
        }
    `}
`;

export default function Textfield({ name, label, color, bgColor, inputProps }) {
    return (
        <TextfieldWrapper>
            <Input id={name} name={name} color={color} autoComplete="off" placeholder=" " {...inputProps}/>
            <Label for={name} bgColor={bgColor} color={color}>
                {label}
            </Label>
        </TextfieldWrapper>
    );
}
