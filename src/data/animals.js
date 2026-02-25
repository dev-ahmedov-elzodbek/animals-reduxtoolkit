// 50 ta hayvon ma'lumotlari
const animals = [
  {
    id: 1,
    name: "Sher",
    species: "Panthera leo",
    habitat: "Afrika sahrosi",
    image: "https://avatars.mds.yandex.net/i?id=1c3323023ecae70fcc732e8a56bd02924561136c-4210399-images-thumbs&n=13",
    description: "Sher - bu yirik yirtqich hayvon bo'lib, Afrika va Osiyoda yashaydi."
  },
  {
    id: 2,
    name: "Yo'lbars",
    species: "Panthera tigris",
    habitat: "Osiyo o'rmonlari",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/320px-Walking_tiger_female.jpg",
    description: "Yo'lbars - dunyodagi eng yirik mushuksimonlar oilasiga mansub hayvon."
  },
  {
    id: 3,
    name: "Fil",
    species: "Loxodonta africana",
    habitat: "Afrika savannasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg",
    description: "Fil - quruqlikdagi eng yirik hayvon, uzun xartumi bilan mashhur."
  },
  {
    id: 4,
    name: "Jirafa",
    species: "Giraffa camelopardalis",
    habitat: "Afrika savannasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/320px-Giraffe_Mikumi_National_Park.jpg",
    description: "Jirafa - dunyodagi eng baland hayvon, uzun bo'yni bilan ajralib turadi."
  },
  {
    id: 5,
    name: "Zebra",
    species: "Equus quagga",
    habitat: "Afrika savannasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/320px-Plains_Zebra_Equus_quagga.jpg",
    description: "Zebra - qora-oq yo'l-yo'l naqshi bilan mashhur Afrika hayvoni."
  },
  {
    id: 6,
    name: "Gepard",
    species: "Acinonyx jubatus",
    habitat: "Afrika va Osiyo",
    image: "https://i.ytimg.com/vi/S01xE8ZnqF8/maxresdefault.jpg",
    description: "Gepard - quruqlikdagi eng tez yuguruvchi hayvon, soatiga 110 km tezlikka yetadi."
  },
  {
    id: 7,
    name: "Qoʻng'ir ayiq",
    species: "Ursus arctos",
    habitat: "Shimoliy yarim shar o'rmonlari",
    image: "https://avatars.mds.yandex.net/i?id=4b5d5a4085c24e40474b94b8e35d7ab93ce71ad5-12532291-images-thumbs&n=13",
    description: "Qo'ng'ir ayiq - katta va kuchli hayvon, asosan baliq va mevalar bilan ovqatlanadi."
  },
  {
    id: 8,
    name: "Bo'ri",
    species: "Canis lupus",
    habitat: "O'rmon va dashtlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/320px-Kolm%C3%A5rden_Wolf.jpg",
    description: "Bo'ri - to'da bo'lib yashovchi yirtqich hayvon, it oilasining eng yirik vakili."
  },
  {
    id: 9,
    name: "Tulki",
    species: "Vulpes vulpes",
    habitat: "O'rmon va dashtlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/320px-Vulpes_vulpes_ssp_fulvus.jpg",
    description: "Tulki - ziyrak va chaqqon hayvon, qizg'ish jun rangi bilan tanilgan."
  },
  {
    id: 10,
    name: "Gorilla",
    species: "Gorilla gorilla",
    habitat: "Tropik o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=800e47b2901ce41d013cc95d8560b4f1c2de13a8-4533750-images-thumbs&n=13",
    description: "Gorilla - eng yirik primат, odamga eng yaqin hayvonlardan biri."
  },
  {
    id: 11,
    name: "Panda",
    species: "Ailuropoda melanoleuca",
    habitat: "Xitoy tog'lari",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/320px-Grosser_Panda.JPG",
    description: "Panda - qora-oq rangli noyob hayvon, asosan bambuq bilan oziqlanadi."
  },
  {
    id: 12,
    name: "Koala",
    species: "Phascolarctos cinereus",
    habitat: "Avstraliya o'rmonlari",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/320px-Koala_climbing_tree.jpg",
    description: "Koala - Avstraliya marsupial hayvoni, asosan evkaliptus barglari bilan oziqlanadi."
  },
  {
    id: 13,
    name: "Kenguru",
    species: "Macropus rufus",
    habitat: "Avstraliya",
    image: "https://avatars.mds.yandex.net/get-entity_search/5098055/1131709690/S88x88Smart_2x",
    description: "Kenguru - Avstraliyaning ramzi, bolasini qorin cho'ntagida olib yuradi."
  },
  {
    id: 14,
    name: "Pingvin",
    species: "Aptenodytes forsteri",
    habitat: "Antarktida",
    image: "https://avatars.mds.yandex.net/get-entity_search/2102351/1190253039/SUx182",
    description: "Pingvin - qora-oq rangli suv qushi, uchay olmaydi lekin suzishda usta."
  },
  {
    id: 15,
    name: "Ot",
    species: "Equus ferus caballus",
    habitat: "Dashtlar va sahro",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nokota_Horses_cropped.jpg/320px-Nokota_Horses_cropped.jpg",
    description: "Ot - insonning eng eski va sodiq do'sti, ming yillardan beri xizmat qilib keladi."
  },
  {
    id: 16,
    name: "Tuya",
    species: "Camelus dromedarius",
    habitat: "Cho'l va sahro",
    image: "https://avatars.mds.yandex.net/i?id=6fc7bb3f5c6edff8df47bfb203e044f9090cd6f4-5306350-images-thumbs&n=13",
    description: "Tuya - cho'lning kemasi, uzoq vaqt suvsiz yura oladi."
  },
  {
    id: 17,
    name: "Maymun",
    species: "Macaca mulatta",
    habitat: "Tropik o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=bf64dcbc17240ef932e3c6a4fe9349598cc74735-4872900-images-thumbs&n=13",
    description: "Maymun - aqlli va harakatchan hayvon, daraxtlarda yashaydi."
  },
  {
    id: 18,
    name: "Delfin",
    species: "Tursiops truncatus",
    habitat: "Okean va dengizlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/320px-Tursiops_truncatus_01.jpg",
    description: "Delfin - eng aqlli suv hayvonlaridan biri, odamlar bilan do'stona yashaydi."
  },
  {
    id: 19,
    name: "Akula",
    species: "Carcharodon carcharias",
    habitat: "Okean suvi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/320px-White_shark.jpg",
    description: "Oq akula - okeanining eng xavfli yirtqichlaridan biri."
  },
  {
    id: 20,
    name: "Kit",
    species: "Balaenoptera musculus",
    habitat: "Okeanlar",
    image: "https://avatars.mds.yandex.net/i?id=18c6a7e08e11244f3b83aaba34b241cc30ebbf06-4482423-images-thumbs&n=13",
    description: "Ko'k kit - yer yuzidagi eng yirik hayvon, og'irligi 150 tonnaga yetadi."
  },
  {
    id: 21,
    name: "Timsoh",
    species: "Crocodylus niloticus",
    habitat: "Tropik daryolar",
    image: "https://avatars.mds.yandex.net/i?id=921652c3ece7acf6c3a26da950a421ba351eb9f7-8241279-images-thumbs&n=13",
    description: "Timsoh - eng qadimiy sudralib yuruvchilardan biri, 200 million yildan beri mavjud."
  },
  {
    id: 22,
    name: "Burgut",
    species: "Aquila chrysaetos",
    habitat: "Tog' va dashtlar",
    image: "https://avatars.mds.yandex.net/i?id=f721aef943cc13d96920e39360a629d944a69d28-13223669-images-thumbs&n=13",
    description: "Burgut - o'zbeklar uchun erkinlik ramzi, keskin ko'zi bilan mashhur."
  },
  {
    id: 23,
    name: "Boyqush",
    species: "Bubo bubo",
    habitat: "O'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=1e3b5a7342e8e42e0e90d1060fa43584e4e0e4f1-9245043-images-thumbs&n=13",
    description: "Boyqush - kechasi ovlaydigan qush, donolik ramzi sifatida tanilgan."
  },
  {
    id: 24,
    name: "Flamingo",
    species: "Phoenicopterus roseus",
    habitat: "Ko'l sohillari",
    image: "https://avatars.mds.yandex.net/i?id=f39cddc3d19284d2d66000109235afee66c5d858-12432422-images-thumbs&n=13",
    description: "Flamingo - pushti rangi bilan ajralib turuvchi nafis qush."
  },
  {
    id: 25,
    name: "Tovuq",
    species: "Gallus gallus domesticus",
    habitat: "Qishloqlar va fermalar",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg",
    description: "Tovuq - dunyoda eng ko'p uchraydigan qo'shimcha hayvon."
  },
  {
    id: 26,
    name: "Qoʻy",
    species: "Ovis aries",
    habitat: "Tog' va dashtlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/500px-Flock_of_sheep.jpg",
    description: "Qo'y - odamlar tomonidan ming yillardan beri parvarishlanuvchi hayvon."
  },
  {
    id: 27,
    name: "Echki",
    species: "Capra aegagrus hircus",
    habitat: "Tog' va qishloqlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/320px-Hausziege_04.jpg",
    description: "Echki - tog'lik sharoitga moslashgan hayvon, suti va juni uchun boqiladi."
  },
  {
    id: 28,
    name: "Mushuk",
    species: "Felis catus",
    habitat: "Uy va shahar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/320px-Cat_August_2010-4.jpg",
    description: "Mushuk - eng mashhur uy hayvoni, g'amxo'r va erkin tabiatli."
  },
  {
    id: 29,
    name: "It",
    species: "Canis lupus familiaris",
    habitat: "Uy va qishloqlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/320px-YellowLabradorLooking_new.jpg",
    description: "It - insonning eng sodiq do'sti, ming yillardan beri birga yashab kelmoqda."
  },
  {
    id: 30,
    name: "Quyon",
    species: "Oryctolagus cuniculus",
    habitat: "O'rmon va dashtlar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/320px-Oryctolagus_cuniculus_Rcdo.jpg",
    description: "Quyon - tez yugurar va ko'payishda rekordchi hayvon."
  },
  {
    id: 31,
    name: "Kirpi",
    species: "Erinaceus europaeus",
    habitat: "O'rmon va dashtlar",
    image: "https://avatars.mds.yandex.net/i?id=e48227232ae6dfb054670dab1a0017730af832fa-4726647-images-thumbs&n=13",
    description: "Kirpi - tikanli terisi bilan o'zini himoya qiluvchi kichik hayvon."
  },
  {
    id: 32,
    name: "Karkidon",
    species: "Rhinoceros unicornis",
    habitat: "Tropik o'rmon va savanna",
    image: "https://avatars.mds.yandex.net/i?id=776d95738dcdfd3fa0a07ebe0210f6783edffec8-3717621-images-thumbs&n=13",
    description: "Karkidon - burunidagi shoxi bilan mashhur yirik hayvon, yo'qolib ketish xavfi bor."
  },
  {
    id: 33,
    name: "Begemot",
    species: "Hippopotamus amphibius",
    habitat: "Afrika daryolari",
    image: "https://avatars.mds.yandex.net/i?id=b7c90f046196b39e17bb0c0f9433669e64550f55-5232865-images-thumbs&n=13",
    description: "Begemot - Afrika daryolarida yashovchi ulkan hayvon, dengiz cho'chqasi deb ataladi."
  },
  {
    id: 34,
    name: "Qoʻng'iz",
    species: "Dynastes hercules",
    habitat: "Tropik o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=b6d546bbff86cb0377cc6eb0997cf50f6118f36c-10811588-images-thumbs&n=13",
    description: "Gerkules qo'ng'izi - dunyodagi eng katta qo'ng'iz, o'z vaznidan 850 marta ko'p narsani ko'tara oladi."
  },
  {
    id: 35,
    name: "Yolbars",
    species: "Panthera onca",
    habitat: "Janubiy Amerika o'rmonlari",
    image: "https://avatars.mds.yandex.net/i?id=df97be6d0408e99156c7a75f808a87e9376edfd6-12423532-images-thumbs&n=13",
    description: "Jaguar - Yangi dunyodagi eng yirik mushuksimon, suvni yaxshi ko'radi."
  },
  {
    id: 36,
    name: "Qor qoploni",
    species: "Panthera uncia",
    habitat: "Markaziy Osiyo tog'lari",
    image: "https://avatars.mds.yandex.net/i?id=439ca5761a3764fcb03bc22ece079f4c9d6b9fde-2994189-images-thumbs&n=13",
    description: "Qor qoploni - Markaziy Osiyo tog'larining ramzi, yo'qolib ketish xavfi ostida."
  },
  {
    id: 37,
    name: "Susar",
    species: "Lontra canadensis",
    habitat: "Daryolar va ko'llar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pine_Marten_%2848941946582%29.jpg/500px-Pine_Marten_%2848941946582%29.jpg",
    description: "Susar - suvda va quruqlikda yashay oladigan chaqqon hayvon."
  },
  {
    id: 38,
    name: "Tuylen",
    species: "Phoca vitulina",
    habitat: "Shimoliy okean sohillari",
    image: "https://avatars.mds.yandex.net/i?id=9bfb692950772b35c9143cc066150d7e662e8e93-4401239-images-thumbs&n=13",
    description: "Muhr - dengiz hayvoni, baliq ovlashda mohir va quvnoq hayvon."
  },
  {
    id: 39,
    name: "Qutb ayig'i",
    species: "Ursus maritimus",
    habitat: "Arktika",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/320px-Polar_Bear_-_Alaska_%28cropped%29.jpg",
    description: "Qutb ayig'i - Arktikaning eng katta yirtqichi, muzlik suvlarda suzishga moslashgan."
  },
  {
    id: 40,
    name: "Toshbaqa",
    species: "Chelonoidis niger",
    habitat: "Galapagos orollari",
    image: "https://avatars.mds.yandex.net/i?id=956a05fd9c38d5621474c5e7ceaa15959f782530-6071858-images-thumbs&n=13",
    description: "Galapagos toshbaqasi - 150 yilgacha yashay oladi, dunyodagi eng uzun umr ko'ruvchi hayvon."
  },
  {
    id: 41,
    name: "Qurbaqa",
    species: "Rana temporaria",
    habitat: "Ko'l va botqoqliklar",
    image: "https://avatars.mds.yandex.net/i?id=ea6d752a1c7ef0148fd6c803a6d40143-4384022-images-thumbs&n=13",
    description: "Qurbaqa - suvda ham quruqlikda ham yashay oladigan amfibiya."
  },
  {
    id: 42,
    name: "Ilon",
    species: "Python reticulatus",
    habitat: "Tropik o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=4aaf7ba785f084dfff3e953c12513a0150616904-16417860-images-thumbs&n=13",
    description: "To'r piton - dunyodagi eng uzun ilon, 8 metrga yetadi."
  },
  {
    id: 43,
    name: "To'tiqush",
    species: "Ara macao",
    habitat: "Tropik o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=2b47543b48f5b4c09233f5f70cfd6cb9233c3cfd-9242682-images-thumbs&n=13",
    description: "Qizil ara - rang-barang patli va gapira oladigan tropik qush."
  },
  {
    id: 44,
    name: "Oqqush",
    species: "Cygnus olor",
    habitat: "Ko'l va daryolar",
    image: "https://avatars.mds.yandex.net/i?id=d5af27a682b73b50ea73760858a7edc21b1db2b4-5876635-images-thumbs&n=13",
    description: "Oqqush - go'zallik va sadoqat ramzi, umr bo'yi bitta juft tanlab yashaydi."
  },
  {
    id: 45,
    name: "Bizon",
    species: "Bison bison",
    habitat: "Shimoliy Amerika dashtlari",
    image: "https://avatars.mds.yandex.net/i?id=50d018c56f0852b91f8051194c5b64083f09bb78-5504090-images-thumbs&n=13",
    description: "Amerika bizoni - Shimoliy Amerikaning tarixiy ramzi, yo'qolib ketish xavfidan qutuldi."
  },
  {
    id: 46,
    name: "Dala chuvalchangi",
    species: "Lumbricus terrestris",
    habitat: "Tuproq ostida",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Earthworm.JPG/500px-Earthworm.JPG",
    description: "Yomg'ir chuvalchangi - tuproqni boyituvchi foydalin mavjudot."
  },
  {
    id: 47,
    name: "Kapalak",
    species: "Danaus plexippus",
    habitat: "Meadows va o'rmonlar",
    image: "https://avatars.mds.yandex.net/i?id=a945258feebdae9e26735a2db4214c9055155610-3717621-images-thumbs&n=13",
    description: "Monarx kapalagi - uzoq masofaga ko'chib yuruvchi chiroyli hasharot."
  },
  {
    id: 48,
    name: "Asalari",
    species: "Apis mellifera",
    habitat: "Gul o'rmonlari va bog'lar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Apis_mellifera_Western_honey_bee.jpg/320px-Apis_mellifera_Western_honey_bee.jpg",
    description: "Asalari - tabiatning pollenizatori va asal ishlab chiqaruvchi muhim hasharot."
  },
  {
    id: 49,
    name: "Qorachig'ir",
    species: "Felis silvestris",
    habitat: "O'rmon va dashtlar",
    image: "https://avatars.mds.yandex.net/i?id=3a75808877fdb23dbff6b1819b5ed0f7418f34ab-5877259-images-thumbs&n=13",
    description: "Vahoviy mushuk - yovvoyi tabiatda yashovchi qorachig'ir, katta quloqlari bilan ajralib turadi."
  },
  {
    id: 50,
    name: "Eshak",
    species: "Equus africanus asinus",
    habitat: "Qishloqlar va tog'lar",
    image: "https://avatars.mds.yandex.net/i?id=5d1bf8c56d51a29979965cea0fae7ff4fecd94aae3b8c2e9-10770607-images-thumbs&n=13",
    description: "Eshak - chidamli va mehnatkash hayvon, og'ir yuklar ko'tarishda yordam beradi."
  }
]

export default animals
