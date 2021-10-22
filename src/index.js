import nav from "./nav";
import { footer } from "./footer";
const loadFooter = () => import("./footer")
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import './footer.css';
import './button.css';
import imageURL from './webpack-logo.jpg'
import makeImage from "./image";
import Foo from "./foo.ts";


const button = makeButton("My first button!")
button.style = makeColorStyle("pink")
document.body.appendChild(button)
button.addEventListener("click", e => {
  loadFooter().then(m => {
    document.body.appendChild(m.footer)
  })
})

const image = makeImage(imageURL)

document.body.appendChild(image)
