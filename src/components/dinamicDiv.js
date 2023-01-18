class DinamicDiv extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    //component base
    const componentRoot = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = this.getAttribute('title')

    componentRoot.appendChild(title)

    //component style
    const style = document.createElement('style')
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

customElements.define('dinamic-div', DinamicDiv)
