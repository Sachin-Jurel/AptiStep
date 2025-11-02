import { useState } from "react";

const TestComponent = ({ questions = [], onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [count, setCount] = useState(0);

  const handleSelect = (qId, answer, option) => {
    setAnswers({ ...answers, [qId]: option });
    if (answer === option) {
      setCount((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(count, answers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl bg-blue-600/10 p-2 text-blue-700 ring-1 ring-inset ring-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M3.75 5.25a3 3 0 013-3h10.5a3 3 0 013 3V15a3 3 0 01-3 3h-3.38l-3.72 3.1a.75.75 0 01-1.23-.58V18H6.75a3 3 0 01-3-3V5.25z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Attempting Test</h1>
                <p className="mt-1 text-sm text-gray-500">Answer the questions below and submit when you're done.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                {questions.length} Questions
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                {Object.keys(answers).length} Selected
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
              <div className="mb-4 flex items-start gap-3">
                <div className="mt-1 select-none rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Q{idx + 1}
                </div>
                <h2 className="text-base font-semibold leading-6 text-gray-900">{q.question}</h2>
              </div>
              <fieldset className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt;
                  return (
                    <label
                      key={opt}
                      className={`${isSelected ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200" : "border-gray-200 bg-white"} group flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition hover:bg-gray-50`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt}
                        checked={isSelected}
                        onChange={() => handleSelect(q.id, q.answer, opt)}
                        className="h-4 w-4 cursor-pointer accent-blue-600"
                      />
                      <span className={`${isSelected ? "text-blue-900" : "text-gray-800"} text-sm`}>{opt}</span>
                    </label>
                  );
                })}
              </fieldset>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 z-10 w-full border-t border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Progress:</span>
            <div className="relative h-2 w-40 rounded-full bg-slate-200">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${(Object.keys(answers).length / Math.max(questions.length, 1)) * 100}%` }}
              ></div>
            </div>
            <span className="tabular-nums">{Object.keys(answers).length}/{questions.length}</span>
          </div>

          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-indigo-700"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
