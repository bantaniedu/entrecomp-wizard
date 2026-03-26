/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ideas: '#3498DB',
        resources: '#E67E22',
        action: '#27AE60',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-500',
    'text-blue-600', 'text-blue-700', 'text-blue-800',
    'border-blue-200', 'border-blue-600',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-500',
    'text-orange-600', 'text-orange-700', 'text-orange-800',
    'border-orange-200',
    'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-500',
    'text-green-600', 'text-green-700', 'text-green-800',
    'border-green-200',
    'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200',
    'text-yellow-600', 'text-yellow-800',
    'border-yellow-400',
    'bg-red-50', 'bg-red-100', 'bg-red-200',
    'text-red-600', 'text-red-800',
    'border-red-400',
  ],
}
