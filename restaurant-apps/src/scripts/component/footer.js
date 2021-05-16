class Footer extends HTMLElement {
    connectedCallback() {
      this.render();
  
    }
  
    render() {
      this.innerHTML = `
        <style>
        footer{
            padding: 20px;
            text-align: center;
        }
        </style>
        <footer>
            <p>Copyright © 2021 - FindRest</p>
        </footer>
        `;
    }
  }
  
  customElements.define('custom-footer', Footer);