import React from 'react'
import { FooterSimple } from './FooterSimple'
import { HeaderResponsive } from './HeaderResponsive'

const Layout = ({ children }: any) => {
    return (
        <>
            <HeaderResponsive links={[{
                link: "/",
                label: "Home"
            },
            {
                link: "/concept",
                label: "Concept"
            },
            {
                link: "/team",
                label: "Team"
            }]} />
            <main>{children}</main>
            <FooterSimple links={[
                {
                    "link": "/team",
                    "label": "Team"
                },
            ]} />
        </>
    )
}

export default Layout