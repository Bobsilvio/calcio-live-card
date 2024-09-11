# Calcio Live - Home Assistant Card

## Descrizione
L'integrazione "Calcio Live" per Home Assistant permette di ottenere informazioni in tempo reale sulle competizioni di calcio, come classifiche, cannonieri e giornate di campionato.
Queste sono le sue card, ho deciso di separare le card per dare modo di scegliere cosa usare e cosa no.

## Installazione tramite HACS
1. Aggiungi il repository `https://github.com/Bobsilvio/calcio-live-card` in HACS come DASHBOARD.
    ![INSTALLAZIONE](images/installazione-git.png)
    
2. Cerca "Calcio Live Card" in HACS e installa l'integrazione.
    ![HACS](images/hacs.png)

## Utilizzo delle card
Ci sono 5 tipi di card e vi riporto degli esempi
Ricordatevi che il sensore prende il nome dal parametro che avete dato sull'integrazione,
quindi se avete dato 'Serie A' verrà chiamato 'seriea', e vale la stessa cosa per la squadra del cuore

E' possibile inoltre ridurre sia il numero di righe da visualizzare e sia il numero di eventi totali, quindi se voglio visualizzare 5 eventi e 10 totali,
vedro i primi 5 sempre e i restanti 5 tramite scroll.

Inoltre per le card 'classifica', 'cannonieri', e 'matches' è possibile nascondere l'intestazione iniziale per ridurre ulteriormente la card.
Per la card 'squadra' è possibile nascondere gli eventi finiti e vedere solo i futuri.

<table>
  <tr>
    <td>
      <strong>Squadra Card:</strong><br>
      <pre>type: custom:calcio-live-team-matches<br>entity: sensor.calciolive_seriea_classifica<br>max_events_visible: 5<br>max_events_total: 10<br>show_finished_matches: true</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-squadra.gif" alt="SQUADRA-CARD" width="700"></td>
  </tr>
  <tr>
    <td>
      <strong>Classifica Card:</strong><br>
      <pre>type: custom:calcio-live-classifica<br>entity: sensor.calciolive_seriea_classifica<br>max_teams_visible: 5<br>hide_header: false</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-classifica.gif" alt="CLASSIFICA-CARD" width="700"></td>
  </tr>
  <tr>
    <td>
      <strong>Match Day Card:</strong><br>
      <pre>type: custom:calcio-live-matches<br>entity: sensor.calciolive_seriea_match_day<br>max_events_visible: 5<br>max_events_total: 10<br>hide_header: false</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-match.gif" alt="MATCH-CARD" width="700"></td>
  </tr>
  <tr>
    <td>
      <strong>Cannonieri Card:</strong><br>
      <pre>type: custom:calcio-live-cannonieri<br>entity: sensor.calciolive_seriea_cannonieri<br>max_events_visible: 5<br>max_events_total: 10<br>hide_header: false</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-cannonieri.png" alt="CANNONIERI-CARD" width="700"></td>
  </tr>
  <tr>
    <td>
      <strong>Competizioni Card:</strong><br>
      <pre>type: custom:calcio-live-competizioni<br>entity: sensor.calciolive_seriea_competizioni<br>max_competitions_visible: 5<br>max_competitions_total: 13</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-competizioni.gif" alt="COMPETIZIONI-CARD" width="700"></td>
  </tr>
</table>


## Informazioni
Questa è la mia prima card e sicuramente c'è tanto lavoro da fare, se vi piace, potete ricambiare seguendomi nei social:

TikTok: @silviosmartalexa
