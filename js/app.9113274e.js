(function(e){function a(a){for(var i,o,t=a[0],s=a[1],l=a[2],d=0,u=[];d<t.length;d++)o=t[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var t=n[o];0!==c[t]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},c={app:0},r=[];function t(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"3e751833","chunk-0206bfa0":"775100f0","chunk-0c047e41":"10a877a8","chunk-13a6037e":"bcc7d6b0","chunk-18f95272":"a10ef121","chunk-25b302c8":"2776ebc6","chunk-26fc7596":"0acf1706","chunk-2c06842c":"5b349a5b","chunk-2d0c5615":"153e183c","chunk-2d0e96ec":"8832b8d3","chunk-2d208d90":"c8ac44c9","chunk-2d21d0e2":"c74a93e4","chunk-2d22c123":"2c592acc","chunk-2d2747e2":"7c208a8f","chunk-2e80bb9a":"f8cc6e39","chunk-319206de":"f9fea504","chunk-32334cb6":"fb68214c","chunk-36769079":"b95a5b01","chunk-3c57cd7b":"96f54a3a","chunk-4cdd78c0":"0c114b9e","chunk-4f2d402a":"83a1e52e","chunk-515a8379":"0060d8c0","chunk-53ccb27e":"fa7695c8","chunk-55d286b8":"9c96ec2f","chunk-59974754":"882d5f7a","chunk-60cbc06b":"efcf7df2","chunk-659152b8":"9551a041","chunk-6e1e538a":"a70717f5","chunk-766a929b":"eeac831a","chunk-c796899c":"33020636","chunk-e8a7823a":"35e71e00","chunk-f2df7d2c":"5f0e605f","chunk-fde47172":"b39b3b59",comple:"c23340d9",creditos:"da370ff7",glosario:"5f006248",intro:"685f2a8b",referencias:"d52c3f3f",sintesis:"488c3332",tema1:"eba2e884",tema2:"58d3fa3a",tema3:"c4817ab4"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1,tema2:1,tema3:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"726d6ef5","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"057b8e2a","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"614aa5bd","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"6534d134",creditos:"50d8eafa",glosario:"3eb4bd8b",intro:"31d6cfe0",referencias:"0609acf7",sintesis:"31d6cfe0",tema1:"4301aa72",tema2:"7b76508a",tema3:"fa42a55d"}[e]+".css",c=s.p+i,r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var l=r[t],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===c))return a()}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){l=u[t],d=l.getAttribute("data-href");if(d===i||d===c)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=c[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=c[e]=[a,n]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=t(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}c[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.e101b395.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},c=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},t=r,s=n("2877"),l=Object(s["a"])(t,o,c,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Simulación clínica, enseñanza y aprendizaje en el proceso de formación",descripcionCurso:"El reconocimiento del nacimiento u origen de la simulación y sus beneficios, los cuales se encuentran en las diferentes áreas de la salud, permite desarrollar estrategias para enfrentar los problemas encontrados en eventos clínicos derivados de la creciente demanda de la formación práctica, por medio de ambientes que imitan la realidad y la orientación requerida y ofrecida por el instructor.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Historia de la simulación clínica",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Concepto de simulación",hash:"t_1_1"},{numero:"1.2",titulo:"¿Qué es simulación clínica?",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Teorías de la simulación clínica",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Teoría social cognitiva (Bandura)",hash:"t_2_1"},{numero:"2.2",titulo:"Teoría de carga cognitiva (Sweller)",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Etapas para el aprendizaje",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CFA_1_33110293.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Concepto de simulación",referencia:"Agency for Healthcare, Research and Quality [AHRQ]. (2016). <em>Diccionario de Simulación en Salud.</em> Fundación Garrahan.",tipo:"PDF",link:"http://medicina.uach.cl/wp-content/uploads/2020/08/diccionario_simulacion_spanish_v1_0.pdf"},{tema:"¿Qué es simulación clínica?",referencia:"Universidad Tecnológica de Pereira. (2021). <em>Laboratorio de simulación clínica UTP</em> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=E6Y5hZAj4To"},{tema:"¿Qué es simulación clínica?",referencia:"UIC Barcelona. (2016). <em>Centro Integral de Simulación Avanzada | UIC Barcelona</em> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=XnaTqRjuKC4"},{tema:"Teorías de la simulación clínica",referencia:"Armijo, S. (2021). <em>Teorías para la inserción curricular de la Simulación Clínica.</em> Universidad del Desarrollo.",tipo:"PDF",link:"https://medicina.udd.cl/files/2021/05/C3-Teorias-para-insercion-curricular-de-simulacion-clinica.pdf"},{tema:"Etapas para el aprendizaje",referencia:"Departamento de Integración de Ciencias Médicas. (2020). <em>Etapas de la Simulación Clínica</em> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=5Nng3DX3fTY"}],glosario:[{termino:"Aprendizaje",significado:"proceso a través del cual el comportamiento y la conducta son alterados o desarrollados por medio de la práctica y la experiencia."},{termino:"Atención",significado:"servicios recibidos por los individuos o las poblaciones para promover y mantener la salud."},{termino:"Escenario",significado:"descripción de simulación que incluye metas, objetivos, puntos de <em>debriefing</em>, descripción narrativa de la simulación clínica, requisitos de personal, configuración de la sala de simulación, simuladores, operación del simulador e instrucciones."},{termino:"Escenario clínico",significado:"plan esperado del potencial desarrollo de eventos en una experiencia clínica simulada. Incluye el contexto para la simulación (salas hospitalarias, salas de urgencias, reanimación, consultorios, etc.)."},{termino:"Fidelidad",significado:"grado en que la simulación replica el evento real y/o lugar de trabajo. Esto incluye elementos físicos, psicológicos y ambientales."},{termino:"Guía en simulación",significado:"una recomendación sobre las cualidades para la fidelidad en simulación, la validez en simulación, el programa de simulación o la evaluación formativa o sumativa."},{termino:"Metodología",significado:"conjunto de procedimientos que siguen en una investigación científica, estudio o una exposición doctrinal."},{termino:"Modalidad",significado:"referente al o los tipos de simulación que se usan como parte de la actividad de simulación, por ejemplo, entrenadores de habilidades, simulación basada en maniquí, computadoras, realidad virtual, etc."},{termino:"Modelo interactivo",significado:"simulador de situación, práctica o conjunto de acciones que varía de acuerdo con la participación humana."},{termino:"Realidad Virtual",significado:"uso de la tecnología informática para crear un mundo tridimensional interactivo en el que los objetos tienen una sensación de presencia espacial; ambiente/entorno virtual y mundo virtual son sinónimos de realidad virtual."},{termino:"Simulación",significado:'proviene del latín <em>simulare</em>, y significa "representar algo, fingiendo o imitando lo que no es".'},{termino:"Simulación en salud",significado:"técnica que crea una situación o ambiente para permitir que las personas experimenten una representación de un evento de atención en salud real, con el propósito de practicar, aprender y evaluar."},{termino:"Riesgo",significado:"contingencia o proximidad de un daño o peligro."}],referencias:[{referencia:"Andrade-Lotero, L. (2012). Teoría de la carga cognitiva, diseño multimedia y aprendizaje: un estado del arte. <em>Magis. Revista Internacional de Investigación en Educación</em>, 5(10), p. 75-92.",link:"https://www.redalyc.org/pdf/2810/281024896005.pdf"},{referencia:"Armijo, S. (2021). <em>Teorías para la inserción curricular de la Simulación Clínica.</em> Universidad del Desarrollo.",link:"https://medicina.udd.cl/files/2021/05/C3-Teorias-para-insercion-curricular-de-simulacion-clinica.pdf"},{referencia:"Cabacas, T. (2013). <em>Historia del fórceps de Obstetricia.</em> Blog de Tomás Cabacas.",link:"http://tomascabacas.com/historia-del-forceps-de-obstetricia/"},{referencia:"Comunidad FacMed. (2020). SIMex 2020: <em>Acreditación y certificación en simulación clínica para la seguridad del paciente.</em> Gaceta Facultad de Medicina.",link:"https://gaceta.facmed.unam.mx/index.php/2020/11/23/simex-2020-acreditacion-y-certificacion-en-simulacion-clinica-para-la-seguridad-del-paciente/"},{referencia:"Dieckmann, P. (s. f.). <em>Simulation is more than Technology - The Simulation Setting.</em> Danish Institute for Medical Simulation.",link:"https://laerdalcdn.blob.core.windows.net/downloads/f1199/AEVMXBWM/Simulation-is-spreading-around-the-world---FINAL-WEB-Version-LA-Brazil.pdf"},{referencia:"Digital Museums Canada. (s. f.). <em>Mrs. Chase: A Model Patient.</em> Community Stories.",link:"https://www.communitystories.ca/v2/womens-college-nursing_ecole-infirmieres-womens-college/story/the-preclinical-term-the-probies/"},{referencia:"Grange, J. (2013). <em>El encanto de la mujer más besada de la historia.</em> BBC News Mundo.",link:"https://www.bbc.com/mundo/noticias/2013/10/131023_mujer_besada_resusci_anne_finde"},{referencia:"Herrejón, P. (s. f.). <em>Simulación.</em> Timetoast.",link:"https://www.timetoast.com/timelines/simulacion-01d9262b-e5a0-4c49-b4ef-14c01071d343"},{referencia:"Neri-Vela, R. (2017). <em>El origen del uso de simuladores en Medicina.</em> Primer Encuentro Internacional de Simulación | Simex 2017.",link:"https://www.medigraphic.com/pdfs/facmed/un-2017/uns171c.pdf"},{referencia:"Psiqueviva. (s. f.). <em>Teoría cognitivo-social de Albert Bandura./em>",link:"https://psiqueviva.com/teoria-cognitivo-social-de-albert-bandura/"},{referencia:"Puga, M. y Torres, C. (2014). Perspectiva Andragógica de la Simulación Clínica. <em>Revista Ciencia Unemi</em>, 7(12), p. 37-46.",link:"https://www.redalyc.org/pdf/5826/582663859006.pdf"},{referencia:"Rodríguez, D. (2021). <em>Definición de Simulación.</em> ConceptoDefinición.",link:"https://conceptodefinicion.de/simulacion/"},{referencia:"Smith, C. y Peng, Y. (2021). La evolución y el papel de la simulación en la enseñanza de la medicina. <em>APSF Boletín Informativo</em>, 4(2), p. 85-87.",link:"https://www.apsf.org/es/article/la-evolucion-y-el-papel-de-la-simulacion-en-la-ensenanza-de-la-medicina/"},{referencia:"Universidad Manuela Beltrán. (s. f.). <em>La Cámara de Gesell.</em>",link:"https://umb.edu.co/programa/camara-de-gesell/"},{referencia:"Vigotsky, L. (1978). <em>El desarrollo de los procesos psicológicos superiores.</em> Editorial Crítica.",link:"http://www.terras.edu.ar/biblioteca/6/TA_Vygotzky_Unidad_1.pdf"},{referencia:"Zeigen Microscopios. (2021). <em>Los simuladores médicos: ¿Cuál es su historia?</em> Zeigen.",link:"https://www.zeigenmx.com/blog/simuladores-medicos-3/los-simuladores-medicos-cual-es-su-historia-2"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable línea de producción Distrito Capital",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Efraín Gómez Matamoros",cargo:"Experto Temático",centro:"Centro de Formación de Talento Humano en Salud - Regional Distrito Capital"},{nombre:"Claudia Milena Hernández Naranjo",cargo:"Diseñadora Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Metodología para la formación virtual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo Desarrollo Curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Darío González",cargo:"Corrector de Estilo",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Adriana Marcela Suarez Eljure",cargo:"Diseño web",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Jhon Edinson Castañeda Oviedo",cargo:"Desarrollo Fullstack",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos y vinculación en plataforma LMS",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.a8ce9ba8.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.9113274e.js.map