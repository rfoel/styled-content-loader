import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

const Input = styled.input(
  ({
    theme: {
      colors: { dark, light },
      space,
    },
  }) => css`
    background-color: ${darken(0.05, dark)};
    border: none;
    box-shadow: none;
    color: ${light};
    height: ${space(2)};
    margin: 0 ${space(1)};
    outline: none;
    width: ${space(2)};
  `,
)

const Label = styled.label(
  ({
    theme: {
      colors: { dark, light },
      space,
    },
  }) => css`
    align-items: center;
    background-color: ${darken(0.05, dark)};
    border-radius: ${space(1)};
    color: ${darken(0.1, light)};
    display: flex;
    height: ${space(6)};
    justify-content: space-between;
    padding: ${space(1)} ${space(2)};
    width: 100%;
  `,
)

const Checkbox = forwardRef(({ className, label, ...props }, ref) => (
  <Label className={className}>
    {label}
    <Input ref={ref} type='checkbox' {...props} />
  </Label>
))

export default Checkbox
