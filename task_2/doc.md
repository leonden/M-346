# Eine Azure Funktion für die Primfaktorenzerlegung schreiben und in der Cloud zur Verfügung zu stellen.

## Inhalt

- [Gedanken](#gedanken)

- [Ziel](#ziel)

- [Vorgehen](#vorgehen)

- [Übersicht](#übersicht)

- [Quellcode](#quellcode)

- [Bilder](#bilder)

- [Zur Website](https://pffm346.azurewebsites.net/api/primefactorjs?code=ERDWSW9i_1Fr14ceZxZ5v_HWJNpPTksa-l-AePwwoRjoAzFuLQZgcA==&number=)

---

## Gedanken

Zum Anfang musste ich mir Gedanken zum Auftrag und dem weiteren Vorgang machen.

Da wir bereits eine Azure Funktion im Unterricht erstellt hatten, waren mir einige Schritte schon bekannt. Andererseits konnte ich mich an das meiste nicht mehr erinnern. Entsprechend habe ich einen Teil der dazugehörigen Dokumentation von [Azure](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node) gelesen um ein volles Verständnis der Thematik zu erlangen.

Nachdem ich mich mit einem Teil des Unterrichtstoffes nochmals auf der Modulwebsite befasst habe, habe ich die Suche nach diversen Inhalten im Internet gesucht. Durch das erneute Befassen mit den im Unterricht behandelten Themata konnte ich mein Verständnis verbessern und mir im Endeffekt eine noch bessere Vorstellung über diese erste Aufgabe machen.

---

## Ziel

Nulla occaecat et incididunt laborum sint cupidatat est. Do officia veniam in nisi magna consequat eiusmod culpa nulla aliqua ad occaecat. Ullamco in laboris mollit nulla proident nostrud et voluptate exercitation nostrud consectetur Lorem enim. Dolor Lorem irure fugiat aliqua.

---

## Vorgehen

### Ressourcengruppe

Nulla occaecat et incididunt laborum sint cupidatat est. Do officia veniam in nisi magna consequat eiusmod culpa nulla aliqua ad occaecat. Ullamco in laboris mollit nulla proident nostrud et voluptate exercitation nostrud consectetur Lorem enim. Dolor Lorem irure fugiat aliqua.

### Speicherkonto und Website anlegen

Nulla occaecat et incididunt laborum sint cupidatat est. Do officia veniam in nisi magna consequat eiusmod culpa nulla aliqua ad occaecat. Ullamco in laboris mollit nulla proident nostrud et voluptate exercitation nostrud consectetur Lorem enim. Dolor Lorem irure fugiat aliqua.

### Übersicht

Nulla occaecat et incididunt laborum sint cupidatat est. Do officia veniam in nisi magna consequat eiusmod culpa nulla aliqua ad occaecat. Ullamco in laboris mollit nulla proident nostrud et voluptate exercitation nostrud consectetur Lorem enim. Dolor Lorem irure fugiat aliqua.

---

## Quellcode

```
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const number = req.query.number || (req.body && req.body.number);
  const responseMessage = number
    ? "Prime factors of " +
      number +
      ": " +
      primeFactorization(number).join(", ")
    : "This HTTP triggered function executed successfully. Pass a number in the query string or in the request body for a personalized response.";

  context.res = {
    body: responseMessage,
  };
};

function primeFactorization(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}
```

---

## Bilder

<img src="assets/image" alt="alternative-text" width="400"/>

[Title](#link)
