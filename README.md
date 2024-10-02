# Calcio Live - Home Assistant Card
## Supportami  
Se ti piace il mio lavoro e vuoi che continui nello sviluppo delle card, puoi offrirmi un caffè.

[![PayPal](https://img.shields.io/badge/Donate-PayPal-%2300457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=Z6KY9V6BBZ4BN)

Non dimenticare di seguirmi sui social:

[![TikTok](https://img.shields.io/badge/Follow_TikTok-%23000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@silviosmartalexa)

[![Instagram](https://img.shields.io/badge/Follow_Instagram-%23E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/silviosmartalexa)

[![YouTube](https://img.shields.io/badge/Subscribe_YouTube-%23FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@silviosmartalexa)

## Descrizione
L'integrazione "Calcio Live" per Home Assistant permette di ottenere informazioni in tempo reale sulle competizioni di calcio, come classifiche, cannonieri e giornate di campionato.
Queste sono le sue card, ho deciso di separare le card per dare modo di scegliere cosa usare e cosa no.

## Installazione tramite HACS
1. Aggiungi il repository `https://github.com/Bobsilvio/calcio-live-card` in HACS come DASHBOARD.
    ![INSTALLAZIONE](images/installazione-git.png)
    
2. Cerca "Calcio Live Card" in HACS e installa l'integrazione.
    ![HACS](images/hacs.png)

## Utilizzo delle card
Ci sono 4 tipi di card e vi riporto degli esempi
Ricordatevi che il sensore prende il nome dal campionato o dal team, lo fa in automatico quindi dovete solo cliccare e vedere il suo nome.

E' possibile inoltre ridurre sia il numero di righe da visualizzare e sia il numero di eventi totali, quindi se voglio visualizzare 5 eventi e 10 totali,
vedro i primi 5 sempre e i restanti 5 tramite scroll.

Inoltre per le card è possibile nascondere l'intestazione iniziale per ridurre ulteriormente la card.

<!-- Squadra Card -->
<table>
  <tr>
    <td>
      <strong>Squadra Card Prossima di Campionato:</strong><br>
      <pre>type: custom:calcio-live-team-next<br>entity: sensor.calciolive_team_110_internazionale_next</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/squadra_prossima.png" alt="SQUADRA-CARD" width="500"></td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <strong>Squadra Card Concluse Campionato:</strong><br>
      <pre>type: custom:calcio-live-team-matches<br>entity: sensor.calciolive_team_110_internazionale<br>max_events_visible: 5<br>max_events_total: 10<br>hide_header: false
</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/squadra_concluse.png" alt="SQUADRA-CARD-CONCLUSE" width="500"></td>
  </tr>
</table>

<!-- Classifica Card -->
<table>
  <tr>
    <td>
      <strong>Classifica Card:</strong><br>
      <pre>type: custom:calcio-live-classifica<br>entity: sensor.calciolive_serie_a_classifica<br>max_teams_visible: 10<br>hide_header: false</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/classifica.png" alt="CLASSIFICA-CARD" width="500"></td>
  </tr>
</table>

<!-- Match Day Card -->
<table>
  <tr>
    <td>
      <strong>Match Week:</strong><br>
      <pre>type: custom:calcio-live-today-matches<br>entity: sensor.calciolive_serie_a_match_day<br>max_events_visible: 5<br>max_events_total: 10<br>show_finished_matches: true<BR>hide_header: false</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/prossime_campionato.png" alt="MATCH-WEEK" width="500"></td>
  </tr>
</table>

## Informazioni
Questa è la mia prima card e sicuramente c'è tanto lavoro da fare, se vi piace, potete ricambiare seguendomi nei social:

TikTok: @silviosmartalexa
