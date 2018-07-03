import { h } from 'hyperapp'

export const Icon = () => {

  return ({ className, left, right, color ...props }, children) => {

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

    if (color) {

      classes.push(`${color}-text`)

    }

    classes.push('material-icons')

    return (

      <i class={ classes.join(' ') }>

        { children }

      </i>

    )

  }

}
