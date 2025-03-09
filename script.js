document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let tanggal_lahir = document.getElementById("tanggal_lahir").value;
    let alamat = document.getElementById("alamat").value;
    let pekerjaan = document.getElementById("pekerjaan").value;
    let status = document.getElementById("status").value;
    let nomor_telepon = document.getElementById("nomor_telepon").value;

    let message = `Pendaftaran Baru:%0A
    Nama: ${nama}%0A
    Tanggal Lahir: ${tanggal_lahir}%0A
    Alamat: ${alamat}%0A
    Pekerjaan: ${pekerjaan}%0A
    Status Menikah: ${status}%0A
    Nomor Telepon: ${nomor_telepon}`;

    let whatsappLink = `https://wa.link/4ys8v4?text=${message}`;
    window.open(whatsappLink, '_blank');
});
