import Paper from '../atoms/paper'
import { Link, LinkBlock } from '../atoms/link'
import { Heading4 } from '../atoms/headings'

export default function Toolcard({ name, description, url }) {
    return (

        <Paper raiseOnHover borderRadius style={{ width: 'clamp(250px, 25vw, 360px)' }}>
            <LinkBlock href={url}>
                <Heading4 hoverEffect isLink style={{width: '75%'}}>{name}</Heading4>
                <p>{description}</p>
            </LinkBlock>
        </Paper>

    )
}