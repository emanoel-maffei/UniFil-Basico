// para orientar o usuário
alert("Redimencione a janela para vizualisar a renponsividade.")

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        // definindo propriedades
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.mobileMenuClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index, nodeList) => {
            // link (1° pos.) - elemento atual
            // index (2° pos.) - indice atual
            // nodeList (3° pos.) - nodeList
            /*
            uso de "if ternário" ou "operador ternário"
            estrutura:
            condição ? caso seja true : caso seja false
            */
            link.style.animation ?
            link.style.animation = "" :
            link.style.animation = `navLinkFade 0.75s ease 0.${index + 1}s forwards`

            // o JS interpreta isto "" como false,
            // se houver valor é interpretado como true
        })
    }

    mobileMenuClick() {
        // console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickedEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickedEvent();
        }
    }
}

// a variavel/constante não pode ter o mesmo
// nome da classe criada (MobileNavBar)
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

