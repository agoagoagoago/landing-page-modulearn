import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "My son went from a U grade to an A in H2 Physics within 6 months. Kenneth's systematic approach and the concept tracking showed us exactly where the gaps were.",
    name: 'Mrs. Tan',
    detail: 'Parent of JC2 student, Hwa Chong Institution',
    grade: 'U → A',
  },
  {
    quote: "We tried 3 different tuition centres before The Learning Cave. The difference? We can finally SEE the progress. The monthly reports give us confidence that our money is well-spent.",
    name: 'Mr. & Mrs. Lim',
    detail: 'Parents of Sec 4 student, Raffles Girls\' School',
    grade: 'C5 → A1',
  },
  {
    quote: "Kenneth doesn't just teach — he engineers results. My daughter's E Math improved from B4 to A1, and she actually enjoys the subject now. The custom worksheets really target her weak spots.",
    name: 'Mrs. Wong',
    detail: 'Parent of Sec 4 student, CHIJ St. Nicholas Girls\' School',
    grade: 'B4 → A1',
  },
]

export default function Trust() {
  return (
    <section id="tutor" className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tutor profile */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-navy-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src="/kenneth.avif"
                alt="Kenneth Ng — Tutor at The Learning Cave"
                className="w-32 h-32 rounded-2xl object-cover shrink-0"
              />

              <div>
                <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-2">
                  Your Tutor
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-1">Kenneth Ng</h2>
                <p className="text-emerald-600 font-medium mb-4">
                  NUS Master&rsquo;s in Electrical Engineering
                </p>
                <div className="space-y-3 text-navy-600 leading-relaxed">
                  <p>
                    With over <strong>12 years of specialised experience</strong> in JC and Secondary Math & Physics,
                    Kenneth has helped more than 220 students systematically bridge the gap between their current grades
                    and their target.
                  </p>
                  <p>
                    His engineering background drives the ModuLearn methodology — treating education like a
                    precision system where every input is measured and every outcome is tracked. No guesswork,
                    no shortcuts — just systematic mastery.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {['H2 Math', 'H2 Physics', 'O-Level E/A Math', 'O-Level Physics', 'IP Programme'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-navy-50 text-navy-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-navy-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Real results from <span className="text-emerald-500">real families</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm flex flex-col">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-navy-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-navy-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-sm text-navy-400">{t.detail}</p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 font-bold text-sm px-3 py-1 rounded-lg">
                    {t.grade}
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
