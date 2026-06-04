# Contact Form Setup

The contact form submits to `/api/contact` which forwards submissions to a webhook URL.

## Required Environment Variable

Set this in your Vercel project settings (or `.env.local` for local development):

```
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.com/path
```

## Recommended Webhook Services
- **Make (Integromat)**: Create a webhook scenario that emails you the form data
- **Zapier**: Webhook trigger → Gmail/Outlook action
- **n8n**: Self-hosted option

## Testing Locally
1. Copy `.env.local.example` to `.env.local`
2. Add your webhook URL
3. Run `npm run dev`
4. Submit the contact form — check your webhook endpoint received the payload

## Rate Limiting
The in-memory rate limiting has been removed as it does not work on serverless.
Use Vercel's built-in DDoS protection or add Upstash Redis rate limiting for production.
