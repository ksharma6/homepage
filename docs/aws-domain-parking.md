# AWS Domain Parking Plan

Domain assumed by the app config: `kishensharma.com`

The Astro config already targets the production URL:

```js
site: 'https://www.kishensharma.com'
```

## Current Public DNS Check

Checked on May 14, 2026:

- `kishensharma.com` is delegated to Route 53 name servers.
- `kishensharma.com` resolves to CloudFront IPs.
- `www.kishensharma.com` resolves to CloudFront IPs.
- Both `https://kishensharma.com` and `https://www.kishensharma.com` return an S3 `403` through CloudFront.

That means the portfolio content is not currently published, but the domain is already pointed at a public CloudFront distribution.

## Parked But Ready Target State

For a clean parked setup, keep only DNS ownership and validation records live:

- Keep the registered domain active.
- Keep the Route 53 hosted zone active.
- Keep the default Route 53 `NS` and `SOA` records.
- Keep any ACM certificate DNS validation `CNAME` records.
- Remove the public website routing records until launch:
  - `A` / `AAAA` alias for `kishensharma.com`
  - `A` / `AAAA` alias or `CNAME` for `www.kishensharma.com`

Optional: create a non-site TXT note such as:

```txt
Name: _parking.kishensharma.com
Type: TXT
Value: "Domain parked; portfolio launch pending"
```

## AWS Console Steps To Park It

1. Open AWS Route 53.
2. Go to **Hosted zones**.
3. Open the hosted zone for `kishensharma.com`.
4. Leave these records alone:
   - `kishensharma.com` `NS`
   - `kishensharma.com` `SOA`
   - ACM validation `CNAME` records, if present
5. Delete or disable these records if present:
   - `kishensharma.com` `A` alias to CloudFront
   - `kishensharma.com` `AAAA` alias to CloudFront
   - `www.kishensharma.com` `A` / `AAAA` alias to CloudFront
   - `www.kishensharma.com` `CNAME` to CloudFront

After DNS propagation, the domain should no longer load the CloudFront/S3 `403` page.

## Ready-To-Launch AWS Resources

You can create these now without publishing the portfolio:

- S3 bucket for built static files, with public access blocked.
- CloudFront distribution pointed at the S3 bucket, but with DNS records not attached yet.
- ACM public certificate in `us-east-1` for:
  - `kishensharma.com`
  - `www.kishensharma.com`
- Route 53 DNS validation records for that certificate.

Important CloudFront detail: certificates used by CloudFront must be requested or imported in ACM `us-east-1`.

## Launch Steps Later

1. Build the site:

   ```sh
   npm install
   npm run build
   ```

2. Upload `dist/` to the S3 origin bucket.
3. Enable or update the CloudFront distribution.
4. Add Route 53 records:

   ```txt
   kishensharma.com      A/AAAA alias -> CloudFront distribution
   www.kishensharma.com  A/AAAA alias -> CloudFront distribution
   ```

5. Confirm:

   ```sh
   curl -I https://kishensharma.com
   curl -I https://www.kishensharma.com
   ```

Expected result after launch: `200` or a redirect from the apex domain to `www`.

## Local Notes

The AWS CLI was not installed in this environment when checked, so account-side DNS changes need to be done in the AWS Console or after installing/configuring the AWS CLI locally.
