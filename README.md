# Web App From Scratch @cmda-minor-web 2023 - 2024

## Logboek per dag

<details>
  <summary>dag 1</summary>
  
  ## Wat heb ik gedaan?
Eerste dag hebben we ons vooral bezig gehouden met alles opzetten. Ik had nog nooit eerder met git gewerkt, dus het was interessant om over te leren. Uiteindelijk werkte het niet echt bij mij, dus werk ik vanuit Github Desktop.

Ik heb alvast wat schetsen gemaakt voor de persoonlijke pagina.

![schetsen](/docs/screenshots/figmaSchets1.png)
</details>

<details>
  <summary>dag 2</summary>
  
  ## Wat heb ik gedaan?
We hebben iets meer geleerd over wat we precies gaan doen dit blok. Verder zijn we verder gegaan met onze opdracht. Ik ben verder gegaan met de schetsen voor mijn persoonlijke pagina. 

![schetsen](/docs/screenshots/figmaSchetsen.png)

We hebben ook geleerd over json files en hoe je die in javascript kunt opvragen en de data erin kunt gebruiken.
</details>

<details>
  <summary>dag 3</summary>
  
  ## Wat heb ik gedaan?
Vandaag ben ik echt begonnen met coderen. Ik wilde graag mijn opzet zo snel mogelijk afhebben. Ik ben uiteindelijk niet mijn schets gaan namaken. Ik ging wel van mijn laatste idee uit, maar ben gewoon dingen gaan proberen. Ik wilde mobile first ontwerpen, dus ben met een klein scherm begonnen. Ik had al een tijdje niet gecodeerd, dus ik merkte dat ik veel opnieuw moest opzoeken en vast kwam te zitten op fouten waar je jezelf echt voor op de kop slaat. Hieronder een voorbeeld hiervan. Ik had een verkeerde selector gebruikt, waardoor mijn before en after niet te zien waren. 

![verkeerdeSelector](/docs/screenshots/tweede_before_werkte_niet,_verkeerde_selector.png)

![afterEnBefore](/docs/screenshots/tweede_before_img.png)

We hebben ook geleerd over json files en hoe je die in javascript kunt opvragen en de data erin kunt gebruiken. We hebben een eigen json file opgezet met tijdelijke informatie die we later nog moeten aanpassen zodat ze allemaal hetzelfde zijn.
</details>

<details>
  <summary>dag 4 & 5</summary>
  
  ## Wat heb ik gedaan?
Ziek zijn. Ik heb deze dagen helaas niks kunnen doen aan school.
</details>

<details>
  <summary>zondag</summary>
  
  ## Wat heb ik gedaan?
Ik kon zaterdag ook nog niet aan school, maar zondag voelde ik mij al een stukje beter, dus heb ik toch wat progressie kunnen maken. Ik wist dat ik mijn werk wilde laten zien in een carousel. Ik heb nog nooit een carousel gemaakt en wil graag weten hoe dit moet. Ik ben vanuit een filmpje gaan werken. Ik kwam echter vast te zitten op een plek in het filmpje waar er radio buttons gebruikt zouden worden om te laten zien bij welke slide je bent. Bij mij wilde ze niet rond worden en ik kon ze met geen enkele manier verplaatsen. Ze stonden linksonder aan het scherm vastgeplakt en ik had alles geprobeerd, maar het werkte gewoon niet. Ik ben er nooit achter gekomen waarom niet.

video: https://www.youtube.com/watch?v=0wvrlOyGlq0&t=1s

![radioButtonHell](/docs/screenshots/carousel_volgens_filmpje_radio_buttons_niet_zichtbaar.png)

![radioButtonHell](/docs/screenshots/radio_buttons_werken_niet_mee_qua_plaatsing.png)

</details>

<details>
  <summary>dag 6</summary>
  
  ## Wat heb ik gedaan?
Ik heb besproken met mijn team wat ik had gedaan in het weekend en verteld over hoe moeilijk ik het vond om de carousel werkende te krijgen. Stephan heeft me aangeraden om de carousel te maken met ul en listitems. Achteraf had dit niet echt uitgemaakt, maar dat is nu wel hoe ik hem ben gaan maken.

![radioButtonHell](/docs/screenshots/probeer_carousel_te_maken_ul.png)

Ik had besloten dat ik een blob wilde hebben achter mijn foto. Dit lukte maar niet en ik kwam er maar niet achter waarom. Alles leek te kloppen qua code. Zelfs Stef en Stephan begrepen het niet. Toen bleek dat je geen after en before kunt geven aan een img... dit vergeet ik dus ook nooit meer.

