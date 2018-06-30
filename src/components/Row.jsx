import { h } from 'hyperapp'

export const Row = ({ className, ...props }, children) => {

  return () => {

    const classes = [ 'row' ]

    if (className) {

      classes.push(className)

    }

    return (

      <div class={ classes } { ...props }>

        { children }

      </div>

    )

  }

}
