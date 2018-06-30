import { h } from 'hyperapp'

/**
 * @example <Container className='blue-text text-darken-3' id='my-container' full></Container>
 */
export const Container = ({ full, className, ...attributes }, children) => {

  return () => {

    const classes = []

    if (full) {

      classes.push('container-full')

    } else {

      classes.push('container')

    }

    if (className) {

      classes.push(className)

    }

    return (

      <div class={ classes.join(' ') } { ...attributes }>

        { children }

      </div>

    )

  }

}
