import { h } from 'hyperapp'

export const Image = ({ src, alt, responsive, circle, className, ...props }) => {

  return () => {

    let classes = []

    if (responsive) {

      classes.push('responsive-img')

    }

    if (circle) {

      classes.push('circle')

    }

    return (

      <img className={ classes.join(' ') + className } src={ src } alt={ alt } { ...props } />

    )

  }

}
