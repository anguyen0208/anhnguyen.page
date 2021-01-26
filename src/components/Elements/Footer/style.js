import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 45%;
  ${media.ipadpro`
    position: static;
    padding-top: 1.5rem;
  `}
  ${media.md`
    position: static;
    padding-top: 1.5rem;
  `}
  
  span {
    font-family: ${fonts.mono};
    font-size:1.2rem;
  } 
`

export const Item = styled.div`
  position: absolute;
  font-family: ${fonts.mono};
  color: ${colors.gray700};
  font-size: .9rem;
  line-height: 1em;
  letter-spacing: .1rem;
  ${props => props.position === 'left'
    ? css`
      transform: rotate(-90deg) translateX(-50%);
      transform-origin: left;
      ${getOuterSpace('left')}
    `
    : css`
      transform: rotate(90deg) translateX(50%);
      transform-origin: right;
      ${getOuterSpace('right')}
    ` }
  
    ${props => props.highlight
  ? css`
        color: ${colors.yellow500};
        
        &:hover::before {
          display: none !important;
        }
      `
  : css`
        color: ${colors.gray700};
      `}
      
  ${media.mon27`
      font-size: 1.3rem;
      line-height: 1em;
  `}
  
  ${media.mon24`
      font-size: .9rem;
      line-height: 1em;
  `}
  
  ${media.mac13`
      font-size: .8rem;
      line-height: 1em;
  `}
  ${media.lg`
      font-size: .8rem;
      line-height: 1em;
  `}
  ${media.ipadpro`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .6rem 0 0;
    text-align: center;
    font-size: 1rem;
  `}
  ${media.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`