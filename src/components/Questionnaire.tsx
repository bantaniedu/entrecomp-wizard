import { useState } from 'react'

export interface QuestionnaireData {
  // About this document
  documentType: string
  documentTypeOther?: string
  institutionType: string
  
  // About the learning experience
  subjectArea: string
  courseTitle: string
  ageGroup: string
  durationHours: string
  deliveryFormat: string
  deliveryFormatOther?: string
  
  // User details
  userName: string
  userEmail: string
  userOrganisationType: string
  gdprConsent: boolean
}

interface QuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void
  onSkip: () => void
}

const DOCUMENT_TYPES = [
  'Syllabus',
  'Programme or Course Specification',
  'Scheme of Work',
  'Module Descriptor',
  'Curriculum Map',
  'Course Handbook or Overview',
  'Lesson/Session Plan',
  'Other'
]

const INSTITUTION_TYPES = [
  'University - undergraduate',
  'University - postgraduate',
  'Vocational or Further Education',
  'Secondary School',
  'Primary School',
  'Special Education Needs School',
  'Youth Work Organisation',
  'Adult and Community Education',
  'Corporate/Workplace Learning',
  'Government/Public Sector Training',
  'Entrepreneurship or Business Support Organisation'
]

const AGE_GROUPS = [
  'Under 11',
  '11-14',
  '14-16',
  '16-18',
  '18-25',
  '25+',
  'Mixed ages',
  'Not specified'
]

const DELIVERY_FORMATS = [
  'Face-to-face',
  'Online',
  'Blended',
  'Self-paced/asynchronous',
  'Other'
]

export default function Questionnaire({ onComplete, onSkip }: QuestionnaireProps) {
  const [data, setData] = useState<QuestionnaireData>({
    documentType: '',
    institutionType: '',
    subjectArea: '',
    courseTitle: '',
    ageGroup: '',
    durationHours: '',
    deliveryFormat: '',
    userName: '',
    userEmail: '',
    userOrganisationType: '',
    gdprConsent: false,
  })

  const [currentSection, setCurrentSection] = useState(0)

  const updateField = (field: keyof QuestionnaireData, value: string | boolean) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentSection) {
      case 0:
        return data.documentType && data.institutionType &&
          (data.documentType !== 'Other' || data.documentTypeOther)
      case 1:
        return data.subjectArea && data.courseTitle && data.deliveryFormat
      case 2:
        return data.userName && data.userEmail && data.userOrganisationType && data.gdprConsent
      default:
        return true
    }
  }

  const handleNext = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1)
    } else {
      onComplete(data)
    }
  }

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Before you start
        </h2>
        <p className="text-gray-600">
          Please share some insights about the curriculum you want to analyse. 
          This helps us provide more accurate and relevant results.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex mb-8">
        {['Document', 'Experience', 'Your Details'].map((label, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i < currentSection ? 'bg-green-500 text-white' :
              i === currentSection ? 'bg-blue-600 text-white' :
              'bg-gray-200 text-gray-500'
            }`}>
              {i < currentSection ? '✓' : i + 1}
            </div>
            <span className={`ml-2 text-sm ${i === currentSection ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
              {label}
            </span>
            {i < 2 && <div className="flex-1 h-0.5 mx-4 bg-gray-200" />}
          </div>
        ))}
      </div>

      {/* Section 1: About this document */}
      {currentSection === 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            📄 About this document
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What type of document is this? *
            </label>
            <select
              value={data.documentType}
              onChange={(e) => updateField('documentType', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select document type...</option>
              {DOCUMENT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {data.documentType === 'Other' && (
              <input
                type="text"
                value={data.documentTypeOther || ''}
                onChange={(e) => updateField('documentTypeOther', e.target.value)}
                placeholder="Please describe the document type..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What institution type is this targeting? *
            </label>
            <select
              value={data.institutionType}
              onChange={(e) => updateField('institutionType', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select institution type...</option>
              {INSTITUTION_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Section 2: About the learning experience */}
      {currentSection === 1 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            🎓 About the learning experience
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What subject area or theme does it cover? *
            </label>
            <input
              type="text"
              value={data.subjectArea}
              onChange={(e) => updateField('subjectArea', e.target.value)}
              placeholder="e.g., Business Studies, Science, Humanities..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is the title of the course or programme? *
            </label>
            <input
              type="text"
              value={data.courseTitle}
              onChange={(e) => updateField('courseTitle', e.target.value)}
              placeholder="e.g., Introduction to Entrepreneurship"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is the age group of the target audience?
            </label>
            <select
              value={data.ageGroup}
              onChange={(e) => updateField('ageGroup', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select age group...</option>
              {AGE_GROUPS.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How long is the learning experience in hours?
            </label>
            <input
              type="number"
              value={data.durationHours}
              onChange={(e) => updateField('durationHours', e.target.value)}
              placeholder="e.g., 40"
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is the delivery format? *
            </label>
            <select
              value={data.deliveryFormat}
              onChange={(e) => updateField('deliveryFormat', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select delivery format...</option>
              {DELIVERY_FORMATS.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
            {data.deliveryFormat === 'Other' && (
              <input
                type="text"
                value={data.deliveryFormatOther || ''}
                onChange={(e) => updateField('deliveryFormatOther', e.target.value)}
                placeholder="Please describe the delivery format..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        </div>
      )}

      {/* Section 3: Your details */}
      {currentSection === 2 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            👤 Your details
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your name *
            </label>
            <input
              type="text"
              value={data.userName}
              onChange={(e) => updateField('userName', e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your email *
            </label>
            <input
              type="email"
              value={data.userEmail}
              onChange={(e) => updateField('userEmail', e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What type of organisation do you work for? *
            </label>
            <select
              value={data.userOrganisationType}
              onChange={(e) => updateField('userOrganisationType', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select organisation type...</option>
              {INSTITUTION_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="pt-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={data.gdprConsent}
                onChange={(e) => updateField('gdprConsent', e.target.checked)}
                className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the processing of my personal data in accordance with the{' '}
                <a 
                  href="https://bantani.com/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bantani Education Privacy Policy
                </a>
                . *
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <div>
          {currentSection > 0 ? (
            <button
              onClick={handleBack}
              className="px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              ← Back
            </button>
          ) : (
            <button
              onClick={onSkip}
              className="px-6 py-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              Skip questionnaire
            </button>
          )}
        </div>
        
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {currentSection < 2 ? 'Continue →' : 'Start Analysis →'}
        </button>
      </div>
    </div>
  )
}
