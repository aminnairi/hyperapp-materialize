import { h } from 'hyperapp'

export const Link = ({ className, brandLogo, center, sidenavTrigger, autoclose, ...props }, children) => {

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

    if (autoclose) {

      classes.push('sidenav-close')

    }

    return (

      <a className={ classes.join(' ') } { ...props }>

        { children }

      </a>

    )

  }

}
