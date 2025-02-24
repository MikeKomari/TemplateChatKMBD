export type ChatData = {
  title: string;
  templateText: string;
};

export const AllTemplateChat: ChatData[] = [
  {
    title: "Template Chat Permohonan Contact Person via INSTAGRAM",
    templateText: `Selamat ${"${daytime}"} ${"${medParName ? medParName : 'medpar'}"} 
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 

Perkenalkan saya ${"${location.pathname.split('/').pop()}"} selaku panitia dari acara Magha Puja 2568 B.E./2025 yang diselenggarakan oleh Keluarga Mahasiswa Buddhis Dhammavadana BINUS University. 

Magha Puja merupakan salah satu perayaan penting bagi umat beragama Buddha di mana umat Buddha memperingati peristiwa ketika 1.250 Bhikkhu berkumpul dan ditahbiskan secara langsung oleh Sang Buddha tanpa diundang yang terjadi pada bulan purnama Magha. Pada pertemuan tersebut, Sang Buddha memberikan ajaran tentang Tiga Permata (Buddha, Dhamma, dan Sangha) dan mengajarkan cara hidup yang benar.

Melalui pesan ini, kami ingin mengundang ${"${medParName ? medParName : 'medpar'}"} untuk bekerja sama berupa menjadi media partner kami dalam acara Magha Puja 2568 B.E./2025 yang akan diselenggarakan pada:
Hari, tanggal	: Minggu, 9 Maret 2025
Waktu		    : 12.00 s.d. 16:26 WIB
Tempat	        : Ruang Auditorium Gedung Narada Vihara Jakarta (Lt.8)

Acara Magha Puja ini kami laksanakan dengan mengangkat tema “Spreading The Light of Enlightenment” dengan tujuan untuk menyebarkan kesadaran, kedamaian, dan kebajikan dalam masyarakat. 

Oleh karena itu, apakah kami berkenan meminta contact person untuk mendiskusikan lebih lanjut? Atas perhatian Bapak/Ibu, kami ucapkan terima kasih.

Selamat ${"${daytime}"}
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} `,
  },
];
