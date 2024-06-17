const insert = document.querySelector('.insert');
window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class= "inserted">
    <table style="border : 2px solid black">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
    `;
});