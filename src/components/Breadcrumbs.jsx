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
