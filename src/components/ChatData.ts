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

Magha Puja adalah hari suci yang memperingati berkumpulnya 1.250 Bhikkhu yang telah ditahbiskan langsung oleh Sang Buddha tanpa undangan, mereka menerima ajaran Ovada Patimokkha yang menekankan tiga prinsip utama dalam kehidupan Buddhis: menghindari kejahatan, memperbanyak kebajikan, dan menyucikan hati serta pikiran, yang menjadi pedoman moral bagi umat Buddha.

Melalui pesan ini, kami ingin mengundang ${"${medParName ? medParName : 'medpar'}"} untuk bekerja sama berupa menjadi media partner kami dalam acara Magha Puja 2568 B.E./2025 yang akan diselenggarakan pada:
Hari, tanggal	: Minggu, 9 Maret 2025
Waktu		  : 12.00 s.d. 16:30 WIB
Tempat	        : Ruang Auditorium (Lt.8) Gedung Narada Vihara Jakarta Dhammacakka Jaya

Acara Magha Puja ini kami laksanakan dengan mengangkat tema “Spreading The Light of Enlightenment” dengan tujuan untuk menyebarkan kesadaran, kedamaian, dan kebajikan dalam masyarakat. 

Oleh karena itu, apakah kami berkenan meminta contact person untuk mendiskusikan lebih lanjut? Atas perhatian Bapak/Ibu, kami ucapkan terima kasih.

Selamat ${"${daytime}"}
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} `,
  },
  {
    title: "Template Chat via Whatsapp",
    templateText: `Selamat ${"${daytime}"} Bapak/Ibu ${"${medParName ? medParName : 'medpar'}"},
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 

Perkenalkan saya ${"${location.pathname.split('/').pop()}"} selaku panitia acara Magha Puja 2568 B.E./2025 yang diselenggarakan oleh Keluarga Mahasiswa Buddhis Dhammavaddhana BINUS University. 

Magha Puja merupakan hari suci yang memperingati berkumpulnya 1.250 Bhikkhu yang telah ditahbiskan langsung oleh Sang Buddha tanpa undangan, mereka menerima ajaran Ovada Patimokkha yang menekankan tiga prinsip utama dalam kehidupan Buddhis: menghindari kejahatan, memperbanyak kebajikan, dan menyucikan hati serta pikiran, yang menjadi pedoman moral bagi umat Buddha.

Melalui pesan ini, kami ingin mengundang ${"${medParName ? medParName : 'medpar'}"} untuk bekerja sama berupa menjadi Media Partner kami dalam acara Magha Puja 2568 B.E./2025 yang akan diselenggarakan pada:
Hari, tanggal	: Minggu, 9 Maret 2025
Waktu		    : 12.00 s.d. 16.30 WIB
Tempat	        : Ruang Auditorium (Lt.8) Gedung Narada Vihara Jakarta Dhammacakka Jaya

Adapun rincian kegiatan yang akan dilaksanakan dalam acara Magha Puja 2568 B.E./2025 dengan tema “Spreading The Light of Enlightenment” yaitu:
  1. Puja Bakti 
  2. Dhammatalk
  3. Pelimpahan Jasa dan Blessing 
  4. Meditasi
  5. Games

Bersamaan dengan pesan ini, saya juga melampirkan proposal Media Partnership yang telah dirancang dengan terperinci sebagai bahan pertimbangan Bapak/Ibu untuk bekerja sama dengan kegiatan kami. 

Dengan mempertimbangkan seluruh tawaran kerja sama yang telah diberikan, kami berharap agar Bapak/Ibu sekiranya dapat memberikan konfirmasi terkait kerja sama ini paling lambat pada tanggal 28 Februari 2025. Kami sangat menghargai partisipasi Bapak/Ibu untuk mendukung kelancaran kegiatan kami. 

Demikian permohonan kerja sama yang ingin kami sampaikan. Besar harapan kami untuk dapat menjalin kerja sama dengan ${"${medParName ? medParName : 'medpar'}"} pada acara Magha Puja 2568 B.E./2025. Mohon maaf apabila ada kata-kata yang kurang berkenan. Atas perhatian Bapak/Ibu, kami ucapkan terima kasih. 

Selamat ${"${daytime}"}
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 
`,
  },
  {
    title: "Template chat Medpar via Email",
    templateText: `SUBJEK EMAIL = [KMBD BINUS University] Pengajuan Kerja Sama Media Partner Magha Puja 2568 B.E./2025
Kepada Yth. Bapak/Ibu
${"${medParName ? medParName : 'medpar'}"}
Di tempat

