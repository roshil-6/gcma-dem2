/**
 * Express Entry CRS scoring helpers aligned with IRCC published tables.
 * @see https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html
 *
 * Job offer CRS points were removed effective March 25, 2025 — not included in totals.
 */

export type EducationKey =
  | 'high-school'
  | 'one-year-diploma'
  | 'two-year-diploma'
  | 'bachelors'
  | 'two-degrees'
  | 'masters'
  | 'phd'

export type ForeignWorkKey = '' | '1-year' | '2-years' | '3-years' | '4-years' | '5-years'

export type CanadianWorkKey = '' | '1-year' | '2-years' | '3-years' | '4-years' | '5-years'

export type CanadianEducationKey = '' | '1-2-years' | '3-plus-years'

export type FrenchAdditionalScenario = 'none' | '25' | '50'

/** IELTS General Training — minimum band per skill to meet a CLB row (IRCC equivalency). */
const IELTS_GT_CLB_THRESHOLDS: Record<
  'reading' | 'writing' | 'listening' | 'speaking',
  Array<{ clb: number; min: number }>
> = {
  reading: [
    { clb: 10, min: 8.0 },
    { clb: 9, min: 7.0 },
    { clb: 8, min: 6.5 },
    { clb: 7, min: 6.0 },
    { clb: 6, min: 5.0 },
    { clb: 5, min: 4.0 },
    { clb: 4, min: 3.5 },
  ],
  writing: [
    { clb: 10, min: 7.5 },
    { clb: 9, min: 7.0 },
    { clb: 8, min: 6.5 },
    { clb: 7, min: 6.0 },
    { clb: 6, min: 5.5 },
    { clb: 5, min: 5.0 },
    { clb: 4, min: 4.0 },
  ],
  listening: [
    { clb: 10, min: 8.5 },
    { clb: 9, min: 8.0 },
    { clb: 8, min: 7.5 },
    { clb: 7, min: 6.0 },
    { clb: 6, min: 5.5 },
    { clb: 5, min: 5.0 },
    { clb: 4, min: 4.5 },
  ],
  speaking: [
    { clb: 10, min: 7.5 },
    { clb: 9, min: 7.0 },
    { clb: 8, min: 6.5 },
    { clb: 7, min: 6.0 },
    { clb: 6, min: 5.5 },
    { clb: 5, min: 5.0 },
    { clb: 4, min: 4.0 },
  ],
}

export function ieltsBandToCLB(
  skill: 'reading' | 'writing' | 'listening' | 'speaking',
  band: string
): number {
  const n = parseFloat(band)
  if (!Number.isFinite(n) || n <= 0) return 0
  for (const row of IELTS_GT_CLB_THRESHOLDS[skill]) {
    if (n >= row.min) return row.clb
  }
  return 0
}

export function agePoints(age: number, withSpouse: boolean): number {
  if (age <= 17 || age >= 45) return 0
  const w = withSpouse
    ? [
        [18, 90],
        [19, 95],
        [20, 100],
        [21, 100],
        [22, 100],
        [23, 100],
        [24, 100],
        [25, 100],
        [26, 100],
        [27, 100],
        [28, 100],
        [29, 100],
        [30, 95],
        [31, 90],
        [32, 85],
        [33, 80],
        [34, 75],
        [35, 70],
        [36, 65],
        [37, 60],
        [38, 55],
        [39, 50],
        [40, 45],
        [41, 35],
        [42, 25],
        [43, 15],
        [44, 5],
      ]
    : [
        [18, 99],
        [19, 105],
        [20, 110],
        [21, 110],
        [22, 110],
        [23, 110],
        [24, 110],
        [25, 110],
        [26, 110],
        [27, 110],
        [28, 110],
        [29, 110],
        [30, 105],
        [31, 99],
        [32, 94],
        [33, 88],
        [34, 83],
        [35, 77],
        [36, 72],
        [37, 66],
        [38, 61],
        [39, 55],
        [40, 50],
        [41, 39],
        [42, 28],
        [43, 17],
        [44, 6],
      ]
  const row = w.find(([a]) => a === age)
  return row ? row[1] : 0
}

