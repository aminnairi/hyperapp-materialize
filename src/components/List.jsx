import { h } from 'hyperapp'

export const List = ({ className, unordered, sidenav, left, right, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (left) {

      classes.push('left')

    }

    if (right) {

      classes.push('right')

    }

    if (sidenav) {

      classes.push('sidenav')

    }

    const sidenavInitialization = element => sidenav && M.Sidenav.init(element, {})

    if (unordered) {

      return (

        <ul className={ classes.join(' ') } { ...props } oncreate={ sidenavInitialization }>

          { children }

        </ul>

      )

    } else {

      return (

        <ol className={ classes.join(' ') } { ...props } oncreate={ sidenavInitialization }>

          { children }

        </ol>

      )

    }


  }

}

export const ListItem = ({ className, active, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (active) {

      classes.push('active')

    }

    return (

      <li className={ classes.join(' ') } { ...props }>

        { children }

      </li>

    )

  }

}
