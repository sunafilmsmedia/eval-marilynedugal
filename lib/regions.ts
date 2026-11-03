import type { Region } from "./types";

// ─────────────────────────────────────────────────────────────────────────
//  SECTEURS COUVERTS — Rive-Nord / Lanaudière (Marilyne Dugal Beaunoyer, eXp).
//
//  Utilisé par le champ de recherche de secteur (dernière question) :
//  - recherche insensible aux accents et à la casse
//  - si le secteur tapé n'y figure pas, l'utilisateur peut toujours saisir
//    du texte libre (« Utiliser "…" ») — donc la liste n'a pas besoin d'être
//    exhaustive, mais couvrir le territoire améliore l'expérience.
//  Aucune coordonnée (lat/lng) n'est requise : seul `name` est affiché.
// ─────────────────────────────────────────────────────────────────────────
export const REGIONS: Region[] = [
  // ── MRC Les Moulins (Mascouche / Terrebonne) ────────────────────────────
  { id: "mascouche", name: "Mascouche" },
  { id: "terrebonne", name: "Terrebonne" },
  { id: "la-plaine", name: "La Plaine (Terrebonne)" },
  { id: "lachenaie", name: "Lachenaie (Terrebonne)" },

  // ── MRC L'Assomption ─────────────────────────────────────────────────────
  { id: "repentigny", name: "Repentigny" },
  { id: "lassomption", name: "L'Assomption" },
  { id: "charlemagne", name: "Charlemagne" },
  { id: "saint-sulpice", name: "Saint-Sulpice" },
  { id: "lepiphanie-ville", name: "L'Épiphanie (ville)" },
  { id: "lepiphanie-paroisse", name: "L'Épiphanie (paroisse)" },

  // ── MRC Montcalm ──────────────────────────────────────────────────────────
  { id: "saint-lin-laurentides", name: "Saint-Lin–Laurentides" },
  { id: "sainte-julienne", name: "Sainte-Julienne" },
  { id: "saint-calixte", name: "Saint-Calixte" },
  { id: "saint-esprit", name: "Saint-Esprit" },
  { id: "saint-jacques", name: "Saint-Jacques" },
  { id: "saint-liguori", name: "Saint-Liguori" },
  { id: "saint-roch-de-lachigan", name: "Saint-Roch-de-l'Achigan" },
  { id: "saint-roch-ouest", name: "Saint-Roch-Ouest" },
  { id: "sainte-marie-salome", name: "Sainte-Marie-Salomé" },

  // ── MRC Joliette ──────────────────────────────────────────────────────────
  { id: "joliette", name: "Joliette" },
  { id: "notre-dame-des-prairies", name: "Notre-Dame-des-Prairies" },
  { id: "saint-charles-borromee", name: "Saint-Charles-Borromée" },
  { id: "crabtree", name: "Crabtree" },
  { id: "saint-paul", name: "Saint-Paul" },
  { id: "sainte-melanie", name: "Sainte-Mélanie" },
  { id: "saint-thomas", name: "Saint-Thomas" },
  { id: "saint-ambroise-de-kildare", name: "Saint-Ambroise-de-Kildare" },
  { id: "notre-dame-de-lourdes", name: "Notre-Dame-de-Lourdes" },
  { id: "saint-pierre", name: "Saint-Pierre" },

  // ── MRC D'Autray ──────────────────────────────────────────────────────────
  { id: "berthierville", name: "Berthierville" },
  { id: "lanoraie", name: "Lanoraie" },
  { id: "lavaltrie", name: "Lavaltrie" },
  { id: "saint-barthelemy", name: "Saint-Barthélemy" },
  { id: "saint-cuthbert", name: "Saint-Cuthbert" },
  { id: "saint-gabriel", name: "Saint-Gabriel" },
  { id: "saint-gabriel-de-brandon", name: "Saint-Gabriel-de-Brandon" },
  { id: "saint-ignace-de-loyola", name: "Saint-Ignace-de-Loyola" },
  { id: "sainte-elisabeth", name: "Sainte-Élisabeth" },
  { id: "sainte-genevieve-de-berthier", name: "Sainte-Geneviève-de-Berthier" },
  { id: "saint-norbert", name: "Saint-Norbert" },
  { id: "saint-viateur", name: "Saint-Viateur" },
  { id: "mandeville", name: "Mandeville" },

  // ── MRC Matawinie ─────────────────────────────────────────────────────────
  { id: "rawdon", name: "Rawdon" },
  { id: "saint-donat", name: "Saint-Donat" },
  { id: "chertsey", name: "Chertsey" },
  { id: "entrelacs", name: "Entrelacs" },
  { id: "notre-dame-de-la-merci", name: "Notre-Dame-de-la-Merci" },
  { id: "saint-come", name: "Saint-Côme" },
  { id: "saint-alphonse-rodriguez", name: "Saint-Alphonse-Rodriguez" },
  { id: "sainte-beatrix", name: "Sainte-Béatrix" },
  { id: "sainte-emelie-de-lenergie", name: "Sainte-Émélie-de-l'Énergie" },
  { id: "saint-felix-de-valois", name: "Saint-Félix-de-Valois" },
  { id: "saint-jean-de-matha", name: "Saint-Jean-de-Matha" },
  { id: "saint-michel-des-saints", name: "Saint-Michel-des-Saints" },
  { id: "sainte-marcelline-de-kildare", name: "Sainte-Marcelline-de-Kildare" },
  { id: "saint-zenon", name: "Saint-Zénon" },
  { id: "notre-dame-de-la-paix", name: "Notre-Dame-de-la-Paix" },
];
