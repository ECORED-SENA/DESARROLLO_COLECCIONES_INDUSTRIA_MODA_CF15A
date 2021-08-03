<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Concepto de eslabones de confección 

    p.mb-5 En la industria de la confección, existen relaciones entre los insumos y las máquinas, los cuales garantizan el óptimo desempeño de la producción en términos de calidad, optimización de recursos y productividad, entre otras variables que determinan la calidad del producto final. La relación de insumos genera unos eslabones que, de romperse, ocasionan dificultades, ya sea en la tela, en la puntada o en la costura, debido a la estrecha relación entre ellos; la inadecuada manipulación de alguno de ellos afecta directamente el desempeño de los demás.

    .row.justify-content-center
      .col-md-10
        .cajon.color-primario.px-4.pt-4.pb-2.mb-4
          p En confección, y particularmente las diseñadoras, se deben tener los conocimientos sobre los tejidos, hilos y agujas con que se dará estructura a las puntadas, que se transforman en costuras y que dan forma a los tejidos, para obtener una mejor apariencia que se verá reflejada en los terminados y la calidad del producto.

    TabSpecial.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="La aguja y sus\r\naplicaciones" :imagen="images[0]" :numero="numbers[0]")
        p.mb-5 La aguja es un elemento mecánico que sirve para traspasar el material a coser y llevar el hilo hasta un tomador de lazada. Además, es uno de los elementos fundamentales para la invención de la máquina de coser, ya que es alrededor de la aguja como nacen todas las ideas para su desarrollo.
          br
          br
          | Se deben considerar tres aspectos importantes

        .row.justify-content-center
          .col-md-8.mb-5
            figure.mb-5
              img(src="@/assets/curso/tema3-imagen1.svg")

            h5 Calibre de aguja
            p.mb-5 El calibre de las agujas varía de acuerdo con el grosor del material a coser. Por ejemplo, para licras, 65 y 70; para tejidos de punto, 70, 80 y 90; para driles y jean, 100, 110 y 125.

            .tabla-a.color-acento-contenido.mb-5 
              table.text-center
                thead
                  tr
                    th Calibre
                    th Sistema métrico inglés
                    th Equivalencia en mm
                tbody
                  tr
                    td 70
                    td 10
                    td 0.7
                  tr
                    td 80
                    td 12
                    td 0.8
                  tr
                    td 90
                    td 14
                    td 0.9
                  tr
                    td 100
                    td 16
                    td 1
                  tr
                    td 110
                    td 18
                    td 1.1
                  tr
                    td 120
                    td 20
                    td 1.2

            h5 Sistema o referencia de aguja
            p.mb-5 Indica la aguja que se necesita para el tipo de máquina.

            .tabla-a.color-acento-contenido.mb-5 
              table.text-center
                thead
                  tr
                    th Máquina
                    th Tipo de aguja
                tbody
                  tr
                    td Planas
                    td 16 x 30 cabo delgado - 135 x 5 grueso
                  tr
                    td Recubridora
                    td B63
                  tr
                    td Zigzag
                    td 135 x 5
                  tr
                    td Dos Agujas
                    td 135 x 5
                  tr
                    td Fileteadora
                    td B27
        .row.justify-content-center
          .col-md-6.mb-5  
            h5 Punta de aguja 
            p.mb-5 Determina el tipo de tejido a coser, desde el más fino hasta el más pesado.

            .px-4.py-2.text-center.mb-5(style="background-color: #DAF6F6")
              p.mb-0 Denominación de la punta y símbolo del sentido del enhebrado
            
            SlyderC.mb-5(:datos="datosSlyder")

            
      .py-3.py-md-4(titulo="Tejidos" :imagen="images[1]" :numero="numbers[1]")
        
        .cajon.color-primario.px-4.pt-4.pb-2.mb-5
          p Una tela es una estructura formada por fibras textiles. Esta estructura se puede lograr de tres formas diferentes que, de alguna manera, dividen los procedimientos de trabajo. Se tiene: tejido plano o de calada, tejido de punto y técnicas de aglutinamiento.
        
        h5 Tejido plano
        p.mb-5 Es el que se lleva a cabo en una máquina llamada telar y que consiste en entrelazar dos hilos, normalmente formando un ángulo recto. Uno de los hilos es la urdimbre y el otro es la trama. El tejido plano puede trabajarse al hilo, de través o al bies. Los ligamentos usados para la elaboración del tejido plano son los que dan origen a las diferentes telas (sarga, tafetán, satén, gasa, crepé, felpa.

        .row.mb-5
          .col-lg-4.col-12.mb-lg-0.mb-4
            .caja-imagen-ajedrez
              figure
                img(src="@/assets/curso/tema3-imagen10.svg")
            p.mb-0
              strong Tafetán
              br
              | La trama pasa alternativamente por encima y por debajo de cada hilo o conjunto de hilos en que se divide la urdimbre, a modo de un sencillo enrejado.

          .col-lg-4.col-12.mb-4.mb-lg-0
            .caja-imagen-ajedrez
              figure
                img(src="@/assets/curso/tema3-imagen11.svg")
            p.mb-0
              strong Sarga
              br
              | La urdimbre se divide en series cortas de hilos (de tres, cuatro o cinco), de los cuales solo uno cubre la trama en la primera pasada y el siguiente hilo en la segunda pasada, etc. Resulta en un tejido a espina. 

          .col-lg-4.col-12.mb-lg-0.mb-4
            .caja-imagen-ajedrez
              figure
                img(src="@/assets/curso/tema3-imagen12.svg")
            p.mb-0
              strong Raso o satén
              br
              | Los hilos de la urdimbre se dividen en series mayores que para la sarga (de cinco a ocho series). De estos hilos, cada uno solo cubre la trama en la primera pasada; en la siguiente, el tercero saltando uno y así sucesivamente. De aquí resulta que, teniendo la urdimbre pocos enlaces con la trama y siendo ésta de seda, la superficie del tejido aparece brillante. Por eso recibe también el nombre de satén.
        
        .row.mb-5
          .col-12.col-md-3.mb-5.mb-md-0
            figure
              img(src="@/assets/curso/tema3-imagen13.svg")
          .col-12.col-md-9
            h5 Tejido de punto
            p.mb-5 Es el formado por mallas, bucles o puntos. Consiste en pasar una lazada de hilo sobre una aguja y luego pasarla a otra aguja. El caso más claro para entenderlo es el tejido de dos agujas que hace la abuela, que se entrelaza el mismo hilo formando una sola estructura. Es importante entender que en este tipo de tejido hay un solo hilo larguísimo. Los ligamentos básicos del tejido de punto son: jersey, franela, franela perchada, el rib, interlock, pique. Las telas de tejido de punto son difíciles de manejar, resbalan al cortarlas y estiran fácilmente, se adaptan muy bien al cuerpo.
              br
              br
              | Hay dos variantes fundamentales en el tejido de punto: tejidos por trama y tejidos por urdimbre 
            .row.mb-5
              .col-12.col-md.mb-5.mb-md-0
                figure.mb-5.figure-imagen--centro
                  img(src="@/assets/curso/tema3-imagen14.svg")
                h5 Tejidos de punto por trama
                p.mb-0 Un tejido por trama es cuando la dirección general de todos o de la mayor parte de los hilos que forman sus mallas es horizontal. La posición correcta del tejido para su examen es con el vértice de las “V” hacia abajo.

              .col-12.col-md-auto.mb-5.mb-md-0
                .vertical-separation
              .col-12.col-md
                figure.mb-5.figure-imagen--centro
                  img(src="@/assets/curso/tema3-imagen15.svg")
                h5 Tejidos de punto por urdimbre
                p.mb-0 Un tejido de punto es por urdimbre cuando la dirección general que siguen todos, o la mayor parte de los hilos que forman las mallas, es vertical.
            
            .row.align-items-center.exclamation.py-3.mb-5
              .col-12.col-md-auto
                figure
                  img(src="@/assets/curso/exclamacion.svg")
              .col-12.col-md
                p.mb-0
                  strong Por aglutinamiento de fibras: 
                  |  son telas que se fabrican con fibras de lana o de pelo de animales que no han pasado por procesos de hilatura; en su lugar, se humedecen y se someten a presión y calor para hacer que las fibras se adhieran.

            .row
              .col-12.col-lg-4.mb-5.mb-lg-0
                figure.comparacion
                  img(src="@/assets/curso/tema3-imagen16.svg")
                  p.mb-0 Una de las ventajas que caracterizan a los tejidos de punto es que son más confortables, ya que poseen la particularidad de amoldarse al cuerpo debido a la elasticidad que otorga su estructura.
              .col-12.col-lg-4.mb-5.mb-lg-0
                figure.comparacion
                  img(src="@/assets/curso/tema3-imagen17.svg")
                  p.mb-0 Los tejidos de punto poseen una apariencia más pulcra, ya que no presentan arrugas; también la propiedad elástica de su estructura confiere una ventaja económica respecto a los patrones de diseño, ya que otorga la posibilidad de unificación de partes (delantero-espalda) y talles.

              .col-12.col-lg-4
                figure.comparacion
                  img(src="@/assets/curso/tema3-imagen18.svg")
                  p.mb-0 Las telas de punto poseen un encogimiento superior a las de tejido plano, hasta un 5 % frente a un 2 % en los tejidos planos; esto deberá contemplarse en la moldería.

      .py-3.py-md-4(titulo="Hilos" :imagen="images[2]" :numero="numbers[2]")
        p.mb-5 La palabra hilo proviene del vocablo latino filum, este hace referencia a una hebra fina y alargada de material textil. Los hilos se emplean para coser, uniendo dos o más piezas de material textil. Este representa un 2% del costo total de la prenda y comparte un 50% de la durabilidad de las costuras. 
          br
          br
          | Para identificar el grosor del hilo se utiliza un sistema de numeración llamado TEX.
        
        .row.mb-5
          .col-12.col-md-3.offset-md-1
            figure
              img(src="@/assets/curso/tema3-imagen19.jpg")
          .col-12.col-md-7
            .px-4.py-2.mb-4(style="background-color: #DAF6F6;")
              p.mb-0.fw-bold Sistema de numeración Tex
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Está basado en el hilo crudo.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Es usado para determinar el calibre del hilo.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | El sistema de numeración es directo (entre más alto el número, más grueso el hilo), ej: un T-80 es más grueso que un T-50 o un T-25.

        h5 Factores que afectan la resistencia de las costuras
        p.mb-5 El hilo usado en prendas de vestir y la calidad de este afectan totalmente su apariencia. Este debe ser suficientemente durable para resistir durante la costura, la abrasión y calor de aguja que ocurren al coser, la terminación de la prenda, y/o el estiramiento y recuperación durante el uso de este.
          br
          br
          | El desempeño del hilo en prendas se puede evaluar, entre otras:

        .row.mb-5
          .col-12.col-md-3.offset-md-1
            figure
              img(src="@/assets/curso/tema3-imagen20.jpg")
          .col-12.col-md-7
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Tipo de tela y grueso
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Tipo de hilo y tamaño
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Puntada y tipo de costura
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Puntadas por pulgada
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Balance de la puntada (tensión)
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Calibre de aguja
        
        h5 Clasificación basada en la estructura de construcción del hilo
        p.mb-5 El hilo se hace utilizando fibras naturales o sintéticas. El poliéster es uno de los hilos más utilizados. Es más fuerte que los hilos de algodón de un tamaño comparable y está disponible en una amplia variedad de tamaños y colores.

        .cajon.color-acento-contenido.ps-4.py-4.mb-5
          .row.align-items-center
            .col-12.col-lg-8.mb-5.mb-lg-0
              p.mb-0 El hilo con núcleo es una combinación de fibras cortas y filamentos. El hilo con núcleo más usado tiene una construcción de capa múltiple, con cada capa hecha de un centro de filamento de poliéster, con fibras de algodón o poliéster recubiertas alrededor del núcleo.
                br
                br
                | En esta estructura de hilo influye la fortaleza del filamento de poliéster y la facilidad de costura del recubrimiento de fibra de algodón o poliéster. El hilo con alma generalmente se usa en la costura a alta velocidad de muchos tipos de prenda, especialmente los que requieren alta fortaleza de costura.
            .col-12.col-lg-4
              figure
                img(src="@/assets/curso/tema3-imagen21.svg")

        p.mb-5 Los hilos de filamento son más fuertes que los hilos de fibra corta de la misma fibra y tamaño. Se usan comúnmente tres tipos de hilos de filamento:

        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(style="padding-top: 35px")
              img(src='@/assets/curso/tema3-imagen22.svg' alt='AvatarTop')
              .tarjeta.color-primario--claro(style="padding-top: 35px!important")
                .p-4
                  p.mb-0 El hilo monofilamento se hace de una sola fibra continua de un grosor especificado. Aunque el monofilamento es fuerte, uniforme y poco costoso de hacer, carece de flexibilidad y tiene una sensación tiesa y áspera. Como resultado, su uso normalmente se restringe a bastillas, cortinas y muebles tapizados.


          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(style="padding-top: 35px")
              img(src='@/assets/curso/tema3-imagen23.svg' alt='AvatarTop')
              .tarjeta.color-primario--claro(style="padding-top: 35px!important")
                .p-4
                  p.mb-0 El hilo multifilamento suave se elabora comúnmente de nailon o poliéster y se usa donde el requisito primordial de la costura es la fortaleza. Consta de dos o más filamentos continuos, torcidos juntos. Se usa comúnmente para coser zapatos, prendas de cuero y productos industriales.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(style="padding-top: 35px")
              img(src='@/assets/curso/tema3-imagen24.svg' alt='AvatarTop')
              .tarjeta.color-primario--claro(style="padding-top: 35px!important")
                .p-4
                  p.mb-0 El hilo de filamento texturizado se hace usualmente de poliéster y se usa primordialmente como el hilo de lanzadera para puntadas de cobertura. Los filamentos texturizados le dan más cobertura y extensibilidad a la fibra, pero hacen que el hilo esté más sujeto a enredarse.

        h5 Introducción a materiales de los hilos
        p.mb-5 Algunos materiales con los que están construidos los hilos son los siguientes:

        .row.mb-5
          .col-12.col-md-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema3-imagen25.jpg")
          .col-12.col-md-8
            p.mb-0
              strong Algodón: 
              |  es la parte del hilo que va a estar en contacto con la piel e impide que se produzcan irritaciones o incomodidades, ya que sus características son suavidad, absorción y frescura.
              br
              br
              strong Poliéster: 
              |  la fibra que va por el centro o es el núcleo del hilo; aporta elasticidad, es decir, la capacidad de aumentar considerablemente su dimensión sin romperse.
              br
              br
              strong Mercerizado: 
              |  es un acabado que le dan al hilo consistente en bañarlo en una solución de soda cáustica, con la intención de dotarlo de brillo, suavidad y resistencia.
              br
              br
              strong Lubricado: 
              |  es un acabado final que le deben dar al hilo para evitar su rotura al estar en contacto con la aguja

        h5 Peso o tamaño de hilo y aplicaciones 
        p.mb-5 De acuerdo con la aplicación que requiera la prenda a confeccionar, es indispensable determinar el peso y tamaño del hilo que se va a utilizar.
          br
          br
          | Aquí un ejemplo del tipo de tejido, sistema TEX, y prenda en la que se usa.

        .row.justify-content-center
          .col-md-8.mb-5
            .tabla-a.color-acento-contenido.mb-5 
              table.text-center
                thead
                  tr
                    th Tejido
                    th Tex
                    th Prenda
                tbody
                  tr
                    td Liviano
                    td 24, 25, 27
                    td Blusas, ropa interior.
                  tr
                    td Semipesado
                    td 30, 35, 40
                    td Pantalones, overol drill.
                  tr
                    td Pesado
                    td 60, 70,……120
                    td Jeans, chaquetas.
            .px-4.py-2.mb-5(style="background-color: #DAF6F6;")
              p.mb-0.text-center En el sistema TEX de lo hilos, Tex se define como ”masa en gramos de 1.000 metros de hilo".

            p.mb-0 Por ejemplo: un hilo de 14 Tex quiere decir que 1000 m de cada cabo pesan 14 gramos. Es uno de los sistemas más empleados y que más posibilidades tiene de universalizarse. Se emplea sobre todo en los hilos de filamento continuo, como poliéster de alta tenacidad, poliamida y rayón, entre otros.
              br
              br
              | Normalmente usamos una fracción del Tex, el dTex (decitex), que es su décima parte (1 Tex=10 dTex).

      .py-3.py-md-4(titulo="Eslabón" :imagen="images[3]" :numero="numbers[3]")
        p.mb-5 La relación hilo-agujas permite que se produzcan las puntadas con sus series y tipos respectivos, los tipos y usos de los pespuntes, las puntadas por pulgada y sus criterios de calidad según el proceso, entre otros.

        .px-4.py-4.mb-5(style="background-color: #F6F6F6;")
          .row
            .col-12.col-md-4
              figure
                img(src="@/assets/curso/tema3-imagen26.svg")
            .col-12.col-md-8
              p.mb-0
                strong Puntadas
                br
                br
                | En las diferentes líneas de producción de hoy, las puntadas son fundamentales en el valor agregado que pueda tener un producto, por su calidad, durabilidad, seguridad, elongación y sobre todo por su apariencia y decoración de un producto. Con base en ello, las puntadas tienen unas características diferentes. Aquí, algunas  de las más representativas:
        .row.justify-content-center.mb-5
          .col-8
            .px-4.py-4(style="background-color: #D6EBFB;")
              p.mb-0 Por lo tanto, las características se definen según el tipo de puntada.

        .row.justify-content-center.mb-5
          .col-10
            p.mb-0 Los diferentes tipos de puntada se dividen en seis grandes grupos, en cada uno de los cuales hay diversidad en  ellas. Dichos grupos son:

        .row.justify-content-center.mb-5
          .col-9
            SliderCajas(:items="itemsCajas" :img="imagenCajaTextos" columns="col-lg-6")

            .tabla-a.color-acento-contenido.mb-5 
              table.text-center
                thead
                  tr
                    th Serie
                    th Tipo
                    th Características
                tbody
                  tr
                    td 100
                    td 101 - 103
                    td Cadeneta sencilla 1 solo hilo
                  tr
                    td 200
                    td N/A
                    td Ornamentales
                  tr
                    td 300
                    td 301 - 304 - 315
                    td Doble pespunte
                  tr
                    td 400
                    td 401 - 46 - 407
                    td Cadena doble
                  tr
                    td 500
                    td 504 - 514 - 516
                    td Sobrehilado
                  tr
                    td 600
                    td 602 - 605 - 609
                    td Flatseamers

        h5 Reglas para la óptima resistencia de las costuras
        p.mb-5 Las series de puntdas mas utilizadas en confección son las siguientes:

        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3-imagen28.svg' alt='AvatarTop', style="max-height: 120px")
              .tarjeta.color-azul--claro(style="padding-top: 35px!important")
                .p-4.text-center
                  p.mb-4
                    strong Puntada recta
                  p.mb-0 Se debe utilizar el mismo tamaño de hilo en la aguja y en la bobina porque la cadena siempre se rompe por el eslabón más débil.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3-imagen29.svg' alt='AvatarTop', style="max-height: 120px")
              .tarjeta.color-azul--claro(style="padding-top: 35px!important")
                .p-4.text-center
                  p.mb-4
                    strong Puintada cadeneta
                  p.mb-0 Se puede usar un hilo 40% más débil en el looper, pues el hilo del looper no penetra el material y está doble en la formación de la cadena.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3-imagen30.svg' alt='AvatarTop', style="max-height: 120px")
              .tarjeta.color-azul--claro(style="padding-top: 35px!important")
                .p-4.text-center
                  p.mb-4
                    strong Puntada sobrehilado
                  p.mb-0 Se puede usar un hilo un 40% más débil en el looper porque el hilo del looper no penetra el material y está doble en la formación de la cadena. 
        
        .row.justify-content-center
          .col-10
            .row.align-items-center.exclamation.rojo.py-3.mb-5
              .col-12.col-md-auto
                figure
                  img(src="@/assets/curso/exclamacion.svg")
              .col-12.col-md
                p.mb-0
                  strong Hilo-tejido: 
                  |  La relación hilo-tejido permite que se produzcan las costuras con sus tipos, características y usos respectivos, de acuerdo con criterios de calidad del proceso.
        .row.justify-content-center
          .col-4
            a.anexo.mb-4(:href="obtenerLink('/downloads/CF15_A_2.Puntadas-costuras y pespuntes.docx - Documentos de Google.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p
                  strong Anexo. 
                  |   Puntadas costuras y pespuntes.

</template>

<script>
import TabSpecial from '../components/TabSpecial.vue'
import SliderCajas from '../components/SliderCajas.vue'

const tabicono1 = require('@/assets/curso/tema3-tabs1.svg')
const tabicono2 = require('@/assets/curso/tema3-tabs2.svg')
const tabicono3 = require('@/assets/curso/tema3-tabs3.svg')
const tabicono4 = require('@/assets/curso/tema3-tabs4.svg')
const numerotab1 = require('@/assets/curso/tema2-number1.svg')
const numerotab2 = require('@/assets/curso/tema2-number2.svg')
const numerotab3 = require('@/assets/curso/tema2-number3.svg')
const numerotab4 = require('@/assets/curso/tema2-number4.svg')
const imagenTextos = require('@/assets/curso/tema3-imagen27.svg')

export default {
  name: 'Tema3',
  components: {
    TabSpecial,
    SliderCajas,
  },
  data: () => ({
    imagenCajaTextos: imagenTextos,
    images: [tabicono1, tabicono2, tabicono3, tabicono4],
    numbers: [numerotab1, numerotab2, numerotab3, numerotab4],
    datosSlyder: [
      {
        titulo: 'Punta muy aguda',
        texto:
          'Estándar para punto invisible (FST 101) y para costuras de pespunte muy rectas en tejidos finos.<br><br><strong>Campos de aplicación:</strong><br>Blusas, faldas finas, pantalones, cortinas.<br><br><strong>Otras denominaciones de las puntas:</strong><br>R-SPI, S SET, SPI.',
        imagen: require('@/assets/curso/tema3-imagen2.svg'),
      },
      {
        titulo: 'Punta redonda normal',
        texto:
          'Estándar para pespunte (FST 301), tejidos, cueros sintéticos, tejidos revestidos.<br><br><strong>Campos de aplicación:</strong><br>Camisas, pantalones, ropa de todo tipo.<br><br><strong>Otras denominaciones de las puntas:</strong><br>SET, RD',
        imagen: require('@/assets/curso/tema3-imagen3.svg'),
      },
      {
        titulo: 'Punta de bola pequeña',
        texto:
          'Estándar para punto de cadeneta, overlock y bordados. Para tejido plano, de punto delicados, microfibra, tejidos, coser botones, bordados y cueros finos y blandos para la confección de ropa  (FST 401 y 406)<br><br><strong>Campos de aplicación:</strong><br>Camisas, pantalones, ropa de todo tipo.<br><br><strong>Otras denominaciones de las puntas:</strong><br>STU, STUB, S BALL, SET RT.',
        imagen: require('@/assets/curso/tema3-imagen4.svg'),
      },
      {
        titulo: 'Punta bola fina',
        texto:
          'Para género de punto en general, tejidos de algodón y/o material sintético.<br><br><strong>Campos de aplicación:</strong><br>Camisas, ropa interior, suéters finos.<br><br><strong>Otras denominaciones de las puntas:</strong><br>SES, L BALL, J BALL, SIN, NYR, BPL.',
        imagen: require('@/assets/curso/tema3-imagen5.svg'),
      },
      {
        titulo: 'Punta de bola mediana',
        texto:
          'Para materiales elásticos o de mala gruesa, así como para materiales con goma o elastómero.<br><br><strong>Campos de aplicación:</strong><br>Suéteres, encajes, ropa interior, bordado schifti.<br><br><strong>Otras denominaciones de las puntas:</strong><br>SUK, B BALL, M BALL, SI.',
        imagen: require('@/assets/curso/tema3-imagen6.svg'),
      },
      {
        titulo: 'Punta de bola grande',
        texto:
          'Para materiales muy gruesos, muy elásticos y de trama abierta.<br><br><strong>Campos de aplicación:</strong><br>Suéteres, chaquetas de punto, pullovers.<br><br><strong>Otras denominaciones de las puntas:</strong><br>SKF, H BALL, U BALL, Y BALL.',
        imagen: require('@/assets/curso/tema3-imagen7.svg'),
      },
      {
        titulo: 'Punta de bola especial',
        texto:
          'Para tricotado con alto contenido de elastano.<br><br><strong>Campos de aplicación:</strong><br>Corsetería, ropa ortopédica.<br><br><strong>Otras denominaciones de las puntas:</strong><br>n/a',
        imagen: require('@/assets/curso/tema3-imagen8.svg'),
      },
      {
        titulo: 'Punta de bola especial',
        texto:
          'Utilización en el bordado schifti para estructuras de tejido abierto, tul de algodón y/o materiales sintéticos.<br><br><strong>Campos de aplicación:</strong><br>Encajes, cortinas, manteles y servilletas.<br><br><strong>Otras denominaciones de las puntas:</strong><br>n/a',
        imagen: require('@/assets/curso/tema3-imagen9.svg'),
      },
    ],
    itemsCajas: [
      {
        id: 0,
        title: 'PUNTADAS DEL GRUPO 100',
        text:
          'Puntada de cadeneta simple. Se caracterizan por estar formadas por una o varias agujas de coser y una serie de hilos entrelazando el hilo consigo mismo.',
        color: '#F2D6E3',
      },
      {
        id: 1,
        title: 'PUNTADAS DEL GRUPO 200',
        text: 'Corresponden a puntadas a mano.',
        color: '#F2D6E3',
      },
      {
        id: 2,
        title: 'PUNTADAS DEL GRUPO 300',
        text:
          'Puntada doble. Se caracterizan por estar formadas con una o varias agujas de coser y dos series de hilos que se entrelazan entre ambas con lo que aseguran el material y cierran la puntada.',
        color: '#F2D6E3',
      },
      {
        id: 3,
        title: 'PUNTADAS DEL GRUPO 400',
        text:
          'Puntada de cadeneta múltiple. Se caracterizan por estar formadas con una o varias agujas de coser y dos o más series de hilos entrelazados entre sí. Los hilos de la segunda serie entre sí y este conjunto con los de la primera serie.',
        color: '#F2D6E3',
      },
      {
        id: 4,
        title: 'PUNTADAS DEL GRUPO 500',
        text:
          'Puntada de borde. Se caracterizan por estar formadas con una serie o varias agujas de coser y dos o más series de hilos que se entrelazan entre sí en el borde libre del material consiguiendo con ello sujeción y pulido del mismo.',
        color: '#F2D6E3',
      },
      {
        id: 5,
        title: 'PUNTADAS DEL GRUPO 600',
        text:
          'Puntada de recubrir. Se caracterizan por estar formadas con dos o más agujas y dos o más series de hilos que se entrelazan entre sí y entre las distintas agujas, en una o ambas caras, obteniendo un efecto de recubrimiento entre agujas.\r\nPuede existir en una máquina la combinación de dos o más estilos de puntada que son ejecutadas simultáneamente. Por ejemplo, las remalladoras con puntada de seguridad ejecutan puntadas de las series 400 y 500.',
        color: '#F2D6E3',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
