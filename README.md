# zonictechsolutions
# zonictechsolutions



## Contact form → Zoho CRM

The contact form posts to `/api/lead`, which creates a Lead in Zoho CRM using OAuth.

Add these to `.env.local` (do **not** commit secrets):

```
ZOHO_REFRESH_TOKEN=your_refresh_token
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
# India accounts domain (from your link)
ZOHO_ACCOUNTS_DOMAIN=https://accounts.zoho.in
# Optional overrides
ZOHO_API_DOMAIN=https://www.zohoapis.in
ZOHO_CRM_API_VERSION=v2
```
