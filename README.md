# Espresso Trainer

**v15.6** · Progressive Web App für die Lelit Victoria PL91T

Eine mobile App zum Protokollieren, Bewerten und Optimieren von Espresso-Bezügen. Läuft vollständig im Browser, ohne Server oder Framework – alle Daten bleiben lokal im `localStorage`.

**Live:** [agmuc.github.io/Espresso-App](https://agmuc.github.io/Espresso-App/)

---

## Features

- **Bezug erfassen** – Dose, Yield, Mahlgrad, Temperatur, Pre-Infusion, Bezugszeit
- **Geführte Verkostung** – Säure, Bitterkeit, Süße, Körper, Nachklang (7-Punkt-Skala)
- **Automatische Tipps** – regelbasiert, bohnenspezifisch (inkl. Robusta-Anteil, Tabak/Holz-Aromen)
- **Adaptiver Trainer** – lernt ab 3 guten Bezügen (Score ≥ 60), zeigt Trend ↑/→/↓
- **Profil-Startwerte** – bei neuer Bohne werden Mahlgrad & Temp aus dem Bohnen-Profil vorgeschlagen
- **Selbstlern-Übersicht** – 🧠-Button zeigt besten Bezug, Trend, globale Präferenzen
- **Rangliste** – Top-3 Score pro Kaffeesorte mit CSV/Text-Export
- **KI-Hilfe** – JSON-Prompt Export für Claude/ChatGPT-Analyse
- **Backup/Restore** – JSON Export & Import aller Daten
- **Themes** – Hell (Standard), Dunkel, Hochkontrast
- **Auto-Update** – neue Version wird automatisch geladen, kein Cache-Clear nötig
- **PWA** – als App auf Homescreen speicherbar

---

## Setup (das Equipment)

| | |
|---|---|
| **Maschine** | Lelit Victoria PL91T (OPV ~9 bar) |
| **Mühle** | Eureka Mignon Libra + Finecoar Dial |
| **Korb** | IMS B702TH26.5M (26.5mm, ridgeless) |
| **Tamper** | Timemore Impact 58.4mm |
| **Waage** | KC200 (Maestri House) |
| **WDT** | Umikot Tool |
| **Dose** | 18,5g Standard · Sweet Spot 1:2,2–1:2,3 |

---

## Kaffeesorten

| Kaffee | Röstung | Blend | Mahlgrad | Temp |
|---|---|---|---|---|
| Gorilla Superbar Crema | Dark | 85% A / 15% R | 3,5–5 | 90–92°C |
| Dinzler Roma | Dark | 80% A / 20% R | 3–4,5 | 91–93°C |
| Dinzler Modena | Dark | 100% Arabica | 3,5–4,5 | 91–92°C |
| Dinzler il Gustoso | Medium | 100% Arabica | 4–5 | 92–93°C |
| Dinzler Lazise | Medium | 100% Arabica | 4–5 | 92–93°C |
| Dinzler Venezia | Medium | 100% Arabica | 4–5 | 92–93°C |
| Geisenhofer House Blend | Dark | 60% A / 40% R | 3,5–4,5 | 91–92°C |
| **Passalacqua Mehari** | Dark | 50% A / 50% R | 3–4,5 | 90–92°C |
| Kimbo Espresso Napoli | Dark | 70% A / 30% R | 3–4,5 | 90–92°C |
| Oh Harvey (Quijote) | Medium | 80% A / 20% R | 4–5,5 | 92–94°C |
| Geisenhofer First Roast | Medium | 100% Arabica | 4–5,5 | 92–94°C |

Eigene Kaffeesorten können in der App hinzugefügt werden (langer Druck zum Löschen).

---

## Technisch

- Vanilla JS, kein Framework
- `localStorage` für alle Daten (kein Server, kein Account)
- GitHub Pages Deployment via GitHub Actions (Branch: `main`)
- Service Worker deaktiviert (kein Cache-Problem)
- Auto-Update via `version.json` – wird bei jedem Deploy mit Git-SHA überschrieben
- Konfigurationsdokumentation: [`espresso-app-config.json`](espresso-app-config.json)

---

## Changelog

| Version | Datum | Änderungen |
|---|---|---|
| **v4.1** | Mai 2026 | Rangliste: Kalibrierung erst ab 3 Bezügen (⏳ Platzhalter davor); **Link zum letzten Bezug** (→ Bezug-Button pro Eintrag); Sweetspot-Tipp **selbstlernend** aus guten Bezügen; Sweetspot + Wieder-kaufen in Historie |
| **v4.0** | Mai 2026 | Verkostung am **Anfang** des Formulars; bohnenadaptiv (SCAA, 6 Schritte); Info-Modals mit visuellen Skalen; Reset beim Bohnenwechsel |
| v15.6 | Mai 2026 | Nachträgliche Notizen zu Bezügen editierbar (✏-Button); Tipp-Followup (Ja/Nein) jetzt am Kopf des Formulars statt in der Historie; Followup-Antworten beeinflussen den Lernalgorithmus direkt (×1.3/×0.7 Gewichtung) |
| v15.5 | Mai 2026 | Bugfix: `var(--fg)` → Gesamteindruck- & Verkostungs-Buttons zeigten keinen Text; Bohnen-Profil als Startwert bei neuem Eintrag; `top3Avg` NaN-Fix; `calcScore` robuster |
| v15.4 | Mai 2026 | Verbessertes Selbstlern-System: Trend ↑/→/↓, adaptiv ab 3 Bezügen, Tabak/Holz- & Robusta-Tipps, 🧠-Button mit Fortschritt & bestem Bezug |
| v15.3 | Mai 2026 | Passalacqua Mehari korrigiert: Mehari ist ein Blend von Passalacqua (50/50 A/R, Neapel seit 1948) |
| v15.2 | Mai 2026 | Passalacqua/Mehari zu einem Eintrag zusammengeführt, Hell als Standard-Theme, README aktualisiert |
| v15.1 | Mai 2026 | Kritische Bugfixes: `dotToScore()` definiert, Division-by-Zero, Kimbo in Standard-Liste |
| v15.0 | Mai 2026 | Erweiterte Bohnen-Profile (blend/taste/herkunft), Kimbo Espresso Napoli, Auto-Update ohne Cache-Clear, README |
| v14 | Mai 2026 | Service Worker entfernt, Geführte Verkostung, Selbstlernend |
