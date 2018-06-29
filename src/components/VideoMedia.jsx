import { h } from 'hyperapp'

export const VideoMedia = ({ responsive, className, ...props }, children) => {

  return () => {

    return (

      <video className={ responsive ? 'responsive-video' : '' + className } { ...props }>

        { children }

      </video>

    )

  }

}