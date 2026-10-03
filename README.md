# Juridik Nära

Responsiv svensk webbmockup för testamente och äktenskapsförord. Byggd utan beroenden med HTML, CSS och JavaScript.

## Öppna

Öppna `dist/index.html` i en webbläsare eller kör `node serve.mjs` och besök http://localhost:4173.

## Funktioner

Startsida, produktval, två frågeflöden med obligatoriska svar, navigering bakåt, redigering, sammanfattning, förhandsvisning, demoköp och nedladdning av märkt textutkast. Hash-baserad navigering fungerar även som lokala filer. Svar sparas bara i flikens minne.

## Viktiga begränsningar

Detta är en demonstration. Ingen betalning, juridisk dokumentgenerering eller granskning sker. Dokumenten ska inte användas, registreras eller skrivas under. Priserna är exempel. Använd påhittade personuppgifter. En produktionsversion behöver juridiskt granskade formulär och mallar, integritetsarbete, betalning och backend.

## Kontroll

`node --check dist/app.js`

Testa båda produkterna, tomma obligatoriska svar, redigering i sammanfattningen, samtycke i demoköp och nedladdning. Prova även på mobil och med tangentbord.
