import { h } from 'hyperapp'

export const Video = ({ responsive, className, ...props }, children) => {

  return () => {

    const classes = []

    classes.push(className)

    if (responsive) {

      classes.push('responsive-video')

    }

    return (

      <video className={ classes.join(' ') } { ...props }>

        { children }

      </video>

    )

  }

}
