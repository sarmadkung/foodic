import React, { FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { ContainerProps } from './types'
import { colors } from '../colors'
// const {  color-primary-300 } = colors;
const StyledView = styled.View`
flex: 1,
padding: 25px,
padding-top: 40px,

`
export const MainContainer: FunctionComponent<ContainerProps> = (props) => {
    return (
    <StyledView style={props.style}>{props.children} </StyledView>
)
}