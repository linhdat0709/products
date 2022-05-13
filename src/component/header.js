import { SearchOutlined , ShoppingOutlined } from "@ant-design/icons";
export default function Header(props){
    return(
        <div className="products--header">
            <header className="products--header_title">Danh sách sản phẩm</header>
                <div className="products--header_input">
                    <SearchOutlined className="header--search_icon" />
                    <input className="header--input" placeholder="Tên sản phẩm"/> 
                    <button className="header--btn"><SearchOutlined /></button> 
                    <ShoppingOutlined className="header--icon" /> 
                    <label className="header--icon_cout">{props.totalProduct}</label>
                </div>
        </div>
    )
}