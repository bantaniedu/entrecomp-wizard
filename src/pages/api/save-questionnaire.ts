import type { NextApiRequest, NextApiResponse } from 'next'
import { neon } from '@neondatabase/serverless'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Nhost provides NHOST_DATABASE_URL or we can construct it
  const databaseUrl = process.env.NHOST_DATABASE_URL || process.env.DATABASE_URL

  if (!databaseUrl) {
    console.error('Missing database URL env var')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const sql = neon(databaseUrl)

  try {
    const {
      documentType,
      documentTypeOther,
      institutionType,
      subjectArea,
      courseTitle,
      ageGroup,
      durationHours,
      deliveryFormat,
      deliveryFormatOther,
      userName,
      userEmail,
      userOrganisationType,
      gdprConsent,
    } = req.body

    console.log('Saving questionnaire data for:', userEmail)

    const result = await sql`
      INSERT INTO questionnaire_responses (
        document_type,
        document_type_other,
        institution_type,
        subject_area,
        course_title,
        age_group,
        duration_hours,
        delivery_format,
        delivery_format_other,
        user_name,
        user_email,
        user_organisation_type,
        gdpr_consent,
        gdpr_consent_timestamp
      ) VALUES (
        ${documentType},
        ${documentTypeOther || null},
        ${institutionType},
        ${subjectArea},
        ${courseTitle},
        ${ageGroup || null},
        ${durationHours ? parseInt(durationHours) : null},
        ${deliveryFormat},
        ${deliveryFormatOther || null},
        ${userName},
        ${userEmail},
        ${userOrganisationType},
        ${gdprConsent},
        NOW()
      )
      RETURNING id
    `

    console.log('Saved:', result[0]?.id)
    return res.status(200).json({ success: true, id: result[0]?.id })
  } catch (error) {
    console.error('Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: 'Failed to save data', details: errorMessage })
  }
}
