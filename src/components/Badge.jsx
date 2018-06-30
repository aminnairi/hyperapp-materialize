import { h } from 'hyperapp'

export const Badge = ({ className, ...props }, children) => {

  return () => {

    const classes = [ 'badge', 'new' ]

    if (className) {

      classes.push(className)

    }

    return (

      <span className={ classes.join(' ') } { ...props }>

        { children }

      </span>

    )

  }

}
