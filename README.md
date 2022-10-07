# Prosjekt 2
Prosjekt 2 er et react-basert git repo visualiseringsverktøy utviklet etter kravene i beskrivelsen til oppgaven med samme navn. Prosjekt 2 lar deg logge inn i et git repo ved hjelp av en id og en gyldig token. Når du har logget inn blir du tatt videre til en side som gir deg oversikt over commits og issues for ditt repo. Både commits og issues vises i tabeller og de forskjellige verdiene i tabellene kan sorteres alfabetisk. I tillegg er det et pie chart koblet til commits som viser forholdet antall commits for hvert gruppemedlem. 

# Løsning av tenkiske krav
Prosjekt 2 er i all hovedsak skrevet i Typescript, et språk få av gruppemedlemmene hadde kjennskap til i forkant av prosjektet. Det var her de fleste av problemene oppsto i løpet av utviklingen. React skapte også litt hodebry siden det var lite forkunnskaper her også. Alt i alt ser gruppa dog på prosjektet som en lærerik erfaring med tanke på bruk av disse verktøyene, i og med at vi fikk solid innføring i bruk av state, props og typer. 

Tabellene som brukes for å visualisere data for commits og issues er basert på material ui sin implementering av react table, men er modifisert i stor grad for å tilpasse seg våre krav. 

For å hente data fra GitLab brukte vi axios. Vi ber brukeren om id og token fra et repo på idi sitt domene og henter deretter den relevante informasjonen derifra. I tillegg har vi løsninger for errorhåndtering ved ugyldig repo.

Identifiserende informasjon om repo blir lagret i local storage ved hjelp av useLocalStorage.tsx. Dette gjør at resten av appen har tilgang til det relevante repoet og at brukere kommer tilbake til sitt repo hvis de lukker nettleseren. Man kan også logge ut fra hovedsiden for å få tilgang til et annet repo.

Responsiv web design ble brukt i utformingen av applikasjonen og forskjellige elementer tilpasser seg skjermen og teknologien siden befinner seg på. Vi har tatt i bruk viewport, media-queries, flex-box osv. for å løse dette. Vi har ikke brukt noen bilder på siden, så det er ingen skalering av bilder, men dette er ikke noe vi ville hatt noe problem med å implementere hvis det hadde vært nødvendig.

Løsaningen skal ha responsiv web design hvor layout, skalering og interaksjonsmuligheter tilpasses type enhet og størrelse på skjerm. Det skal se bra ut og interaksjonen skal fungere både på mobil, pad og pc med skjerm av forskjellig størrelse.

Prosjektet er basert på Node og npm 



Prosjektet baseres på Node og bruk av Node Package Manager (NPM). Bruk versjon 16.X av node.js og version 8.X av npm.

Bruk create-react-app xxx --template typescript for å sette opp prosjektet

Bruk versjoin 18 av React

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
GIT_VIEWER

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
npm install
npm install axios


Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
npm start

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
