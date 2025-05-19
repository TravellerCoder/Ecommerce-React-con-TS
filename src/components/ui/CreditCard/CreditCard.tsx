

export const CreditCard = () => {
  return (
    <div>

        <div>
            {/*card*/}
        </div>

        <form>
            <div>
                <label htmlFor="number" > Numero de tajerta </label>
                <input type="text" id="number" name="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
            </div>
            <div>
                <label htmlFor="name" > Nombre de titular </label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="expiry" > Vencimiento </label>
                <input type="text" id="expiry" name="expiry"  />
            </div>
            <div>
                <label htmlFor="CVC" > Codigo CVC </label>
                <input type="text" id="CVC" name="CVC" />
            </div>
        </form>

    </div>
  )
}
