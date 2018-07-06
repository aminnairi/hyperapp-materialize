import { h } from 'hyperapp'

export const Footer = ({ className, sticky, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('page-footer')

    const stickyInitialization = element => {

      if (sticky) {

        const parent  = element.parentNode
        const main    = document.querySelector('main')

        if (parent) {

          parent.style.display        = 'flex'
          parent.style.flexDirection  = 'column'
          parent.style.minHeight      = '100vh'

        }

        if (main) {

          main.style.flex = '1 0 auto'

        }

      }

    }

    return (

      <footer className={ classes.join(' ') } { ...props } oncreate={ stickyInitialization }>

        { children }

      </footer>

    )

  }

}

export const FooterCopyright = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('footer-copyright')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}
