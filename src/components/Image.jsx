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

    if (className) {

      classes.push(className)

    }

    return (

      <img className={ classes.join(' ') } src={ src } alt={ alt } { ...props } />

    )

  }

}
