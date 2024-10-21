import { data } from './data.js';
var table = document.getElementById('rows');
var average = (data.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / data.length);
data.forEach(function (series) {
    var row = table.insertRow();
    row.innerHTML = "<th  scope=\"row\">".concat(series.id, "</th>\n                     <td><a href=\"").concat(series.website, "\" class=\"text-decoration-none\">").concat(series.title, "</a></td>\n                     <td>").concat(series.network, "</td>\n                     <td>").concat(series.seasons, "</td>");
});
var row = table.insertRow();
row.innerHTML = "<td class=\"table-active\" colspan=\"4\">Seasons Average: ".concat(average, "</td>");
