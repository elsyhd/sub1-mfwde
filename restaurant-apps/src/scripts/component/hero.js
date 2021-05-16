class Hero extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <style>
        .hero {
            display: flex;
            flex-direction: column;
            height: 90vh;
            width: 100%;
            text-align:left;
            background: url('/images/heros/hero.jpg');
            background-position: center;
            background-color: #222222;
            object-fit: cover;
            padding: 0 15%;
        }
        
        .hero__caption{
            color: #ffffff;
            padding: 15%;
            font-family: 'Quicksand', sans-serif;
        }
        
        .a{
            margin-bottom: 5%;
        }
        
        .hero__title{
            font-size: 38px;
        }
        
        .hero__caption p{
            font-size: 24px;
        }
        
        .hero__btn{
            color: #ffffff;
            text-decoration: none;
            background-color: #62929a;
            border-radius: 5px;
            padding: 7px;
            min-height: 44px;
            font-size: 24px;
        }

        @media only screen and (max-width: 800px) {
            .hero {
                height: 90vh;
                width: 100%;
                text-align:left;
                background: url('/images/heros/hero.jpg');
                background-position: center;
                background-color: #222222;
                object-fit: cover;
                padding: 0 15%;
            }

            .hero__title{
                font-size: 30px;
            }
            
            .hero__caption p{
                font-size: 22px;
            }
        }

        
        @media only screen and (max-width: 600px) {
            .hero {
                height: 90vh;
                width: 100%;
                text-align:left;
                background: url('/images/heros/hero.jpg');
                background-position: center;
                background-color: #222222;
                object-fit: cover;
                padding: 0 15%;
            }

            .hero__title{
                font-size: 28px;
            }
            
            .hero__caption p{
                font-size: 20px;
            }
        }
    </style>        

        <div class="hero">
            <div class="hero__caption">
                <div class="a">
                    <h1 class="hero__title"> Welcome to FindRest!</h1>
                    <p>Are you hungry? Let's find the best restaurant near you!</p>
                </div>
                <br>
                <a href="#main-content" class="hero__btn">Explore now</a>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define('custom-hero', Hero);