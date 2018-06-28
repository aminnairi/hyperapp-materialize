# hyperapp-materialize
Hyperapp Components for Materialize CSS

:warning: Note that the NPM package is not yet shipped. It will take some time until I settle and configure everything but it should be ready soon! :warning:

## Usage

```javascript
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import { h, app }     from 'hyperapp'
import { Container }  from 'hyperapp-materialize'

const state = {}

const actions = {}

const view = () => (
  <Container full>
    <h1>Hyperapp & Materialize</h1>
  </Container>
)

const container = document.body

app(state, actions, view, container)
```

## Installation

```bash
$ npm install --save hyperapp materialize-css@next hyperapp-materialize
$ # or
$ yarn add hyperapp materialize-css@next hyperapp-materialize
```

## Documentation
- [Hyperapp](https://github.com/hyperapp/hyperapp)
- [Materialize](https://materializecss.com/)
