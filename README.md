# Calcio Live - Home Assistant Card
## Supportami  
Se ti piace il mio lavoro e vuoi che continui nello sviluppo delle card, puoi offrirmi un caffè.

[![PayPal](https://img.shields.io/badge/Donate-PayPal-%2300457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=Z6KY9V6BBZ4BN)

Non dimenticare di seguirmi sui social:

[![TikTok](https://img.shields.io/badge/Follow_TikTok-%23000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@silviosmartalexa)

[![Instagram](https://img.shields.io/badge/Follow_Instagram-%23E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/silviosmartalexa)

[![YouTube](https://img.shields.io/badge/Subscribe_YouTube-%23FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@silviosmartalexa)


## Video Guida
Il video è basato sulla versione 2.0.1, nella versione 2.1.0 è stata introdotta la parte grafica.

[Guarda il video su YouTube](https://www.youtube.com/watch?v=K-FAJmwsGXs)

## Descrizione
L'integrazione "Calcio Live" per Home Assistant permette di ottenere informazioni in tempo reale sulle competizioni di calcio, come classifiche, cannonieri e giornate di campionato.
Queste sono le sue card, ho deciso di separare le card per dare modo di scegliere cosa usare e cosa no.

## Installazione tramite HACS
1. Aggiungi il repository `https://github.com/Bobsilvio/calcio-live-card` in HACS come DASHBOARD.
    ![INSTALLAZIONE](images/installazione-git.png)
    
2. Cerca "Calcio Live Card" in HACS e installa l'integrazione.
    ![HACS](images/hacs.png)

## Utilizzo delle card

Ci sono 4 tipi di card e vi riporto degli esempi, dico 4 perchè una card è la stessa in base al sensore che si seleziona, ovvero quella di tutte le partite del campionato o del team.
---

### Classifica
---

| **Impostazione**         | **Descrizione**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Il filtro avviene in automatico, bisogna solo selezionarlo.                    |
| **hide header**           | Nasconde la barra superiore con le intestazioni (per risparmiare spazio).      |
| **max events visible**    | Il numero di partite visibili nella card (escluse nello scroll).               |

<img src="images/classifica.png" alt="Classifica" width="400">
---

### Campionato
---

| **Impostazione**         | **Descrizione**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Il filtro avviene in automatico, bisogna solo selezionarlo.                    |
| **show finished matches** | Mostra le partite concluse quando è attivato (altrimenti solo quelle future).  |
| **hide header**           | Nasconde la barra superiore con le intestazioni (per risparmiare spazio).      |
| **max events visible**    | Il numero di partite visibili nella card (escluse nello scroll).               |
| **max events total**      | Il numero totale di partite (comprese nello scroll).                           |

Quindi se imposto visible a 5 e total a 10, vedrò solo 5 nella card e altre 5 scrollando la card.

<img src="images/campionato.png" alt="Campionato" width="400">
---

### Squadra tutte
---

| **Impostazione**         | **Descrizione**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Il filtro avviene in automatico, bisogna solo selezionarlo.                    |
| **show finished matches** | Mostra le partite concluse quando è attivato (altrimenti solo quelle future).  |
| **hide header**           | Nasconde la barra superiore con le intestazioni (per risparmiare spazio).      |
| **max events visible**    | Il numero di partite visibili nella card (escluse nello scroll).               |
| **max events total**      | Il numero totale di partite (comprese nello scroll).                           |
| **hide matches older**    | Nasconde le partite più vecchie dei giorni impostati.                          |

<img src="images/squadra-tutte.png" alt="Squadra-tutte" width="400">
---

### Squadra Singola
---

| **Impostazione**         | **Descrizione**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Il filtro avviene in automatico, bisogna solo selezionarlo.                    |

<img src="images/squadra.png" alt="squadra" width="400">
---

## Informazioni
Questa è la mia prima card e sicuramente c'è tanto lavoro da fare, se vi piace, potete ricambiare seguendomi nei social:

TikTok: @silviosmartalexa
