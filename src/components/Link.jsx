import { h } from 'hyperapp'

export const Link = ({ className, brandLogo, center, sidenavTrigger, ...props }, children) => {

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

    if (sidenavTrigger) {

      classes.push('sidenav-trigger')

    }

    return (

      <a className={ classes.join(' ') } { ...props }>

        { children }

      </a>

    )

  }

}
