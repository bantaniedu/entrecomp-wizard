import { useState, useCallback, useRef } from 'react'

interface UploadFormProps {
  onAnalyze: (content: string, filename: string) => void
  isAnalyzing: boolean
  progress: string
}

export default function UploadForm({ onAnalyze, isAnalyzing, progress }: UploadFormProps) {
  const [dragOver, setDragOver] = useState(false)
  const [textContent, setTextContent] = useState('')
  const [mode, setMode] = useState<'upload' | 'paste'>('upload')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFile = async (file: File) => {
    const filename = file.name
    const extension = filename.split('.').pop()?.toLowerCase()

    // For plain text files, read directly
    if (extension === 'txt' || extension === 'md') {
      const text = await file.text()
      onAnalyze(text, filename)
      return
    }

    // For PDF, DOCX, Excel, ODS - send to server for parsing
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/parse', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || 'Failed to parse file')
      }

      const { content } = await response.json()
      onAnalyze(content, filename)
    } catch (error) {
      // For unknown formats, try to read as text
      if (extension === 'txt' || extension === 'md') {
        const text = await file.text()
        onAnalyze(text, filename)
      } else {
        throw error
      }
    }
  }

  const handlePasteSubmit = () => {
    if (textContent.trim()) {
      onAnalyze(textContent.trim(), 'pasted-content.txt')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Mode Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setMode('upload')}
          className={`px-6 py-3 font-medium transition-colors ${
            mode === 'upload'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          📄 Upload File
        </button>
        <button
          onClick={() => setMode('paste')}
          className={`px-6 py-3 font-medium transition-colors ${
            mode === 'paste'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          📋 Paste Text
        </button>
      </div>

      {mode === 'upload' ? (
        <div
          className={`upload-zone ${dragOver ? 'dragover' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.doc,.txt,.md,.xlsx,.xls,.ods"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {isAnalyzing ? (
            <div className="flex flex-col items-center">
              <div className="loading-spinner mb-4"></div>
              <p className="text-blue-600 font-medium">{progress || 'Analysing...'}</p>
            </div>
          ) : (
            <>
              <div className="text-5xl mb-4">📁</div>
              <p className="text-xl font-medium text-gray-700 mb-2">
                Drop your document here
              </p>
              <p className="text-gray-500">
                or click to browse
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Supports PDF, Word, Excel, OpenDocument, and text files
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder="Paste your curriculum, lesson plan, or course content here..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            disabled={isAnalyzing}
          />
          
          <button
            onClick={handlePasteSubmit}
            disabled={isAnalyzing || !textContent.trim()}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center gap-2">
                <div className="loading-spinner w-5 h-5 border-2"></div>
                {progress || 'Analysing...'}
              </span>
            ) : (
              '🔍 Analyse Content'
            )}
          </button>
        </div>
      )}
    </div>
  )
}
