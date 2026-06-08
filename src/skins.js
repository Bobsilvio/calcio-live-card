import { css } from "lit-element";

// Skin condivise per tutte le card Calcio Live.
//
// Obiettivo: un flag `skin` per card (valori: 'dark' | 'light', default 'dark')
// indipendente dal tema di Home Assistant. Le card NON devono più dipendere da
// --primary-text-color / --secondary-text-color / --card-background-color del
// tema HA per testo e sfondo, altrimenti una skin chiara su tema HA scuro (o
// viceversa) risulterebbe illeggibile.
//
// Strategia per ridurre al minimo le modifiche nei corpi delle card:
// - si mantengono i NOMI delle variabili già usate (--cl-card-2, --cl-divider,
//   --cl-glass-border, gli accent --cl-accent/--cl-live/...).
// - le DEFINIZIONI vengono centralizzate qui con varianti dark/light.
// - si introducono --cl-bg / --cl-surface / --cl-text / --cl-text-2 che le card
//   usano per sfondo e testo al posto delle variabili del tema HA.
//
// Gli accent restano colorati identici nelle due skin (richiesta esplicita):
// cambia solo la base (sfondo + superfici + testo + divisori).

export const skinStyles = css`
  :host {
    /* Accent palette — identica in dark e light */
    --cl-accent: #6366f1;
    --cl-accent-2: #ec4899;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-green: #10b981;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.4);
    --cl-gold-text: #fde047;
    /* Zone classifica */
    --cl-cl: #6366f1;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
  }

  /* ---------- DARK (default) ---------- */
  :host,
  :host([data-skin="dark"]) {
    --cl-bg: #14182a;
    --cl-surface: rgba(255,255,255,0.05);
    --cl-surface-2: rgba(255,255,255,0.08);
    --cl-card-2: rgba(255,255,255,0.05);
    --cl-divider: rgba(255,255,255,0.08);
    --cl-glass-border: rgba(255,255,255,0.08);
    --cl-text: #f4f6fb;
    --cl-text-2: #aab2c5;
    --cl-shadow: rgba(0,0,0,0.30);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(255,255,255,0.10);
    --cl-chip-border: rgba(255,255,255,0.12);
    --cl-toast-bg: #0b0f1a;
    --cl-num-bg: #0b0f1a;
  }

  /* ---------- LIGHT ---------- */
  :host([data-skin="light"]) {
    --cl-bg: #ffffff;
    --cl-surface: rgba(15,23,42,0.04);
    --cl-surface-2: rgba(15,23,42,0.07);
    --cl-card-2: rgba(15,23,42,0.04);
    --cl-divider: rgba(15,23,42,0.10);
    --cl-glass-border: rgba(15,23,42,0.10);
    --cl-text: #14182a;
    --cl-text-2: #5b6577;
    --cl-shadow: rgba(15,23,42,0.12);
    --cl-overlay-strong: rgba(0,0,0,0.45);
    --cl-overlay-soft: rgba(0,0,0,0.18);
    --cl-chip-bg: rgba(15,23,42,0.06);
    --cl-chip-border: rgba(15,23,42,0.12);
    --cl-toast-bg: #1a1f33;
    --cl-num-bg: #1a1f33;
  }
`;

/**
 * Legge il flag skin dalla config (default 'dark') e lo riflette come
 * attributo `data-skin` sull'host, così le regole CSS sopra si attivano.
 * Da chiamare in setConfig di ogni card.
 */
export function resolveSkin(config) {
  const s = config && typeof config.skin === 'string' ? config.skin.toLowerCase() : 'dark';
  return s === 'light' ? 'light' : 'dark';
}

export function applySkin(el, config) {
  const skin = resolveSkin(config);
  if (el && el.setAttribute) el.setAttribute('data-skin', skin);
  return skin;
}
