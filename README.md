# hyperapp-materialize
Hyperapp Components for Materialize CSS

```html
<!doctype html>
<html>
  <head>
    <link rel='stylesheet' href='materialize.min.css'>
  </head>
  <body>
    <script src='hyperapp.min.js'></script>
    <script src='materialize.min.js'></script>
    <script src='hyperapp-materialize.min.js'></script>
    <script>
    const { h, app }       = hyperapp
    const { Navbar, Link } = hyperappMaterialize

    const state   = {}
    const actions = {}
    const view    = () => <Navbar><Link href='#!' brandLogo>MyApp</Link></Navbar>

    app(state, actions, view, document.body)
    </script>
  </body>
</html>
```

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

### Node

:warning: Note that the NPM package is not yet shipped. It will take some time until I settle and configure everything but it should be ready soon! :warning:

```bash
$ npm install --save hyperapp materialize-css@next hyperapp-materialize
```

#### CommonJS

```javascript
'use strict'

require 'materialize-css/dist/css/materialize.min.css'
require 'materialize-css/dist/js/materialize.min.js'

const { h, app } = require('hyperapp');

const { Navbar, Link } = require('hyperapp-materialize');

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
