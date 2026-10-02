let carrito = [];


function agregarCarrito(nombre, precio) {

    let productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

    alert(nombre + " agregado al carrito");
}



function actualizarCarrito() {

    let botonCarrito = document.querySelector(".carrito");

    let cantidadTotal = 0;


    carrito.forEach(function(producto) {

        cantidadTotal += producto.cantidad;

    });


    botonCarrito.innerHTML =
        "🛒 Carrito (" + cantidadTotal + ")";

}



function mostrarCarrito() {

    let ventana =
        document.getElementById("ventanaCarrito");


    ventana.style.display = "flex";


    let lista =
        document.getElementById("listaCarrito");


    let total = 0;


    lista.innerHTML = "";


    carrito.forEach(function(producto, index) {

        let subtotal =
            producto.precio * producto.cantidad;


        total += subtotal;


        lista.innerHTML += `

            <div class="producto-carrito">

                <div>

                    <strong>
                        ${producto.nombre}
                    </strong>

                    <br>

                    S/ ${producto.precio.toFixed(2)}

                </div>


                <div class="controles">

                    <button onclick="disminuirCantidad(${index})">
                        −
                    </button>


                    <span>
                        ${producto.cantidad}
                    </span>


                    <button onclick="aumentarCantidad(${index})">
                        +
                    </button>

                </div>


                <strong>
                    S/ ${subtotal.toFixed(2)}
                </strong>

            </div>

        `;

    });


    document.getElementById("totalCarrito").textContent =
        total.toFixed(2);

}



function aumentarCantidad(index) {

    carrito[index].cantidad++;

    actualizarCarrito();

    mostrarCarrito();

}



function disminuirCantidad(index) {

    carrito[index].cantidad--;


    if (carrito[index].cantidad <= 0) {

        carrito.splice(index, 1);

    }


    actualizarCarrito();

    mostrarCarrito();

}



function cerrarCarrito() {

    document.getElementById("ventanaCarrito").style.display =
        "none";

}