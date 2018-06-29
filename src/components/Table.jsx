import { h } from 'hyperapp'

export const Table = ({ striped, highlight, centered, responsive, className }, children) => {

  return () => {

    const classes = []

    classes.push(className)

    if (striped) {

      classes.push('striped')

    }

    if (highlight) {

      classes.push('highlight')

    }

    if (centered) {

      classes.push('centered')

    }

    if (responsive) {

      classes.push('responsive-table')

    }

    return (

      <table className={ classes.jon(' ') } { ...props }>

        { children }

      </table>

    )

  }

}
