import { h } from 'hyperapp'

export const Image = ({ src, alt, responsive, circle, ...attributes }) => {

  return () => {

    let classes = []

    if (responsive) {

      classes.push('responsive-img')

    }

    if (circle) {

      classes.push('circle')

    }

    return (

      <img className={ classes.join(' ') } src={ src } alt={ alt } { ...attributes } />

    )

  }

}
