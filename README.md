# Pagina web per a l'assignatura de Producció i Disseny Cartogràfic. Eines WEB
__En les primeres sesions de l'assignatura se'ns va proposar crear una pàgina web de temàtica lliure.__     

[Aquest és el link a la pàgina que s'explicarà a acontinuació](https://marinamartin.github.io/practicanum1/)  

Les eines utilitzades per a l'elaboració de la pàgina han estat l'editor de text __Sublime Text 3__ la biblioteca de codi obert de mapes interactius [__Leaflet__](https://leafletjs.com/), per a les fonts s'ha utilitzat [__Google Fonts__](https://fonts.google.com/), i per a les icones de les xarxes socials [__Icon-icons__](https://icon-icons.com/es/). 

## Metodologia
Abans de començar a crear la pàgina web em vaig fer un esquema del contingut que volia que tingués la pàgina. En aquest esquema vaig dividir el contingut en pestanyes i vaig fer un petit redactat del contingut de cada una d'elles.  
En aquesta primera pràctica vaig crear 5 pestanyes, __Inici__, __Sobre mi__, __Serveis__, __Contacte__ i __Localització__.

### Inici
La pàgina d'inici és la que més contingut té.  
Comparteix amb totes les altres pàgines de la web una capçalera on hi ha el __logo de la marca__, el qual està enllaçat perquè quan es clicki en ell en qualsevol de les pestanyes retorni a la pàgina principal. La capçalera també conté els __enllaços a la resta de pestanyes__. Si fem la pestanya en mida més petita o ho mirem des d'un dispositiu mòbil, a través del disseny responisve s'ha aconseguit que passi a ser un desplegable que s'obre al clicar en el botó de menú (les tres ratlles que s'observes en la part superior dreta). L'altra element compartit amb les altres pàgines és un __botó en forma de fletxa__ que es troba a la part inferior dreta i que ens permet, al clickar-lo, tornar a pujar automàticament a la part superior de la pàgina. Finalment, l'últim element compartit és el peu o __footer__, on es mostrés els __enllaços a les xarxes socials__ com [Facebook](https://www.facebook.com/), [Instagram](https://www.instagram.com/) i [Twitter](https://twitter.com/). També, en el peu es mostra el __copyright__. 

Vaig decidir ficar una imatge central que ocupés tota l'amplada de la pàgina i a sobre d'aquesta imatge, vaig col·locar dos títols i un botó que dirigeix a la pàgina de _Serveis_.  
Sota de la imatge s'han col.locat tres blocs o contenidors que contenen un títol, un petit text i una imatge. El contingut d'aquests blocs és el següent:
| Títol                         | Text                                          | Imatge          |
| -------------                 |:-------------:                                | -----:          |
| Bodas y celebraciones       | Haremos que tu boda sea la que has soñado.      | 5 rams petits   |
| Complementos para invitadas | Te diseñamos tu complemento floral a tu medida. |   Corona de flors   |
| Pendientes de flores        | Nueva colección de pendientes                   |   Arracades     |  

_La taula anterior ha estat dissenyada amb l'objectiu de mostrar l'habilitat de crear taules en el llenguatge de Markdown._  

### Sobre mi
En aquesta pàgina faig una breu descripció del projecte i també realitzo una presentació meva.  
Tot això està situat dintre d'un contenidor amb el fons de color rosa, amb un títol principal (Sobre mi) centrat i ja dintre del contenidor hi ha un altre títol en cursiva i el text amb la presentació, tot alineat al centre de la pàgina, amb una fotografia a la part inferior del text. 

### Serveis
En la pàgina de serveis s'exposen els productes que es realitzen.  
La informació está dividida en 3 blocs o contenidors amb els mateixos estils que en totes les altres pàgines:

1. Bodes i celebracions.
+ Ramos de novia y réplicas para regalar.
2. Complements.
+ Complements per a novies i invitades.
3. Arracades de flors.
+ Arracades de flors preservades.
4. Decoració.
+ Inicials amb flors preservades.  



### Contacte  
A la pàgina de Contacte, s'ha escrit una breu frase introductoria i a sota d'aquesta s'ha colocat un qüestionari amb 5 apartats:
+ Nom.
+ Cognoms.
+ Número de teléfon.
+ Correu electrònic.
+ I un caixetí per a escriure el cos del missatge.  

Dintre de cada requadre creat per a que la gent pugui escriure el seu contingut, també s'ha introduït una petita frase per ajudar a indicar millor el contingut que ha d'anar en cada lloc, per exemple al caixetí per a escriure el cos del missatge s'ha introduit la frase _Aquí empieza todo, escríbeme una pequeña descripción de lo que necesitas y te gustaría_.  
El formulari de contacte s'ha fet mitjançant les instruccions proporcionades en la classe impartida pel professor Carlos Soriano.  


### Localització 
En aquesta pàgina s'ha introduït un mapa a través de [__Leaflet__](https://leafletjs.com/).  
Leaflet és una llibreria de JavaScript de codi obert que s'utilitza per a la publicació de mapes a les webs. 
El mapa que s'ha ficat en aquesta pestanya indica la direcció de la botiga (inventada). També s'ha inclòs una petita llegenda que en el cas d'aquest mapa potser no hagués estat necessària però la vaig incloure per a demostrar que coneixia i dominava aquesta funció que ens proporciona _Leaflet_. 
Per a fer el mapa, vaig seguir el tutorial que ens proporciona la pàgina oficial de _Leaflet_. Vaig anar ficant totes les comandes que s'indicaven i finalment vaig ficar les coordenades corresponents al punt que volia mostrar.  


## Pràctica 2. Disseny d'una web dinàmica
En la pràctica número 2 vaig incloure una nova pestanya a la pàgina web, anomenada _¿Dónde enviamos?_.  
L'objectiu de la pràcitca era aprendre a utilitzar una connexió a través d'una API remota. La API escollida va ser [Rest Countries](https://restcountries.eu/).  
Els passos realitzats per a crear l'enllaç van ser els següents:
1. Agafar el codi JSON que em proporcionava la pàgina escollida i mitjançant "el copiar i enganxar" a una [pàgina que ordena el codi JSON](https://codebeautify.org/jsonviewer) amb l'objectiu de poder veure tot el codi ordenat i així identificar més facilment els elements que contenia.  
2. Després d'haver analitzat la informació de manera ordenada, he començat un document HTML nou amb l'objectiu de no crear conflictes amb la meva pàgina web (que posteriorment copiaré aquest codi en la pàgina web definitiva, realitzada a la pràctica 1). La informació escollida per a filtrar ha estat capitals, número de població, continent, i latitud i longitud.
3. Posteriorment, he decidit fer un altre document Java Script, per tal de seguir les bones pràctiques ensenyades en el primer bloc de l’assignatura, amb l’objectiu de tenir tota la informació ordenada. També, és en aquest pas on he decidit crear una barra desplegable, en lloc d’un buscar com el que vam realitzar a classe, amb l’objectiu de practicar funcions noves i fer exemples diferents.
4. Traspasso fent un “copia i enganxa” al document HTML de la meva pagina web creada a la pràctica 1, després d’haver comprovat que funciona correctament.
5. Seguidament, vaig començar l'elaboració del mapa. És en aquest pas on creo un pin (marcador en el mapa) per a que es desplaci d'un indret a un altre segons l'opció marcada en els països. 
6. És en aquest punt on em trobo amb un conflicte, ja que en el mapa, quan selecciono un país no se'm mou cap a les coordenades d'aquest, havent ficat les opcions correctament i sobretot la comanda "fly to". Identifico la possible relació amb l'error amb la forma que l'API utilitzada ens proporciona les dades. En l'exemple del Geonames realitzat a classe les dades de longitud i latitud es mostraven de forma separada i independent, en canvi en l'API utilitzada aquestes dades es mostrés de forma conjunta i sense espais.  

## Disseny responsive
El disseny responisive d'aquesta pàgina s'ha fet mitjançant la tècnica de __media queries__.  
Aquest tipus de disseny responisve s'encarrega de crear punts de trencament en la fulla d'estils CSS permetent així que la pàgina sigui visible correctament en les diferents mides de dispositius.  
Per tant el que he fet en aquest sistema és establir unes mides en concordança en cada mida de pantalla, per exemple s'han creat les mides per a pantalles de __480px, 782px, 1024px i 1280px__.  En cada una d'aquestes mides s'han establert les característiques dels contenidors, del menú, de les icones del menú i del banner del títol, entre d'altres.


## Pràctica 3
La pràctica 3 consisteix en la realització de tres tasques principals. La creació d'aquest reedme, la integració d'una taula formatada a la nostra pàgina web, la confecció d'un diagrama amb mermaid.js i la creació d'un mapa amb pop-ups amb una frase i imatges.

#### Taula  
Per a fer la taula de manera diferent a l'ensenyada a classe i així poder provar altres métodes he utilitzat la pàgina [Tableizer](https://tableizer.journalistopia.com/tableizer.php), la qual m'ha permès crear el codi de la taula que jo prèviament havia realitzat en l'Excel. En aquest punt m'he trobat un problema: les cel·les que estaven col·lapsades de la taula i per tant juntes, no se'm mantenien en el format desitjat. Per a que se'm mostressin juntes he hagut de crear l'opció "colspan" dintre de la fila que volia que es col·lapses.  
Per altra banda, he buscat diferents colors a la pàgina [HTML color codes](https://htmlcolorcodes.com/es/) per a donar-li estil a la taula.

#### Diagrama amb Mermaid.js  
Per a la realització del diagrama he seguit els pasos que s'indiquen en la documentació de la [pàgina oficial de Mermaid](https://mermaid-js.github.io/mermaid/#/). He configurat el diagrama en linia i posteriorment he escrit les comandes corresponents.

#### Mapa amb QGIS
Primerament vaig fer les fotos amb el telèfon mòbil amb la localització activada. Posteriorment vaig importar les fotos al QGIS i vaig intal·lar el complement QGIS2web. Vaig modificar la taula d'atributs i vaig crear una columna pels pop-ups. En aquest punt em van sorgir diversos problemes els quals s'expliquen en l'apartat de problemes. 


## Principals problemes 
A la realització de la pàgina web m'he trobat amb diferents problemes.  
El primer problema va ser en el __format de les coordenades__ de l'API. L'API utilitzada ens proporcionava els paràmetres de latitud i longitud de manera junta, i només estaven separats per un coma, fet que va provocar que el moviment en el mapa no funciones, és a dir no es movia segons les dades seleccionades.
L'altre problema va ser en la __realització de la taula__. Quan la vaig realitzar amb la web [Tablizer](https://tableizer.journalistopia.com/tableizer.php), només em va proporcionar una estructura molt bàsica que posteriorment vaig modificar a mà.
Finalment, en la realització del __mapa amb QGIS__ també em vaig trobar amb diversos problemes. El principal va ser la introducció de la ruta de les fotografies. També un altre error que vaig cometre va ser la mala introducció d'alguns paràmetres i caràcters en les noves columnes de la taula d'atributs per a la realització del pop-up, fet que va provocar que em sortissin dues imatges dintre del pop-up.

## Aspectes que milloraria  
En acabar la web m'he trobat amb diferents aspectes que canviaria en unes següents revisions:
+ __L'estètica__: segurament optaria per una estètica més minimalista i amb menys color
+ Crearia __un altre ordre__ de les pestanyes que fos més visual.
+ Milloraria el __funcionament de l'API__ .
+ Hauria fet una web __més geogràfica__.
