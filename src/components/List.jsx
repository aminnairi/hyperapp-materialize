import { h } from 'hyperapp'

export const UnorderedList = ({ className, left, right, ...props }, children) => {

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

    return (

      <ul className={ classes.join(' ') } { ...props }>

        { children }

      </ul>

    )

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
