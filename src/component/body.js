
import Item from "./item"

export default function Body(props){
    
    const listProducts = props.products.map((item,index)=>{
        return <Item buy={props.buy} key={index} data={item} cart={props.cart} />
    })
    return(
        <div className="products--body">
            {listProducts}
        </div>
    )
}