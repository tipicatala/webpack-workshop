import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import './footer.css';
import './button.css';
import imageURL from './webpack-logo.jpg'
import makeImage from "./image";

const button = makeButton("My first button!")
button.style = makeColorStyle("pink")
document.body.appendChild(button)
document.body.appendChild(footer)

const image = makeImage(imageURL)

document.body.appendChild(image)