const EDU_CORE: Record<EducationKey, { withSpouse: number; withoutSpouse: number }> = {
  'high-school': { withSpouse: 28, withoutSpouse: 30 },
  'one-year-diploma': { withSpouse: 84, withoutSpouse: 90 },
  'two-year-diploma': { withSpouse: 91, withoutSpouse: 98 },
  bachelors: { withSpouse: 112, withoutSpouse: 120 },
  'two-degrees': { withSpouse: 119, withoutSpouse: 128 },
  masters: { withSpouse: 126, withoutSpouse: 135 },
  phd: { withSpouse: 140, withoutSpouse: 150 },
}

export function educationCorePoints(ed: EducationKey | '', withSpouse: boolean): number {
  if (!ed) return 0
  const t = EDU_CORE[ed]
  return withSpouse ? t.withSpouse : t.withoutSpouse
}

/** Canadian work experience — core / human capital (not foreign work). */
const CA_WORK_CORE: Record<Exclude<CanadianWorkKey, ''>, { withSpouse: number; withoutSpouse: number }> = {
  '1-year': { withSpouse: 35, withoutSpouse: 40 },
  '2-years': { withSpouse: 46, withoutSpouse: 53 },
  '3-years': { withSpouse: 56, withoutSpouse: 64 },
  '4-years': { withSpouse: 63, withoutSpouse: 72 },
  '5-years': { withSpouse: 70, withoutSpouse: 80 },
}

export function canadianWorkCorePoints(years: CanadianWorkKey, withSpouse: boolean): number {
  if (!years) return 0
  const t = CA_WORK_CORE[years]
  return withSpouse ? t.withSpouse : t.withoutSpouse
}

export function firstOfficialLanguagePointsPerAbility(clb: number, withSpouse: boolean): number {
  if (clb < 4) return 0
  if (clb <= 5) return 6
  if (clb === 6) return withSpouse ? 8 : 9
  if (clb === 7) return withSpouse ? 16 : 17
  if (clb === 8) return withSpouse ? 22 : 23
  if (clb === 9) return withSpouse ? 29 : 31
  return withSpouse ? 32 : 34
}

/** Second official language — per ability before section cap. */
export function secondOfficialLanguagePointsPerAbility(clb: number): number {
  if (clb <= 4) return 0
  if (clb <= 6) return 1
  if (clb <= 8) return 3
  return 6
}

export function secondOfficialLanguageTotal(
  clbs: [number, number, number, number],
  withSpouse: boolean
): number {
  const sum = clbs.reduce((a, c) => a + secondOfficialLanguagePointsPerAbility(c), 0)
  const cap = withSpouse ? 22 : 24
  return Math.min(sum, cap)
}

export function spouseEducationPoints(ed: EducationKey | ''): number {
  if (!ed) return 0
  const m: Record<EducationKey, number> = {
    'high-school': 2,
    'one-year-diploma': 6,
    'two-year-diploma': 7,
    bachelors: 8,
    'two-degrees': 9,
    masters: 10,
    phd: 10,
  }
  return m[ed] ?? 0
}

/** Spouse first official language — max 5 per ability, 20 total. */
export function spouseFirstLanguagePointsPerAbility(clb: number): number {
  if (clb <= 4) return 0
  if (clb <= 6) return 1
  if (clb <= 8) return 3
  return 5
}

export function spouseCanadianWorkPoints(years: CanadianWorkKey): number {
  switch (years) {
    case '1-year':
      return 5
    case '2-years':
      return 7
    case '3-years':
      return 8
    case '4-years':
      return 9
    case '5-years':
      return 10
    default:
      return 0
  }
}

type TransferEduBand = 'secondary' | 'one_year_plus' | 'two_creds_3yr' | 'masters_row' | 'doctoral'

function educationTransferBand(ed: EducationKey | ''): TransferEduBand {
  switch (ed) {
    case 'high-school':
    case '':
      return 'secondary'
    case 'one-year-diploma':
    case 'two-year-diploma':
    case 'bachelors':
      return 'one_year_plus'
    case 'two-degrees':
      return 'two_creds_3yr'
    case 'masters':
      return 'masters_row'
    case 'phd':
      return 'doctoral'
    default:
      return 'secondary'
  }
}

