import { data } from './data.js';

const table:HTMLTableElement = document.getElementById('rows') as HTMLTableElement;

let average = (data.reduce((acc, serie) => acc + serie.seasons, 0) / data.length);

data.forEach(series => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<th  scope="row">${series.id}</th>
                     <td><a href="${series.website}" class="text-decoration-none">${series.title}</a></td>
                     <td>${series.network}</td>
                     <td>${series.seasons}</td>`;
});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td class="table-active" colspan="4">Seasons Average: ${average}</td>`;    