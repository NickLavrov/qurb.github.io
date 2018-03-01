import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import XRay from 'react-x-ray'

injectGlobal`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-family: 'Asul'
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`

const AppStyles = styled.div`
  .content {
    max-width: 928px;
    margin: 0 auto;
    padding: 80px 0;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      {/* <XRay> */}
      <AppStyles>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav> */}
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
      {/* </XRay> */}
    </Router>
</ThemeProvider>

)

export default hot(module)(App)
