import { h } from 'hyperapp'

export const Card = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)
      
    }

    classes.push('card')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}