# Bild-Manifest – Krotzer & Eisele GmbH

Alle Bild-Slots der Website. Jedes Bild wird mit **Higgsfield Image 2 (Soul / Nano Banana Pro)** generiert und unter dem exakt angegebenen **Dateinamen** in diesem `images/`-Ordner gespeichert. Dann erscheint es automatisch auf der Seite (die Slots referenzieren bereits diese Dateinamen; bis dahin zeigen sie einen markenfarbenen Platzhalter).

## Globaler Stil (in jeden Prompt übernehmen)
> Professional, photorealistic, high-end corporate photography for a German building-inspection company (Bausachverständige). Clean, trustworthy, modern. Natural daylight, soft shadows, shallow depth of field. Muted palette of deep forest green, warm neutrals and white. No text, no logos, no watermarks, no people's faces in focus unless specified. Sharp, magazine-quality.

- **Hero-Bilder:** Seitenverhältnis **16:9**, quer.
- **Detail-/Frame-Bilder:** Seitenverhältnis **4:3**.
- **CTA-Hintergründe:** **16:9**, etwas dunkler/ruhiger (werden abgedunkelt überlagert).

---

## Startseite (index.html)
| Datei | Format | Prompt |
|---|---|---|
| `hero.jpg` | 16:9 | A modern German residential building exterior at golden hour, a building inspector in a dark green softshell jacket holding a thermal-imaging camera, professional and reassuring, blurred greenery, [Globaler Stil] |
| `messung.jpg` | 4:3 | Close-up of a hand using a digital moisture meter on an interior wall, measurement device display glowing, clean bright room, professional inspection scene, [Globaler Stil] |
| `cta-feuchte.jpg` | 16:9 | Abstract close-up of a thermal-imaging scan of a building wall showing cool/warm zones in green and amber tones, subtle, premium, [Globaler Stil] |

## Leistungen (leistungen.html)
| Datei | Format | Prompt |
|---|---|---|
| `leistungen-hero.jpg` | 16:9 | Flat-lay of professional building-inspection tools on a neutral desk: thermal camera, moisture meter, clipboard, tablet with floor plan, green accents, top-down, [Globaler Stil] |

## Schimmelpilzbegutachtung (schimmelpilzbegutachtung.html)
| Datei | Format | Prompt |
|---|---|---|
| `schimmel-hero.jpg` | 16:9 | Inspector examining a damp interior corner wall with a magnifier and flashlight, subtle dark patches on wall, serious diagnostic mood, soft daylight, [Globaler Stil] |
| `schimmel-detail.jpg` | 4:3 | Macro shot of a gloved hand taking a sample from a wall surface for mold analysis, sample swab and small container, lab-grade precision, [Globaler Stil] |
| `cta-schimmel.jpg` | 16:9 | Calm clean renovated bright living room after successful mold remediation, healthy indoor environment, plants, daylight, [Globaler Stil] |

## Feuchte- & Wasserschäden (feuchte-wasserschaden.html)
| Datei | Format | Prompt |
|---|---|---|
| `feuchte-hero.jpg` | 16:9 | Inspector using a thermal-imaging camera pointed at a ceiling with subtle water-damage staining, tablet readout, professional, [Globaler Stil] |
| `feuchte-detail.jpg` | 4:3 | Digital moisture meter pressed against a baseboard near the floor, readout visible, water-damage diagnostics, [Globaler Stil] |

## Leckageortung (leckageortung.html)
| Datei | Format | Prompt |
|---|---|---|
| `leckage-hero.jpg` | 16:9 | Technician performing non-destructive leak detection on a floor with acoustic/thermal equipment, focused, modern apartment, [Globaler Stil] |
| `leckage-detail.jpg` | 4:3 | Close-up of leak-detection equipment and a thermal camera on a tiled bathroom floor, cables and sensors, precise, [Globaler Stil] |
| `cta-leckage.jpg` | 16:9 | Underfloor heating pipes diagram-like real photo under a screed floor, warm tones, subtle, premium, [Globaler Stil] |

## Luftdichtheitsmessung (luftdichtheitsmessung.html)
| Datei | Format | Prompt |
|---|---|---|
| `luftdichtheit-hero.jpg` | 16:9 | A blower-door test setup: a red/neutral fabric panel with a fan mounted in an open exterior house door, professional energy assessment, [Globaler Stil] |
| `luftdichtheit-detail.jpg` | 4:3 | Close-up of the blower-door fan and a tablet showing airtightness measurement data, technical, clean, [Globaler Stil] |
| `cta-luftdichtheit.jpg` | 16:9 | Energy-efficient modern German house facade with subtle airflow visualization overlay, green and neutral, [Globaler Stil] |

## Bauschadenbewertung (bauschadenbewertung.html)
| Datei | Format | Prompt |
|---|---|---|
| `bauschaden-hero.jpg` | 16:9 | Building surveyor with clipboard and tablet inspecting a building facade with a small crack, professional assessment, daylight, [Globaler Stil] |
| `bauschaden-detail.jpg` | 4:3 | Close-up of a hand documenting a structural crack on a wall with a measuring scale and tablet, forensic precision, [Globaler Stil] |
| `cta-bauschaden.jpg` | 16:9 | Architectural detail of a solid modern building structure, confident and stable, neutral green tones, [Globaler Stil] |

## Über uns (ueber-uns.html)
| Datei | Format | Prompt |
|---|---|---|
| `ueber-hero.jpg` | 16:9 | Wide professional shot of a building-inspection company environment: tools, documents and a tablet on a clean table near a window, no faces, trustworthy, [Globaler Stil] |
| `ueber-detail.jpg` | 4:3 | Inspector's hands reviewing a building report and floor plans next to a thermal camera, organised and competent, [Globaler Stil] |

## Kontakt (kontakt.html)
| Datei | Format | Prompt |
|---|---|---|
| `kontakt-hero.jpg` | 16:9 | Friendly clean office desk with a phone, notebook and plant near a bright window, welcoming corporate contact scene, no faces, [Globaler Stil] |

---

## Tipp zur Konsistenz
Damit alle Bilder wie aus einer Serie wirken: dieselbe Lichtstimmung (weiches Tageslicht), dieselbe Farbpalette (Tannengrün + warme Neutraltöne) und denselben Stil-Satz in jeden Prompt übernehmen. Optional eine Higgsfield **Soul-ID/Charakter** für den „Sachverständigen" anlegen, falls Personen mehrfach vorkommen sollen (aktuell sind keine erkennbaren Gesichter nötig).
