// Traduzioni centralizzate per tutte le card Calcio Live.
// Lingue supportate: en (default), it, fr, es.
// La lingua viene rilevata da hass.locale.language o hass.language; può essere
// sovrascritta tramite config.language sulla singola card.

const TRANSLATIONS = {
  en: {
    // Card titles
    'card.bracket': 'Bracket',
    'card.lineup': 'Lineups',
    'card.timeline': 'Timeline',
    'card.news': 'News',
    'card.standings': 'Standings',

    // Bracket rounds
    'round.final': 'Final',
    'round.semifinals': 'Semifinals',
    'round.quarterfinals': 'Quarterfinals',
    'round.r16': 'Round of 16',
    'round.r32': 'Round of 32',
    'round.knockout_playoffs': 'Knockout Playoffs',
    'round.preliminary': 'Preliminary Round',
    'round.short.semifinals': 'Semis',
    'round.short.quarterfinals': 'Quarters',
    'round.short.r16': 'R16',

    // Bracket UI
    'bracket.empty.title': 'Bracket not available',
    'bracket.empty.sub': 'Knockout stage starts soon',
    'bracket.tbd': 'TBD',
    'bracket.tied_agg': 'Tied agg.',
    'bracket.agg': 'Agg.',

    // Match status
    'status.live': 'Live',
    'status.finished': 'Finished',
    'status.scheduled': 'Scheduled',
    'status.full_time': 'Full Time',
    'status.halftime': 'Halftime',
    'status.first_half': '1st Half',
    'status.second_half': '2nd Half',
    'status.kickoff': 'Kickoff',
    'status.end': 'End',

    // Match events
    'event.goal': 'Goal',
    'event.yellow_card': 'Yellow Card',
    'event.red_card': 'Red Card',
    'event.substitution': 'Substitution',
    'event.var': 'VAR',

    'event.header': 'Header',
    'event.shot': 'Shot',
    'event.penalty': 'Penalty',
    'event.free_kick': 'Free kick',

    // Form pills
    'form.W': 'W',
    'form.D': 'D',
    'form.L': 'L',

    // Team card
    'team.details': 'Details',
    'team.possession': 'Possession',
    'team.shots': 'Shots',
    'team.on_target': 'On target',
    'team.fouls': 'Fouls',
    'team.spectators': 'spectators',
    'team.top_scorer': 'Top scorer',
    'team.next_match': 'Next match',
    'team.in': 'In',
    'team.no_match': 'No match available',
    'team.unknown_entity': 'Unknown entity',

    // Time relative
    'time.today': 'Today',
    'time.yesterday': 'Yesterday',
    'time.tomorrow': 'Tomorrow',
    'time.now': 'now',
    'time.in_n_min': 'in {n} min',
    'time.in_n_h': 'in {n} h',
    'time.in_n_d': 'in {n} d',
    'time.n_min_ago': '{n} min ago',
    'time.n_h_ago': '{n} h ago',
    'time.n_d_ago': '{n} d ago',

    // Lineup
    'lineup.bench': 'Bench',
    'lineup.empty.title': 'Lineups not available',
    'lineup.empty.sub': 'Lineups are published shortly before kick-off',

    // Timeline
    'timeline.empty.title': 'No events yet',
    'timeline.empty.sub': 'Events appear during the match',
    'timeline.event': 'Event',
    'timeline.penalty': 'Penalty',

    // News
    'news.empty': 'No news available',
    'news.articles': '{n} articles',

    // Standings zones
    'zone.champions': 'Champions',
    'zone.europa': 'Europa',
    'zone.relegation': 'Relegation',
    'zone.conference': 'Conference League',

    'phase.regular_season': 'Regular season',
    'phase.group_stage': 'Group stage',
    'phase.playoffs': 'Playoffs',

    // Standings table
    'col.pos': '#',
    'col.team': 'Team',
    'col.played': 'P',
    'col.wins': 'W',
    'col.draws': 'D',
    'col.losses': 'L',
    'col.gd': '+/-',
    'col.points': 'Pts',

    // Generic
    'generic.no_match': 'No match available',
    'generic.matches_count': '{n} matches',
    'generic.unknown_entity': 'Unknown entity',
    'generic.close': 'Close',

    'generic.unknown': 'Unknown',

    // Match details popup
    'popup.match_details': 'Match details',
    'popup.lineups': 'Lineups',
    'popup.timeline': 'Timeline',
    'popup.h2h': 'Head-to-head',
    'popup.no_events': 'No events available',

    // Months (short)
    'month.1': 'Jan', 'month.2': 'Feb', 'month.3': 'Mar', 'month.4': 'Apr',
    'month.5': 'May', 'month.6': 'Jun', 'month.7': 'Jul', 'month.8': 'Aug',
    'month.9': 'Sep', 'month.10': 'Oct', 'month.11': 'Nov', 'month.12': 'Dec',
  },
  nl: {
    'card.bracket': 'Schema',
    'card.lineup': 'Opstellingen',
    'card.timeline': 'Tijdlijn',
    'card.news': 'Nieuws',
    'card.standings': 'Stand',

    'round.final': 'Finale',
    'round.semifinals': 'Halve finales',
    'round.quarterfinals': 'Kwartfinales',
    'round.r16': 'Achtste finales',
    'round.r32': 'Zestiende finales',
    'round.knockout_playoffs': 'Knock-out play-offs',
    'round.preliminary': 'Voorronde',
    'round.short.semifinals': 'Halve finales',
    'round.short.quarterfinals': 'Kwart',
    'round.short.r16': '8e finale',

    'bracket.empty.title': 'Schema niet beschikbaar',
    'bracket.empty.sub': 'De knock-outfase begint binnenkort',
    'bracket.tbd': 'N.t.b.',
    'bracket.tied_agg': 'Gelijk totaal',
    'bracket.agg': 'Totaal',

    'status.live': 'Live',
    'status.finished': 'Afgelopen',
    'status.scheduled': 'Gepland',
    'status.full_time': 'Einde wedstrijd',
    'status.halftime': 'Rust',
    'status.first_half': '1e helft',
    'status.second_half': '2e helft',
    'status.kickoff': 'Aftrap',
    'status.end': 'Einde',

    'event.goal': 'Doelpunt',
    'event.yellow_card': 'Gele kaart',
    'event.red_card': 'Rode kaart',
    'event.substitution': 'Wissel',
    'event.var': 'VAR',

    'event.header': 'Kopbal',
    'event.shot': 'Schot',
    'event.penalty': 'Penalty',
    'event.free_kick': 'Vrije trap',

    'form.W': 'W',
    'form.D': 'G',
    'form.L': 'V',

    'team.details': 'Details',
    'team.possession': 'Balbezit',
    'team.shots': 'Schoten',
    'team.on_target': 'Op doel',
    'team.fouls': 'Overtredingen',
    'team.spectators': 'toeschouwers',
    'team.top_scorer': 'Topscorer',
    'team.next_match': 'Volgende wedstrijd',
    'team.in': 'Over',
    'team.no_match': 'Geen wedstrijd beschikbaar',
    'team.unknown_entity': 'Onbekende entiteit',

    'time.today': 'Vandaag',
    'time.yesterday': 'Gisteren',
    'time.tomorrow': 'Morgen',
    'time.now': 'nu',
    'time.in_n_min': 'over {n} min',
    'time.in_n_h': 'over {n} uur',
    'time.in_n_d': 'over {n} dagen',
    'time.n_min_ago': '{n} min geleden',
    'time.n_h_ago': '{n} uur geleden',
    'time.n_d_ago': '{n} dagen geleden',

    'lineup.bench': 'Bank',
    'lineup.empty.title': 'Opstellingen niet beschikbaar',
    'lineup.empty.sub': 'Opstellingen worden kort voor de aftrap gepubliceerd',

    'timeline.empty.title': 'Nog geen gebeurtenissen',
    'timeline.empty.sub': 'Gebeurtenissen verschijnen tijdens de wedstrijd',
    'timeline.event': 'Gebeurtenis',
    'timeline.penalty': 'Penalty',

    'news.empty': 'Geen nieuws beschikbaar',
    'news.articles': '{n} artikelen',

    'phase.regular_season': 'Competitie',
    'phase.group_stage': 'Groepsfase',
    'phase.playoffs': 'Play-offs',

    'zone.champions': 'Champions League',
    'zone.europa': 'Europa League',
    'zone.conference': 'Conference League',
    'zone.relegation': 'Degradatie',

    'col.pos': '#',
    'col.team': 'Team',
    'col.played': 'G',
    'col.wins': 'W',
    'col.draws': 'G',
    'col.losses': 'V',
    'col.gd': '+/-',
    'col.points': 'Pnt',

    'generic.no_match': 'Geen wedstrijd beschikbaar',
    'generic.matches_count': '{n} wedstrijden',
    'generic.unknown_entity': 'Onbekende entiteit',
    'generic.close': 'Sluiten',

    'generic.unknown': 'Onbekend',

    'popup.match_details': 'Wedstrijddetails',
    'popup.lineups': 'Opstellingen',
    'popup.timeline': 'Tijdlijn',
    'popup.h2h': 'Onderlinge duels',
    'popup.no_events': 'Geen gebeurtenissen beschikbaar',

    'month.1': 'Jan', 'month.2': 'Feb', 'month.3': 'Mrt', 'month.4': 'Apr',
    'month.5': 'Mei', 'month.6': 'Jun', 'month.7': 'Jul', 'month.8': 'Aug',
    'month.9': 'Sep', 'month.10': 'Okt', 'month.11': 'Nov', 'month.12': 'Dec',
  },
  it: {
    'card.bracket': 'Tabellone',
    'card.lineup': 'Formazioni',
    'card.timeline': 'Cronologia',
    'card.news': 'Notizie',
    'card.standings': 'Classifica',

    'round.final': 'Finale',
    'round.semifinals': 'Semifinali',
    'round.quarterfinals': 'Quarti di finale',
    'round.r16': 'Ottavi di finale',
    'round.r32': 'Sedicesimi',
    'round.knockout_playoffs': 'Spareggi KO',
    'round.preliminary': 'Turno preliminare',
    'round.short.semifinals': 'Semi',
    'round.short.quarterfinals': 'Quarti',
    'round.short.r16': 'Ottavi',

    'bracket.empty.title': 'Tabellone non disponibile',
    'bracket.empty.sub': 'La fase a eliminazione diretta inizierà presto',
    'bracket.tbd': 'Da def.',
    'bracket.tied_agg': 'Pari aggreg.',
    'bracket.agg': 'Aggreg.',

    'status.live': 'Diretta',
    'status.finished': 'Finita',
    'status.scheduled': 'Programmata',
    'status.full_time': 'Termine',
    'status.halftime': 'Intervallo',
    'status.first_half': 'Primo Tempo',
    'status.second_half': 'Secondo Tempo',
    'status.kickoff': 'Inizio',
    'status.end': 'Fine',

    'event.goal': 'Goal',
    'event.yellow_card': 'Cartellino giallo',
    'event.red_card': 'Cartellino rosso',
    'event.substitution': 'Sostituzione',
    'event.var': 'VAR',

    'form.W': 'V',
    'form.D': 'N',
    'form.L': 'P',

    'team.details': 'Dettagli',
    'team.possession': 'Possesso',
    'team.shots': 'Tiri',
    'team.on_target': 'In porta',
    'team.fouls': 'Falli',
    'team.spectators': 'spettatori',
    'team.top_scorer': 'Capocannoniere',
    'team.next_match': 'Prossima partita',
    'team.in': 'A',
    'team.no_match': 'Nessuna partita disponibile',
    'team.unknown_entity': 'Entità sconosciuta',

    'time.today': 'Oggi',
    'time.yesterday': 'Ieri',
    'time.tomorrow': 'Domani',
    'time.now': 'ora',
    'time.in_n_min': 'tra {n} min',
    'time.in_n_h': 'tra {n} h',
    'time.in_n_d': 'tra {n} g',
    'time.n_min_ago': '{n} min fa',
    'time.n_h_ago': '{n} h fa',
    'time.n_d_ago': '{n} g fa',

    'lineup.bench': 'Panchina',
    'lineup.empty.title': 'Formazioni non disponibili',
    'lineup.empty.sub': 'Le formazioni vengono pubblicate poco prima del fischio d\'inizio',

    'timeline.empty.title': 'Nessun evento ancora',
    'timeline.empty.sub': 'Gli eventi compaiono durante la partita',
    'timeline.event': 'Evento',
    'timeline.penalty': 'Rigore',

    'news.empty': 'Nessuna notizia disponibile',
    'news.articles': '{n} articoli',

    'zone.champions': 'Champions',
    'zone.europa': 'Europa',
    'zone.relegation': 'Retrocessione',

    'col.pos': '#',
    'col.team': 'Squadra',
    'col.played': 'P',
    'col.wins': 'V',
    'col.draws': 'N',
    'col.losses': 'S',
    'col.gd': '+/-',
    'col.points': 'Pt',

    'generic.no_match': 'Nessuna partita disponibile',
    'generic.matches_count': '{n} partite',
    'generic.unknown_entity': 'Entità sconosciuta',
    'generic.close': 'Chiudi',

    'popup.match_details': 'Dettagli partita',
    'popup.lineups': 'Formazioni',
    'popup.timeline': 'Cronologia',
    'popup.h2h': 'Precedenti',
    'popup.no_events': 'Nessun evento disponibile',

    'month.1': 'Gen', 'month.2': 'Feb', 'month.3': 'Mar', 'month.4': 'Apr',
    'month.5': 'Mag', 'month.6': 'Giu', 'month.7': 'Lug', 'month.8': 'Ago',
    'month.9': 'Set', 'month.10': 'Ott', 'month.11': 'Nov', 'month.12': 'Dic',
  },
  fr: {
    'card.bracket': 'Tableau',
    'card.lineup': 'Compositions',
    'card.timeline': 'Chronologie',
    'card.news': 'Actualités',
    'card.standings': 'Classement',

    'round.final': 'Finale',
    'round.semifinals': 'Demi-finales',
    'round.quarterfinals': 'Quarts de finale',
    'round.r16': 'Huitièmes de finale',
    'round.r32': 'Seizièmes',
    'round.knockout_playoffs': 'Barrages',
    'round.preliminary': 'Tour préliminaire',
    'round.short.semifinals': 'Demis',
    'round.short.quarterfinals': 'Quarts',
    'round.short.r16': '8èmes',

    'bracket.empty.title': 'Tableau non disponible',
    'bracket.empty.sub': 'La phase à élimination directe commencera bientôt',
    'bracket.tbd': 'À déf.',
    'bracket.tied_agg': 'Score cumulé égal',
    'bracket.agg': 'Cumul',

    'status.live': 'En direct',
    'status.finished': 'Terminé',
    'status.scheduled': 'Programmé',
    'status.full_time': 'Temps régl.',
    'status.halftime': 'Mi-temps',
    'status.first_half': '1ère mi-temps',
    'status.second_half': '2ème mi-temps',
    'status.kickoff': 'Coup d\'envoi',
    'status.end': 'Fin',

    'event.goal': 'But',
    'event.yellow_card': 'Carton jaune',
    'event.red_card': 'Carton rouge',
    'event.substitution': 'Remplacement',
    'event.var': 'VAR',

    'form.W': 'V',
    'form.D': 'N',
    'form.L': 'D',

    'team.details': 'Détails',
    'team.possession': 'Possession',
    'team.shots': 'Tirs',
    'team.on_target': 'Cadrés',
    'team.fouls': 'Fautes',
    'team.spectators': 'spectateurs',
    'team.top_scorer': 'Meilleur buteur',
    'team.next_match': 'Prochain match',
    'team.in': 'À',
    'team.no_match': 'Aucun match disponible',
    'team.unknown_entity': 'Entité inconnue',

    'time.today': 'Aujourd\'hui',
    'time.yesterday': 'Hier',
    'time.tomorrow': 'Demain',
    'time.now': 'maintenant',
    'time.in_n_min': 'dans {n} min',
    'time.in_n_h': 'dans {n} h',
    'time.in_n_d': 'dans {n} j',
    'time.n_min_ago': 'il y a {n} min',
    'time.n_h_ago': 'il y a {n} h',
    'time.n_d_ago': 'il y a {n} j',

    'lineup.bench': 'Banc',
    'lineup.empty.title': 'Compositions non disponibles',
    'lineup.empty.sub': 'Les compositions sont publiées peu avant le coup d\'envoi',

    'timeline.empty.title': 'Aucun événement',
    'timeline.empty.sub': 'Les événements apparaissent pendant le match',
    'timeline.event': 'Événement',
    'timeline.penalty': 'Penalty',

    'news.empty': 'Aucune actualité disponible',
    'news.articles': '{n} articles',

    'zone.champions': 'Champions',
    'zone.europa': 'Europa',
    'zone.relegation': 'Relégation',

    'col.pos': '#',
    'col.team': 'Équipe',
    'col.played': 'J',
    'col.wins': 'G',
    'col.draws': 'N',
    'col.losses': 'P',
    'col.gd': '+/-',
    'col.points': 'Pts',

    'generic.no_match': 'Aucun match disponible',
    'generic.matches_count': '{n} matchs',
    'generic.unknown_entity': 'Entité inconnue',
    'generic.close': 'Fermer',

    'popup.match_details': 'Détails du match',
    'popup.lineups': 'Compositions',
    'popup.timeline': 'Chronologie',
    'popup.h2h': 'Confrontations',
    'popup.no_events': 'Aucun événement disponible',

    'month.1': 'Janv', 'month.2': 'Févr', 'month.3': 'Mars', 'month.4': 'Avr',
    'month.5': 'Mai', 'month.6': 'Juin', 'month.7': 'Juil', 'month.8': 'Août',
    'month.9': 'Sept', 'month.10': 'Oct', 'month.11': 'Nov', 'month.12': 'Déc',
  },
  es: {
    'card.bracket': 'Cuadro',
    'card.lineup': 'Alineaciones',
    'card.timeline': 'Cronología',
    'card.news': 'Noticias',
    'card.standings': 'Clasificación',

    'round.final': 'Final',
    'round.semifinals': 'Semifinales',
    'round.quarterfinals': 'Cuartos de final',
    'round.r16': 'Octavos de final',
    'round.r32': 'Dieciseisavos',
    'round.knockout_playoffs': 'Eliminatorias previas',
    'round.preliminary': 'Ronda preliminar',
    'round.short.semifinals': 'Semis',
    'round.short.quarterfinals': 'Cuartos',
    'round.short.r16': 'Octavos',

    'bracket.empty.title': 'Cuadro no disponible',
    'bracket.empty.sub': 'La fase eliminatoria comenzará pronto',
    'bracket.tbd': 'Por def.',
    'bracket.tied_agg': 'Empate global',
    'bracket.agg': 'Global',

    'status.live': 'En vivo',
    'status.finished': 'Finalizado',
    'status.scheduled': 'Programado',
    'status.full_time': 'Final',
    'status.halftime': 'Descanso',
    'status.first_half': 'Primer tiempo',
    'status.second_half': 'Segundo tiempo',
    'status.kickoff': 'Saque inicial',
    'status.end': 'Fin',

    'event.goal': 'Gol',
    'event.yellow_card': 'Tarjeta amarilla',
    'event.red_card': 'Tarjeta roja',
    'event.substitution': 'Sustitución',
    'event.var': 'VAR',

    'form.W': 'V',
    'form.D': 'E',
    'form.L': 'D',

    'team.details': 'Detalles',
    'team.possession': 'Posesión',
    'team.shots': 'Tiros',
    'team.on_target': 'Al arco',
    'team.fouls': 'Faltas',
    'team.spectators': 'espectadores',
    'team.top_scorer': 'Goleador',
    'team.next_match': 'Próximo partido',
    'team.in': 'En',
    'team.no_match': 'Ningún partido disponible',
    'team.unknown_entity': 'Entidad desconocida',

    'time.today': 'Hoy',
    'time.yesterday': 'Ayer',
    'time.tomorrow': 'Mañana',
    'time.now': 'ahora',
    'time.in_n_min': 'en {n} min',
    'time.in_n_h': 'en {n} h',
    'time.in_n_d': 'en {n} d',
    'time.n_min_ago': 'hace {n} min',
    'time.n_h_ago': 'hace {n} h',
    'time.n_d_ago': 'hace {n} d',

    'lineup.bench': 'Banquillo',
    'lineup.empty.title': 'Alineaciones no disponibles',
    'lineup.empty.sub': 'Las alineaciones se publican poco antes del saque inicial',

    'timeline.empty.title': 'Aún no hay eventos',
    'timeline.empty.sub': 'Los eventos aparecen durante el partido',
    'timeline.event': 'Evento',
    'timeline.penalty': 'Penalti',

    'news.empty': 'No hay noticias disponibles',
    'news.articles': '{n} artículos',

    'zone.champions': 'Champions',
    'zone.europa': 'Europa',
    'zone.relegation': 'Descenso',

    'col.pos': '#',
    'col.team': 'Equipo',
    'col.played': 'PJ',
    'col.wins': 'G',
    'col.draws': 'E',
    'col.losses': 'P',
    'col.gd': '+/-',
    'col.points': 'Pts',

    'generic.no_match': 'Ningún partido disponible',
    'generic.matches_count': '{n} partidos',
    'generic.unknown_entity': 'Entidad desconocida',
    'generic.close': 'Cerrar',

    'popup.match_details': 'Detalles del partido',
    'popup.lineups': 'Alineaciones',
    'popup.timeline': 'Cronología',
    'popup.h2h': 'Enfrentamientos',
    'popup.no_events': 'Sin eventos disponibles',

    'month.1': 'Ene', 'month.2': 'Feb', 'month.3': 'Mar', 'month.4': 'Abr',
    'month.5': 'May', 'month.6': 'Jun', 'month.7': 'Jul', 'month.8': 'Ago',
    'month.9': 'Sep', 'month.10': 'Oct', 'month.11': 'Nov', 'month.12': 'Dic',
  },
};

const SUPPORTED_LANGS = ['en', 'it', 'fr', 'es', 'nl'];

/**
 * Risolve la lingua da usare per la card.
 * Priorità: config.language → hass.locale.language → hass.language → 'en'.
 * Solo lingue supportate.
 */
export function resolveLang(hass, config) {
  const candidates = [];
  if (config && typeof config.language === 'string') candidates.push(config.language);
  if (hass && hass.locale && hass.locale.language) candidates.push(hass.locale.language);
  if (hass && hass.language) candidates.push(hass.language);
  for (const c of candidates) {
    if (!c) continue;
    const code = String(c).toLowerCase().split('-')[0];
    if (SUPPORTED_LANGS.includes(code)) return code;
  }
  return 'en';
}

/**
 * Restituisce la traduzione per la chiave nella lingua scelta, con fallback
 * a inglese e poi alla chiave stessa. Supporta interpolazione {n}, {team}, ecc.
 */
export function t(key, lang, vars) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  let str = dict[key];
  if (str === undefined) str = TRANSLATIONS.en[key];
  if (str === undefined) return key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}

export const SUPPORTED_LANGUAGES = SUPPORTED_LANGS;
