import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'
import mammoth from 'mammoth'
import pdf from 'pdf-parse'
import * as XLSX from 'xlsx'

export const config = {
  api: {
    bodyParser: false,
  },
}

async function parseFile(filepath: string, mimetype: string, filename: string): Promise<string> {
  const buffer = fs.readFileSync(filepath)
  const extension = filename.split('.').pop()?.toLowerCase()

  // PDF
  if (mimetype === 'application/pdf' || extension === 'pdf') {
    const data = await pdf(buffer)
    return data.text
  }

  // Word documents
  if (
    mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    mimetype === 'application/msword' ||
    extension === 'docx' ||
    extension === 'doc'
  ) {
    const result = await mammoth.extractRawText({ buffer })
    return result.value
  }

  // Excel and ODS files
  if (
    mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    mimetype === 'application/vnd.ms-excel' ||
    mimetype === 'application/vnd.oasis.opendocument.spreadsheet' ||
    extension === 'xlsx' ||
    extension === 'xls' ||
    extension === 'ods'
  ) {
    const workbook = XLSX.read(buffer, { type: 'buffer' })
    let text = ''
    
    // Extract text from all sheets
    for (const sheetName of workbook.SheetNames) {
      const sheet = workbook.Sheets[sheetName]
      text += `\n--- Sheet: ${sheetName} ---\n`
      text += XLSX.utils.sheet_to_txt(sheet)
    }
    
    return text
  }

  // Plain text fallback
  return buffer.toString('utf-8')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const form = formidable({
    maxFileSize: 10 * 1024 * 1024, // 10MB
  })

  try {
    const [fields, files] = await form.parse(req)
    const file = files.file?.[0]

    if (!file) {
      return res.status(400).json({ error: 'No file provided' })
    }

    const content = await parseFile(
      file.filepath, 
      file.mimetype || 'text/plain',
      file.originalFilename || 'unknown'
    )

    // Clean up temp file
    fs.unlinkSync(file.filepath)

    return res.status(200).json({ content })
  } catch (error) {
    console.error('Parse error:', error)
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to parse file'
    })
  }
}
