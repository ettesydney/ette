export const apiVersion =
  process.env.SANITY_STUDIO_SANITY_API_VERSION || '2025-02-10'

export const dataset = assertValue(
  // process.env.SANITY_STUDIO_SANITY_DATASET,
  'production',
  'Missing environment variable: SANITY_STUDIO_SANITY_DATASET'
)

export const projectId = assertValue(
  // process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  '71z95p8n',
  'Missing environment variable: SANITY_STUDIO_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
