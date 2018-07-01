import { h } from 'hyperapp'

export const Card = ({ small, medium, large, stickyActions, panel, className, horizontal, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    if (stickyActions) {

      classes.push('sticky-actions')

    }

    if (small) {

      classes.push('small')

    }

    if (medium) {

      classes.push('medium')

    }

    if (large) {

      classes.push('large')

    }

    if (panel) {

      classes.push('panel')

    }

    if (horizontal) {

      classes.push('horizontal')

    }

    classes.push('card')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}

export const CardContent = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('card-content')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}

export const CardImage = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('card-image')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}

export const CardTitle = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('card-title')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}

export const CardAction = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('card-title')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}

export const CardReveal = ({ className, ...props }, children) => {

  return () => {

    const classes = []

    if (className) {

      classes.push(className)

    }

    classes.push('card-reveal')

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}