Selamat Pagi/Siang/Sore Bapak/Ibu ${"${medParName ? medParName : 'medpar'}"}, ${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 

Perkenalkan saya ${"${location.pathname.split('/').pop()}"} selaku panitia acara Magha Puja 2568 B.E./2025 yang diselenggarakan oleh Keluarga Mahasiswa Buddhis Dhammavaddhana BINUS University. 

Magha Puja merupakan hari suci yang memperingati berkumpulnya 1.250 Bhikkhu yang telah ditahbiskan langsung oleh Sang Buddha tanpa undangan, mereka menerima ajaran Ovada Patimokkha yang menekankan tiga prinsip utama dalam kehidupan Buddhis: menghindari kejahatan, memperbanyak kebajikan, dan menyucikan hati serta pikiran, yang menjadi pedoman moral bagi umat Buddha.

Melalui pesan ini, kami ingin mengundang ${"${medParName ? medParName : 'medpar'}"} untuk bekerja sama berupa menjadi Media Partner kami dalam acara Magha Puja 2568 B.E./2025 yang akan diselenggarakan pada:
Hari, tanggal	: Minggu, 9 Maret 2025
Waktu		      : 12.00 s.d. 16.30 WIB
Tempat	      : Ruang Auditorium (Lt.8) Gedung Narada Vihara Jakarta Dhammacakka Jaya 

Adapun rincian kegiatan yang akan dilaksanakan dalam acara Magha Puja 2568 B.E./2025 dengan tema “Spreading The Light of Enlightenment” yaitu:
  1. Puja Bakti 
  2. Dhammatalk
  3. Pelimpahan Jasa dan Blessing 
  4. Meditasi
  5. Games

Bersamaan dengan pesan ini, saya juga melampirkan proposal Media Partnership yang telah dirancang dengan terperinci sebagai bahan pertimbangan Bapak/Ibu untuk bekerja sama dengan kegiatan kami. 

Besar harapan kami untuk dapat menjalin kerjasama dengan (Nama Media) pada acara Magha Puja 2568 B.E./2025. Mohon maaf apabila ada kata-kata yang kurang berkenan. Apabila Bapak/Ibu ingin mendiskusikan mengenai informasi lebih lanjut, dapat menghubungi saya melalui pesan ini.

`,
  },
  {
    title: "Template chat diterima Media Partner",
    templateText: `Selamat Pagi/Siang/Sore Bapak/Ibu, ${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 
Terima kasih atas kesempatan dan ketersediaannya untuk menjadi Media Partner dalam acara Magha Puja 2568 B.E./2025. 

Kami senang hati bahwa ${"${medParName ? medParName : 'medpar'}"} telah bersedia untuk menjalin kerja sama dengan Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD) BINUS University. Semoga kerja sama ini menjadi awal yang baik untuk hubungan jangka panjang antara KMBD dengan ${"${medParName ? medParName : 'medpar'}"}. Kami berharap dapat bekerja sama dengan tim ${"${medParName ? medParName : 'medpar'}"} untuk mewujudkan acara yang sukses. 

Sebelumnya, kami juga ingin bertanya apakah pihak ${"${medParName ? medParName : 'medpar'}"} telah memilih paket Media Partner tertentu? Jika sudah, saya izin meminta data yang perlu Bapak/Ibu lengkapi untuk pengisian MoA sebagai berikut:

Nama Lengkap	:

Instansi	:

Jabatan		:

Email		:

No. Telp	:

Alamat		:

Sekali lagi saya ucapkan terima kasih telah menerima kerja sama dengan Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD) BINUS University, dan kami menantikan pencapaian luar biasa yang akan kita raih bersama. 
`,
  },
  {
    title: "Template chat ditolak Media Partner",
    templateText: `Selamat Pagi/Siang/Sore Bapak/Ibu, ${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 
Terima kasih banyak atas waktu dan perhatian yang telah Bapak/Ibu berikan dalam mempertimbangkan tawaran kami untuk menjadi Media Partner dalam acara Magha Puja 2568 B.E./2025. Kami sepenuhnya memahami keputusan yang telah diambil, dan kami sangat menghargai pertimbangan dari pihak ${"${medParName ? medParName : 'medpar'}"}.

Meskipun kami belum dapat bekerja sama pada kesempatan ini, kami berharap bisa menjaga hubungan baik ini dan mungkin ada peluang untuk berkolaborasi di masa mendatang. Jika ada kesempatan lainnya yang sesuai, kami akan sangat senang untuk berdiskusi lebih lanjut.

Sekali lagi, terima kasih atas mempertimbangkan permintaan kerja sama dari kami. Kami harapkan yang terbaik untuk perusahaan ${"${medParName ? medParName : 'medpar'}"}, semoga sukses selalu.
${"${isBuddhist ? 'Namo Buddhaya' : ''}"} 

`,
  },
];
