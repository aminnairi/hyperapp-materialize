export const Row = ({ className, ...attributes }, children) => {

  return () => {

    return (

      const classes = `row${ className }`

      <div class='row' { ...attributes }>

        { children }

      </div>

    )

  }

}
