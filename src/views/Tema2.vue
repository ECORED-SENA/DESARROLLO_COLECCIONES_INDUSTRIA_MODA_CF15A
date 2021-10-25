<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de máquinas

    .row.mb-4
      .col-12.col-lg-6
        p La identificación de las máquinas y equipos de confección permite optimizar, facilitar y distribuir los diferentes procesos de confección. Con base en lo anterior, el concepto de identificación establece las características de cada máquina, los usos dentro del proceso de confección, los tipos de máquinas según el tipo de líneas de producción, los tipos de puntada y aplicaciones, los tipos de tomadores de lazada y el tipo de alimentación (arrastre de tela).
          br
          br
          | La identificación de máquinas, entonces, se puede agrupar ya sea por procesos productivos, como preparación, ensamble y terminación; por líneas de producción, como interior, exterior, jean, hogar, deportivo, entre otras. Además, también es posible agruparlas por su uso, como doble pespunte, cadeneta, sobrehilado y de ciclo.
      .col-12.col-lg-6
        figure
          img(src='@/assets/curso/tema2-imagen1.png')

    .row.justify-content-center
      .col-10
        .cajon.color-primario.px-4.pt-4.pb-2.mb-5
          p En este punto, se desarrollarán diferentes criterios y generalidades que se deben conocer para un óptimo rendimiento de los productos y diseño a desarrollar. Por lo tanto, las clasificaciones de las máquinas comienzan por su capacidad de costura. Las máquinas en su construcción, por la potencia que poseen al coser materiales y su velocidad, se dividen en:

        InfografiaPopup.mb-5(v-on:clicked="activateModal")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-imagen35.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-secundario.p-3(x="17.5%" y="17.25%", color="color-secundario")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-botones.p-3(x="38%" y="5.25%", color="color-acento-botones")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-contenido.p-3(x="62%" y="5.25%", color="color-acento-contenido")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-secundario.p-3(x="82.7%" y="17.25%", color="color-secundario")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-botones.p-3(x="94.7%" y="38.25%", color="color-acento-botones")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-contenido.p-3(x="94.7%" y="62.25%", color="color-acento-contenido")
            p.mb-0.text-white Haga click para mas informacion
          
          .tarjeta.color-secundario.p-3(x="82.7%" y="82.75%", color="color-secundario")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-botones.p-3(x="62%" y="94.45%", color="color-acento-botones")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-contenido.p-3(x="38%" y="94.45%", color="color-acento-contenido")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-secundario.p-3(x="17.5%" y="82.75%", color="color-secundario")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-botones.p-3(x="5.2%" y="62%", color="color-acento-botones")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-acento-contenido.p-3(x="5.2%" y="38.25%", color="color-acento-contenido")
            p.mb-0.text-white Haga click para mas informacion

          .tarjeta.color-secundario.p-3(x="50%" y="42.4%", color="color-secundario")
            p.mb-0.text-white Haga click para mas informacion

    //- slider-videos(:items="items")

    #t_2_1.titulo-segundo
      h2 2.1  La máquina y sus partes: ajustes

    p.mb-4 Durante el proceso de reconocimiento de las máquinas por su capacidad de cosido, entran ahora aspectos generales y otros particulares sobre los diferentes tipos de máquinas. Se puede observar la siguiente presentación.
    
    .row.justify-content-center
      .col-12.col-md-5
        .px-4.py-1.titulo-espacial
          p.mb-0 La máquina y sus partes

    TabSpecial.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Aspectos\ngenerales" :imagen="images[0]" :numero="numbers[0]")
        .row.mb-5
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen2.jpg")
              .box-color-soft.rosa.p-4
                p.mb-0
                  strong Portaconos
                  br
                  | Permite posicionar el cono de hilo en la máquina para el enhebrado
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen3.jpg")
              .box-color-soft.azul.p-4
                p.mb-0
                  strong Herraje
                  br
                  | Soporte metálico que sostiene la máquina.
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen4.jpg")
              .box-color-soft.rosa.p-4
                p.mb-0
                  strong Motor
                  br
                  | Encargado de llevar la fuerza a la máquina  poniéndola en movimiento.
          .col-md-3.mb-3.mb-md-0.d-flex
            figure
              img(src="@/assets/curso/tema2-imagen5.svg")
        .row
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen2.jpg")
              .box-color-soft.azul.p-4
                p.mb-0
                  strong Cabezote o cabeza de la máquina
                  br
                  | Contiene el conjunto de mecanismos que forman la puntada y transportan la tela.
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen3.jpg")
              .box-color-soft.rosa.p-4
                p.mb-0
                  strong Mueble
                  br
                  | Es la parte que sostiene el cabezote y sirve además para colocar la costura.
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen8.jpg")
              .box-color-soft.azul.p-4
                p.mb-0
                  strong Interruptor
                  br
                  | Encargado de encender y apagar la máquina.
          .col-md-3.mb-3.mb-md-0.d-flex
            .box-images
              figure
                img(src="@/assets/curso/tema2-imagen9.jpg")
              .box-color-soft.rosa.p-4
                p.mb-0
                  strong Pedal
                  br
                  | Junto con el motor, pone en movimiento la máquina.

      .py-3.py-md-4(titulo="Aspectos\nparticulares" :imagen="images[1]"  :numero="numbers[1]")
        div
          p.mb-5 Algunas partes de máquinas. Se tornan aspectos particulares, debido a la posición, la forma o la función que cumplen dentro de la máquina.
            br
            br
            | Por citar un ejemplo: el regulador de puntada en las máquinas planas y fileteadoras cumple la misma función, pero no se mueve igual y no se encuentran en la misma posición; sin embargo, en esta oportunidad se enfatiza en algunos elementos importantes dentro de la formación de la puntada.
          
          .row
            .col-md-2
              figure
                img(src="@/assets/curso/tema2-imagen10.svg")
            .col-md
              SliderCajas(:items="items2")
            .col-md-2
              figure
                img(src="@/assets/curso/tema2-imagen11.svg")

      .py-3.py-md-4(titulo="Ajustes a las\nmáquina" :imagen="images[2]"  :numero="numbers[2]")
        div
          p.mb-5 En la industria de la confección, las telas, los hilos, las agujas y demás materiales son muy variables. A esto se suman los diseños, que son cambiantes como el tiempo. Si hablamos de diseño, hablamos de prendas, y las prendas se encuentran para muchos usos, como son: ropa interior, ropa hogar, calzado, ropa exterior, carpas protectoras, velas de viento, maletas, estuches, etc. Para poder realizar cualquier operación en una de estas prendas, se necesita una combinación de costura; esta combinación de costura la llamamos ajuste.

          .tarjeta.tarjeta--gris.p-4.mb-5
            LineaTiempoC.color-secundario
              .row(titulo="Parte 1")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen12.jpg')
                .col-12.col-md-9
                  p Muchos problemas de costura, como el deslizamiento de la tela y el fruncido de la costura, pueden solucionarse comprendiendo los tipos y funciones de los alimentadores y prensatelas (ajustes).
                    br
                    br
                    | Para poder entender el desplazamiento de los materiales a coser y los problemas que estos nos pueden ocasionar por una mala selección del ajuste, se debe entender el funcionamiento y la importancia de cada uno de los elementos que lo componen en los diferentes tipos de máquina
              .row(titulo="Parte 2")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen13.jpg')
                .col-12.col-md-9
                  p Por consiguiente, se manejan dos tipos de ajuste: uno, cuando encontramos máquinas de una, dos o más agujas; esto permite que se ajusten las máquinas según el tipo de material a trabajar, si es liviano (licras), si es semipesado (dacrón) o si es pesado (jean). Y el otro ajuste describe la distancia entre agujas; debido a ello, entra otro elemento en el conjunto, el soporte de las agujas. 
                    br
                    br
                    | En complemento, el ajuste deriva básicamente en el agarre del diente respecto al tipo de tela.
              .row(titulo="Parte 3")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen14.jpg')
                .col-12.col-md-9
                  p A continuación se detalla cada componente del ajuste:
                    br
                    br
                    strong Ajuste de plana
                    br
                    br
                    strong Diente: 
                    |  este dispositivo mecánico es el encargado de desplazar el material a coser. El diente, para poder desplazar el material, debe sujetarlo, esa función la realiza con la parte superior, que hace contacto con la tela y, en el momento que comienza a transportarlo por efecto de la fricción, la tela se incrusta entre la separación de los dientes y es así como el diente desplaza el material.
                    br
                    br
                    strong Planchuela: 
                    |  es la que sirve de apoyo al material cuando el diente se encuentra regresando; además, viene provista de un orificio que es el lugar de penetración de la aguja; este orificio varía de acuerdo al ajuste, pues él debe de ser un 40% más amplio que la hoja de la aguja. La planchuela tiene carriles; estos deben ser iguales al número de carriles del diente; además, el diente debe de desplazarse en la totalidad del carril de la plancha.
                    br
                    br
                    strong Prensatelas: 
                    |  es el encargado de apoyar el material contra el diente para que pueda ser transportado. La presión que se le debe dar varía de acuerdo con el material, porque si la presión no es la adecuada, la apariencia de la costura no será la requerida.
                    br
                    br
                    | Problemas por una presión inadecuada, pues el prensatelas solo hace contacto con la tela superior:
                    br
                    br
                    | 1. Cuando la presión es demasiada, el diente, en su ascenso, puede dañar la tela, o como la fricción con la tela superior es demasiada, al terminar la costura, la tela superior es más extensa que la inferior, con una apariencia lisa por encima y recogida por debajo.
                    br
                    | 2. Cuando la presión es poca, la tela no alcanza a incrustarse en el diente, ocasionando que esta se pegue, y varía la cantidad de puntadas por pulgada.
                    br
                    | Nota: El ancho de la base del pie prensatelas debe de ser igual al ancho del diente y cubrirlo en un 90% de su recorrido.
              .row(titulo="Parte 4")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen15.jpg')
                .col-12.col-md-9
                  p 
                    strong Ajuste de maquina dos aguja
                    br
                    br
                    | Conjunto de elementos mecánicos para la máquina plana dos agujas 
                    br
                    br
                    | Ajuste máquina plana 2 agujas 
              .row(titulo="Parte 5")
                p.mb-5
                  strong Ajuste de prensatelas
                  br
                  br
                  | Conjunto de elementos mecánicos para la máquina fileteadora de acuerdo con el acabado de la prenda
 
                figure.w-100
                    img(src='@/assets/curso/tema2-imagen16.svg')
              .row(titulo="Parte 6")
                p.mb-5
                  strong Ajuste recubridora
                  br
                  br
                  | Conjunto de elementos mecánicos para la máquina recubridora de acuerdo con el tipo de acabado en la prenda 
 
                figure.w-100
                    img(src='@/assets/curso/tema2-imagen17.svg')
              .row(titulo="Parte 7")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen18.svg')
                .col-12.col-md-9
                  p 
                    strong Diente
                    br
                    br
                    | Este dispositivo mecánico es el encargado de desplazar el material a coser. El diente, para poder desplazar el material, debe sujetarlo, esa función la realiza con la parte superior que hace contacto con la tela. En el momento que comienza a transportarlo por efecto de la fricción, la tela se incrusta entre la separación de los dientes, y es así como el diente desplaza el material.
                    br
                    br
                    | El diente, para poder desplazar el material, debe sujetarlo, esa función la realiza con la parte superior que hace contacto con la tela. En el momento que comienza a transportarlo por efecto de la fricción, la tela se incrusta entre la separación de los dientes, y es así como el diente desplaza el material.
              .row(titulo="Parte 8")
                p.mb-5
                  | Los dientes vienen de diferentes tamaños. Para diferenciarlos, se debe medir la cantidad de dientes que hay en una pulgada; o la separación existente entre ellos, si se mira en mm. 
                  br
                  | Para seleccionar los dientes, se debe tener en cuenta el material a coser.
                  br
                  br
                  | Los dientes se encuentran de 16,18, 20 y 24 dientes por pulgada para telas tejidas normales, porque para materiales compactos, como el cuero y lonas, se encuentran dientes hasta de 2.5 mm de separación. También los hay piramidales, cuando superan los 24 dientes por pulgada, como en las familiares. Además, hay que tener en cuenta la cantidad de hileras del diente.
                  br
                  | Cuando se selecciona el diente inadecuado, puede suceder lo siguiente.
 
                .row
                  .col-12.col-md-6.mb-4.mb-md-0
                    .row
                      .col-12.col-md-4.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2-imagen19.svg")
                      .col-12.col-md-8.mb-4.mb-md-0
                        ul.lista-ul--color
                          li 
                            i.lista-ul__vineta
                            | Si la separación del diente es grande y el material delgado, cuando el diente transporta la tela, esta se incrusta entre el diente, haciendo olas, dando una costura con recogido.
                  .col-12.col-md-6.mb-4.mb-md-0
                    .row
                      .col-12.col-md-4.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2-imagen20.svg")
                      .col-12.col-md-8.mb-4.mb-md-0
                        ul.lista-ul--color
                          li 
                            i.lista-ul__vineta
                            | Si la separación del diente es pequeña y el material grueso, cuando el diente transporta la tela, esta no es sujetada por el diente, ocasionando pega y daños en el material.
              .row(titulo="Parte 9")
                p.mb-5
                  strong Prensatelas
                  br
                  br
                  | Es el encargado de apoyar el material contra el diente para que pueda ser transportado. La presión que se le debe dar al prensatelas varía de acuerdo con el material, porque si la presión no es la adecuada, la apariencia de la costura no es la requerida.
                  br
                  br
                  | Problemas por una presión inadecuada, pues el prensatelas solo hace contacto con la tela superior:
 
                .row
                  .col-12.col-md-6.mb-4.mb-md-0
                    .row
                      .col-12.col-md-4.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2-imagen21.svg")
                      .col-12.col-md-8.mb-4.mb-md-0
                        ul.lista-ul--color
                          li 
                            i.lista-ul__vineta
                            | Cuando la presión es demasiada, el diente, en su ascenso, puede dañar la tela o, como la fricción con la tela superior es demasiada, al terminar la costura, la tela superior es más extensa que la inferior, con una apariencia lisa por encima y recogida por debajo.
                  .col-12.col-md-6.mb-4.mb-md-0
                    .row
                      .col-12.col-md-4.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2-imagen22.svg")
                      .col-12.col-md-8.mb-4.mb-md-0
                        ul.lista-ul--color
                          li 
                            i.lista-ul__vineta
                            | Cuando la presión es poca, la tela no alcanza a incrustarse en el diente, ocasionando que esta se pegue y varía la cantidad de puntadas por pulgada.
                .row.align-items-center.exclamation
                  .col-auto
                    figure
                      img(src="@/assets/curso/exclamacion.svg")
                  .col
                    p.mb-0 El ancho de la base del pie prensatelas debe ser igual al ancho del diente y cubrirlo en un 90% de su recorrido.
              .row(titulo="Parte 10")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen23.jpg')
                .col-12.col-md-9
                  p 
                    strong Planchuela
                    br
                    br
                    | Es la que sirve de apoyo al material cuando el diente se encuentra regresando, además, viene provista de un orificio que es el lugar de penetración de la aguja. Este orificio varía de acuerdo al ajuste, pues él debe ser un 40% más amplio que la hoja de la aguja. La planchuela tiene carriles, estos deben ser iguales al número de carriles del diente; además, el diente debe desplazarse en la totalidad del carril de la plancha.
              .row(titulo="Parte 11")
                .col-12.col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2-imagen24.jpg')
                .col-12.col-md-9
                  p 
                    strong Tomador de lazada
                    br
                    br
                    | Es el elemento mecánico que, junto con la aguja, se encarga de formar la puntada.  Estos elementos son auxiliados algunas veces en la formación de la puntada por otros elementos mecánicos.
                  a.anexo.mb-4(:href="obtenerLink('/downloads/Clases de tomadores de lazada (1).pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p
                        strong Anexo. 
                        |   Clases de tomadores de lazada

      .py-3.py-md-4(titulo="Alimentacón\r\no transporte" :imagen="images[3]"  :numero="numbers[3]")
        div
          p.mb-5 De  manera estrecha, la relación que tiene el ajuste con la alimentación o transporte (arrastre) es también factor diferenciador en la identificación de maquinaria para el proceso productivo. Sin embargo, los diferentes tipos de alimentación definen de algún modo el tipo de línea productiva del producto a realizar y más aún la cantidad de materiales que se utilizan en la industria, como tejidos, no tejidos, aglomerados, cueros, cuerinas, lonas y demás. 
            br
            br
            | Cuando se habla de alimentación en la maquinaria de confección, se trata del desplazamiento del material a coser, pero en algunos casos no se desplaza el material si no la máquina, debido al peso del material, como al cerrar un colchón; esto nos ayuda a analizar y comprender la alimentación de la maquinaria de confección. 
          TabsA.color-acento-contenido.mb-5
            .tarjeta.color-primario--claro.p-4(titulo="Oscilante sencillo")
              p.mb-5 Este tipo de alimentación lo realiza el diente siguiendo cuatro pasos y la secuencia solo se invierte cuando se remata. Los pasos son los siguientes.
                br
                br
                strong Paso 1: 
                |  el diente sube y aparece justamente encima de la plancha de aguja.
                br
                strong Paso 2: 
                |  los dientes desplazan el material a coser.
                br
                strong Paso 3: 
                |  los dientes descienden hasta la parte inferior de la plancha.
                br
                strong Paso 4: 
                |  los dientes se regresan por la parte inferior de la plancha
              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen25.svg")
              .row.justify-content-center
                .col-10
                  .row.align-items-center.exclamation
                      .col-auto
                        figure
                          img(src="@/assets/curso/exclamacion.svg")
                      .col
                        p.mb-0 El ancho de la base del pie prensatelas debe ser igual al ancho del diente y cubrirlo en un 90% de su recorrido.
            .tarjeta.color-primario--claro.p-4(titulo="Alimentación combinada")
              p.mb-5 Este tipo de alimentación es realizada por el diente y la aguja, o sea que la barra de aguja también tiene cuatro pasos y se combina con el diente para desplazar el material.
                
              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen26.svg")
            .tarjeta.color-primario--claro.p-4(titulo="Doble transporte")
              p.mb-5 Las máquinas que tienen este tipo de alimentación parece que tuvieran un prensatelas dividido en dos partes, pero solo al accionarla se observa que la mitad del pie se levanta y hace un movimiento al unísono con el diente para desplazar el material a coser. Este diente superior tiene cuatro pasos, como lo hace la barra de aguja en la alimentación combinada; la diferencia es que el diente no penetra en el otro, sino que es por contacto con el material que este lo desplaza.

              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen27.svg")
              .row.justify-content-center
                .col-10
                  .row.align-items-center.exclamation
                      .col-auto
                        figure
                          img(src="@/assets/curso/exclamacion.svg")
                      .col
                        p.mb-0 Este tipo de alimentación es muy utilizado en las máquinas de guarnecer.
            .tarjeta.color-primario--claro.p-4(titulo="Triple transporte")
              p.mb-5 Es el tipo de alimentación más pesado que se conoce, pues son tres los encargados de desplazar el material a coser, y es la combinación de todas las anteriores, pues el material es desplazado por diente inferior, aguja y diente superior.

              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen28.svg")
            .tarjeta.color-primario--claro.p-4(titulo="Alimentación continua")
              p.mb-5 Este tipo alimentación, como su nombre lo dice, es constante, o sea que el material no se detiene, siempre está siendo desplazado en el momento de costura. Es empleado principalmente en algunas máquinas autómatas, como la ojaladora sencilla, y en máquinas automáticas, como las ribeteadoras y pagadoras de bolsillo.

              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen29.svg")
            .tarjeta.color-primario--claro.p-4(titulo="Alimentación por diferencial")
              p.mb-5 Es aquel que está formado por un par de dientes independientes, con movimiento propio cada uno de ellos; su sincronización es idéntica.
                br
                | Oscilante sencillo se utiliza para hacer que uno de los dientes tenga un mayor o igual recorrido que el otro, de acuerdo con las necesidades, ya sea para recoger o estirar la tela.

              .row.justify-content-center.mb-5
                .col-11
                  figure
                    img(src="@/assets/curso/tema2-imagen30.svg")
              
    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Generaciones de máquinas: primera, segunda, tercera, ultrasonido

    p.mb-5 En la búsqueda de reconocer e identificar los diferentes tipos de máquinas, tipos de camas, ajustes, partes y funciones, encontramos las generaciones tecnológicas, las cuales presentan mejores alternativas al diseñador para poder aumentar o disminuir áreas de costura, tipos de puntadas, fruncidos de tela, entre otros aspectos importantes de acuerdo con el nivel de producción deseada.

    .row.justify-content-center.py-4.mb-5(style="background-color: #D6EBFB")
      .col-10
        p.mb-0 Actualmente, las máquinas de coser se pueden clasificar en tres tipos, según el nivel tecnológico, como se puede observar en la siguiente infografía.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Máquinas de primera generación")
        .row
          .col-12.col-md-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2-imagen32.jpg")
          .col-12.col-md-8.mb-4.mb-md-0
            p.mb-0 Son máquinas convencionales, sin ningún tipo de ayudas. En este tipo de máquinas el operador realiza el 90% de las operaciones de la máquina, como levantar el prensatelas, posicionar la aguja para retirar el material, cortar los hilos, hacer atraques y otras operaciones más.


      .py-3.py-md-4(titulo="Máquinas de segunda generación")
        .row
          .col-12.col-md-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2-imagen31.jpg")
          .col-12.col-md-8.mb-4.mb-md-0
            p.mb-0 En este tipo de máquinas el operador realiza el 50% de las operaciones, debido a que las máquinas vienen provistas con ayudas de tipo electrónico, neumático o electro-neumático. 
              br
              br
              | Esta generación incluye algunas ayudas que optimizan el trabajo y disminuyen el esfuerzo del operario que manipula la máquina, así.
              br
              br
              strong Cortadores de hilo: 
              |  Este tipo de ayuda corta los hilos automáticamente, una vez terminada la operación de costura; con esto se evita el desperdicio de hilo y tiempos en la operación.
              br
              br
              strong Levantador de prensatelas: 
              |  Este tipo de ayuda le permite al operador levantar el prensatelas y/o puller en el momento que lo requiera, solamente llevando el pedal hacia atrás. Esto disminuye la fatiga del operador, debido a que la máquina no necesita rodilleros ni pedales para realizar esta operación, la cual, en algunos casos, requiere un gran esfuerzo por parte del operador para vencer la resistencia de los resortes de tensión del prensatelas.
              br
              br
              strong Tableros de control: 
              |  Estos tableros le permiten al operador programar la máquina para que realice algunas operaciones de costura en forma automática; entre otras, están: remate inicial, realizar costuras rectas automáticamente, remate final, corte de hilo automático al terminar la operación. Todo dependiendo del tipo de tablero con que esté equipada la máquina.
      .py-3.py-md-4(titulo="Máquinas de tercera generación")
        p.mb-5 En este tipo de máquinas el operador realiza el 10% de las operaciones y puede incluso operar dos o tres máquinas a la vez. Estas vienen provistas con las ayudas de la generación anterior, pero además cuentan con la ayuda de sensores que permiten que las máquinas trabajen casi solas.
          br
          br
          strong Máquinas de ultrasonido: 
          |  Este tipo de máquinas une el material por ultrasonido. Incorporan un sistema de sonotrodo que emite un ultrasonido de 60.000 ciclos contra una rueda transportadora que tiene la forma de una puntada. Podría decirse que produce una soldadura entre las telas y, por medio un disco intercambiable, puede imitar las puntadas de fileteo, cadeneta y doble pespunte. La única condición para un funcionamiento adecuado es que el material a coser debe estar compuesto de poliéster como mínimo en un 60% de su estructura física.
        .row.justify-content-center
          .col-md-8
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src="@/assets/curso/tema2-imagen33.jpg")
            
              .col-md-6
                figure
                  img(src="@/assets/curso/tema2-imagen34.jpg")

    ModalA(:abrir-modal.sync="modalShow")
      .row(v-if="modalActive === 0")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 01
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquinas familiares o domésticas
            p.mb-4 Máquinas que por su versatilidad poseen las siguientes características:
            ul.lista-ul--color.mb-4
              li 
                i.lista-ul__vineta
                | Muy baja velocidad (500 a 1000 rpm*).
              li 
                i.lista-ul__vineta
                | Muy baja potencia.
              li
                i.lista-ul__vineta
                | Facilidad para desplazarlas (portátiles en su gran mayoría).
              li
                i.lista-ul__vineta
                | Lubricación manual.
              li
                i.lista-ul__vineta
                | Materiales de sus elementos (en la gran mayoría de plástico).
              li
                i.lista-ul__vineta
                | Diversidad de puntadas: costura recta, zigzag 1 y 3 pasos, ojal recto, pegar botón, algunas pueden hacer puntadas decorativas.
            p.mb-5 Dentro de estas máquinas se encuentra la máquina plana, la fileteadora y la recubridora.

            .row
              .col-12.col-lg-6.mb-5.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  span Máquina plana familiar
                figure
                  img(src="@/assets/curso/tema2-modalimagen1.jpg")

              .col-12.col-lg-6.mb-5.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  span Tipos de puntadas de la máquina plana familiar 
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen2.jpg")
                .titulo-sexto.color-acento-contenido
                  span Fileteadora sencilla familiar 
                figure
                  img(src="@/assets/curso/tema2-modalimagen3.jpg")
      .row(v-if="modalActive === 1")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-botones
          p.mb-0 02
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquinas semindustriales
            p.mb-4 Sus características se acercan más a la industria, pero todavía no alcanzan el rendimiento productivo necesario para dicho entorno. Entre sus características están: 
            ul.lista-ul--color.mb-4
              li 
                i.lista-ul__vineta
                | Velocidad: 1725 rpm*
              li 
                i.lista-ul__vineta
                | Potencia media: permite coser mayores capas de material que las familiares.
              li 
                i.lista-ul__vineta
                | Lubricación manual en la gran mayoría de casos (en la actualidad vienen con bomba de lubricación).
              li 
                i.lista-ul__vineta
                | Diversidad de puntadas: costura recta, zigzag sencillo, ojal recto, pegar botón, pegar apliques.

            .titulo-sexto.color-acento-contenido
              span Máquina plana semindustrial
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen4.jpg")

      .row(v-if="modalActive === 2")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-contenido
          p.mb-0 03
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquinas industriales
            p.mb-4 Con estos tipos de máquinas, se entra en el mundo de la productividad, calidad y optimización de recursos en esta dinámica tan cambiante de la moda. Entre sus características están:
            ul.lista-ul--color.mb-4
              li 
                i.lista-ul__vineta
                | Velocidad: llegan a alcanzar hasta 6000 rpm*.
              li 
                i.lista-ul__vineta
                | Potencia alta: permiten trabajar varias capas de material por su gran capacidad de penetración de los mecanismos de puntada.
              li 
                i.lista-ul__vineta
                | Lubricación automática.
            
            .titulo-sexto.color-acento-contenido
              span Existen máquinas industriales como: zigzag sencillo, doble o triple; plana de una y dos agujas, de coser y cortar; fileteadoras sencillas, de refuerzo o seguridad; recubridoras o collarín; pretinadora, multiagujas, cerradora de codo y flatseamer, entre otras. 
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen5.jpg")
          
      .row(v-if="modalActive === 3")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 04
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquinas de ciclo
            p.mb-4 Son aquellas que están construidas para cumplir una función específica en un ciclo, por ejemplo hacer un ojal, pegar un botón, pegar un aplique o hacer una presilla, entre otras.  En este tipo de máquina, el operador solo tiene que ubicar el material, accionar un mando y la máquina en un ciclo realiza la operación. Entre las comunes se tienen:
            .row
              .col-12.col-lg-6.mb-5.mb-lg-0
                ul.lista-ul--color.mb-4
                  li 
                    i.lista-ul__vineta
                    | Presilladora
                  li 
                    i.lista-ul__vineta
                    | Botonadora
                  li 
                    i.lista-ul__vineta
                    | Ojaladora de ojal recto
                  li 
                    i.lista-ul__vineta
                    | Ojaladora de ojal de lagrima
                .titulo-sexto.color-acento-contenido
                  span Máquina presilladora
                figure
                  img(src="@/assets/curso/tema2-modalimagen6.jpg")
              .col-12.col-lg-6.mb-5.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  span Máquina botonadora
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen7.jpg")
                .titulo-sexto.color-acento-contenido
                  span Máquina ojaladora
                figure
                  img(src="@/assets/curso/tema2-modalimagen8.jpg")
          
      .row(v-if="modalActive === 4")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-botones
          p.mb-0 05
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquina sumergida
            p.mb-4 Cuando la cama de la máquina queda al mismo nivel del mueble de la máquina.
            .titulo-sexto.color-acento-contenido
              span Máquina fileteadora puntada de seguridad sumergida
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen9.jpg")
          
      .row(v-if="modalActive === 5")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-contenido
          p.mb-0 06
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquina semisumergida
            p.mb-4 Son las máquinas más comunes. El cárter, o depósito de aceite, se encuentra dentro del mueble y la cama de la máquina más arriba del mueble; su principal beneficio es el contorno de todo el mueble para usos de prendas de talla grande.
            
            .titulo-sexto.color-acento-contenido
              span Máquina semisumergida
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen10.jpg")
          
      .row(v-if="modalActive === 6")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 07
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Máquina no sumergida
            p.mb-4 Este concepto refiere a que la máquina está totalmente montada en el mueble de la máquina por aspectos de terminación de las prendas, por citar un ejemplo.

            .titulo-sexto.color-acento-contenido
              span Máquina presilladora no sumergida
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen11.jpg")
          
      .row(v-if="modalActive === 7")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-botones
          p.mb-0 08
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Cama plana
            p.mb-4 Este tipo de cama facilita la manipulación del material en costuras de cocido recto y materiales anchos.
            .titulo-sexto.color-acento-contenido
              span Máquina de poste
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen12.jpg")
            
      .row(v-if="modalActive === 8")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-contenido
          p.mb-0 09
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Cama cilíndrica o de brazo
            p.mb-4 Permite coser partes cilíndricas en su perímetro, su estructura es especialmente adecuada para trabajar piezas tubulares, tales como puños, mangas, materiales cerrados, entre otros. Este tipo de cama también se emplea en la máquina de pegar botones.
            .titulo-sexto.color-acento-contenido
              span Máquina ribeteadora
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen13.jpg")
            
      .row(v-if="modalActive === 9")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 10
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Cama cilíndrica, transversal o de codo

            p.mb-4 La zona cosida es transportada a lo largo del brazo hacia fuera. Permite coser partes cilíndricas o tubulares; operaciones tales como cerrar mangas, cerrar piernas de pantalón o jean, entre otros.
            .titulo-sexto.color-acento-contenido
              span Máquina cerradora de codo 
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen14.jpg")
          
      .row(v-if="modalActive === 10")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-botones
          p.mb-0 11
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Cama poste
            p.mb-4 Se emplea en aplicaciones especiales que requieren el trabajo en tres dimensiones. La columna facilita el trabajo en zonas curvas y en esquina. Operaciones de marroquinería, como confección de calzado y bolsos, entre otros.
            .titulo-sexto.color-acento-contenido
              span Máquina de poste
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen15.jpg")
            
      .row(v-if="modalActive === 11")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-contenido
          p.mb-0 12
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Cama tipo zócalo
            p.mb-4 Este tipo de máquina se especializa en coser solo al canto de costura, costuras elásticas y de sobrehilado.
            .titulo-sexto.color-acento-contenido
              span Máquina fileteadora sencilla
            .row
              .col-lg-3
                figure.mb-5
                  img(src="@/assets/curso/tema2-modalimagen16.jpg")
            .row.align-items-center.exclamation.py-3.mb-5
              .col-12.col-md-auto
                figure
                  img(src="@/assets/curso/exclamacion.svg")
              .col-12.col-md
                p.mb-0 Ahora bien, como anteriormente se describe, las camas de las máquinas pueden cambiar por varios factores y uno de ellos destaca por sus aplicaciones, bien sea en confección de ropa, de calzado, en marroquinería o tapicería, por nombrar algunos.

            
      .row(v-if="modalActive === 12")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-acento-contenido
          figure
            img(src="@/assets/curso/exclamacion-blanco.svg")
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Sabías que
            p.mb-4 Con base en los diferentes tipos de máquinas por estructura, tipo o trabajo, las partes del cabezote se dividen en cuatro y es importante describirlas porque es donde se aloja el conjunto de elementos mecánicos que dan origen a los mecanismos de las máquinas. Estas partes se conocen como:
            ul.lista-ul--color.mb-4
              li 
                i.lista-ul__vineta
                | Cabeza
              li 
                i.lista-ul__vineta
                | Brazo
              li 
                i.lista-ul__vineta
                | Columna
              li 
                i.lista-ul__vineta
                | Cama
            p.mb-4 Y es esta última la que cobra vital importancia en el origen de las operaciones más relevantes de un producto a confeccionar, bien sea por su dificultad, complejidad, tiempo de producción o calidad, entre otros.

            ul.lista-ul--color.mb-4
              li 
                i.lista-ul__vineta
                | Algunos tipos de máquinas pueden modificar la cama, e incluso el mueble de la máquina, para adaptarse mejor a las condiciones del producto. Es por ello que si se trabaja con prendas de gran volumen, es posible encontrar términos en máquinas como máquina sumergida, máquina semisumergida, máquina no sumergida, cama plana, cama cilíndrica o de brazo, cama cilíndrica-transversal o de codo, cama poste y cama tipo zócalo.

          

