export default function json2html(data) {
    // Extract unique keys from the data for table columns
    const columns = [...new Set(data.flatMap(Object.keys))];

    // Start building the HTML table with data-user attribute
    let html = `<table data-user="ananyabasireddy@gmail.com">
        <thead>
            <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>`;

    // Populate rows
    data.forEach(row => {
        html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });

    html += `</tbody></table>`;
    return html;
}