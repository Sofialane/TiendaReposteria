    class Product { // Representación de algo del mundo real.
        constructor(id, name, description, price, stock, offer, category) {
            this.id = id
            this.name = name
            this.description = description
            this.price = price
            this.stock = stock
            this.offer = offer
            this.category = category
        }


        asInnerHTMLForMainList(){
            return (
                `<span class="product">
                            <div class="img">
                                <a href="#"><img alt="${this.name}" src="../imgs/post${this.id}.jpg"></a>
                            </div>
                            <div class="info">
                                <a class="nombre" href="#">${this.name}</a>
                                <p>${this.description}</p>
                                <div class="precio">
                                    <span class="st">Precio:</span><strong>$${this.price}</strong>
                                </div>
                                <div class="agregar">
                                    <button onclick="addToCart('${this.id}')">Agregar</a>
                                </div>
                            </div>
                </span>`
            )
        }
    } 

