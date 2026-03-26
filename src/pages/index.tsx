import { useState, useCallback } from 'react'
import UploadForm from '@/components/UploadForm'
import ResultsDisplay from '@/components/ResultsDisplay'
import Questionnaire, { QuestionnaireData } from '@/components/Questionnaire'
import type { AnalysisResult } from '@/lib/types'

type Stage = 'questionnaire' | 'upload' | 'results'

export default function Home() {
  const [stage, setStage] = useState<Stage>('questionnaire')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState('')
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null)

  const handleQuestionnaireComplete = async (data: QuestionnaireData) => {
    setQuestionnaireData(data)
    setStage('upload')
    
    // Save to Supabase (fire and forget - don't block the user)
    try {
      await fetch('/api/save-questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (err) {
      console.error('Failed to save questionnaire data:', err)
    }
  }

  const handleQuestionnaireSkip = () => {
    setQuestionnaireData(null)
    setStage('upload')
  }

  const handleAnalyze = useCallback(async (content: string, filename: string) => {
    setIsAnalyzing(true)
    setError(null)
    setProgress('Sending document for analysis...')

    try {
      // Build context from questionnaire
      let contextPrefix = ''
      if (questionnaireData) {
        contextPrefix = `
CONTEXT ABOUT THIS DOCUMENT:
- Document Type: ${questionnaireData.documentType}${questionnaireData.documentTypeOther ? ` (${questionnaireData.documentTypeOther})` : ''}
- Institution Type: ${questionnaireData.institutionType}
- Subject Area: ${questionnaireData.subjectArea}
- Course Title: ${questionnaireData.courseTitle}
- Age Group: ${questionnaireData.ageGroup || 'Not specified'}
- Duration: ${questionnaireData.durationHours ? questionnaireData.durationHours + ' hours' : 'Not specified'}
- Delivery Format: ${questionnaireData.deliveryFormat}

DOCUMENT CONTENT:
`
      }

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          content: contextPrefix + content, 
          filename, 
          model: 'claude-sonnet',
          context: questionnaireData 
        }),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || 'Analysis failed')
      }

      setProgress('Processing results...')
      const data = await response.json()
      setResults(data)
      setStage('results')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsAnalyzing(false)
      setProgress('')
    }
  }, [questionnaireData])

  const handleReset = () => {
    setResults(null)
    setError(null)
    setQuestionnaireData(null)
    setStage('questionnaire')
  }

  const handleBackToUpload = () => {
    setResults(null)
    setError(null)
    setStage('upload')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <img 
              src="/bantani-logo.png" 
              alt="Bantani Education" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                EntreComp Check
              </h1>
              <p className="text-gray-600 mt-1">
                Analyse curriculum and lesson plans for entrepreneurial competences
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Questionnaire Stage */}
        {stage === 'questionnaire' && (
          <div className="space-y-8">
            {/* Intro Section */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Discover the Entrepreneurial Potential in Your Teaching
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                EntreComp Check helps educators, curriculum designers, and training providers 
                identify how their existing learning materials align with the European Entrepreneurship Competence 
                Framework (EntreComp). Upload your curriculum, lesson plans, or course documents to discover 
                which of the 15 entrepreneurial competences you&apos;re already developing — and find opportunities 
                to enhance entrepreneurial learning in your teaching.
              </p>
            </div>

            <Questionnaire 
              onComplete={handleQuestionnaireComplete}
              onSkip={handleQuestionnaireSkip}
            />
          </div>
        )}

        {/* Upload Stage */}
        {stage === 'upload' && (
          <div className="space-y-8">
            {/* Context summary if questionnaire was completed */}
            {questionnaireData && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-green-800 mb-1">✓ Context captured</h3>
                  <p className="text-green-700 text-sm">
                    <strong>{questionnaireData.courseTitle}</strong> • {questionnaireData.documentType} • {questionnaireData.institutionType}
                  </p>
                </div>
                <button
                  onClick={() => setStage('questionnaire')}
                  className="text-green-600 hover:text-green-800 text-sm"
                >
                  Edit
                </button>
              </div>
            )}

            {/* How it works */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                How it works
              </h2>
              <ol className="list-decimal list-inside text-blue-800 space-y-1">
                <li>Upload your curriculum, lesson plan, or course document</li>
                <li>Our AI analyses it against the 15 EntreComp competences and 256 learning outcomes</li>
                <li>See which specific entrepreneurial learning outcomes are achieved</li>
                <li>Get recommendations for enhancing EntreComp alignment</li>
              </ol>
            </div>

            {/* Upload Form */}
            <UploadForm 
              onAnalyze={handleAnalyze} 
              isAnalyzing={isAnalyzing}
              progress={progress}
            />

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">
                  <strong>Error:</strong> {error}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Results Stage */}
        {stage === 'results' && results && (
          <div>
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleBackToUpload}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
              >
                ← Analyse another document
              </button>
              <button
                onClick={handleReset}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Start over
              </button>
            </div>

            {/* Show context if available */}
            {questionnaireData && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Document context</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Title:</span>{' '}
                    <span className="font-medium">{questionnaireData.courseTitle}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>{' '}
                    <span className="font-medium">{questionnaireData.documentType}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Subject:</span>{' '}
                    <span className="font-medium">{questionnaireData.subjectArea}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Institution:</span>{' '}
                    <span className="font-medium">{questionnaireData.institutionType}</span>
                  </div>
                </div>
              </div>
            )}

            <ResultsDisplay results={results} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 text-sm">
              <p>
                Based on the{' '}
                <a 
                  href="https://ec.europa.eu/jrc/en/entrecomp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  EntreComp Framework
                </a>{' '}
                (Bacigalupo et al., 2016)
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} Bantani Education. All rights reserved.
              </p>
            </div>
            <img 
              src="/bantani-logo.png" 
              alt="Bantani Education" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </footer>
    </main>
  )
}
