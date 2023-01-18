class DinamicTitle extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    //component base
    const componentRoot = document.createElement('h1') // when you invoke the method createElement from DOM it gives you access to every HTML5 tag.
    //componentRoot.textContent = 'Filipe Zeferino' // So basecally you created a H1 HTML tag with the content "Filipe Zeferino" in it
    componentRoot.textContent = this.getAttribute('title') // using this strategy you can specify the text content of the component when you invoke it on the HTML document

    //component style
    const style = document.createElement('style') // here you are creating an HTML style tag (the one you can you on the HTML head tag), refer to it on DEV notes. We will add its content using template string, so that we can apply dynamic styles to it later on using JS.
    // IMPORTANT: all styles you create for a component are scoped, so they will only work for that component they belong to. Remember that this component is created in a shadow which is kind of independent of DOM.
    style.textContent = `
    h1 {
      color: red;
      padding: 2rem;
    }
    `

    //send component to shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define('dinamic-title', DinamicTitle)