function educationTransferPoints(
  band: TransferEduBand,
  strongLang: boolean,
  goodLang: boolean
): { lang: number; ca: { onePlus: number; twoPlus: number } } {
  const z = { lang: 0, ca: { onePlus: 0, twoPlus: 0 } }
  if (band === 'secondary') return z
  const table: Record<
    Exclude<TransferEduBand, 'secondary'>,
    { langWeak: number; langStrong: number; ca1: number; ca2: number }
  > = {
    one_year_plus: { langWeak: 13, langStrong: 25, ca1: 13, ca2: 25 },
    two_creds_3yr: { langWeak: 25, langStrong: 50, ca1: 25, ca2: 50 },
    masters_row: { langWeak: 25, langStrong: 50, ca1: 25, ca2: 50 },
    doctoral: { langWeak: 25, langStrong: 50, ca1: 25, ca2: 50 },
  }
  const r = table[band as Exclude<TransferEduBand, 'secondary'>]
  return {
    lang: strongLang ? r.langStrong : goodLang ? r.langWeak : 0,
    ca: { onePlus: r.ca1, twoPlus: r.ca2 },
  }
}

function foreignWorkBucket(years: ForeignWorkKey): 'none' | 'one_two' | 'three_plus' {
  if (!years) return 'none'
  if (years === '1-year' || years === '2-years') return 'one_two'
  return 'three_plus'
}

function canadianWorkYearsBucket(years: CanadianWorkKey): 'none' | 'one' | 'two_plus' {
  if (!years) return 'none'
  if (years === '1-year') return 'one'
  return 'two_plus'
}

/**
 * Skill transferability (section C): sums qualifying combinations and caps at 100.
 * Matches how published tables combine education/foreign/Canadian/language.
 */
export function skillTransferabilityPoints(params: {
  education: EducationKey | ''
  foreignWork: ForeignWorkKey
  canadianWork: CanadianWorkKey
  firstLangCLB: [number, number, number, number]
}): number {
  const [r, w, l, s] = params.firstLangCLB
  const allFirst = [r, w, l, s]
  const goodLang = allFirst.every((c) => c >= 7)
  const strongLang = allFirst.every((c) => c >= 9)

  const band = educationTransferBand(params.education)
  const { lang: eduLang, ca: eduCa } = educationTransferPoints(band, strongLang, goodLang)

  const fw = foreignWorkBucket(params.foreignWork)
  let fwLang = 0
  if (fw === 'one_two' && goodLang) fwLang = strongLang ? 25 : 13
  if (fw === 'three_plus' && goodLang) fwLang = strongLang ? 50 : 25

  const caB = canadianWorkYearsBucket(params.canadianWork)
  let eduCaPts = 0
  if (band !== 'secondary' && caB === 'one') eduCaPts = eduCa.onePlus
  if (band !== 'secondary' && caB === 'two_plus') eduCaPts = eduCa.twoPlus

  let fwCaPts = 0
  if (fw === 'one_two' && caB === 'one') fwCaPts = 13
  if (fw === 'one_two' && caB === 'two_plus') fwCaPts = 25
  if (fw === 'three_plus' && caB === 'one') fwCaPts = 25
  if (fw === 'three_plus' && caB === 'two_plus') fwCaPts = 50

  const sum = eduLang + eduCaPts + fwLang + fwCaPts
  return Math.min(100, sum)
}

export function canadianAdditionalEducationPoints(key: CanadianEducationKey): number {
  if (key === '1-2-years') return 15
  if (key === '3-plus-years') return 30
  return 0
}

/** Derive French additional points from first-language English CLBs and self-attestation. */
export function frenchAdditionalPointsFromEnglishClbs(
  nclc7AllFrench: boolean,
  englishClbs: [number, number, number, number]
): FrenchAdditionalScenario {
  if (!nclc7AllFrench) return 'none'
  const anyEntered = englishClbs.some((c) => c > 0)
  const allEntered = englishClbs.every((c) => c > 0)
  if (!anyEntered) return '25'
  if (!allEntered) return 'none'
  const allEnglish5Plus = englishClbs.every((c) => c >= 5)
  const allEnglish4OrBelow = englishClbs.every((c) => c <= 4)
  if (allEnglish5Plus) return '50'
  if (allEnglish4OrBelow) return '25'
  return 'none'
}

export function frenchAdditionalPointsValue(scenario: FrenchAdditionalScenario): number {
  if (scenario === '25') return 25
  if (scenario === '50') return 50
  return 0
}

export function siblingPoints(checked: boolean): number {
  return checked ? 15 : 0
}

export function provincialNominationPoints(checked: boolean): number {
  return checked ? 600 : 0
}
