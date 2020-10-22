import React from 'react'
import { useForm } from 'react-hook-form'
import styled, { css, ThemeProvider } from 'styled-components'
import { darken } from 'polished'
import ContentLoader from 'styled-content-loader'

import Checkbox from './components/Checkbox'
import ColorInput from './components/ColorInput'
import Example from './components/Example'
import space from './utils/space'
import { dependencies } from '../package.json'

const { defaultProps } = ContentLoader

const Container = styled.div(
  ({
    theme: {
      colors: { dark, light },
      space,
    },
  }) => css`
    background-color: ${dark};
    color: ${light};
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 0 auto;
    padding: ${space(2)};
    width: 100%;

    h1 span {
      color: ${darken(0.3, light)};
      font-size: ${space(2)};
      margin: 0 ${space(2)};
    }
  `,
)

const Main = styled.main`
  h4 {
    text-align: center;
  }
`

const Control = styled.div(
  ({ theme: { space } }) => css`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${Checkbox}, ${ColorInput} {
      margin-bottom: ${space(1)};
      max-width: ${space(30)};
    }
  `,
)

function App() {
  const { register, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      backgroundColor: defaultProps.backgroundColor,
      foregroundColor: defaultProps.foregroundColor,
      isLoading: defaultProps.isLoading,
    },
  })

  const { backgroundColor, foregroundColor, isLoading } = watch()

  return (
    <ThemeProvider
      theme={{ colors: { dark: '#252a34', light: '#ffffff' }, space }}
    >
      <Container>
        <h1>
          styled-content-loader{' '}
          <span>{dependencies['styled-content-loader'].replace('^', '')}</span>
          <a
            href='https://github.com/rfoel/styled-content-loader'
            rel='noopener'
            target='_blank'
          >
            <img
              alt='GitHub Repo stars'
              src='https://img.shields.io/github/stars/rfoel/styled-content-loader?style=social'
            ></img>
          </a>
        </h1>
        <p>
          The simplest solution for content loading in React and
          styled-components.
        </p>
        <Main>
          <Example
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            isLoading={isLoading}
          />
          <h4>Try it out</h4>
          <Control>
            <ColorInput
              label='Background color'
              name='backgroundColor'
              ref={register}
            />
            <ColorInput
              label='Foreground color'
              name='foregroundColor'
              ref={register}
            />
            <Checkbox label='Is loading?' name='isLoading' ref={register} />
          </Control>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
