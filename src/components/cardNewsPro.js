class CardNewsPro extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build()) //so that you can append to the shadow the results from build()
    shadow.appendChild(this.styles()) //so that you can append to the shadow the results from styles()
  }

  //component base
  build() {
    //root element
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'container')

    //card
    const componentCard = document.createElement('div')
    componentCard.setAttribute('class', 'card')

    //cardLeft and children elements
    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'cardLeft')

    const author = document.createElement('span')
    author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous')

    const link = document.createElement('a')
    link.textContent = this.getAttribute('title')
    link.href = this.getAttribute('link-url')

    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('news-content')

    cardLeft.appendChild(author)
    cardLeft.appendChild(link)
    cardLeft.appendChild(newsContent)

    //elements cardRight
    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'cardRight')
    const img = document.createElement('img')
    img.src =
      this.getAttribute('photo') ||
      './assets/images/armadura-darth-vader-1920x1024.jpg'
    img.alt = this.getAttribute('alt') || 'alternative text for image'
    cardRight.appendChild(img)

    componentCard.appendChild(cardLeft)
    componentCard.appendChild(cardRight)

    componentRoot.appendChild(componentCard)

    return componentRoot
  }

  //component style
  styles() {
    const style = document.createElement('style')
    style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
      }
      .container {
        padding: 2rem;
        width: 100vw;
      }
      .card {
        display: flex;
        flex-direction: row;
        padding: 2rem;
        box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
      }
      
      .cardLeft {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        padding: 0 2rem 0 0;
      }
      
      .cardLeft span {
        font-weight: 700;
      }
      
      .cardLeft a {
        margin: 15px 0 5px 0;
        font-size: 35px;
        color: black;
        font-weight: bold;
        text-decoration: none;
      }
      
      .cardLeft p {
        color: gray;
      }
      
      .cardRight {
        width: 30%;
      }
      
      img {
        max-width: 100%;
        height: 150px;
      }
    `
    return style
  }
}

// defind component HTML tag
customElements.define('card-news-pro', CardNewsPro)
