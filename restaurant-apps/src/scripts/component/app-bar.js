class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();

    }

    render() {
        this.innerHTML = `
        <style>
        .row{
            display: flex;
            flex-wrap: wrap;
        }
        .header{
            left:0;
            top:0;
            width: 100%;
        
        }
        .header .row{
            justify-content: space-between;
            align-items: center;
            padding: 15px;
        }
        
        .header .logo a{
            font-size: 32px;
            text-decoration: none;
            color:#333333;
            font-weight: 600;
            min-height: 44px;
        }
        
        .nav-toggle{
            border: none;
            background-color: #ffffff;
        }
        
        .header .nav-toggle span{
            height: 44px;
            display: block;
            position: relative;
            cursor: pointer;
        }

        .close{
            border: none;
            background-color: #000000;
        }
        
        
        /*nav*/
        .nav-overlay{
            position: fixed;
            left:0;
            top:0;
            z-index: 499;
            background-color: rgba(0,0,0,0.5);
            height: 100%;
            width: 100%;
            transform: translateX(-100%);
        }
        
        .nav-overlay.open{
            transform: translateX(0%);	
        }
        
        .nav{
            position: fixed;
            left:0;
            top:0;
            background-color: #111111;
            height: 100%;
            width: 260px;
            z-index: 500;
            transform: translateX(-260px);
            overflow-y: auto;
        }
        
        .nav .head{
            position: sticky;
            position: -webkit-sticky;
            top:0;
            z-index: 501;
            background-color: #111111;
            width: 100%;
        }
        
        .nav.open{
            transform: translateX(0px);	
        }
        
        .nav strong{
            height:50px;
            color: #dddddd;
            font-size: 16px;
            text-align: left;
            line-height: 50px;
            padding:0 50px 0 15px;
            display: block;
            width: 100%;
            font-weight: 600;
            border-bottom: 1px solid #333333;
        }
        
        .nav .close{
            position: absolute;
            height: 50px;
            width: 50px;
            right:0;
            top:0;
            font-size: 32px;
            color:#dddddd;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
        }
        
        .nav ul{
            margin:10px 0 0;
            padding:0;
            list-style: none;
        }
        
        .nav ul li{
            display: block;
        }
        
        .nav ul li a{
            color: #ffffff;
            font-size: 16px;
            text-transform: capitalize;
            text-decoration: none;
            display: block;
            padding: 8px 15px;
            position: relative;
            transition:all 0.5s ease;
            line-height: 44px;
        }
        
        .nav ul li a:before{
            content: '';
            position: absolute;
            left:0;
            top:0;
            width:0px;
            height: 100%;
            background-color: #ffffff;
            z-index: -1;
            transition:all 0.5s ease;
        }
        
        .nav ul li a:hover:before{
            width: 100%;
        }
        
        .nav ul li a:hover{
            color: #111111;
        }
        
        </style>

        <div class="container">
            <div class="row">
                <div class="logo">
                    <a href="#">FindRest</a>
                </div>
                <button class="nav-toggle">
                    <span><i class="fa fa-bars fa-3x" aria-hidden="true"></i></span>
                </button>
            </div>
        </div>
        <div class="nav-overlay"></div>
        <nav class="nav">
            <div class="head">
            <strong>Menu</strong>
            <button class="close">&times;</button>
        </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="https://www.instagram.com/el.syhd/">About Us</a></li>
            </ul>
        </nav>

      `;
    }
}

customElements.define('app-bar', AppBar);