</template>

<script>
import SliderVideos from '../components/SliderVideos.vue'
import TabSpecial from '../components/TabSpecial.vue'
import SliderCajas from '../components/SliderCajas.vue'
import InfografiaPopup from '../components/InfografiaPopup.vue'

const imagentab1 = require('@/assets/curso/tema2-tabs1.svg')
const imagentab2 = require('@/assets/curso/tema2-tabs2.svg')
const imagentab3 = require('@/assets/curso/tema2-tabs3.svg')
const imagentab4 = require('@/assets/curso/tema2-tabs4.svg')
const numerotab1 = require('@/assets/curso/tema2-number1.svg')
const numerotab2 = require('@/assets/curso/tema2-number2.svg')
const numerotab3 = require('@/assets/curso/tema2-number3.svg')
const numerotab4 = require('@/assets/curso/tema2-number4.svg')
export default {
  name: 'Tema2',
  components: {
    SliderVideos,
    SliderCajas,
    TabSpecial,
    InfografiaPopup,
  },
  data: () => ({
    items: [
      {
        id: 'id-1',
        title: 'Botonadora',
        link: 'https://www.youtube.com/embed/2L91WMqw96A',
      },
      {
        id: 'id-2',
        title: 'Cerradora de  codo liviana',
        link: 'https://www.youtube.com/embed/_YwKSdtWr0Q',
      },
      {
        id: 'id-3',
        title: 'Dos agujas',
        link: 'https://www.youtube.com/embed/OwqeTKImq-0',
      },
      {
        id: 'id-4',
        title: 'Cilíndrica de codo',
        link: 'https://www.youtube.com/embed/vMN0rVY0g4Y',
      },
      {
        id: 'id-5',
        title: 'Cerradora de codo jean',
        link: 'https://www.youtube.com/embed/tvvmB5Ik62o',
      },
    ],
    images: [imagentab1, imagentab2, imagentab3, imagentab4],
    numbers: [numerotab1, numerotab2, numerotab3, numerotab4],
    items2: [
      {
        id: 0,
        title: 'Tensores',
        text:
          'Este mecanismo tiene como función regular la tensión del hilo de la aguja y controlar la alimentación del hilo para la formación de la puntada.',
        color: '#D6EBFB',
      },
      {
        id: 'item-2',
        title: 'Guía hilos',
        text: 'Sirve para guiar el hilo durante todo su recorrido.',
        color: '#D6EBFB',
      },
      {
        id: 'item-3',
        title: 'Palanca tira hilo',
        text:
          'Es un dispositivo que tira la cantidad de hilo justa de la aguja desde su suministro. Suelta la cantidad necesaria para la formación de la puntada y saca el hilo sobrante para fijar las puntadas.',
        color: '#D6EBFB',
      },
      {
        id: 'item-4',
        title: 'Regulador de puntada',
        text:
          'Regula el tamaño de la puntada; mientras menos es el número más pequeña es la puntada.',
        color: '#D6EBFB',
      },
      {
        id: 'item-5',
        title: 'Barra de aguja',
        text:
          'Su movimiento es rectilíneo vertical, sostiene la aguja en posición.',
        color: '#D6EBFB',
      },
      {
        id: 'item-6',
        title: 'Barra prensatela',
        text: 'Barra que sujeta el prensatela o pie de la máquina.',
        color: '#D6EBFB',
      },
      {
        id: 'item-7',
        title: 'Tornillo regulador',
        text:
          'Este tornillo sirve para regular la presión que hay entre el prensatelas y la alimentación.',
        color: '#D6EBFB',
      },
    ],
    modalActive: 'none',
    modalShow: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    activateModal(modal) {
      this.modalActive = modal
      this.modalShow = true
    },
  },
}
</script>

<style lang="sass" scoped></style>
