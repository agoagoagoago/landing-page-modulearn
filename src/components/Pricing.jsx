import { Check, ArrowRight, Users, User, Layers } from 'lucide-react'

const plans = [
  {
    name: 'Group Tuition',
    icon: Users,
    description: 'Small groups of 4-6 students. Collaborative learning with individual tracking.',
    price: 'From $280',
    period: '/month',
    features: [
      'Max 6 students per class',
      'ModuLearn concept tracking included',
      'Custom worksheets for each student',
      'Monthly progress reports',
      'WhatsApp support for homework Q&A',
      'Aligned to latest MOE & SEAB standards',
    ],
    cta: 'Book a Diagnostic Session',
    popular: false,
  },
  {
    name: 'Private Tuition',
    icon: User,
    description: 'Dedicated 1-to-1 sessions. Maximum personalisation and accelerated progress.',
    price: 'From $120',
    period: '/hour',
    features: [
      'Fully personalised 1-to-1 sessions',
      'ModuLearn concept tracking included',
      'Intensive custom worksheet programme',
      'Weekly progress updates',
      'Priority WhatsApp support',
      'Flexible scheduling',
    ],
    cta: 'Book a Diagnostic Session',
    popular: true,
  },
  {
    name: 'Hybrid Learning',
    icon: Layers,
    description: 'Combine group sessions with private deep-dives for the best of both worlds.',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Group classes + private top-ups',
      'ModuLearn concept tracking included',
      'Exam-period intensive add-ons',
      'Monthly progress reports',
      'Priority WhatsApp support',
      'Tailored to student\'s needs',
    ],
    cta: 'Enquire Now',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Investment in Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Choose the path that fits <span className="text-emerald-500">your child</span>
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            All plans include the full ModuLearn Mastery Path system. Every lesson is tracked,
            every gap is addressed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? 'bg-navy-900 text-white border-2 border-emerald-500 shadow-lg shadow-emerald-500/20'
                    : 'bg-navy-50 border border-navy-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  plan.popular ? 'bg-emerald-500/20' : 'bg-emerald-100'
                }`}>
                  <Icon className={`h-6 w-6 ${plan.popular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-navy-300' : 'text-navy-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-navy-300' : 'text-navy-400'}`}>
                    {' '}{plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 shrink-0 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-navy-200' : 'text-navy-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
