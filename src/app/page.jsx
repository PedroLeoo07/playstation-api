'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoadingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Inicializando...')

  useEffect(() => {
    // Simulação de progresso
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 60)

    // Mudança de texto durante o carregamento
    const textTimer1 = setTimeout(() => setLoadingText('Conectando ao PlayStation...'), 800)
    const textTimer2 = setTimeout(() => setLoadingText('Carregando jogos...'), 1600)
    const textTimer3 = setTimeout(() => setLoadingText('Quase pronto...'), 2400)

    const timer = setTimeout(() => {
      router.push('/home')
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(textTimer1)
      clearTimeout(textTimer2)
      clearTimeout(textTimer3)
      clearInterval(progressInterval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-6">
        {/* PlayStation Logo Effect */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
        
        {/* Main Loading Spinner */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-blue-400/20 rounded-full mx-auto"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-blue-400 border-r-blue-300 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-3 w-18 h-18 border-2 border-transparent border-t-purple-400 border-r-purple-300 rounded-full animate-spin animate-reverse mx-auto"></div>
          <div className="absolute inset-6 w-12 h-12 border-2 border-transparent border-t-indigo-400 rounded-full animate-spin mx-auto"></div>
          
          {/* Center PlayStation Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xs">PS</span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            PlayStation API
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="flex justify-between text-sm text-blue-300 mb-2">
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-blue-200 text-lg font-medium animate-pulse min-h-[28px] transition-all duration-500">
          {loadingText}
        </p>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-blue-400/60 text-sm animate-pulse">
            Preparando sua experiência gaming...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
