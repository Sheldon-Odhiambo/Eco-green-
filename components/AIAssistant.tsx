
import React, { useState } from 'react';
import { getAIResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: "Hi! I'm your ECO-GREEN Assistant. How can I help you with your career or green lifestyle today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    
    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-28 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><i className="fas fa-robot"></i></div>
               <div>
                  <h4 className="font-black tracking-tight">Career Assistant</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Powered by Gemini</p>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full"><i className="fas fa-times"></i></button>
          </div>
          
          <div className="flex-grow h-80 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:200ms]"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:400ms]"></div>
                 </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..." 
              className="flex-grow px-4 py-2 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
            <button onClick={handleSend} className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
      >
        <i className={`fas ${isOpen ? 'fa-comment-slash' : 'fa-robot'} text-2xl`}></i>
        <span className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">Career Help</span>
      </button>
    </div>
  );
};
