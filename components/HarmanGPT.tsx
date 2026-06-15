"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Minimize2,
  Sparkles,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import { HARMANGPT_SYSTEM } from "@/lib/constants";
import {
  chatbotPanelVariants,
  chatMessageVariants,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "init",
  role: "assistant",
  content:
    "Hi! I'm **HarmanGPT** 👋 I'm an AI assistant that can answer any questions about Harmanpreet's skills, projects, experience, and education. What would you like to know?",
  timestamp: new Date(),
};

const SUGGESTIONS = [
  "What are her top skills?",
  "Tell me about her projects",
  "What internship experience does she have?",
  "How to contact her?",
  "What is she currently learning?",
  "What achievements does she have?",
];

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3 rounded-2xl self-start" style={{
      background: "rgba(124,58,237,0.1)",
      border: "1px solid rgba(124,58,237,0.18)",
      borderRadius: "4px 16px 16px 16px",
    }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ background: "var(--color-purple-light)" }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code style="background:rgba(124,58,237,0.2);padding:1px 4px;border-radius:4px;font-family:monospace;font-size:0.85em">$1</code>')
    .replace(/\n/g, "<br/>");
}

export default function HarmanGPT() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showFabLabel, setShowFabLabel] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, open]);

  // Show FAB label after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowFabLabel(true), 3000);
    const t2 = setTimeout(() => setShowFabLabel(false), 7000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const sendMessage = useCallback(
    async (text?: string) => {
      const userText = (text ?? input).trim();
      if (!userText || loading) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: userText,
        timestamp: new Date(),
      };

      setInput("");
      setShowSuggestions(false);
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const history = [...messages, userMsg].map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // In production, proxy through /api/chat to protect the key
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 1000,
            system: HARMANGPT_SYSTEM,
            messages: history,
          }),
        });

        const data = await response.json();
        const reply =
          data.content?.[0]?.text ??
          "I'm having a momentary issue connecting. Please try again, or reach out to Harmanpreet directly through the Contact section!";

        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: reply,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);
      } catch {
        const errorMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I'm offline at the moment! You can reach Harmanpreet directly via the Contact section below. 😊",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages]
  );

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setShowSuggestions(true);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleOpen = () => {
    setOpen((v) => !v);
    setMinimized(false);
    setShowFabLabel(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 22 }}
      >
        {/* Label tooltip */}
        <AnimatePresence>
          {showFabLabel && !open && (
            <motion.div
              initial={{ opacity: 0, x: 10, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-xl pointer-events-none"
              style={{
                background: "rgba(13,13,31,0.95)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "var(--color-purple-light)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Ask HarmanGPT 🤖
              <div
                className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
                style={{
                  background: "rgba(13,13,31,0.95)",
                  borderRight: "1px solid rgba(124,58,237,0.35)",
                  borderTop: "1px solid rgba(124,58,237,0.35)",
                }}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleOpen}
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            boxShadow: "0 8px 30px rgba(124,58,237,0.5)",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 12px 40px rgba(124,58,237,0.7)",
          }}
          whileTap={{ scale: 0.93 }}
          aria-label={open ? "Close HarmanGPT" : "Open HarmanGPT"}
          aria-expanded={open}
        >
          {/* Ripple */}
          {!open && (
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.15)" }}
              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden="true"
            />
          )}

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 280 }}
          >
            {open ? <X size={22} /> : <Bot size={22} />}
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={chatbotPanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed bottom-28 right-8 z-50 flex flex-col rounded-2xl overflow-hidden"
            style={{
              width: "min(380px, calc(100vw - 2rem))",
              maxHeight: minimized ? "60px" : "530px",
              background: "var(--color-bg-2)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.1)",
              transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
            }}
            role="dialog"
            aria-label="HarmanGPT Chat"
            aria-modal="true"
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0 cursor-pointer select-none"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
              }}
              onClick={() => setMinimized((v) => !v)}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}
                aria-hidden="true"
              >
                <Sparkles size={17} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-sm leading-tight">
                  HarmanGPT
                </div>
                <div className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  AI assistant · Ask me anything
                </div>
              </div>
              <div className="flex items-center gap-1">
                <motion.button
                  onClick={(e) => { e.stopPropagation(); resetChat(); }}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-white/70 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Reset conversation"
                  title="Reset chat"
                >
                  <RefreshCw size={14} />
                </motion.button>
                <motion.div
                  animate={{ rotate: minimized ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/70"
                  aria-hidden="true"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>
            </div>

            {/* Body — only shown when not minimized */}
            {!minimized && (
              <>
                {/* Messages */}
                <div
                  className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
                  style={{ minHeight: 0 }}
                  aria-live="polite"
                  aria-label="Chat messages"
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-3"
                  >
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        variants={chatMessageVariants}
                        initial="hidden"
                        animate="visible"
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {msg.role === "assistant" && (
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 mr-2"
                            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                            aria-hidden="true"
                          >
                            <Bot size={12} className="text-white" />
                          </div>
                        )}
                        <div
                          className={
                            msg.role === "assistant" ? "chat-bubble-bot" : "chat-bubble-user"
                          }
                          dangerouslySetInnerHTML={{
                            __html: renderMarkdown(msg.content),
                          }}
                        />
                      </motion.div>
                    ))}

                    {loading && (
                      <motion.div
                        variants={chatMessageVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-start"
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 mr-2"
                          style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                          aria-hidden="true"
                        >
                          <Bot size={12} className="text-white" />
                        </div>
                        <TypingIndicator />
                      </motion.div>
                    )}
                  </motion.div>
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                <AnimatePresence>
                  {showSuggestions && (
                    <motion.div
                      variants={staggerItem}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                      className="px-3 pb-2 flex flex-wrap gap-1.5"
                    >
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          onClick={() => sendMessage(s)}
                          className="text-[11px] px-2.5 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                          style={{
                            background: "rgba(124,58,237,0.1)",
                            border: "1px solid rgba(124,58,237,0.22)",
                            color: "var(--color-purple-light)",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input */}
                <div
                  className="p-3 flex gap-2 flex-shrink-0"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about skills, projects, experience..."
                    disabled={loading}
                    className="flex-1 px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all disabled:opacity-50"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(124,58,237,0.5)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                    aria-label="Message input"
                  />
                  <motion.button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || loading}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
                    whileHover={input.trim() && !loading ? { scale: 1.08 } : {}}
                    whileTap={input.trim() && !loading ? { scale: 0.93 } : {}}
                    aria-label="Send message"
                  >
                    <Send size={15} />
                  </motion.button>
                </div>

                {/* Powered by note */}
                <div
                  className="px-4 py-2 text-center text-[10px] flex-shrink-0"
                  style={{
                    color: "var(--color-text-faint)",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  Powered by Claude · Anthropic API
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
