import { LobotomizedContainer } from '../components/atoms/container'
import Seo from '../components/atoms/seo'
import { Heading1 } from '../components/atoms/headings'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function FourOhFour() {
    // For redirection
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2500)
    }, [])

    return (
        <>
            <Seo title="Error 404 - Not found" description="This page does not exist. Visit the homepage to see the list of available tools." url={`https://${process.env.NEXT_PUBLIC_APP_ORIGIN}/`} keywords="dev tools, developer tools, open source tools, frontend tools, frontend, sohail saha, captain woof, captain-woof" />
            <LobotomizedContainer style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Heading1>
                    404 !
                </Heading1>
                <p>This page does not exist. Getting redirected to the homepage...</p>
            </LobotomizedContainer>
        </>
    )
}