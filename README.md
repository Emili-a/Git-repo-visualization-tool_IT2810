# Prosjekt 2
Prosjekt 2 er et react-basert git repo visualiseringsverktøy utviklet etter kravene i beskrivelsen til oppgaven med samme navn. Prosjekt 2 lar deg logge inn i et git repo ved hjelp av en id og en gyldig token. Når du har logget inn blir du tatt videre til en side som gir deg oversikt over commits og issues for ditt repo. Både commits og issues vises i tabeller og de forskjellige verdiene i tabellene kan sorteres alfabetisk. I tillegg er det et pie chart koblet til commits som viser forholdet antall commits for hvert gruppemedlem. 

# Løsning av tekniske krav
Prosjekt 2 er i all hovedsak skrevet i Typescript, et språk få av gruppemedlemmene hadde kjennskap til i forkant av prosjektet. Det var her de fleste av problemene oppsto i løpet av utviklingen. React skapte også litt hodebry siden det var lite forkunnskaper her også. Alt i alt ser gruppa dog på prosjektet som en lærerik erfaring med tanke på bruk av disse verktøyene, i og med at vi fikk solid innføring i bruk av state, props og typer. 

Tabellene som brukes for å visualisere data for commits og issues er basert på material ui sin implementering av react table, men er modifisert i stor grad for å tilpasse seg våre krav. 

For å hente data fra GitLab brukte vi axios. Vi ber brukeren om id og token fra et repo på idi sitt domene og henter deretter den relevante informasjonen derifra. I tillegg har vi løsninger for errorhåndtering ved ugyldig repo.

Identifiserende informasjon om repo blir lagret i local storage ved hjelp av useLocalStorage.tsx. Dette gjør at resten av appen har tilgang til det relevante repoet og at brukere kommer tilbake til sitt repo hvis de lukker nettleseren. Man kan også logge ut fra hovedsiden for å få tilgang til et annet repo.

Responsiv web design ble brukt i utformingen av applikasjonen og forskjellige elementer tilpasser seg skjermen og teknologien siden befinner seg på. Vi har tatt i bruk viewport, media-queries, flex-box osv. for å løse dette. Vi har ikke brukt noen bilder på siden, så det er ingen skalering av bilder, men dette er ikke noe vi ville hatt noe problem med å implementere hvis det hadde vært nødvendig.

---

## Oppstart

* Fra indre `prosjekt-2`-mappe:
    `npm install`
* Start nettsiden (igjen fra indre `prosjekt-2`):
   `npm start`
* Kjør tester:
    `jest`

