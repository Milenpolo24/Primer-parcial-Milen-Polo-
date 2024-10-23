// Agregar productos al carrito
let carrito = [];
const carritoCount = document.getElementById('carrito-count');
const carritoProductos = document.getElementById('carrito-productos');
const totalElement = document.getElementById('total');

document.querySelectorAll('.agregar').forEach(boton => {
    boton.addEventListener('click', function() {
        const nombre = this.dataset.nombre;
        const precio = parseFloat(this.dataset.precio);

        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

// Actualizar el carrito y el total
function actualizarCarrito() {
    carritoCount.textContent = carrito.length;
    carritoProductos.innerHTML = '';

    let total = 0;
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.nombre} - $${item.precio}`;
        carritoProductos.appendChild(div);
        total += item.precio;
    });

    totalElement.textContent = `Total: $${total}`;
}

// Filtro de productos
document.getElementById('busqueda').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        if (nombre.includes(filtro)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});
