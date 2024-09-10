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
Ci sono 4 tipi di card e vi riporto degli esempi
Ricordatevi che il sensore prende il nome dal parametro che avete dato sull'integrazione,
quindi se avete dato 'Serie A' verrà chiamato 'seriea'


<table>
  <tr>
    <td>
      <strong>Classifica Card:</strong><br>
      <pre>type: custom:calcio-live-classifica<br>entity: sensor.calciolive_seriea_classifica</pre>
    </td>
    <td>
      <strong>Match Day Card:</strong><br>
      <pre>type: custom:calcio-live-matches<br>entity: sensor.calciolive_seriea_match_day</pre>
    </td>
    <td>
      <strong>Cannonieri Card:</strong><br>
      <pre>type: custom:calcio-live-cannonieri<br>entity: sensor.calciolive_seriea_cannonieri</pre>
    </td>
    <td>
      <strong>Competizioni Card:</strong><br>
      <pre>type: custom:calcio-live-competizioni<br>entity: sensor.calciolive_seriea_competizioni</pre>
    </td>
  </tr>
  <tr>
    <td><img src="images/card-classifica.png" alt="CLASSIFICA-CARD" width="200"></td>
    <td><img src="images/card-match.png" alt="MATCH-CARD" width="200"></td>
    <td><img src="images/card-cannonieri.png" alt="CANNONIERI-CARD" width="200"></td>
    <td><img src="images/card-competizioni.png" alt="COMPETIZIONI-CARD" width="200"></td>
  </tr>
</table>

## Informazioni
Questa è la mia prima card e sicuramente c'è tanto lavoro da fare, se vi piace, potete ricambiare seguendomi nei social:

TikTok: @silviosmartalexa