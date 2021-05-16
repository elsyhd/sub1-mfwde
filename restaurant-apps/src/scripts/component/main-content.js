import data from '../../DATA.json';

class Main extends HTMLElement {
    connectedCallback() {
      this.render();
  
    }
  
    render() {
      this.innerHTML = `
        <style>
        .container__title{
            text-align: center;
            padding: 40px;
        }
        
        .card__container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 30px;
        }
        
        .card{
            width: 100%;
            text-align: center;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            border-radius: 1em;
            background-color: #ffffff;
        }
        
        .card__image__container{
            width: 100%;
            position: relative;
            overflow: hidden;
            max-height: 300px;
            min-height: 200px;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
            transition: transform 0.5s ease;
        }
        
        .card__image__container img{
            max-width: 100%;
        }
        
        .card-a{
            text-decoration: none;
            color: #222222;
       }
       
       .card__image__container img:hover{
           transform: scale(1.3);
       }

        .card__content{
            padding: 24px;
        }
        
        .card__title{
            margin-bottom: 10px;
            margin-top: 10px;
        }
        
        .card__rating {
            top: 0;
            right: 0;
            color: #222222;
            font-size: large;
            z-index: 1;
        }
        
        .card__description{
            padding-top: 10px;
        }
        
        .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            background-color: var(--primary-color);
        }
        
        .left{
            text-align: left;
        }

        @media only screen and (max-width: 800px) {
            .card__container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto;
                grid-gap: 30px;
                padding: 5%;
            }
        }

        
        @media only screen and (max-width: 600px) {
            .card__container{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                grid-gap: 30px;
                padding: 5%;
            }
        }
        </style>

        <div class="container">
            <div class="main">
                <div class="container__title">
                    <h2>Explore Restaurant</h2>
                </div>
                <div class="card__container" id="card__container"></div>
            </div>
        </div>
        `;
    }
  }
  
customElements.define('main-content', Main);

let datarest = '';
data.restaurants.forEach ((restaurants) =>{
    datarest += `
    <div class="card">
        <a href="#" class="card-a"><div class="card__image__container">
            <img src="${restaurants.pictureId}" alt="${restaurants.name}">
        </div>
        <div class="card__content">
            <h3 class="card__title">${restaurants.name}</h3>
            <p class="card__rating left"><i class="fa fa-star-o" aria-hidden="true"></i>  ${restaurants.rating}</p>
            <p class="card__location left"><i class="fa fa-map-marker" aria-hidden="true"></i>  ${restaurants.city}</p>
            <p class="card__description truncate left">${restaurants.description}</p>
        </div></a>
    </div>
    `;
});

document.getElementById('card__container').innerHTML = datarest;