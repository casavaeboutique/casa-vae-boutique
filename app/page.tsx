export default function Home() {
  const productos = [
    {
      nombre: "Vestido Floral",
      precio: "₡24.900",
      descripcion:
        "Diseño fresco y femenino para ocasiones especiales o uso casual.",
    },
    {
      nombre: "Blusa Elegante",
      precio: "₡18.500",
      descripcion:
        "Ideal para combinar con jeans, faldas o pantalones formales.",
    },
    {
      nombre: "Conjunto Casual",
      precio: "₡29.900",
      descripcion:
        "Comodidad y estilo en una sola opción para el día a día.",
    },
    {
      nombre: "Bolso Chic",
      precio: "₡21.500",
      descripcion:
        "Accesorio versátil para complementar cualquier look.",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Casa VAE Boutique
            </h1>
            <p className="text-sm text-slate-600">
              Moda femenina para compras en línea
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#inicio" className="hover:text-rose-500">
              Inicio
            </a>
            <a href="#productos" className="hover:text-rose-500">
              Productos
            </a>
            <a href="#nosotras" className="hover:text-rose-500">
              Nosotras
            </a>
            <a href="#contacto" className="hover:text-rose-500">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="mb-5 inline-block rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
              Nueva colección disponible
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Descubre tu estilo con{" "}
              <span className="text-rose-500">Casa VAE Boutique</span>
            </h2>

            <p className="mb-8 text-base leading-8 text-slate-600 md:text-lg">
              Tienda online especializada en productos femeninos. Encuentra
              prendas, accesorios y opciones modernas pensadas para resaltar tu
              estilo con elegancia y autenticidad.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#productos"
                className="rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
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
            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-bold">Moda femenina</h3>
              <p className="text-sm text-slate-600">
                Colecciones seleccionadas para mujeres que buscan estilo y
                comodidad.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-bold">Compras online</h3>
              <p className="text-sm text-slate-600">
                Una experiencia simple y clara para que tus clientas compren
                fácilmente.
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-rose-100 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-bold">Boutique con estilo</h3>
              <p className="text-sm text-slate-600">
                Base ideal para luego agregar carrito, catálogo completo,
                métodos de pago, Instagram, WhatsApp y formulario de pedidos.
              </p>
            </div>
          </div>
        </section>

        <section id="productos" className="border-y border-rose-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold text-rose-500">
                  Catálogo destacado
                </p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Productos destacados
                </h2>
              </div>

              <p className="max-w-2xl leading-7 text-slate-600">
                Puedes reemplazar estos productos de ejemplo por tus prendas
                reales, fotos, precios, tallas y descripciones.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {productos.map((producto) => (
                <article
                  key={producto.nombre}
                  className="rounded-3xl border border-rose-100 bg-rose-50 p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-52 items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-white text-sm text-slate-400">
                    Imagen del producto
                  </div>

                  <h3 className="mb-2 text-lg font-bold">{producto.nombre}</h3>
                  <p className="mb-2 font-semibold text-rose-500">
                    {producto.precio}
                  </p>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    {producto.descripcion}
                  </p>

                  <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white hover:opacity-90">
                    Ver producto
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="nosotras"
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
        >
          <div>
            <p className="mb-2 text-sm font-semibold text-rose-500">
              Sobre la boutique
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Una marca pensada para resaltar la esencia femenina
            </h2>
            <p className="mb-4 leading-8 text-slate-600">
              Casa VAE Boutique nace como un espacio de moda online para ofrecer
              productos femeninos con estilo, delicadeza y personalidad.
            </p>
            <p className="leading-8 text-slate-600">
              Aquí puedes incluir la historia de la marca, tu visión, los
              valores de la boutique y aquello que hace diferente tu tienda
              frente a otras opciones del mercado.
            </p>
          </div>

          <div className="rounded-3xl bg-rose-500 p-8 text-white shadow-lg">
            <h3 className="mb-4 text-2xl font-bold">
              Lo que puedes agregar después
            </h3>
            <ul className="list-disc space-y-3 pl-5 text-rose-50">
              <li>Carrito de compras</li>
              <li>Pasarela de pago</li>
              <li>Galería con fotos reales</li>
              <li>Sección de ofertas</li>
              <li>Opiniones de clientas</li>
              <li>Botón directo a WhatsApp</li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="border-t border-rose-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
            <div className="rounded-3xl border border-pink-100 bg-pink-50 p-8 shadow-sm">
              <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Contacto
              </h2>

              <p className="mb-6 text-xl italic text-pink-600 md:text-2xl">
                Elegancia que inspira, belleza con propósito ✨
              </p>

              <p className="mb-8 text-lg leading-9 text-slate-600 md:text-xl">
                Estamos para ayudarte a encontrar el outfit perfecto para cada
                ocasión. Escríbenos para consultas sobre tallas,
                disponibilidad, pedidos, envíos o asesoría personalizada.
              </p>

              <div className="space-y-4 text-lg text-slate-700 md:text-xl">
                <p>
                  <span className="font-semibold">Instagram:</span>{" "}
                  @casavaeboutique
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> +506
                  8589-3428
                </p>
                <p>
                  <span className="font-semibold">Correo:</span>{" "}
                  contacto@casavaeboutique.com
                </p>
                <p>
                  <span className="font-semibold">Horario:</span> Lunes a
                  sábado, 9:00 a.m. – 6:00 p.m.
                </p>
                <p>
                  <span className="font-semibold">Envíos:</span> A todo Costa
                  Rica 🚚💕
                </p>
              </div>
            </div>

            <form className="space-y-4 rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  className="w-full rounded-2xl border px-4 py-3"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Correo
                </label>
                <input
                  className="w-full rounded-2xl border px-4 py-3"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  className="w-full min-h-[130px] rounded-2xl border px-4 py-3"
                  placeholder="Escribe tu consulta"
                />
              </div>

              <button
                type="button"
                className="rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-rose-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Casa VAE Boutique. Todos los derechos reservados.</p>
          <p>Tienda online de productos femeninos.</p>
        </div>
      </footer>
    </div>
  );
}