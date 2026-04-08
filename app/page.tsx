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
              Nuestra Historia
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
              estilo con elegancia, autenticidad y propósito.
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
                Colecciones seleccionadas para mujeres que buscan estilo,
                feminidad y comodidad.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-bold">Compras online</h3>
              <p className="text-sm text-slate-600">
                Una experiencia simple y especial para que cada clienta compre
                con facilidad.
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-rose-100 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-bold">Boutique con propósito</h3>
              <p className="text-sm text-slate-600">
                Más que moda, una marca pensada para inspirar confianza,
                elegancia y belleza con propósito.
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

        <section id="nosotras" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Nuestra Historia
              </h2>

              <div className="space-y-6 text-lg leading-9 text-slate-600">
                <p>
                  Casa VAE Boutique nació del deseo de crear más que una tienda:
                  un espacio que inspire a cada mujer a reconocer su valor, su
                  belleza y la gracia que Dios ha puesto en ella.
                </p>

                <p>
                  El nombre{" "}
                  <span className="font-semibold text-rose-500">VAE</span>{" "}
                  representa tres pilares que guían nuestra esencia:{" "}
                  <span className="font-semibold">Virtud, Amor y Elegancia</span>.
                  Creemos que la verdadera elegancia no comienza con una prenda,
                  sino con el corazón de una mujer que conoce su valor y camina
                  con confianza y propósito.
                </p>

                <p>
                  Casa VAE fue pensada como un hogar, un lugar donde cada pieza,
                  cada accesorio y cada detalle reflejen feminidad, delicadeza y
                  estilo, recordando que la belleza más profunda nace del
                  interior.
                </p>

                <p>
                  Nuestra misión es ofrecer prendas y accesorios que acompañen a
                  las mujeres en su día a día, ayudándolas a expresar su esencia
                  con elegancia, sencillez y autenticidad.
                </p>

                <p>
                  Más que moda, Casa VAE Boutique busca inspirar: inspirar
                  confianza, inspirar belleza y recordar a cada mujer que su luz
                  y su valor siempre pueden brillar.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl bg-rose-500 p-8 text-white shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">✨ Misión</h3>
                <p className="text-lg leading-8 text-rose-50">
                  Inspirar a las mujeres a expresar su esencia, confianza y
                  elegancia a través de prendas y accesorios cuidadosamente
                  seleccionados, recordando que la verdadera belleza nace de un
                  corazón lleno de gracia, valor y propósito.
                </p>
              </div>

              <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  🌿 Visión
                </h3>
                <p className="text-lg leading-8 text-slate-600">
                  Ser una boutique que inspire a mujeres a caminar con
                  elegancia, confianza y propósito, convirtiéndonos en una marca
                  que refleje belleza interior, estilo auténtico y una esencia
                  que honre la feminidad creada por Dios.
                </p>
              </div>

              <div className="rounded-3xl border border-rose-100 bg-rose-50 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Lo que puedes agregar después
                </h3>
                <ul className="list-disc space-y-3 pl-5 text-lg text-slate-600">
                  <li>Carrito de compras</li>
                  <li>Pasarela de pago</li>
                  <li>Galería con fotos reales</li>
                  <li>Sección de ofertas</li>
                  <li>Opiniones de clientas</li>
                  <li>Botón directo a WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-rose-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
            <div className="rounded-3xl border border-pink-100 bg-pink-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                Contacto
              </h2>

              <p className="mb-6 text-lg italic text-pink-600 md:text-xl">
                Elegancia que inspira, belleza con propósito ✨
              </p>

              <p className="mb-8 text-base leading-8 text-slate-600 md:text-lg">
                Estamos para ayudarte a encontrar el outfit perfecto para cada
                ocasión. Escríbenos para consultas sobre tallas,
                disponibilidad, pedidos, envíos o asesoría personalizada.
              </p>

              <div className="space-y-4 text-base text-slate-700 md:text-lg">
                <p>
                  <span className="font-semibold">Instagram:</span>{" "}
                  <a
                    href="https://www.instagram.com/casavaeboutique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 hover:underline"
                  >
                    @casavaeboutique
                  </a>
                </p>

                <p>
                  <span className="font-semibold">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/50685893428"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 hover:underline"
                  >
                    +506 8589-3428
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Correo:</span>{" "}
                  <a
                    href="mailto:contacto@casavaeboutique.com"
                    className="text-rose-500 hover:underline"
                  >
                    contacto@casavaeboutique.com
                  </a>
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

            <div className="rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">
                Escríbenos por WhatsApp
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Correo
                  </label>
                  <input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full rounded-2xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Escribe tu consulta"
                    className="w-full min-h-[150px] rounded-2xl border px-4 py-3"
                  />
                </div>

                <a
                  href="https://wa.me/50685893428?text=Hola%20Casa%20VAE%20Boutique,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-rose-600"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>
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