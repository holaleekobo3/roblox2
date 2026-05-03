import React from 'react';
import { BookOpen, HelpCircle, Flame, Shield, Map } from 'lucide-react';
import { ContentData } from '../data/content';
import { motion } from 'motion/react';

interface LessonViewProps {
  content: ContentData;
  onStartQuiz: () => void;
}

export function LessonView({ content, onStartQuiz }: LessonViewProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      
      {/* Passage Hero */}
      <section className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-[#E8E1D5]">
        <div className="w-full h-64 md:h-80 relative bg-[#2D2926]">
          <img 
            src={`https://i.ytimg.com/vi/Zw_HE1mQ7rA/maxresdefault.jpg`} 
            alt="I Got Hunted by the World's Deadliest Assassin"
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-[#7C8363]/10 text-[#7C8363] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
               Reading Comprehension
             </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2926] tracking-tight mb-8">
            {content.title}
          </h1>
          <div className="text-lg md:text-xl text-[#6B645D] leading-loose space-y-6">
            {content.comprehension.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Vocabulary Section */}
        <section className="bg-[#E8E1D5] rounded-[32px] p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Map size={120} className="text-[#C1866B]" />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 bg-[#7C8363] rounded-full flex items-center justify-center text-[#F7F3ED]">
              <BookOpen size={24} />
            </div>
            <h2 className="text-xl font-semibold text-[#2D2926]">Key Vocabulary</h2>
          </div>
          <div className="space-y-4 relative z-10">
            {content.vocabulary.map((vocab) => (
              <motion.div 
                key={vocab.id} 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-sm transition-all"
              >
                <div className="font-semibold text-lg text-[#4A443F] mb-1">{vocab.word}</div>
                <div className="text-[#6B645D] mb-3 text-sm">{vocab.definition}</div>
                <div className="bg-[#F7F3ED] p-3 rounded-xl text-sm text-[#7C8363] italic border-l-2 border-[#7C8363]">
                  "{vocab.example}"
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grammar Section */}
        <section className="bg-[#E8E1D5] rounded-[32px] p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Shield size={120} className="text-[#DCD4C8]" />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 bg-[#C1866B] rounded-full flex items-center justify-center text-white">
              <Flame size={24} />
            </div>
            <h2 className="text-xl font-semibold text-[#2D2926]">Grammar Rules</h2>
          </div>
          <div className="space-y-5 relative z-10">
            {content.grammar.map((grammar) => (
              <motion.div 
                key={grammar.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-sm transition-all"
              >
                <h3 className="font-semibold text-lg text-[#4A443F] mb-2">{grammar.rule}</h3>
                <p className="text-[#6B645D] text-sm mb-3">{grammar.explanation}</p>
                <div className="bg-[#F7F3ED] rounded-xl p-3 text-sm text-[#C1866B] italic border-l-2 border-[#C1866B]">
                  <span className="font-semibold not-italic">Example: </span>
                  {grammar.example}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Start Quiz Action */}
      <section className="flex justify-center pt-6 pb-12">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartQuiz}
          className="bg-[#7C8363] text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-[#7C8363]/20 flex items-center gap-3 transition-all"
        >
          <HelpCircle size={24} />
          Start the Comprehension Quiz
        </motion.button>
      </section>

    </div>
  );
}
