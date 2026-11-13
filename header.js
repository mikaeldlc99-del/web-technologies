class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <nav class="navbar">
                <a href="#" class="nav-item"><i class="fa-solid fa-bars"></i></a>
                <ul class="nav-links">
                    <li><a href="../index.html" class="nav-item-house"><i class="fa-solid fa-house"></i></a></li>
                    <li><a href="html.html">HTML</a></li>
                    <li><a href="css.html">CSS</a></li>
                    <li><a href="javascript.html">JAVASCRIPT</a></li>
                    <li><a href="sql.html">SQL</a></li>
                    <li><a href="express.html">EXPRESS</a></li>
                    <li><a href="react.html">REACT</a></li>
                </ul>
            </nav>

            <div class="search-container">
                <p id="demo"></p>
                <input type="text" id="search-input" class="search-input" placeholder="Buscar tema..." />
                <a href="#" class="nav-item-search" id="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </header>
        `;

        // Lógica directa dentro del componente (nunca falla)
        const searchBtn = this.querySelector('#search-btn');
        const searchInput = this.querySelector('#search-input');

        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });

        searchInput.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase();
            const elementos = document.querySelectorAll('p:not(#demo), section, article');

            elementos.forEach((el) => {
                const coincide = el.textContent.toLowerCase().includes(texto);
                el.style.display = coincide ? '' : 'none';
            });
        });
    }
}

customElements.define('my-header', MyHeader);

