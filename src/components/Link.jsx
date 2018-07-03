import { h } from 'hyperapp'

export const Link = ({ className, brandLogo, center, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (brandLogo) {

      classes.push('brand-logo')

    }

    if (center) {

      classes.push('center')

    }

    return (

      <a className={ classes.join(' ') } { ...props }>

        { children }

      </a>

    )

  }

}
