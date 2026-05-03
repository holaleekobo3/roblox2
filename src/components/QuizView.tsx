import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import { ContentData } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface QuizViewProps {
  content: ContentData;
  onGoBack: () => void;
}

export function QuizView({ content, onGoBack }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = content.quiz;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedAnswer(index);
    setIsAnswerRevealed(true);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="max-w-2xl mx-auto items-center justify-center min-h-[60vh] flex flex-col pt-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[32px] p-10 md:p-14 shadow-sm border border-[#E8E1D5] text-center w-full"
        >
          <div className="inline-flex bg-[#F7F3ED] p-6 rounded-full mb-6">
            <Trophy size={80} className="text-[#C1866B]" />
          </div>
          <h2 className="text-4xl font-light tracking-tighter text-[#2D2926] mb-4">Quiz Completed!</h2>
          <p className="text-xl text-[#6B645D] mb-8">
            You scored <span className="font-semibold text-3xl text-[#7C8363] mx-1">{score}</span> out of {questions.length}!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRestart}
              className="bg-[#E8E1D5] text-[#4A443F] font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#DCD4C8] transition-colors"
            >
              <RotateCcw size={20} />
              Try Again
            </button>
            <button 
              onClick={onGoBack}
              className="bg-[#7C8363] text-white font-medium px-8 py-4 rounded-full shadow-lg shadow-[#7C8363]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <BookOpenIcon />
              Review Lesson
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto pt-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between uppercase tracking-widest text-[#A8A195] text-xs font-bold mb-3">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 bg-[#E8E1D5] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#7C8363] rounded-full"
            initial={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-[32px] overflow-hidden border border-[#E8E1D5]"
        >
          <div className="p-6 md:p-10 bg-[#F7F3ED] border-b border-[#E8E1D5]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2D2926] leading-tight">
              {currentQuestion.text}
            </h2>
          </div>
          
          <div className="p-6 md:p-10 space-y-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = isAnswerRevealed && index === currentQuestion.correctAnswerIndex;
              const isWrong = isAnswerRevealed && isSelected && !isCorrect;
              
              let baseClasses = "w-full text-left p-5 rounded-2xl border transition-all duration-300 font-medium text-lg flex justify-between items-center group ";
              
              if (!isAnswerRevealed) {
                baseClasses += "border-[#E8E1D5] bg-white hover:bg-[#F7F3ED] hover:border-[#DCD4C8]";
              } else if (isCorrect) {
                baseClasses += "border-[#7C8363] bg-[#7C8363]/10 text-[#7C8363]";
              } else if (isWrong) {
                baseClasses += "border-[#C1866B] bg-[#C1866B]/10 text-[#C1866B]";
              } else {
                baseClasses += "border-[#E8E1D5] bg-white text-[#A8A195] opacity-60";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={isAnswerRevealed}
                  className={baseClasses}
                >
                  <span className="pr-4">{option}</span>
                  {isAnswerRevealed && isCorrect && <CheckCircle2 className="text-[#7C8363] flex-shrink-0" size={24} />}
                  {isAnswerRevealed && isWrong && <XCircle className="text-[#C1866B] flex-shrink-0" size={24} />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswerRevealed && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="bg-white border-t border-[#E8E1D5] px-6 md:px-10 py-6"
              >
                <div className={`p-5 rounded-2xl flex gap-4 border ${selectedAnswer === currentQuestion.correctAnswerIndex ? 'bg-[#7C8363]/10 border-[#7C8363]/20 text-[#7C8363]' : 'bg-[#C1866B]/10 border-[#C1866B]/20 text-[#C1866B]'}`}>
                  <div className="flex-shrink-0 pt-1">
                    {selectedAnswer === currentQuestion.correctAnswerIndex ? 
                      <CheckCircle2 className="text-[#7C8363]" size={28} /> : 
                      <XCircle className="text-[#C1866B]" size={28} />
                    }
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {selectedAnswer === currentQuestion.correctAnswerIndex ? 'Great Job!' : 'Not Quite!'}
                    </h4>
                    <p className="text-opacity-90">{currentQuestion.explanation}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={handleNextQuestion}
                    className="bg-[#7C8363] text-white font-medium py-3 px-8 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#7C8363]/20 flex items-center gap-2"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}
