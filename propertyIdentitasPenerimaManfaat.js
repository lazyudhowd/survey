
// javascript here ...
// let schemaDataMasuk = {
// 	versi : "1.0",
// 	pertanyaan : [
// 		"Hari / Tanggal",
// 		"Penerima Berkas"
// 	]
// }

let schemaIdentitasPenerimaManfaat = {
	versi : "1.0",
	subSurvey : [
		{
			judulSub:"IDENTITAS PENERIMA MANFAAT",
			pertanyaanSurvey : [
				{ label : "Nama", type : "text" },
				{ label : "Nama Panggilan", type : "text" },
				{ label : "Nama Kepala Keluarga", type : "text" },
				{
					label : "Jenis Kelamin",
					type : "option",
					optionList : [
						{label : "Laki-laki", value : 1},
						{label : "Perempuan", value : 2}
					]
				},
				{ label : "Telepon", type : "number" },
				{
					label : "Provinsi",
					type : "option",
					optionList : [
						{label : "Kalimantan Barat", value : 1},
						{label : "Kalimantan Tengah", value : 2},
						{label : "Kalimantan Selatan", value : 3},
						{label : "Kalimantan Timur", value : 4},
						{label : "Kalimantan Utara", value : 5}
					]
				},
				{ 
					label : "Kabupaten / Kota",
					type : "option",
					optionList : [
						{label : "Singkawang", value : 2},
						{label : "Pontianak", value : 1},
						{label : "Mempawah", value : 3},
						{label : "Sambas", value : 4},
						{label : "Bengkayang", value : 5},
						{label : "Kapuas Hulu", value : 6},
						{label : "Landak", value : 7}
					]

				},
				{
					label : "Kecamatan",
					type : "option",
					optionList : [
						{label : "Singkawang Utara", value : 1},
						{label : "Singkawang Tengah", value : 2},
						{label : "Singkawang Selatan", value : 3},
						{label : "Singkawang Barat", value : 4},
						{label : "Singkawang Timur", value : 5}
					]
				},
				{
					label : "Kelurahan",
					type : "option",
					optionList : [
						{label : "Kuala", value : 1},
						{label : "Pasiran", value : 2},
						{label : "Melayu", value : 3},
						{label : "Tengah", value : 4},
						{label : "Pangmilang", value : 5},
						{label : "Sagatani", value : 6},
						{label : "Sedau", value : 7},
						{label : "Sijangkung", value : 8},
						{label : "Bukit Batu", value : 9},
						{label : "Condong", value : 10},
						{label : "Jawa", value : 11},
						{label : "Roban", value : 12},
						{label : "Sekip Lama", value : 13},
						{label : "Sungai Wie", value : 14},
						{label : "Bagak Sahwa", value : 15},
						{label : "Maya Sopa", value : 16},
						{label : "Nyarumkop", value : 17},
						{label : "Pajintan", value : 18},
						{label : "Sanggau Kulor", value : 19},
						{label : "Naram", value : 20},
						{label : "Semelagi Kecil", value : 21},
						{label : "Setapuk Besar", value : 22},
						{label : "Setapuk Kecil", value : 23},
						{label : "Sungai Bulan", value : 24},
						{label : "Sungai Garam Hilir", value : 25},
						{label : "Sungai Rasau", value : 26}
					]
				},
				{ label : "RT / RW", type : "text" },
				{ label : "Alamat", type : "textarea" }
			]
		}
	]
}
