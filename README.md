# styled-content-loader

[![npm](https://img.shields.io/npm/v/styled-content-loader)](https://www.npmjs.com/styled-content-loader)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/styled-content-loader)](https://www.npmjs.com/styled-content-loader)
[![NPM](https://img.shields.io/npm/l/styled-content-loader)](LICENSE.md)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

The simplest solution for content loading in React and styled-components.

## Getting Started

```
npm install styled-content-loader
```

```
yarn add styled-content-loader
```

## Usage

```js
import React from 'react'
import StyledContentLoader from 'styled-content-loader'

const App = () => {
  return (
    <StyledContentLoader>
      <Component />
    </StyledContentLoader>
  )
}

export default App
```

## Options

| Name            | Description                    | Default |
| --------------- | ------------------------------ | ------- |
| backgroundColor | Animation background color     | #fafafa |
| foregroundColor | Animation foreground color     | #cccccc |
| isLoading       | Wether it will be shown or not | true    |

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/styled-content-loader/blob/master/LICENSE)
