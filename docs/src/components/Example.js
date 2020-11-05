import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styled, { css } from 'styled-components'
import ContentLoader from 'styled-content-loader'
import { darken } from 'polished'
import dracula from 'prism-react-renderer/themes/dracula'

import { dependencies } from '../../package.json'

const Container = styled.div(
  ({
    theme: {
      colors: { dark },
      space,
    },
  }) => css`
    display: flex;
    margin: ${space(4)} 0;

    textarea {
      background-color: ${darken(0.05, dark)} !important;
      border-radius: ${space(1)};
    }
  `,
)

const Example = styled.div(
  ({
    theme: {
      colors: { dark, light },
      space,
    },
  }) => css`
    background-color: ${light};
    color: ${dark};
    border-radius: ${space(1)};
    margin: ${space(2)};
    padding: ${space(2)} ${space(4)};
    width: ${space(50)};
  `,
)

export default ({ backgroundColor, foregroundColor, isLoading }) => {
  const code = `
<ContentLoader
  backgroundColor={backgroundColor}
  foregroundColor={foregroundColor}
  isLoading={isLoading}
>
  <span>⌛</span>
  <h1>styled-content-loader <span>${dependencies[
    'styled-content-loader'
  ].replace('^', '')}</span></h1>
  <p>
    The simplest solution for content loading in 
    React and styled-components.
  </p>
</ContentLoader>
`

  return (
    <Container>
      <LiveProvider
        code={code}
        scope={{ ContentLoader, backgroundColor, foregroundColor, isLoading }}
        theme={dracula}
      >
        <LiveEditor />
        <Example>
          <LivePreview />
          <LiveError />
        </Example>
      </LiveProvider>
    </Container>
  )
}
