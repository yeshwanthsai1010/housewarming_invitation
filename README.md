# Gruhapravesam invitation website

## Quick start
Open `index.html` in a browser to preview. For deployment, upload the entire folder contents to a static host.

## Personalize
Edit `config.js`:
- `poojaTime`: add the pooja/muhurtham time.
- `hosts`: replace the example names with the exact family names (English and Telugu).
- `addressLines`, `mapsUrl`, `flatNumber`: update if needed.

The Vinayaka/Vaishnava artwork is included as a decorative crop. The location QR image is generated from the Google Maps link in the current config. If you change `mapsUrl`, regenerate `assets/location-qr.png` using any trusted QR generator or ask for an updated package.

## Hosting
Recommended: GitHub Pages (free for a public repository) or Cloudflare Pages.
1. Create a GitHub repository, e.g. `gruhapravesam-invite`.
2. Upload `index.html`, `styles.css`, `script.js`, `config.js`, and `assets/`.
3. In GitHub: Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)`.
4. Share the published HTTPS URL on WhatsApp.
5. Test on an Android phone and iPhone, especially the Telugu font and QR code.

## Best practices
- Keep the repository public only if you are comfortable making the invitation and address public. A private repo may require a paid hosting plan or a different deployment setup.
- Avoid publishing personal phone numbers or unnecessary family details.
- Use the short Google Maps link for navigation; the QR code opens the same destination.
- Check the date, pooja time, Telugu spellings, names, and map pin before sharing.
- This is a static site: no backend or visitor tracking is included.
