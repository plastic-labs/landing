'use client'

import React from 'react'
import styled from 'styled-components'

const StyledButtonChildren = styled.span`
  display: flex;
  gap: 0.5rem;
`

export const ButtonChildren: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledButtonChildren>{children}</StyledButtonChildren>
}
