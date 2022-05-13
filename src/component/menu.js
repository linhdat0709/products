import { useState } from "react"

export default function Menu(){
    const headerData = [
        {
            type:"sppb",
            title:"Sản phẩm phổ biến"
        },
        {
            type:"spkm",
            title:"Sản phẩm khuyến mãi"
        },
        {
            type:"spm",
            title:"Sản phẩm mới"
        }
    ]

    const [typeProduct,setTypeProduct] = useState("sppb");

    return(
        <ul className="products--menu">
            {
                headerData.map(item=>{
                    return(
                        <li key={item.type} className={`products--menu_list ${item.type===typeProduct ? "product--menu_select":"" } `}>
                            <span className="products--menu_title">{item.title}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}