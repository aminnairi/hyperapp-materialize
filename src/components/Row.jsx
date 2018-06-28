export const Row = ({ className, ...attributes }, children) => {

  return () => {

    const classes = `row${ className }`

    return (

      <div class='row' { ...attributes }>

        { children }

      </div>

    )

  }

}
