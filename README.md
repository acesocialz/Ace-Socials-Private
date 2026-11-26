# AceSocialz

**Behind every brand is a person.**

Landing page for AceSocialz, a UAE content studio for founders, executives and personal brands. Plain HTML, CSS and a little JavaScript. No build step, no dependencies.

## Pages

```
index.html               Home: intro, what we do, reviews slider
work/index.html          Projects gallery with filters
work-with-us/index.html  Enquiry form (sends to aisling@acesocialz.com via FormSubmit)
thanks/index.html        Shown after an enquiry is sent
styles.css, script.js    Shared styles and the gallery filter
assets/work/<project>/   Project photos (resized to 1600px, metadata stripped)
```

To add a project photo: drop it in `assets/work/<project>/` and add a `<figure class="item" data-cat="...">` to `work/index.html`.
The reviews on the home page are placeholders; replace the text in the `.review` blocks (both copies) with real ones.

## Brand

| Colour    | Hex       |
|-----------|-----------|
| Charcoal  | `#202020` |
| Off-white | `#F2F0E8` |
| Stone     | `#D0D0C8` |
| Scarlet   | `#E4442D` |

## Before launch

- Replace the images in `assets/img/` with real shoot photos (same file names). The current ones are low-resolution crops from the brand board.
- Check the email (`aisling@acesocialz.com`) and Instagram (`@acesocialz`) in the contact section.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000.
