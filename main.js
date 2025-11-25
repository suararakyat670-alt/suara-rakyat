fetch("data-berita.json")
    .then(res => res.json())
    .then(data => {
        let box = document.getElementById("berita-container");
        data.forEach(item => {
            box.innerHTML += `
                <div class="card">
                    <img src="${item.gambar}">
                    <h3>${item.judul}</h3>
                    <p>${item.tanggal}</p>
                    <a href="berita.html?id=${item.id}">Baca selengkapnya</a>
                </div>
            `;
        });
    });
	
	if (id) {
    fetch("data-berita.json")
        .then(res => res.json())
        .then(data => {
            let berita = data.find(a => a.id == id);
            document.getElementById("detail-berita").innerHTML = `
                <h2>${berita.judul}</h2>
                <p>${berita.tanggal}</p>
                <img src="${berita.gambar}" width="100%">
                <p>${berita.isi}</p>
            `;
        });
}