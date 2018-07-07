# hyperapp-materialize

![Hyperapp Materialize](https://ibb.co/gE2vsT)

Hyperapp Components for Materialize CSS

## Installation

### Node

:warning: NPM package comming soon :warning:

```bash
$ npm install --save  hyperapp \
                      materialize-css@next \
                      hyperapp-materialize
```

### HTML

```html
<!doctype html>

<html>

  <head>

    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>

  </head>

  <body>

    <!-- Your transpiled JSX entry point -->
    <script src='index.js'></script>

  </body>

</html>
```

#### CommonJS

```javascript
'use strict'

require 'materialize-css/dist/css/materialize.min.css'
require 'materialize-css/dist/js/materialize.min.js'

const { h, app } = require('hyperapp')

const { Navbar, Link } = require('hyperapp-materialize')
```

#### ESModule

```javascript
'use strict'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import { h, app } from 'hyperapp'

import { Navbar, Link } from 'hyperapp-materialize'
```

### Without Node

#### Local Files

Download the file located under `dist/hyperapp-materialize.min.js` and anything else ([Hyperapp](https://github.com/hyperapp/hyperapp), [Materialize](https://github.com/Dogfalo/materialize)) to your local development folder.

```html
<!doctype html>

<html>

  <head>

    <link rel='stylesheet' href='materialize.min.css'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>

  </head>

  <body>

    <script src='hyperapp.min.js'></script>
    <script src='materialize.min.js'></script>
    <script src='hyperapp-materialize.min.js'></script>

    <!-- Your transpiled JSX entry point -->
    <script src='index.js'></script>

  </body>

</html>
```

Note: you can replace [Unpkg](https://unpkg.com/#/) by your prefered CDN provider.

```javascript
const { h, app } = hyperapp

const { Navbar, Link } = hyperappMaterialize
```

### Hosted Libraries

```html
<!doctype html>

<html>

  <head>

    <link rel='stylesheet' href='https://unpkg.com/materialize-css@next/dist/css/materialize.min.css'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>

  </head>

  <body>

    <script src='https://unpkg.com/hyperapp/dist/hyperapp.js'></script>
    <script src='https://unpkg.com/materialize-css@next/dist/js/materialize.min.js'></script>
    <script src='https://unpkg.com/hyperapp-materialize/dist/hyperapp-materialize.min.js'></script>

    <!-- Your transpiled JSX entry point -->
    <script src='index.js'></script>

  </body>

</html>
```

```javascript
const { h, app } = hyperapp

const { Navbar, Link } = hyperappMaterialize
```

## Usage

```javascript
const state = {}

const actions = {}

const view = () => (
  <Navbar>
    <Link href='#!' brandLogo>
      MyApp
    </Link>
  </Navbar>
)

app(state, actions, view, document.body)
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

<Card stickyActions></Card>

<Card small></Card>

<Card medium></Card>

<Card large></Card>

<Card panel></Card>

<Card horizontal></Card>
```

### Card Action

```html
<CardAction></CardAction>

<CardAction activator></CardAction>
```

### Card Content

```html
<CardContent activator></CardContent>
```

### Card Image

```html
<CardImage activator></CardImage>
```

### Card Reveal

```html
<CardReveal></CardReveal>
```

### Card Title

```html
<CardTitle activator></CardTitle>
```

### Container

```html
<Container></Container>

<Container full></Container>
```

### Footer

```html
<Footer></Footer>

<Footer sticky></Footer>
```

### Footer Copyright

```html
<FooterCopyright></FooterCopyright>
```

### Icon

```html
<Icon></Icon>

<Icon left></Icon>

<Icon right></Icon>

<Icon color='red'></Icon>
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

<Column offsetSmall='12'></Column>

<Column offsetMedium='12'></Column>

<Column offsetLarge='12'></Column>

<Column offsetExtraLarge='12'></Column>
```

### Image

```html
<Image src='path/to/image.png' alt='image' />

<Image src='path/to/image.png' alt='image' responsive />

<Image src='path/to/image.png' alt='image' circle />
```

### Link

```html
<Link></Link>

<Link brandLogo></Link>

<Link center></Link>

<Link sidenavTrigger data-target='mobile'></Link>
```

### List

```html
<List></List>

<List unordered></List>

<List left></List>

<List right></List>

<List sidenav></List>
```

### ListItem

```html
<ListItem></ListItem>

<ListItem active></ListItem>
```

### Navbar

```html
<Navbar></Navbar>

<Navbar extended></Navbar>

<Navbar fixed></Navbar>
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
