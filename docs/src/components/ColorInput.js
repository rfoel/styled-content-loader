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
    appearance: none;
    background-color: ${darken(0.05, dark)};
    border: 0;
    box-shadow: none;
    color: ${light};
    height: ${space(4)};
    margin-left: ${space(2)};
    outline: none;
    width: ${space(4)};
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
    justify-content: space-between;
    padding: ${space(1)} ${space(2)};
    width: 100%;
  `,
)

const ColorInput = forwardRef(({ className, label, ...props }, ref) => (
  <Label className={className}>
    {label}
    <Input ref={ref} type='color' {...props} />
  </Label>
))

export default styled(ColorInput)``
