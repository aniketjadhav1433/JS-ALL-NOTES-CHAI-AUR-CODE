let main = document.querySelector(".main")

window.addEventListener("keydown",(e)=>{
    main.innerHTML = `
    <table>
            <tr>
                <th>key</th>
                <th>key code</th>
                <th>code</th>
            </tr>

            <tr>
                <td>${e.key === " " ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `
})