import { createClient } from 'microcms-js-sdk';

// Initialize microCMS SDK
export const client = createClient({
  serviceDomain: process.env.SERVICEDOMAIN || '',
  apiKey: process.env.API_kEY || '',
});
