import React from 'react'
import { withSiteData } from 'react-static'
import {Card} from 'rebass'
import { Grid, Cell } from 'styled-css-grid'

import styled from 'styled-components'
import { space, fontSize, fontWeight, color, lineHeight, fontFamily, display} from 'styled-system'
import system from 'system-components'

import logoImg from '../logo.svg'

const Wordmark = system ({
  lineHeight: 3,
  pt: 0,
  fontSize: 5,
  fontWeight: 'xbold',
  color: 'blue',
  display: 'block',
  fontFamily: 'Poppins'
})

const Headline = system ({
  pt: 4,
  lineHeight: 3,
  color: 'purple',
  fontSize: 4,
  is: 'div',
  fontFamily: 'Poppins',
  fontWeight: 'xbold',
  textAlign: 'left'
})

const Field = system ({
  fontSize: 1,
  fontWeight: 'xbold',
  lineHeight: 3,
  m: 0,
  p: 0,
  pl: 4,
  color: 'gray.1',
  bg: 'white',
  borderRadius: 2,
  border: 2,
  borderColor: 'blue',
  is: 'a',
  width: '75%',
  textAlign: 'left',
  display: 'inline-block',
  hover: {
    background: 'blue',
    textDecoration: 'underline',
    color: 'white',
  },
})

const Wager = system ({
  is: 'input',
  type: 'text',
  lineHeight: 3,
  fontSize: 1,
  fontWeight: 'xbold',
  p: 0,
  pl: 4,
  ml: 6,
  m:0,
  width: '11%',
  border: 2,
  borderColor: 'gray.3',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent',
  display: 'inline-block'
})

const Body = system ({
  mt: 4,
  lineHeight: 1,
  is: 'div',
  fontSize: 1
})

const Label = system ({
  lineHeight: 0,
  is: 'div',
  fontSize: 0,
  color: 'blue',
  mt: 3,
  mb: 3,
  fontWeight: 'xbold',
  textAlign: 'left',
  display: 'block'
})

const Badge = system ({
  lineHeight: 0,
  is: 'div',
  fontSize: 0,
  display: 'inline-block',
  bg: 'gray.3',
  p: 3,
  borderRadius: 2,
  mr: 4
})

const Bar = system ({
  bg: 'blue',
  width: '50%',
  lineHeight: 3,
  color: 'white',
  fontSize: 3,
  is: 'div',
  fontFamily: 'Poppins',
  fontWeight: 'xbold',
  m: 0,
  pl: 4,
  display: 'inline-block'
})

const Emoji = system ({
  lineHeight: 3,
  fontSize: 3,
  display: 'inline-block',
  pl: 4
})

const Box = system ({
  textAlign: 'right',
})

const Image = system ({
  is: 'img',
  p: 0,
  display: 'inline-block'
})

export default withSiteData(() => (
  <div>
    <Grid columns={8} gap="32px">
      <Cell width={4}>
        <Wordmark display='inline-block' lineHeight={3} pt={0} color='blue' fontWeight='xbold' fontSize={4}>DOETH</Wordmark>
        <Label pt={4} textAlign='left'>Just Do Eth</Label>
      </Cell>
      <Cell width={4}>
      </Cell>
      <Cell top={2} width={6}>
        <Headline pt={0}>Which ivy beats out others?</Headline>
        <Body>This week we’re trying to determine which ivy league school is ranked best according to the crypto community.
Push your 🚣🏼 across the finish line.</Body>
      </Cell>
      <Cell left={7} width={2}>
        <Label pt={0}>Legalese: Pollstn is an ethereum based demo intended to show how contracts work.</Label>
      </Cell>
      <Cell top={3} width={3}>
        <Field pt={0} href="">Princeton</Field><Wager placeholder='1'/>
      </Cell>
      <Cell left={4} width={3}>
        <Bar width="25%" pt={0}>25</Bar><Emoji> 🚣🏼</Emoji>
      </Cell>
      <Cell top={4} width={3}>
        <Field pt={0}>Yale</Field><Wager placeholder='1'/>
      </Cell>
      <Cell left={4} width={3}>
        <Bar width="20%" pt={0}>20</Bar><Emoji> 🚣🏼</Emoji>
      </Cell>
      <Cell top={5} width={3}>
        <Field pt={0}>Harvard</Field><Wager placeholder='1'/>
      </Cell>
      <Cell left={4} width={3}>
        <Bar width="35%" pt={0}>35</Bar><Emoji> 🚣🏼</Emoji>
      </Cell>
      <Cell top={6} width={3}>
        <Field pt={0}>MIT</Field><Wager placeholder='1'/>
      </Cell>
      <Cell left={4} width={3}>
        <Bar width="20%" pt={0}>20</Bar><Emoji> 🚣🏼</Emoji>
      </Cell>
    </Grid>
  </div>
))
