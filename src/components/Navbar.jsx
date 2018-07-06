import { h } from 'hyperapp'

export const Navbar = ({ className, extended, fixed, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (extended) {

      classes.push('nav-extended')

    }

    if (fixed) {

      return (

        <div className='navbar-fixed'>

          <nav className={ classes.join(' ') } { ...props }>

            <div class="nav-wrapper">

              { children }

            </div>

          </nav>

        </div>

      )

    } else {

      return (

        <nav className={ classes.join(' ') } { ...props }>

          <div class="nav-wrapper">

            { children }

          </div>

        </nav>

      )

    }

  }

}
