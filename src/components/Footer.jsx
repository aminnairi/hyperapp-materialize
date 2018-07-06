import { h } from 'hyperapp'

export const Footer = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('page-footer')

    return (

      <footer className={ classes.join(' ') } { ...props }>

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
