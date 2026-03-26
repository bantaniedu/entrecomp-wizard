import { MODELS } from '@/lib/types'

interface ModelSelectorProps {
  selected: string
  onChange: (model: string) => void
  disabled?: boolean
}

export default function ModelSelector({ selected, onChange, disabled }: ModelSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-gray-600">AI Model:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
      >
        {MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name} {model.costTier === 'high' ? '💎' : model.costTier === 'medium' ? '⭐' : '⚡'}
          </option>
        ))}
      </select>
      <div className="text-xs text-gray-500">
        {MODELS.find(m => m.id === selected)?.description}
      </div>
    </div>
  )
}
