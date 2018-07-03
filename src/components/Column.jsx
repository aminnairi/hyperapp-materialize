import { h } from 'hyperapp'

const col = (prefix, value) => {

  if (value && 1 <= value && value <= 12) {

    return `${prefix}${value}`

  }

  return `${prefix}12`

}

export const Column = ({ small, medium, large, extraLarge, offsetSmall, offsetMedium, offsetLarge, offsetExtraLarge, className, ...attributes }, children) => {

  return () => {

    let classes = ['col']

    classes.push(col('s', small))
    classes.push(col('m', medium))
    classes.push(col('l', large))
    classes.push(col('xl', extraLarge))
    classes.push(col('offset-s', offsetSmall))
    classes.push(col('offset-m', offsetMedium))
    classes.push(col('offset-l', offsetLarge))
    classes.push(col('offset-xl', offsetExtraLarge))
    classes.push(className)

    return (

      <div className={ classes.join(' ') } { ...attributes }>

        { children }

      </div>

    )

  }

}
