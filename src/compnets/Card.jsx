
import Buttons from "./button/Buttons"
import Apps from "/src/Apps.module.css"


let card = (props) =>{

   return(
    <div className={
        Apps.cont
    }>
        <div className={Apps.divone}>
            <img className={
                Apps.imgs
            } src="/public/355863859_1641022969740429_5860447174086291777_n.jpg"  alt={props.text} />
        </div>
        <div className={Apps.divtwo}>
            <h1>Moyses Maciel V. Silva</h1>
            <hr />
            <p>Dv Front-end/ Javascript, React e Sass/Scss</p>
            <hr />
            <p>(27) 98157-6419</p>
            <hr />
            <p><a className="" href="">Moysesmv@msn.com</a></p>
            <hr />
            <Buttons text="Linkedin"/>
            <Buttons text="Github"/>
            <Buttons text="Curriculo"/>
        </div>
    </div>
   )
   
}

export default card