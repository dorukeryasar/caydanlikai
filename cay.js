export default function handler(req, res) {
    const konular = ["patates", "muz", "tavuk", "uzaylı", "pizza", "kaplumbağa", "kedi", "çorap"];
    const eylemler = ["neden düşünür", "neden yuvarlanır", "neden konuşmaz", "neden kayar", "neden uçmaz"];
    const cevaplar = ["Bilim bunu açıklayamadı", "Muhtemelen uzaylılar yaptı", "Çünkü evren öyle istedi", "Bu tamamen patates teorisi"];

    const k = konular[Math.floor(Math.random() * konular.length)];
    const e = eylemler[Math.floor(Math.random() * eylemler.length)];
    const c = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    const tamCevap = `${k.charAt(0).toUpperCase() + k.slice(1)} ${e}? ${c}.`;

    res.status(200).json({ mesaj: tamCevap });
}