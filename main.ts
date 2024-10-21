import { data } from './data.js';

const table:HTMLTableElement = document.getElementById('rows') as HTMLTableElement;

let promedio = (data.reduce((acc, serie) => acc + serie.seasons, 0) / data.length);

data.forEach(series => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<th  scope="row">${series.id}</th>
                     <td><a href="${series.website}" class="text-decoration-none">${series.title}</a></td>
                     <td>${series.network}</td>
                     <td>${series.seasons}</td>`;
});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td class="table-active" colspan="4">Promedio de temporadas: ${promedio}</td>`;    