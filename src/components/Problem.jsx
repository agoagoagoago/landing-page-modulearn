import { X, Check, AlertTriangle, Zap } from 'lucide-react'

const traditionalItems = [
  {
    bold: 'Wasting hours on topics already mastered.',
    text: 'Your child sits through the same Vectors lesson for the 4th time while their actual weak topics go untouched.',
  },
  {
    bold: 'Generic ten-year-series grinding.',
    text: 'Everyone gets the same TYS papers — no targeting, no strategy. It\'s like studying for a health check-up by reading the entire medical textbook.',
  },
  {
    bold: '$500+/month with zero visibility.',
    text: 'You pay, they attend, you hope. No data, no tracking — just a vague "your child is improving" at best.',
  },
  {
    bold: '"Teach to the middle" group lessons.',
    text: 'Fast learners get bored, struggling students fall further behind. The tutor teaches to the average — your child is never the priority.',
  },
  {
    bold: 'Blindsided by "obscure" exam questions.',
    text: 'Nobody cross-referenced against the latest MOE syllabus and SEAB exam requirements. Come exam day, entire chapters are unrevised.',
  },
  {
    bold: 'No accountability, no exit plan.',
    text: 'Years of tuition with no measurable milestones. When does it end? When they graduate? That\'s not a system — it\'s a subscription.',
  },
]

const modulearnItems = [
  {
    bold: 'Every minute targets what they DON\'T know.',
    text: 'ModuLearn maps mastery in real-time. We skip what\'s solid and attack the exact concepts holding your child back.',
  },
  {
    bold: 'Precision-generated worksheets.',
    text: 'Not generic. Not recycled. Every question is chosen to close a specific gap identified by the system.',
  },
  {
    bold: 'Monthly data-backed progress reports.',
    text: 'See exactly which topics are mastered, in-progress, or at risk — with clear evidence, not tutor opinion.',
  },
  {
    bold: 'Scaffolded learning, not one-size-fits-all.',
    text: 'Each student gets a personalised mastery path that adapts as they improve. Fast learners accelerate; struggling students get the support they need.',
  },
  {
    bold: '100% MOE syllabus & SEAB coverage — guaranteed.',
    text: 'Every topic is mapped against the latest MOE syllabus and SEAB examination standards for IP, O-Level, and A-Level. No "obscure corners" left unturned before the exam.',
  },
  {
    bold: 'Clear milestones and a defined endpoint.',
    text: 'We set measurable targets and track progress towards them. You\'ll know exactly when your child is ready.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-12 sm:py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <span className="inline-block text-emerald-600 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
            The Uncomfortable Truth
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
            Your child&rsquo;s tuition is <span className="text-red-500">probably failing them</span>.
          </h2>
          <p className="mt-3 sm:mt-4 text-navy-500 text-base sm:text-lg">
            Singapore parents spend an average of <strong className="text-navy-800">$4,400 per year</strong> on tuition.
            Yet most centres can&rsquo;t tell you which specific topics your child has mastered and which they haven&rsquo;t.
            That&rsquo;s not education — it&rsquo;s guesswork dressed up as help.
          </p>
        </div>

        {/* Pull quote */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-navy-400 italic text-sm sm:text-base">
            &ldquo;If your tutor can&rsquo;t show you a real-time breakdown of every concept your child
            has and hasn&rsquo;t mastered — what exactly are you paying for?&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {/* Traditional */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-red-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500" />
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-900">Traditional Tuition</h3>
            </div>
            <p className="text-xs sm:text-sm text-red-400 font-medium mb-4 sm:mb-6 ml-[46px] sm:ml-[52px]">Where most of your money goes to waste</p>
            <ul className="space-y-4 sm:space-y-5">
              {traditionalItems.map((item) => (
                <li key={item.bold} className="flex items-start gap-2.5 sm:gap-3">
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-800 text-sm sm:text-base">{item.bold}</span>
                    <p className="text-xs sm:text-sm text-navy-500 mt-0.5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ModuLearn */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-emerald-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-500" />
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-900">The ModuLearn Way</h3>
            </div>
            <p className="text-xs sm:text-sm text-emerald-500 font-medium mb-4 sm:mb-6 ml-[46px] sm:ml-[52px]">Every dollar works because every lesson is tracked</p>
            <ul className="space-y-4 sm:space-y-5">
              {modulearnItems.map((item) => (
                <li key={item.bold} className="flex items-start gap-2.5 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-800 text-sm sm:text-base">{item.bold}</span>
                    <p className="text-xs sm:text-sm text-navy-500 mt-0.5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
