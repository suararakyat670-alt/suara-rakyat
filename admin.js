if (document.getElementById("admin-berita")) {
    fetch("data-berita.json")
        .then(res => res.json())
        .then(data => {
            let box = document.getElementById("admin-berita");
            data.forEach(a => {
                box.innerHTML += `
                    <div class="card">
                        <h3>${a.judul}</h3>
                        <button onclick="edit(${a.id})">Edit</button>
                        <button onclick="hapus(${a.id})">Hapus</button>
                    </div>
                `;
            });
        });
}

function edit(id) {
    window.location.href = "edit-berita.html?id=" + id;
}

function hapus(id) {
    alert("GitHub Pages tidak mendukung hapus otomatis.\nEdit file data-berita.json secara manual.");
}