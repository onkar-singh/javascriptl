("*")   Selects all elements in the document
(this)  Selects the current HTML element
("p.intro")  Selects all <p> elements with class="intro"
("div p")   Selects all <p> element inside all <div> elements
("div p:first-child")   Selects the first <p> element inside all <div> elements
("[href]")  Selects all elements with an href attribute
("a[target=_blank]")    Selects all <a> elements with a target attribute value equal to "_blank"
"p:nth-child(even)")    Selects all even <p> elements


<button onclick="w3.hide('p')">Hide all p elements</button>

w3.hide('p') 
w3.hide('#London')
w3.hide('.city')

w3.show('#London')

w3.addStyle('#London','background-color','red')
<button onclick="w3.addStyle('#London','background-color','red')">Add Style</button>
<button onclick="w3.addStyle('.city','background-color','red')">Add Style</button>

w3.addClass('#London','marked')
<button onclick="w3.addClass('#London','marked')">Add Class</button>
<button onclick="w3.addClass('h2','marked')">Add Class</button>
<button onclick="w3.addClass('#London','class1 class2')">Add multi Classes</button>

//w3.addClass(selector,'class') one
//w3.addClass(selector,'class1 class2 class3...') multi

w3.removeClass('#London','marked')
<button onclick="w3.removeClass('#London','marked')">Remove Class</button>
<button onclick="w3.removeClass('#London','class1 class2')">Remove multi Classes</button>

w3.toggleClass('#London','class1','class2')
<button onclick="w3.toggleClass('#London','marked')">Toggle</button>
<button onclick="w3.toggleClass('#London','class1','class2')">Toggle b/w the class</button>


<p><button onclick="w3.sortHTML('#id01', 'li')">Sort</button></p>
<ul id="id01">
  <li>Oslo</li>
  <li>Stockholm</li>
  <li>Helsinki</li>
  <li>Berlin</li>
  <li>Rome</li>
  <li>Madrid</li>
</ul>

<th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(1)')" style="cursor:pointer">Name</th>
    <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(2)')" style="cursor:pointer">Country</th>

//////////////////slideshow////////////////////////

<img class="nature" src="img_snowtops.jpg">
<img class="nature" src="img_mountains.jpg">
<img class="nature" src="img_nature.jpg">
<script>
w3.slideshow(".nature");
</script>

w3.slideshow(selector, interval (milliseconds))
w3.slideshow(".nature", 0);

<button onclick="myShow.previous()">Previous</button>
<button onclick="myShow.next()">Next</button>

<h1 class="city">London</h1>
<h1 class="city">Paris</h1>
<h1 class="city">Tokyo</h1>
<script>
w3.slideshow(".city");
</script>

///////////////////display////////////////////

<div id="id01">
{{firstName}} {{lastName}}
</div>
<script>
var myObject= {"firstName" : "John", "lastName" : "Doe"};
w3.displayObject("id01", myObject);
</script>

/////////////////filter//////////////

<input oninput="w3.filterHTML('#id01', 'li', this.value)" placeholder="Search for names..">
<ul id="id01">
  <li>Alfreds Futterkiste</li>
  <li>Berglunds snabbköp</li>
  <li>Centro comercial Moctezuma</li>
  <li>Ernst Handel</li>
  <li>FISSA Fabrica Inter. Salchichas S.A.</li>
  <li>Galería del gastrónomo</li>
  <li>Island Trading</li>
  <li>Königlich Essen</li>
  <li>Laughing Bacchus Wine Cellars</li>
  <li>Magazzini Alimentari Riuniti</li>
  <li>North/South</li>
  <li>Paris spécialités</li>
</ul>