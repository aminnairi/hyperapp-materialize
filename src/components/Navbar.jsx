import { h } from 'hyperapp'

export const Navbar = ({ className, extended, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (extended) {

      classes.push('nav-extended')

    }

    return (

      <nav className={ classes.join(' ') } { ...props }>

        <div class="nav-wrapper">

          { children }

        </div>

      </nav>

    )

  }

}
