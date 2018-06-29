import { h } from 'hyperapp'

const col = (prefix, value) => {

  if (value && 1 <= value && value <= 12) {

    return `${prefix}${value}`

  }

  return `${prefix}12`

}

export const Column = ({ small, medium, large, extraLarge, className, ...attributes }, children) => {

  return () => {

    let classes = [`col`]

    classes.push(col('s', small))
    classes.push(col('m', medium))
    classes.push(col('l', large))
    classes.push(col('xl', extraLarge))
    classes.push(className)

    return (

      <div className={ classes.join(' ') } { ...attributes }>

        { children }

      </div>

    )

  }

}
