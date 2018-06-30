import { h } from 'hyperapp'

export const VideoContainer = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }


    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}
