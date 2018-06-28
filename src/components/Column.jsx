import { h } from 'hyperapp'

const col = (prefix, value) => {

  if (value && 1 <= value && value <= 12) {

    return `${prefix}${value}`

  }

  return ''

}

export const Column = ({ small, medium, large, extraLarge, className, ...attributes }, children) => {

  return () => {

    const classes = `col ${col('s', small)} ${col('m', medium)} ${col('l', large)} ${col('xl', extraLarge)}`.trim()

    return (

      <div className={ classes } { ...attributes }>

        { children }

      </div>

    )

  }

}
