import React from "react"
// import SocialLinks from './Elements/SocialLinks'
import { GlobalStyle} from '../../../style/global'
import Menu from "../Menu"
import {App, MainBody} from './style'
import Footer from "../Footer"
import PageHeader from "../PageHeader"
import BackgroundLines from "../BackgroundLines"


const Layout = ({children}) =>
  <App>
    <GlobalStyle />
    <BackgroundLines/>
    <Menu />
    <MainBody>
        {children}
        {/*    /!*<Footer />*!/*/}
        {/*    /!*<SocialLinks />*!/*/}
    </MainBody>
  </App>

export default Layout
