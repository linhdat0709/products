import { useState } from "react"
export default function Item(props){
    const [valueInput,setValueInput] = useState(1);
    function onChangeInput(e){
        const [value] = e.target;
        setValueInput(value);
    }

    function cong(){
        setValueInput(valueInput+1);
    }

    function tru(){
        setValueInput(valueInput-1);
        if(valueInput===1){
            setValueInput(1);
        }
    }
    const data = {
        ...props.data,
        soLuong:valueInput
    }
    const cartSelected = props.cart.find(item => item.id===props.data.id);
    return(
        <div className="item--contain">
            <img src={props.data.image} className="item--img"/>
            <p className="item--name">{props.data.name}</p>
            <p className="item--price">{props.data.price}</p>
            <button className="item--btn" onClick={cong}>+</button>
            <input className="item--input" onChange={onChangeInput} value={valueInput}/>
            <button className="item--btn" onClick={tru}>-</button>
            <button disabled={cartSelected ? true : false} className={cartSelected?"item--btn_disable":"item--btn_add"} onClick={()=>props.buy(data)}>Thêm vào giỏ</button>
        </div>
    )
}