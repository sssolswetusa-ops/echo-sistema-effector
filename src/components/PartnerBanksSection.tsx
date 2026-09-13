const banks = [
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/59c5cc1e-c6a6-47cc-84e9-c43038ff336e.jpg",
    alt: "Банк Армении — карта MasterCard",
  },
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/65c8e255-fac3-44f9-a7f1-f06c33f1082c.jpg",
    alt: "Айыл Банк — именная карта Visa",
  },
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/6d22b68c-6444-4c67-b623-a718d8755d43.jpg",
    alt: "Банк Бакай — карта Visa",
  },
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/f7afe65e-bc5b-4406-b15a-758c52d41ad4.jpg",
    alt: "Киргизко Швейцарский Банк KSB — Visa Platinum / Signature",
  },
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/388205ea-f109-475c-a409-7a34d2adc246.jpg",
    alt: "МБанк — Visa Gold/Platinum/Infinite",
  },
  {
    src: "https://cdn.poehali.dev/projects/b278b387-bd82-4b3f-8a8d-eddb151331e4/bucket/d7e25fb9-0224-467d-bdc8-c55078db9798.jpg",
    alt: "Фридом Финанс Казахстан — мультивалютная Mastercard",
  },
]

export function PartnerBanksSection() {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Банки-партнёры</h2>
          <p className="text-gray-500 max-w-md mx-auto">Карты ведущих банков СНГ с доставкой в Россию</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {banks.map((img) => (
            <div
              key={img.src}
              className="rounded-2xl overflow-hidden border border-orange-100 hover:border-orange-400 transition-colors shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
