import { h } from 'hyperapp'

export const Navbar = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

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