![afterEnBeforeProblemen](/docs/screenshots/after_en_before_werken_niet.png)

![imgIsUnderpowered](/docs/screenshots/blijkbaar_after_en_before_niet_op_img.png)

Daarna wilde ik met javascript mijn before en after animeren, maar je kan helemaal geen before en after selecteren met javascript. Ik heb veel mooie domme foutjes gemaakt. :)

![afterEnBeforeProblemen](/docs/screenshots/hover_met_js_kan_niet_want_before_en_after_kunnen_niet_geselecteerd_worden.png)
</details>

<details>
  <summary>dag 7</summary>
  
  ## Wat heb ik gedaan?
Ik wist niet zo goed wat ik wilde met mijn carousel. Ik wilde graag dat hij uit zichzelf op een autoplay oneindig zou loopen. En dat als je eroverheen hovert je dan iets van informatie ziet ofziets. Ik heb veel gekloot met de carousel en veranderde steeds meer van idee. Ik heb uiteindelijk besloten om het des noods simpel te houden. Ik heb meerdere pogingen gedaan om verschillende dingen te proberen en vaak genoeg gestopt om toch weer iets anders te gaan doen.

Hieronder een poging die ik nooit heb afgemaakt. Ik wilde de loop voor elkaar krijgen door de order van de list te veranderen wanneer de scroll met overflow-x aan het einde was aan te passen. Ik wist heel vaak niet wat ik aan het doen was en was gewoon aan het proberen.

![afterEnBeforeProblemen](/docs/screenshots/poging_tot_carousel_nooit_afgemaakt.png)

Uiteindelijk heb ik de scroll weggehaald en heb ik de ul een animatie gegeven zodat hij oneindig blijft 'draaien'. Ik heb hier wel mee gecheat, want de enige manier waarom ik dit er mooi uit kon laten zien was door de 1e afbeelding nog een keer te plaatsen als laatste afbeelding en de animatie zodanig te timen dat hij precies opnieuw begint, wanneer de laatste afbeelding uit beeld is. Ik wilde kijken of ik die animatie langzamer kon laten draaien wanneer je hovert over de afbeeldingen of de ul. Dit is me helaas niet gelukt.

![kalmAan](/docs/screenshots/poging_langzaam_maken_carousel_js.png)

Daarna wilde ik nog proberen om de carousel te stoppen wanneer je eroverheen hovert en weer door te laten gaan wanneer je je muis weghaald. Ik deed zo ontiegelijk moeilijk en kwam erachter dat dit super makkelijk te doen was met het pauzeren van de animatie tijdens het hoveren.

![stopEnDoor](/docs/screenshots/poging_tot_stoppen_carousel_en_weer_doorgaan.png)

Verder heb ik een klein begin gemaakt om de website responsive te maken.

</details>

<details>
  <summary>dag 8</summary>
  
  ## Wat heb ik gedaan?
Vandaag heb ik mijn website responsive gemaakt. Dit heb ik gedaan door de grid aan te passen.

![Responsive](/docs/screenshots/responsiveMobile.png)

![Responsive](/docs/screenshots/responsiveGroot.png)

Ik heb ook een API toegevoegd. Ik wilde een spotify API doen, maar ik ben nog helemaal niet echt bekend hiermee en ik kwam er niet uit. Ook niet met de hulp van Stef of Stephan. Ik heb nog gekeken naar de google maps API, maar had daar een credit card voor nodig, die ik niet heb. Uiteindelijk ben ik maar opzoek gegaan naar iets simpels en kwam uiteindelijk uit op een random katten generator. 

![API](/docs/screenshots/API.png)

Ik had nog een poging gedaan tot het scrollbaar maken van de carousel door te scrollen en hiermee de animatie te laten bewegen, maar dat lukte niet. Ik ging uit van deze bron: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
Ik denk dat het niet werkte, omdat ik al aan het einde van mijn page was als ik naar de carousel ging en de animatie zou op basis van hoe ver je bent op de page moeten scrollen. Verder snapte ik het ook niet echt helemaal.

Ik wilde ook nog kijken naar toegankelijkheid.
Ik heb al mijn animaties met 'preffered reduced motion: no preference' aangezet, zodat ze alleen aanstaan wanneer erg een preference is gegeven. Ook heb ik het selecteren van de elementen tijdens het tabben duidelijker gemaakt met cosmetischer veranderingen. Na de weekly nerd ben ik wel gemotiveerd om dit in de toekomst nog veel beter aan te pakken, want wat ik nu heb is echt mega basic in vergelijking met hoe je dit echt goed kan implementeren.
</details>

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
