export const Shop = ({shop }) => {
    return ( 
        <section className="ticket" >
        <header className="ticket-info" > {shop.name} </header>
        <div> {shop.description} </div>
        <footer>
            <div> ${shop.price} </div>
            <div> Item  #{shop.id}  </div>
            <div> Necessity? </div>
            <div> {shop.necessity ? "definitely" : "no" } </div>
        </footer>
        </section>
    )
}