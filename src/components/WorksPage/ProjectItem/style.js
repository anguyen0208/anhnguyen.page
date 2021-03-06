import styled from 'styled-components'
import { colors, fonts, media } from "../../../style/constants"
import Image from "../../Elements/Image"

export const ProjectWrapper = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  padding-top: 2%;
`
export const EachProject = styled.a`
  flex: none;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: visible;
   
   &::before{
      counter-increment: counter;
      content: counters(counter, ".", decimal-leading-zero);
      position: absolute;
      left: 0;
      border-left: 3px solid currentColor;
      top: 20%;
      height: 60%;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      line-height: 1;
      font-weight: bold;
      font-family: 'Poppins', san-serif;
      font-size: 1.4rem;
      opacity: 0;
      transform: translateX(0);
      transition: transform 0.3s, opacity 0.3s;
      ${media.ultra`
        font-size: 1.4rem;
      `}
      ${media.mon`
        font-size: 1.2rem;
      `}
      ${media.mac`
        font-size: .8rem;
      `}
      ${media.lg`
        font-size: .8rem;
      `}
      ${media.md`
        font-size: .7rem;
      `}
      ${media.md`
        font-size: .6rem;
        padding-left: .5rem;
        border-left: 2px solid currentColor;
      `}
   }
  
    &:hover{
      &::before{
        opacity: 1;
        transform: translateX(0);
      }
      
      .titleSub{
        z-index: 2;
        opacity: 1;
        transition-duration: 1s;
        transform: translateY(250px);
      }
      
      .imageReveal{
        display: block;
        opacity: 1;
        z-index: 1;
      }
    }
`

export const Text = styled.span`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: block;
  overflow: hidden;
  margin: 0;
  text-align: right;
`
export const Inner = styled.span`
  display: block;
  font-family: ${fonts.outline};
  font-weight: 400;
  font-size: 4.5vw;
  white-space: nowrap;
  color: ${colors.gray100};
  
  
  ${media.mac`
    font-size: 4.5vw;
  `}
  
  ${media.lg`
    font-family: ${fonts.hunny};
    font-size: 5vw;
    z-index: 2;
  `}
  
  ${media.md`
    font-size: 4.8vw;
    z-index: 2;
  `}
  
  ${media.sm`
    font-size: 5vw;
    z-index: 2;
  `}
`

export const TitleSub = styled.span`
  color: ${colors.gray200}
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Poppins', san-serif;
  white-space: nowrap;
  position: relative;
  padding-left: 1rem;
  opacity: 0;
  transform: translateY(50px);
  transition: transform 1s, opacity 0.3s;
  line-height: 4rem;
  font-size: 1.4rem;
  
  ${media.ultra`
    line-height: 1.8rem;
    margin-bottom: 50px;
    font-size: 1.4rem;
  `}
  ${media.mon`
    line-height: 1.6rem;
    margin-bottom: 50px;
    font-size: 1.2rem;
  `}
  ${media.mac`
    line-height: 1.8rem;
    margin-bottom: 50px;
    font-size: .8rem;
  `}
  
  ${media.lg`
    line-height: 1.8rem;
    margin-bottom: 50px;
    font-size: .8rem;
  `}
  ${media.md`
    line-height: 1.8rem;
    margin-bottom: 50px;
    font-size: .8rem;
  `}
   ${media.sm`
    line-height: 1.4rem;
    margin-bottom: 50px;
    font-size: .6rem;
  `}
`

export const HoverReveal = styled.div`
  position: absolute;
  display: block;
  overflow: hidden:
  z-index: -1;
  width: 840px;
  height: 580px;
  top: 0;
  left: 0;
  margin-left: 220px;
  margin-top: -120px;
  pointer-events: none;
  display: none;
  opacity: 1;
  
  ${media.mon`
    width: 600px;
    height: 400px;
    margin-left: 150px;
    margin-top: -90px;
  `}
  
  ${media.mac`
    width: 480px;
    height: 3200px;
    margin-left: 100px;
    margin-top: -75px;
  `}
  
  ${media.lg`
    width: 320px;
    height: 200px;
    margin-left: 75px;
    margin-top: -50px;
  `}
  
  ${media.md`
    width: 260px;
    height: 140px;
    margin-left: 60px;
    margin-top: -35px;
  `}
  
   ${media.sm`
    width: 160px;
    height: 80px;
    margin-left: 30px;
    margin-top: -15px;
  `}
`
export const HoverInner = styled.div`
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`

export const ProjectImage = styled(Image)`
  position: relative;
  display: block;
  z-index: 2;
  background-size: cover;
  
  img {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    opacity: 1;
    object-fit: cover !important;
  }
`
