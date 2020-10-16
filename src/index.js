import { bool, string } from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const animation = ({ backgroundColor, foregroundColor }) => keyframes`
  0% {
    background: ${backgroundColor};
  }
  50% {
    background: ${foregroundColor};
  }
  100% {
    background: ${backgroundColor};
  }
`

const StyledContentLoader = styled.span(
  ({ backgroundColor, foregroundColor, isLoading }) => css`
    ${isLoading &&
    css`
      * {
        animation: ${() => animation({ backgroundColor, foregroundColor })} 1.5s
          infinite ease-in-out;
        color: transparent !important;
        user-select: none;
        opacity: 0.25;
      }
    `}
  `,
)

StyledContentLoader.propTypes = {
  backgroundColor: string,
  foregroundColor: string,
  isLoading: bool,
}

StyledContentLoader.defaultProps = {
  backgroundColor: '#fafafa',
  foregroundColor: '#cccccc',
  isLoading: true,
}

export default StyledContentLoader
