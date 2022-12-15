class CardNews extends HTMLElement {
  constructor() {
    super() // this will invoke the constructor function from the class which this class is inheriting from (in this case HTMLElement)

    const shadow = this.attachShadow({ mode: 'open' }) // this line means that you are attaching a shadow to your class ("this" refers to the class we are in), and this shadow will be open to other js files to be manipulated. If we wanted only the class CardNews code to be abble to manipulate the shadow, we would define the mode as "closed".
    shadow.innerHTML = '<h1>Hello Filipe, this is your first component</h1>' // this line means that we will add to the constant shadow some HTML code, and this code is the tag h1 above with its content (prop).
  }
}

customElements.define('card-news', CardNews) // this line means that the component we are creating will be called "card-news" (we call this name selector, so the selector card-news will invoke this component) and this component is instanced from the class "CardNews". A component is formed by a collection of elements (p, h1, a tags and so on, each HTML tag is a component element). The component can have its own styles and properties (usually called props). Props are the content for each element (as tabs images have their own src), properties can be dymanic, so you can use a component in a dynamic manner.
// IMPORTANT: when defining the selector name, do not use camelCase because the browser once it parses the HTML page it will turn the selector name into lower case. By default the selector is written with hyphen.

// this selector card-news will be linked to the desired HTML document through the HTML tag <script> as it follows:
// <script src="./src/components/cardNews.js" defer></script>
// the defer boolean attribute tells to the browser that the script must be executed only after the HTML file is completely parsed.
// IMPORNTANT: check that when inspecting the HTML page you can notice that within the document element (DOM) you have a shadow DOM which is indicated by #shadow-root, which is your shadow DOM.
// you can add styles and properties to the copmonent, so instead of always been parsed with the same content, you can vary this content and style according to the context of which the component is invoked.
