import { h } from 'hyperapp'

export const Button = ({ href, large, small, disabled, flat, floating, pulse, halfway, className, ...props }, children) => {

  return () => {

    const classes = []

    if (!flat && !floating) {

      classes.push('btn')

    }

    if (flat) {

      classes.push('btn-flat')

    }

    if (floating) {

      classes.push('btn-floating')

    }

    if (className) {

      classes.push(className)

    }

    if (large) {

      classes.push('btn-large')

    }

    if (small) {

      classes.push('btn-small')

    }

    if (disabled) {

      classes.push('disabled')

    }

    if (pulse) {

      classes.push('pulse')

    }

    if (halfway) {

      classes.push('halfway-fab')

    }

    if (href) {

      return (

        <a className={ classes.join(' ') } href={ href } { ...props }>

          { children }

        </a>

      )

    } else {

      return (

        <button className={ classes.join(' ') } { ...props }>

          { children }

        </button>

      )

    }

  }

}
