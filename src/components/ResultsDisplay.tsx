import { useState } from 'react'
import type { AnalysisResult, CompetenceMatch, Recommendation } from '@/lib/types'

interface ResultsDisplayProps {
  results: AnalysisResult
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'matches' | 'recommendations'>('overview')

  const getAreaColor = (area: string) => {
    switch (area) {
      case 'ideas': return 'blue'
      case 'resources': return 'orange'
      case 'action': return 'green'
      default: return 'gray'
    }
  }

  const getConfidenceIcon = (confidence: string) => {
    switch (confidence) {
      case 'strong': return '✅'
      case 'moderate': return '⚡'
      case 'weak': return '❓'
      default: return ''
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Analysis Results</h2>
            <p className="text-gray-500 text-sm">
              {results.documentName} • {results.analysisDate} • {results.model}
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-blue-600">
              {results.summary.overallScore}%
            </div>
            <div className="text-sm text-gray-500">EntreComp Coverage</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{results.summary.totalMatches}</div>
            <div className="text-sm text-gray-500">Total Matches</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{results.summary.strongMatches}</div>
            <div className="text-sm text-gray-500">Strong</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{results.summary.moderateMatches}</div>
            <div className="text-sm text-gray-500">Moderate</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{results.summary.competencesIdentified}/15</div>
            <div className="text-sm text-gray-500">Competences</div>
          </div>
        </div>
      </div>

      {/* Area Coverage */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Coverage by Area</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {results.areas.map((area) => (
            <div key={area.area} className={`rounded-lg p-4 bg-${getAreaColor(area.area)}-50 border border-${getAreaColor(area.area)}-200`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className={`font-semibold text-${getAreaColor(area.area)}-800`}>
                  {area.area === 'ideas' && '💡'} 
                  {area.area === 'resources' && '⚙️'} 
                  {area.area === 'action' && '🚀'} 
                  {area.areaName}
                </h4>
                <span className={`text-lg font-bold text-${getAreaColor(area.area)}-600`}>
                  {area.coverage}%
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div 
                  className={`bg-${getAreaColor(area.area)}-500 h-2 rounded-full transition-all`}
                  style={{ width: `${area.coverage}%` }}
                />
              </div>
              
              {/* Competences list */}
              <div className="space-y-1">
                {area.competences.map((comp) => (
                  <div 
                    key={comp.id} 
                    className={`text-sm flex items-center gap-2 ${comp.matched ? `text-${getAreaColor(area.area)}-700` : 'text-gray-400'}`}
                  >
                    <span>{comp.matched ? '✓' : '○'}</span>
                    <span>{comp.name}</span>
                    {comp.confidence && (
                      <span className="ml-auto">{getConfidenceIcon(comp.confidence)}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`flex-1 py-3 font-medium transition-colors ${
              activeTab === 'matches'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            🎯 Matches ({results.matches.length})
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`flex-1 py-3 font-medium transition-colors ${
              activeTab === 'recommendations'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            💡 Recommendations ({results.recommendations.length})
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <OverviewTab results={results} />
          )}
          {activeTab === 'matches' && (
            <MatchesTab matches={results.matches} />
          )}
          {activeTab === 'recommendations' && (
            <RecommendationsTab recommendations={results.recommendations} gaps={results.gaps} />
          )}
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ results }: { results: AnalysisResult }) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">Key Findings</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              Your document aligns with <strong>{results.summary.competencesIdentified}</strong> out of 15 EntreComp competences
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>{results.summary.strongMatches}</strong> strong alignments identified
            </span>
          </li>
          {results.gaps.length > 0 && (
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">!</span>
              <span>
                <strong>{results.gaps.length}</strong> competence areas could be enhanced
              </span>
            </li>
          )}
        </ul>
      </div>

      {results.gaps.length > 0 && (
        <div>
          <h4 className="font-semibold mb-3">Gaps Identified</h4>
          <div className="flex flex-wrap gap-2">
            {results.gaps.map((gap, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {gap}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MatchesTab({ matches }: { matches: CompetenceMatch[] }) {
  if (matches.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No matches found. Try uploading a document with more detailed learning outcomes.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {matches.map((match, i) => (
        <div key={i} className="border rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className={`competence-tag ${match.area}`}>
                {match.areaName}
              </span>
              <h4 className="font-semibold mt-1">{match.competenceName}</h4>
            </div>
            <span className={`confidence-${match.confidence} font-medium`}>
              {match.confidence.charAt(0).toUpperCase() + match.confidence.slice(1)}
            </span>
          </div>
          
          <div className="bg-gray-50 rounded p-3 mb-3 text-sm italic">
            "{match.matchedText}"
          </div>
          
          <p className="text-gray-600 text-sm">{match.explanation}</p>
          
          {match.proficiencyLevel && (
            <div className="mt-2 text-xs text-gray-500">
              Proficiency: {match.proficiencyLevel}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function RecommendationsTab({ recommendations, gaps }: { recommendations: Recommendation[], gaps: string[] }) {
  if (recommendations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No specific recommendations at this time.
      </div>
    )
  }

  const priorityOrder = { high: 0, medium: 1, low: 2 }
  const sortedRecs = [...recommendations].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])

  return (
    <div className="space-y-4">
      {sortedRecs.map((rec, i) => (
        <div key={i} className={`border-l-4 rounded-r-lg p-4 ${
          rec.priority === 'high' ? 'border-red-400 bg-red-50' :
          rec.priority === 'medium' ? 'border-yellow-400 bg-yellow-50' :
          'border-green-400 bg-green-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${
              rec.priority === 'high' ? 'bg-red-200 text-red-800' :
              rec.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
              'bg-green-200 text-green-800'
            }`}>
              {rec.priority.toUpperCase()}
            </span>
            <span className={`competence-tag ${rec.area}`}>
              {rec.competenceName}
            </span>
          </div>
          
          <p className="text-gray-800">{rec.suggestion}</p>
          
          {rec.exampleActivity && (
            <div className="mt-3 text-sm">
              <span className="font-medium">Example activity:</span>{' '}
              <span className="text-gray-600">{rec.exampleActivity}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
