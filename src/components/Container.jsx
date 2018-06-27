import { h } from 'hyperapp'

/**
 * @example <Container className='blue-text text-darken-3' id='my-container' full></Container>
 */
export const Container = ({ full, className, ...attributes }, children) => {

  return () => {

    const classes = `${ full ? 'container-full' : 'full' } ${ className }`

    return (

      <div class={ classes } { ...attributes }>

        { children }

      </div>

    )

  }

}
