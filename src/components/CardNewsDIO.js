class CardnewsDIO extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRootNew = document.createElement('div')
    componentRootNew.setAttribute('class', 'container')

    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const author = document.createElement('span')
    author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous')

    const linkTitle = document.createElement('a')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')

    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    cardLeft.appendChild(author)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')

    const newsImage = document.createElement('img')
    newsImage.src =
      this.getAttribute('photo') ||
      './assets/images/armadura-darth-vader-1920x1024.jpg'
    newsImage.alt = "News's picture"
    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    componentRootNew.appendChild(componentRoot)

    return componentRootNew
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
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
      
      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        padding: 0 2rem 0 0;
      }
      
      .card__left span {
        font-weight: 700;
      }
      
      .card__left a {
        margin: 15px 0 5px 0;
        font-size: 35px;
        color: black;
        font-weight: bold;
        text-decoration: none;
      }
      
      .card__left p {
        color: gray;
      }
      
      .card__right {
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

customElements.define('card-news-dio', CardnewsDIO)
