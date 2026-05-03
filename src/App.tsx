import React, { useState } from 'react';
import { LessonView } from './components/LessonView';
import { QuizView } from './components/QuizView';
import { VIDEO_CONTENT } from './data/content';
import { Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'lesson' | 'quiz'>('lesson');

  return (
    <div className="min-h-screen bg-[#F7F3ED] font-sans text-[#4A443F] flex flex-col">
      {/* Header */}
      <header className="bg-[#F7F3ED] border-b border-[#E8E1D5] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('lesson')}>
            <div className="w-10 h-10 bg-[#7C8363] rounded-full flex items-center justify-center shrink-0">
              <div className="w-4 h-4 bg-[#F7F3ED] rounded-sm rotate-45"></div>
            </div>
            <span className="font-semibold text-xl tracking-tight text-[#2D2926] flex items-center gap-3">
              LingoRead
              <span className="text-xs font-bold uppercase tracking-widest bg-[#7C8363]/10 text-[#7C8363] px-3 py-1 rounded-full">
                Primary 5-6
              </span>
            </span>
          </div>
          <div className="hidden sm:flex text-sm font-medium text-[#A8A195] bg-[#E8E1D5] px-4 py-2 rounded-xl items-center gap-2">
            <BookOpen size={18} className="text-[#C1866B]" />
            Reading Lesson
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex-1 w-full">
        {view === 'lesson' ? (
          <LessonView 
            content={VIDEO_CONTENT} 
            onStartQuiz={() => setView('quiz')} 
          />
        ) : (
          <QuizView 
            content={VIDEO_CONTENT} 
            onGoBack={() => setView('lesson')} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F3ED] border-t border-[#E8E1D5] py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-[#A8A195] text-sm font-medium tracking-wide">
          <p>Created for Primary 5-6 English Learners (TOEFL Primary Step 2 Level)</p>
          <p className="mt-2">Keep exploring and learning new things every day!</p>
        </div>
      </footer>
    </div>
  );
}
