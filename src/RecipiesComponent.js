function RecipiesComponent({label, image, calories, ingredients, totalDaily}) {
    return(
        <div className="ricepies">
            <div>
                <h2>{label}</h2>
                {/* <p>{calories.toFixed()}calories</p> */}
                {/* <p>{totalDaily.PROCNT.quantity.toFixed()}</p> */}
                <img src={image} alt='recipes'/>
            </div>

            <ul>
                {ingredients.map((ingredient, index)  => (
                    <li key={index}> {ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipiesComponent