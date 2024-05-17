let libros = [
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel Garcia Marquez',
        genero: 'Literatura Colombiana',
        idioma: 'Español',
        precio: 47000,
        formato: 'Libro',
        isbn: 9789588886213,
        descripcion: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.',
        estado: 'nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '05/06/1967',
        editorial: 'DEBOLSILLO',
        paginas: 493,
        dimensiones: 'ancho: 13cm - alto: 19cm',
        peso:'50grs'
    },
    {
        titulo: 'El color de las cosas',
        autor: 'Martin Panchaud',
        genero: 'comics',
        idioma: 'Español',
        precio: 89000,
        formato: 'Libro',
        isbn: 9788419437716,
        descripcion: 'Simon Hope es un muchacho inglés de 14 años, un poco rollizo, del que los chavales del barrio se burlan a menudo. Un día, después de que una adivina le revele cuál será el caballo ganador de la Royal Ascot, decide apostar ingenuamente todos los ahorros familiares... ¡y gana 16 millones de libras! Pero, al volver a casa, Simon descubre que, al contrario de lo que pensaba, sus problemas no han hecho más que empezar...',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '25/01/2024',
        editorial: 'RESERVOIR',
        paginas: 233,
        dimensiones: 'Ancho: 18cm - Alto: 24cm',
        peso:'50grs'
    },
    {
        titulo: 'MITOS Y LEYENDAS DE LA ANTIGUA GRECIA',
        autor: 'Joaquin Arias',
        genero: 'Mitologia',
        idioma: 'Español',
        precio: 100000,
        formato: 'Libro',
        isbn: 9788419599353,
        descripcion: 'Descubre los mitos y leyendas de la Grecia clásica que han sentado las bases de la identidad de la cultura occidental: el poder de Zeus, la fuerza de Heracles, el drama de Antígona, la voracidad del Minotauro o la audacia de Prometeo, gracias a esta completa selección de relatos ilustrados.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '22/01/2024',
        editorial: 'ALMA',
        paginas: '141',
        dimensiones: 'Ancho: 19cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: 'EVA MORDIO LA MANZANA',
        autor: 'Flavia Dos Santos',
        genero: 'Sexologia',
        idioma: 'Español',
        precio: 49900,
        formato: 'Libro',
        isbn: 9786287667723,
        descripcion: 'En una sociedad que ha avanzado tanto en las últimas décadas, la discriminación y los dobles estándares siguen existiendo con respecto a las mujeres de más de cincuenta años y continúan haciéndoles un daño irreparable que no les permite vivir plenas y liberadas en lo que debería ser la mejor época de sus vidas. ',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '12/07/2023',
        editorial: 'SIN FRONTERAS',
        paginas: '153',
        dimensiones: 'Ancho: 19cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: 'ANATOMIA DEL MAL',
        autor: 'JORDI WILD',
        genero: 'Crónica y testimonio',
        idioma: 'Español',
        precio: 55000,
        formato: 'libro',
        isbn: 9786287634411,
        descripcion: 'Un viaje inquietante por el oscuro y tenebroso mundo del crimen y la maldad. Los secretos más oscuros de los criminales más crueles y salvajes.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '11/03/2024',
        editorial: 'EDICIONES B',
        paginas: '300',
        dimensiones: 'Ancho: 15cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: 'PERPENDICULAR AL SOL',
        autor: 'VALENTINE CUNY LE CALLET',
        genero: 'Comics',
        idioma: 'Español',
        precio: 189000,
        formato: 'libro',
        isbn: 9788419409140,
        descripcion: 'En 2016, con tan solo diecinueve años, Valentine Cuny-Le Callet inicia un intercambio epistolar con Renaldo McGirth. Condenado a muerte por un crimen cometido a sus dieciocho años, Renaldo lleva encerrado más de una década en el corredor de la muerte en una prisión de Florida. De todas sus cartas, de las imágenes que intercambian nace este relato de sus vidas paralelas.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '12/04/2024',
        editorial: 'SALAMANDRA',
        paginas: '437',
        dimensiones: 'Ancho: 19cm - Alto: 25cm',
        peso:'50grs'
    },
    {
        titulo: 'LA VERDADERA HISTORIA DE COLOMBIA',
        autor: 'HERNANDO GOMEZ BUENDIA',
        genero: 'Historia colombiana',
        idioma: 'Español',
        precio: 90000,
        formato: 'libro',
        isbn: 9786287589124,
        descripcion: 'Este libro es una crónica, una radiografía y una guía para entender al país.  La verdadera historia de Colombia es un libro apasionante y retador, resultado de toda una vida de investigación y trabajo, que recoge los hechos más importantes de la historia de Colombia para entender con perspectiva los grandes dilemas de nuestro presente. Una revisión y ampliación rigurosa de lo presentado en Entre la independencia y la pandemia',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '04/04/2024',
        editorial: 'REY NARANJO EDITORES',
        paginas: '819',
        dimensiones: 'Ancho: 13cm - Alto: 20cm',
        peso:'50grs'
    },
    {
        titulo: 'TECNOLOGIA Y BARBARIE',
        autor: 'MICHEL NIEVA',
        genero: 'Sociología',
        idioma: 'Español',
        precio: 74000,
        formato: 'libro',
        isbn: 9788433922137,
        descripcion: 'La tecnología ha sido siempre documento de civilización, pero también de barbarie. Este libro expone algunos casos, como el del zoológico fundado en Hamburgo por Carl Hagenbeck, que en 1875 exhibió indígenas porque resultaban más económicos de importar que los animales; o el de Eduardo Kac, que en 2001 utilizó la ingeniería genética como lenguaje plástico en su obra Génesis, al encriptar una frase traducida a morse en pares de ADN e inocularla en bacterias. Según Michel Nieva, la historia de la literatura argentina se funda sobre esa fricción: la tecnología como cruce entre civilización y barbarie',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '02/22/2022',
        editorial: 'ANAGRAMA',
        paginas: ' 173',
        dimensiones: 'Ancho: 14cm - Alto: 21cm',
        peso:'50grs'
    },
    {
        titulo: 'DERROTA MUNDIAL EDICION Nº48',
        autor: 'BORREGO SALVADOR',
        genero: '--',
        idioma: 'Español',
        precio: 90000,
        formato: 'libro',
        isbn: 9789588220970,
        descripcion: 'Hace 53 años se publicó la primera edición de este libro. No es usual que un libro se mantenga por tanto tiempo en la atención del público, ni menos cuando es objeto de acérrimo boicot.Tal vigencia se debe a que su tesis ha resultado exacta, comprobada por los acontecimientos desde 1945 hasta la fecha',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '10/10/2023',
        editorial: 'SOLAR',
        paginas: '627',
        dimensiones: 'Ancho: --cm - Alto: --cm',
        peso:'50grs'
    },
    {
        titulo: 'EL RESPLANDOR',
        autor: 'STEPHEN KING',
        genero: 'Suspenso y terror',
        idioma: 'Español',
        precio: 49000,
        formato: 'libro',
        isbn: 9789588789774,
        descripcion: 'REDRUM. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Tenía cinco años, y a esa edad pocos niños son conscientes de que los espejos invierten las imágenes, y menos aún diferencian entre realidad e ilusión. Pero Danny tenía pruebas de que sus fantasías relacionadas con la imagen del espejo acabarían cumpliéndose: REDRUM.. MURDER, asesinato. Su madre estaba pensando en el divorcio, y su padre, obsesionado con algo muy malo, tan malo como la muerte y el suicidio, necesitaba aceptar la propuesta de hacerse cargo de aquel hotel de leju, de más de cien habitaciones y aislado por la nieve, durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '12/11/2023',
        editorial: 'DEBOLSILLO',
        paginas: '651',
        dimensiones: 'Ancho: 12cm - Alto: 19cm',
        peso:'50grs'
    },
    {
        titulo: 'DE MI PARA MI LA TORMENTA PASARA',
        autor: 'NACARID PORTAL ARRAEZ CHRISS BRAUND',
        genero: 'Autoayuda y superación',
        idioma: 'Español',
        precio: 75500,
        formato: 'libro',
        isbn: 9786287606456,
        descripcion: 'Nunca es tarde para otorgarte una segunda oportunidad. Por mucho tiempo te has juzgado, y en este viaje, uno de los destinos será el perdón. Mereces cerrar los ojos abrazando tus logros, aunque te sientas muy lejos de la meta, estás avanzando por la escalera de la vida, donde cada peldaño ya es un triunfo. Si estás leyendo esto, es porque vamos a intentarlo. Vamos a trabajar por volver a estar bien. Vamos a dejar de juzgarnos por cada error y entender que los problemas, aunque traten de derrumbarnos, no lo lograrán.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '11/11/2023',
        editorial: 'PAN HOUSE CASA EDITORIAL S.A.S',
        paginas: '282',
        dimensiones: 'Ancho: 15cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: 'COMETAS EN EL CIELO',
        autor: 'KHALED HOSSEINI',
        genero: 'Literatura universal',
        idioma: 'Español',
        precio: 85000,
        formato: 'libro',
        isbn: 9788419346599,
        descripcion: 'Un relato inolvidable. Una historia conmovedora que se nos prende al corazón. Nos llena y nos habita para siempre la memoria del alma.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '25/02/2024',
        editorial: 'SALAMANDRA',
        paginas: '382',
        dimensiones: 'Ancho: 16cm - Alto: 24cm',
        peso:'50grs'
    },
    {
        titulo: 'LA LEALTAD DE LOS CANIBALES',
        autor: 'DIEGO TRELLES PAZ',
        genero: 'Literatura latinoamericana',
        idioma: 'Español',
        precio: 90000,
        formato: 'libro',
        isbn: 9788433922090,
        descripcion: 'Al igual que en La colmena de Camilo José Cela, que retrata la España dictatorial de los años cuarenta a través de las peripecias de los clientes de un café madrileño, el epicentro de esta extraordinaria obra es una taberna en el centro de Lima, en la que confluyen numerosos personajes cuyos destinos trágicos se entrelazan a un ritmo vertiginoso, hasta conformar un enorme conjunto de vidas cruzadas.',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '28/03/2024',
        editorial: 'ANAGRAMA',
        paginas: '378',
        dimensiones: 'Ancho: 14cm - Alto: 21cm',
        peso:'50grs'
    },
    {
        titulo: 'LA FORMA EN QUE SUENAS',
        autor: 'JUAN MARTIN FIERRO',
        genero: 'Música',
        idioma: 'Español',
        precio: 69000,
        formato: 'libro',
        isbn: 9786287715226,
        descripcion: 'El autor de este libro lleva más de 25 años escribiendo sobre música en varios medios de comunicación y, por supuesto, ha tenido acceso a grandes figuras de distintos géneros, como los salseros Rubén Blades, Cheo Feliciano, Papo Lucca o Issac Delgado',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '29/01/2024',
        editorial: 'PLANETA',
        paginas: '351',
        dimensiones: 'Ancho: 15cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: 'GLOBALISMO',
        autor: 'AGUSTIN LAJE',
        genero: 'Política general',
        idioma: 'Español',
        precio: 72900,
        formato: 'libro',
        isbn: 9781400331864,
        descripcion: 'En su libro "Globalismo: Ingeniería social y control total en el siglo XXI", Agustín Laje desafía las ideas convencionales al ofrecer una visión más profunda sobre los nuevos métodos de dominación global',
        estado: 'Nuevo',
        ubicacion: 'Armenia',
        fecha_publicacion: '13/03/2023',
        editorial: 'HARPER COLLINS',
        paginas: ' 285',
        dimensiones: 'Ancho: 15cm - Alto: 23cm',
        peso:'50grs'
    },
    {
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: 80000,
        formato: "Tapa dura",
        isbn: "9781234567890",
        descripcion: "Una novela clásica de la literatura española.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Editorial X",
        paginas: 1200,
        dimensiones: "15x5x20 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 40000,
        formato: "Tapa blanda",
        isbn: "9789876543210",
        descripcion: "Una novela distópica sobre un futuro totalitario.",
        estado: "Usado",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1949-06-08",
        editorial: "Editorial Y",
        paginas: 328,
        dimensiones: "13x2x20 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 47000,
        formato: "Tapa dura",
        isbn: "9788497592208",
        descripcion: "Una obra maestra de la literatura latinoamericana.",
        estado: "Nuevo",
        ubicacion: "Bogotá, Colombia",
        fecha_publicacion: "1967-06-05",
        editorial: "Editorial Z",
        paginas: 417,
        dimensiones: "14x4x21 cm",
        peso: "0.8 kg"
    },
    {
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 65000,
        formato: "Tapa blanda",
        isbn: "9780061120084",
        descripcion: "Una novela sobre la injusticia racial en el sur de Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Nueva York, Estados Unidos",
        fecha_publicacion: "1960-07-11",
        editorial: "Editorial Harper",
        paginas: 324,
        dimensiones: "14x2x21 cm",
        peso: "0.6 kg"
    },
    {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 60000,
        formato: "Tapa dura",
        isbn: "9780261102385",
        descripcion: "Una épica saga de aventuras en la Tierra Media.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1954-07-29",
        editorial: "Editorial HarperCollins",
        paginas: 1178,
        dimensiones: "16x6x24 cm",
        peso: "2.0 kg"
    },

]

const libroNuevo = {
    titulo: "LA GRANJA DEL BORREGO",
    autor: "CARLOS ALBERTO DIAZ",
    genero: "Literatura juvenil",
    idioma: "Español",
    precio: 52000,
    formato: "Tapa blanda",
    isbn: "9786287675100",
    descripcion: '¡Bienvenid@s a la Granja del Borrego! En este libro conocerán la historia del granjero más divertido de todos: ¿sí saben quién es? ¡Nada más y nada menos que el hijo favorito de "La mamá de las recetas"! Además, descubrirán todas las herramientas que necesitan para vivir en una granja y los secretos más asombrosos de la naturaleza. Y no solo eso, también se convertirán en l@s mejores amig@s de las gallinas empoderadas, de la vaca Rosalía y del cerdo Lolo. ¿Están list@s para empezar a sembrar sus propios alimentos en casa? ¿A hacer su propio compost, a identificar las expresiones de los caballos (eso es importante, granjer@s), a reconocer si un huevo está viejo o fresco y a ser más amigables con el entorno que los rodea? No esperen más, ¡alisten sus botas, sus sombreros y únanse al movimiento granjero!',
    estado: "Nuevo",
    ubicacion: "Cali",
    fecha_publicacion: "29/04/2024",
    editorial: "ALTEA",
    paginas: 188,
    dimensiones: "Ancho: 15cm - Alto: 23cm",
    peso: "50grs"
  };
  
  function mostrarMenu() {
  console.log("Seleccione una opción:");
  console.log("1. Mostrar pila de libros");
  console.log("2. Añadir un libro a la pila");
  console.log("3. Quitar el último libro de la pila");
  console.log("4. Mostrar la longitud de la pila");
  console.log("5. Salir");
  }
  
  function mostrarLibros(libros) {
  console.log("Pila actual de libros:", libros);
  }
  
  function añadirLibro(libros, libro) {
  libros.push(libro);
  console.log(`Libro añadido: ${libro.titulo}`);
  }
  
  function quitarLibro(libros) {
  const libroQuitado = libros.pop();
  if (libroQuitado) {
    console.log(`Libro quitado: ${libroQuitado.titulo}`);
  } else {
    console.log("No hay libros para quitar.");
  }
  }
  
  function mostrarLongitud(libros) {
  console.log(`Longitud del array: ${libros.length}`);
  }
  
  var continuar = "si";
  
  do {
  mostrarMenu();
  var opcion = prompt("Seleccione una opción:");
  switch (opcion) {
    case '1':
      mostrarLibros(libros);
      break;
    case '2':
      añadirLibro(libros, libroNuevo);
      break;
    case '3':
      quitarLibro(libros);
      break;
    case '4':
      mostrarLongitud(libros);
      break;
    case '5':
      continuar = "no";
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción no válida. Intente de nuevo.");
      break;
  }
  if (continuar !== "no") {
    continuar = prompt("Desea continuar (si/no)").toLowerCase();
  }
  } while (continuar === "si");