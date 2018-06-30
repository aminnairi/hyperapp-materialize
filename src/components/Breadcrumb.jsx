import { h } from 'hyperapp'

export const Breadcrumbs = (props, children) => {

  return () => {

    return (

      <nav { ...props }>

        <div className='nav-wrapper'>

          <div className='col s12'>

            { children }

          </div>

        </div>

      </nav>

    )

  }

}

export const Breadcrumb = ({ href, className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('breadcrumb')

    return (

      <a href={ href } className={ classes.join(' ') } { ...props }>

        { children }

      </a>

    )

  }

}
