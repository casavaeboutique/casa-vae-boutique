export default function Home() {
  const productos = [
    {
      nombre: "Vestido Floral",
      precio: "$39.99",
      descripcion: "Diseño fresco y femenino para ocasiones especiales o uso casual.",
    },
    {
      nombre: "Blusa Elegante",
      precio: "$24.99",
      descripcion: "Ideal para combinar con jeans, faldas o pantalones formales.",
    },
    {
      nombre: "Conjunto Casual",
      precio: "$44.99",
      descripcion: "Comodidad y estilo en una sola opción para el día a día.",
    },
    {
      nombre: "Bolso Chic",
      precio: "$50.99",
      descripcion: "Accesorio versátil para complementar cualquier look.",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Casa VAE Boutique
            </h1>
            <p className="text-sm text-slate-600">
              Moda femenina para compras en línea
            </p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-rose-500">Inicio</a>
            <a href="#productos" className="hover:text-rose-500">Productos</a>
            <a href="#nosotras" className="hover:text-rose-500">Nosotras</a>
            <a href="#contacto" className="hover:text-rose-500">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700 mb-5">
              Nueva colección disponible
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Descubre tu estilo con <span className="text-rose-500">Casa VAE Boutique</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-8 mb-8">
              Tienda online especializada en productos femeninos. Encuentra prendas,
              accesorios y opciones modernas pensadas para resaltar tu estilo con
              elegancia y autenticidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#productos"
                className="rounded-2xl bg-rose-500 px-6 py-3 text-white font-semibold shadow hover:opacity-90"
              >
                Comprar ahora
              </a>
              <a
                href="#contacto"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-md border border-rose-100">
              <h3 className="text-lg font-bold mb-2">Moda femenina</h3>
              <p className="text-sm text-slate-600">
                Colecciones seleccionadas para mujeres que buscan estilo y comodidad.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-md border border-rose-100">
              <h3 className="text-lg font-bold mb-2">Compras online</h3>
              <p className="text-sm text-slate-600">
                Una experiencia simple y clara para que tus clientas compren fácilmente.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-md border border-rose-100 col-span-2">
              <h3 className="text-lg font-bold mb-2">Boutique con estilo</h3>
              <p className="text-sm text-slate-600">
                Base ideal para luego agregar carrito, catálogo completo, métodos de pago,
                Instagram, WhatsApp y formulario de pedidos.
              </p>
            </div>
          </div>
        </section>

        <section id="productos" className="bg-white border-y border-rose-100">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-semibold text-rose-500 mb-2">Catálogo destacado</p>
                <h2 className="text-3xl md:text-4xl font-bold">Productos destacados</h2>
              </div>
              <p className="max-w-2xl text-slate-600 leading-7">
                Puedes reemplazar estos productos de ejemplo por tus prendas reales,
                fotos, precios, tallas y descripciones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productos.map((producto) => (
                <article
                  key={producto.nombre}
                  className="rounded-3xl border border-rose-100 bg-rose-50 p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-52 rounded-2xl bg-white border border-dashed border-rose-200 flex items-center justify-center text-sm text-slate-400 mb-4">
                    Imagen del producto
                  </div>
                  <h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>
                  <p className="text-rose-500 font-semibold mb-2">{producto.precio}</p>
                  <p className="text-sm text-slate-600 leading-6 mb-4">{producto.descripcion}</p>
                  <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white font-medium hover:opacity-90">
                    Ver producto
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotras" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-rose-500 mb-2">Sobre la boutique</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Una marca pensada para resaltar la esencia femenina
            </h2>
            <p className="text-slate-600 leading-8 mb-4">
              Casa VAE Boutique nace como un espacio de moda online para ofrecer
              productos femeninos con estilo, delicadeza y personalidad.
            </p>
            <p className="text-slate-600 leading-8">
              Aquí puedes incluir la historia de la marca, tu visión, los valores
              de la boutique y aquello que hace diferente tu tienda frente a otras
              opciones del mercado.
            </p>
          </div>
          <div className="rounded-3xl bg-rose-500 text-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Lo que puedes agregar después</h3>
            <ul className="space-y-3 list-disc pl-5 text-rose-50">
              <li>Carrito de compras</li>
              <li>Pasarela de pago</li>
              <li>Galería con fotos reales</li>
              <li>Sección de ofertas</li>
              <li>Opiniones de clientas</li>
              <li>Botón directo a WhatsApp</li>
            </ul>
          </div>
        </section>

<section className="bg-pink-50 border border-pink-100 rounded-3xl p-10 shadow-sm">
  <h2 className="text-5xl font-bold text-slate-900 mb-4">
    Contacto
  </h2>

  <p className="text-2xl text-pink-600 italic mb-6">
    Elegancia que inspira, belleza con propósito ✨
  </p>

  <p className="text-xl text-slate-600 leading-9 mb-8">
    Estamos para ayudarte a encontrar el outfit perfecto para cada ocasión.
    Escríbenos para consultas sobre tallas, disponibilidad, pedidos,
    envíos o asesoría personalizada.
  </p>

  <div className="space-y-4 text-xl text-slate-700">
    <p>
      <span className="font-semibold">Instagram:</span> @casavaeboutique
    </p>
    <p>
      <span className="font-semibold">WhatsApp:</span> +506 8589-3428
    </p>
    <p>
      <span className="font-semibold">Correo:</span> contacto@casavaeboutique.com
    </p>
    <p>
      <span className="font-semibold">Horario:</span> Lunes a sábado, 9:00 a.m. – 6:00 p.m.
    </p>
    <p>
      <span className="font-semibold">Envíos:</span> A todo Costa Rica 🚚💕
    </p>
  </div>
</section>

            <form className="rounded-3xl bg-white border border-rose-100 p-8 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Correo</label>
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea className="w-full min-h-[130px] rounded-2xl border px-4 py-3" placeholder="Escribe tu consulta" />
              </div>
              <button
                type="button"
                className="rounded-2xl bg-rose-500 px-6 py-3 text-white font-semibold shadow hover:opacity-90"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-sm text-slate-600">
          <p>© 2026 Casa VAE Boutique. Todos los derechos reservados.</p>
          <p>Tienda online de productos femeninos.</p>
        </div>
      </footer>
    </div>
  );
}