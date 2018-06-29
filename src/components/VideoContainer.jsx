import { h } from 'hyperapp'

export const VideoContainer = ({ className, ...props }, children) => {

  return () => {

    return (

      <div className={ `responsive-video ${ className }` } { ...props }>

        { children }

      </div>

    )

  }

}
