let respecConfig = {
  useLogo: true,
  useLabel: true,
  //-- title is verplicht! Neem hier de titel van het document op ----------------------
  title:
    "Catalogus registratie ondergrond Grondwaterstandonderzoek",
  //subtitle: "Versie 1.0",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",                // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                   // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "bro",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by", // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "gld",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2026-08-12",
  //custom header lines
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "1.2",
  previousVersion: "1.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  previousPublishDate: "2023-06-07",
  previousMaturity: "def",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: [
    {
      name: "Geonovum",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
  ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors: [
    {
      name: "Geonovum",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
  ],
  otherLinks: [
      {
        key: "Contact:",
        data: [
          {
            value: "BRO Servicedesk",
            href: "https://basisregistratieondergrond.nl/service-contact/",
          },
          {
            value: "support@broservicedesk.nl",
            href: "mailto:support@broservicedesk.nl",
          },
          {
            value: "088 - 8664 999",
            href: "tel:+31888664999",
          },
        ],
      },
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  edDraftURI: "https://broprogramma.github.io/GLD/",
  //github: "https://github.com/BROprogramma/BHR-GT",
  postProcess: [
    ...(typeof organisationConfig !== "undefined" &&
    Array.isArray(organisationConfig.postProcess)
      ? organisationConfig.postProcess
      : []),
    () => {
      const headDl = document.querySelector(".head dl");
      if (!headDl) return;
      const participateDt = [...headDl.querySelectorAll("dt")].find((dt) => {

//        return dt.textContent && dt.textContent.trim().startsWith("Doe mee");
      return dt.textContent && dt.textContent.trim().startsWith("Contact");
      });
      if (!participateDt || participateDt.querySelector("#logo_bro")) return;

      const logo = document.createElement("img");
      logo.id = "logo_bro";
      logo.src = "https://docs.geostandaarden.nl/bro/gen/logo_bro.png";
      logo.alt = "Basisregistratie Ondergrond";
      logo.width = 223;
      logo.height = 115;
      logo.setAttribute("align", "right");
      participateDt.prepend(logo);
    },
  ],
  // Create PDF and link to file in header (optional):
  //alternateFormats: [{label: "pdf", uri: "template.pdf",},],
  localBiblio: {
    "WaterML20": {
      "href": "https://portal.opengeospatial.org/files/?artifact_id=57222",
      "title": "OGC® WaterML 2.0: Part 1- Timeseries",
      "authors": ["Peter Taylor"],
      "date": "24 February 2014",
      "publisher": "Open Geospatial Consortium",
      "id": "10-126r4"
    },
    "GLDScope": {
      "href": "https://basisregistratieondergrond.nl/publish/library/265/20190901scopedocument_grondwaterstandonderzoek_1_1.pdf",
      "title": "Scopedocument Grondwaterstandonderzoek (GLD) V1.1",
      "authors": ["E. Simmelink", "J. von Asmuth", "M. Jeurink", "L. van den Brink", "A. Vijverberg"],
      "date": "01 september 2019",
      "publisher": "Programmabureau Basisregistratie Ondergrond, Ministerie van BZK"
    }
  },
};
