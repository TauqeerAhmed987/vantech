# DNS Migration: Lovable → HostGator

Domain: **vantechsystems.tech**
Nameservers: `hgns1.hostgator.com`, `hgns2.hostgator.com` (DNS is managed in HostGator Zone Editor)
HostGator server IP: **162.241.194.168**
Lovable IP (current website): **185.158.133.1**

Snapshot taken: 2026-09-26

---

## Changes to make

| # | Action | Type | Name | Current value | New value |
|---|---|---|---|---|---|
| 1 | **Edit** | A | `@` | 185.158.133.1 | **162.241.194.168** |
| 2 | **Edit** | A | `www` | 185.158.133.1 | **162.241.194.168** |
| 3 | **Delete** | TXT | `_lovable` | lovable_verify=b810c2e1… | — |
| 4 | **Delete** | TXT | `_lovable.www` | lovable_verify=2a30907b… | — |
| 5 | Delete later (optional) | TXT | `_lovable-email` | lovable_email_verify=a324e5a7… | — |

Notes:
- Do rows 1–2 only **after** the site is uploaded to HostGator and tested.
- Do rows 3–5 **after** the site is live on HostGator and the domain is removed from Lovable.
- TTL on `@` / `www` is already 15 minutes, so no need to lower it beforehand.

## Do NOT touch (email, marketing, cPanel services)

- `mail`, `autoconfig`, `autodiscover`, `webdisk`, `whm` A records → HostGator (162.241.194.168)
- `cpanel`, `ftp`, `webmail` CNAMEs → vantechsystems.tech
- `marketing` CNAME → sites.ludicrous.cloud (GoHighLevel funnel/site)
- `email.support` CNAME → mailgun.org
- All MX records (`@`, `support`, `send`)
- All SPF / DKIM / DMARC TXT records (`send`, `support`, `mx._domainkey.support`, `resend._domainkey`, `_dmarc`, `_dmarc.support`)
- SRV `_autodiscover._tcp`
- A `localhost` → 127.0.0.1

---

## Current records (full snapshot, for rollback)

### A
| Name | Value | TTL |
|---|---|---|
| autoconfig | 162.241.194.168 | 4 Hours |
| autodiscover | 162.241.194.168 | 4 Hours |
| localhost | 127.0.0.1 | 4 Hours |
| mail | 162.241.194.168 | 4 Hours |
| @ | 185.158.133.1 | 15 minutes |
| webdisk | 162.241.194.168 | 4 Hours |
| whm | 162.241.194.168 | 4 Hours |
| www | 185.158.133.1 | 15 minutes |

### CNAME
| Name | Value | TTL |
|---|---|---|
| cpanel | vantechsystems.tech | 4 Hours |
| email.support | mailgun.org | 4 Hours |
| ftp | vantechsystems.tech | 4 Hours |
| marketing | sites.ludicrous.cloud | 4 Hours |
| webmail | vantechsystems.tech | 4 Hours |

### MX
| Name | Value | TTL |
|---|---|---|
| send | feedback-smtp.us-east-1.amazonses.com | 4 Hours |
| support | mxa.mailgun.org | 4 Hours |
| support | mxb.mailgun.org | 4 Hours |
| @ | mail.vantechsystems.tech | 4 Hours |

### TXT
| Name | Value | TTL |
|---|---|---|
| mx._domainkey.support | k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwGcsNBYdja1cipNrROnsAzI9Qg19pZV0I2YR6qCpEgrkx7qS8hhC+Srj1YzUAE2h6HVHv6lyWOQRBVyC1Vc1LgzbhXHtL3LYjX/Op2w2OycEjA+ZSqZjXFP1JUKVSArWJ6SBJ9jxMXgtHxh1oHQLUeK/06K6IJVU4Lj7/X3rTqwIDAQAB | 4 Hours |
| resend._domainkey | p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDk4OfpNkGZM8SON/WFuY/q5UWAB8MkB6O6fTTvKPvIGYoPxvyaTs4SkI1cRGa/kPwjOV5HvD51MevDh1Gcr/5xrQUf+BUz3v2ktOsHQR8VaJ4LGjh4bnDgN2+X537ctNbrHc1aWAYIWXPBrNk43K/FUPaxJf2PKNuGBlIuTMbZ2QIDAQAB | 1 Hour |
| send | v=spf1 include:amazonses.com ~all | 4 Hours |
| support | v=spf1 include:spf.leadconnectorhq.com include:mailgun.org ~all | 4 Hours |
| _dmarc.support | v=DMARC1;p=none; | 4 Hours |
| _dmarc | v=DMARC1; p=none; | 4 Hours |
| _lovable-email | lovable_email_verify=a324e5a7bc0f57b686817797ba56543db0453aa1f48e85a2a6e4064fba2b3e3f | 15 minutes |
| _lovable | lovable_verify=b810c2e1c5b2ca19b6028eccecbc001f93dbac2d8d35611bc7584b7fe6b35d99 | 15 minutes |
| _lovable.www | lovable_verify=2a30907baa1f2b5c646a4b723a6e230429ad1af8c1a18f9c663f4a2c93571cbe | 15 minutes |

### SRV
| Name | Value | TTL |
|---|---|---|
| _autodiscover._tcp.vantechsystems.tech. | cpanelemaildiscovery.cpanel.net | 4 Hours |

---

## Rollback

If anything breaks, set `@` and `www` A records back to **185.158.133.1** (and re-add the `_lovable` / `_lovable.www` TXT records above if deleted). Site returns to Lovable within ~15 minutes.

---

## Step-by-step

1. `npm run build` → upload **contents** of `dist/` (including hidden `.htaccess`) to `public_html/` in cPanel File Manager.
2. Test before switching — add to `/etc/hosts` on your Mac:
   ```
   162.241.194.168  vantechsystems.tech  www.vantechsystems.tech
   ```
   Open the site in a private window, click through pages, refresh a sub-page (checks `.htaccess`). Remove the line afterwards.
3. Zone Editor → edit `@` and `www` A records to `162.241.194.168`.
4. Verify propagation:
   ```bash
   dig +short vantechsystems.tech
   dig +short www.vantechsystems.tech
   ```
   Both should return `162.241.194.168`.
5. cPanel → SSL/TLS Status → **Run AutoSSL** (only works after step 4 resolves).
6. Check `https://vantechsystems.tech` and `https://www.vantechsystems.tech` load.
7. Remove the custom domain in Lovable (Project → Settings → Domains).
8. Delete `_lovable` and `_lovable.www` TXT records (and `_lovable-email` if Lovable email isn't used).
