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

## Components

### Badge

```html
<Badge></Badge>
```

### Breadcrumbs

```html
<Breadcrumbs>
  <Breadcrumb></Breadcrumb>
  <Breadcrumb></Breadcrumb>
  <Breadcrumb></Breadcrumb>
</Breadcrumbs>
```

### Button

```html
<Button></Button>

<Button href='https://github.com/aminnairi/hyperapp-materialize'></Button>

<Button floating></Button>

<Button flat></Button>

<Button large></Button>

<Button small></Button>

<Button pulse></Button>

<Button halfway></Button>
```

### Card

```html
<Card></Card>
```

### Container

```html
<Container></Container>

<Container full></Container>
```

### Row

```html
<Row></Row>
```

### Column

```html
<Column small='12'></Column>

<Column medium='12'></Column>

<Column large='12'></Column>

<Column extraLarge='12'></Column>
```

### Image

```html
<Image src='path/to/image.png' alt='image' />

<Image src='path/to/image.png' alt='image' responsive />

<Image src='path/to/image.png' alt='image' circle />
```

### Table

```html
<Table></Table>

<Table striped></Table>

<Table highlight></Table>

<Table centered></Table>

<Table responsive></Table>
```

### Video

```html
<Video>
  <source src='path/to/video.mp4' type='video/mp4'/>
  <source src='path/to/video.webm' type='video/webm'/>
  <source src='path/to/video.ogg' type='video/ogg'/>
</Video>

<Video responsive>
  <source src='path/to/video.mp4' type='video/mp4'/>
  <source src='path/to/video.webm' type='video/webm'/>
  <source src='path/to/video.ogg' type='video/ogg'/>
</Video>
```

### Video Container

```html
<VideoContainer>
  <iframe src='url/to/video.com' />
</VideoContainer>
```

## Documentation
- [Hyperapp](https://github.com/hyperapp/hyperapp)
- [Materialize](https://materializecss.com/)
