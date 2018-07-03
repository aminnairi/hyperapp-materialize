import { h } from 'hyperapp'


export const Column = ({ small, medium, large, extraLarge, offsetSmall, offsetMedium, offsetLarge, offsetExtraLarge, className, ...props }, children) => {

  return () => {

    let classes = []

    classes.push('col')

    if (small) {

      classes.push(`s${small}`)

    }

    if (medium) {

      classes.push(`m${medium}`)

    }

    if (large) {

      classes.push(`l${large}`)

    }

    if (extraLarge) {

      classes.push(`xl${extraLarge}`)

    }

    if (offsetSmall) {

      classes.push(`offset-s${offsetSmall}`)

    }

    if (offsetMedium) {

      classes.push(`offset-m${offsetMedium}`)

    }

    if (offsetLarge) {

      classes.push(`offset-l${offsetLarge}`)

    }

    if (offsetExtraLarge) {

      classes.push(`offset-xl${offsetExtraLarge}`)

    }

    classes.push(className)

    return (

      <div className={ classes.join(' ') } { ...props }>

        { children }

      </div>

    )

  }

}
