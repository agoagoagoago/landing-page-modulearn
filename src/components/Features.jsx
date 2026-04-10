import { Activity, FileText, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Real-Time Concept Tracking',
    description:
      'Every topic in the latest MOE syllabus is mapped against current SEAB examination standards and tracked in real-time. We know exactly which concepts your child has mastered and which remain "obscure corners" — before the examiners test them.',
    highlight: 'No more surprises on exam day.',
  },
  {
    icon: FileText,
    title: 'Custom-Generated Worksheets',
    description:
      'Forget generic ten-year-series grinding. Our worksheets are precision-generated to target your child\'s specific "learning leaks" — the exact gaps holding them back from the next grade.',
    highlight: 'Every question has a purpose.',
  },
  {
    icon: TrendingUp,
    title: 'Monthly Progress Reports',
    description:
      'Parents receive data-backed progress reports every month. See exactly which topics have been covered, mastery levels, and the plan for the month ahead. Full transparency, zero guesswork.',
    highlight: 'Finally, tuition you can measure.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-3">
            How ModuLearn Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            A systematic path from <span className="text-emerald-500">confusion to clarity</span>
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            The ModuLearn Mastery Path replaces guesswork with a data-driven system fully aligned to the
            latest MOE syllabus and SEAB examination standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative bg-navy-50 hover:bg-navy-900 rounded-2xl p-8 transition-colors duration-300 border border-navy-100 hover:border-navy-700"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 bg-emerald-100 group-hover:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-7 w-7 text-emerald-600 group-hover:text-emerald-400 transition-colors" />
                </div>

                <span className="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">
                  Step {i + 1}
                </span>

                <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-navy-500 group-hover:text-navy-300 mb-4 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                <p className="text-sm font-semibold text-emerald-600 group-hover:text-emerald-400 transition-colors">
                  {feature.highlight}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
