import type { PageSeoContentProps } from '@/components/PageSeoContent'

export const seoContent = {
  about: {
    heading: 'About the Global Council for Migration Awareness and Social Welfare',
    headingLevel: 'h1',
    paragraphs: [
      'GCMA promotes lawful migration pathways, community protection, and practical support for people affected by immigration fraud, exploitation, and misinformation.',
      'Our work combines humanitarian assistance, education access, nursing career guidance, study abroad counseling, and public awareness campaigns that help families make informed decisions before they commit time, money, or personal safety.',
    ],
    links: [
      { href: '/services', label: 'Report immigration fraud' },
      { href: '/charity-support', label: 'Humanitarian aid programs' },
      { href: '/contact', label: 'Speak with GCMA' },
    ],
  },
  services: {
    heading: 'Immigration Fraud Reporting and Community Protection',
    headingLevel: 'h1',
    paragraphs: [
      'GCMA helps individuals report migration scams, fake recruitment agents, document fraud, and unethical immigration practices through structured complaint pathways.',
      'If you have been misled by promises of visas, jobs, admissions, or overseas placements, you can submit details securely so concerns can be reviewed and escalated through authorized community welfare channels.',
    ],
    links: [
      { href: '/migration-advice', label: 'Ethical migration advice' },
      { href: '/contact', label: 'Request support' },
    ],
  },
  studyAbroad: {
    heading: 'Study Abroad Counseling for Students and Families',
    paragraphs: [
      'GCMA study abroad guidance helps students compare universities, understand admission requirements, prepare visa documents, and plan realistic budgets for education overseas.',
      'Our counselors support applications for destinations including Australia, Germany, Denmark, Sweden, France, Malta, and Latvia, with ongoing help for scholarships, pre-departure planning, and post-arrival questions.',
    ],
    links: [
      { href: '/contact', label: 'Book a consultation' },
      { href: '/english-classes/adults', label: 'English exam preparation' },
    ],
  },
  contact: {
    heading: 'Contact GCMA for Migration and Welfare Support',
    paragraphs: [
      'Use this page to reach GCMA about study abroad counseling, nursing registration abroad, skilled migration questions, humanitarian aid, English classes, or immigration fraud concerns.',
      'Providing accurate background information helps our team route your request to the right service area and respond with relevant next steps.',
    ],
    links: [
      { href: '/study-abroad', label: 'Study abroad services' },
      { href: '/nursing-registration', label: 'Nursing registration support' },
    ],
  },
  travel: {
    heading: 'Travel Planning Support for International Journeys',
    paragraphs: [
      'GCMA travel support helps students, families, and professionals organize international trips with clearer documentation, itinerary planning, and destination awareness.',
      'Whether your travel is linked to education, employment, family visits, or relocation preparation, we focus on practical coordination and informed decision-making.',
    ],
    links: [
      { href: '/visit-visa', label: 'Visit visa guidance' },
      { href: '/travel/uae-job-search', label: 'UAE job search travel support' },
    ],
  },
  visitVisa: {
    heading: 'Visit Visa Guidance for Short-Term Travel',
    paragraphs: [
      'GCMA visit visa guidance explains common requirements for tourism, family visits, business travel, and short-term stays, including document checklists and application sequencing.',
      'We help applicants understand how visit visas differ from student, work, and permanent residency pathways so expectations remain realistic before travel is booked.',
    ],
    links: [
      { href: '/travel', label: 'Travel planning services' },
      { href: '/contact', label: 'Ask a visa question' },
    ],
  },
  tutors: {
    heading: 'Volunteer Tutors and Community English Mentorship',
    paragraphs: [
      'GCMA tutor pathways connect volunteers with learners who need affordable English communication support, confidence building, and structured practice.',
      'Volunteer teaching is part of our wider social welfare mission and complements Break the Silence programs for students seeking ethical, community-led language development.',
    ],
    links: [
      { href: '/break-the-silence/student-tutor', label: 'Break the Silence program' },
      { href: '/english-classes/adults', label: 'English classes overview' },
    ],
  },
  charitySupport: {
    heading: 'Charity Support, Medical Aid, and Education Assistance',
    paragraphs: [
      'GCMA humanitarian programs focus on medical assistance, education support, and relief for individuals facing hardship linked to migration, displacement, or exploitation.',
      'Applications are reviewed with care, and support is provided according to program scope, eligibility, and available community resources.',
    ],
    links: [
      { href: '/services', label: 'Report exploitation or fraud' },
      { href: '/contact', label: 'Apply for support' },
    ],
  },
  migrationAdvice: {
    heading: 'Ethical Migration Advice and Skilled Pathways',
    paragraphs: [
      'GCMA migration advice helps skilled workers, nurses, students, and families understand lawful routes for temporary residence, skilled migration, and long-term settlement planning.',
      'We emphasize transparent eligibility review, document readiness, and realistic timelines rather than promises that cannot be verified against current immigration law.',
    ],
    links: [
      { href: '/migration-advice/skilled-migration/australia', label: 'Skilled migration to Australia' },
      { href: '/migration-advice/skilled-migration/canada', label: 'Skilled migration to Canada' },
    ],
  },
  nursingRegistration: {
    heading: 'International Nursing Registration and Licensing Guidance',
    paragraphs: [
      'GCMA supports overseas-qualified nurses exploring registration, licensing, and employment pathways in countries such as Australia, Canada, the United Kingdom, Germany, Malta, Denmark, the UAE, the USA, and New Zealand.',
      'Our guidance covers qualification assessment, language requirements, documentation, and the practical steps needed before applying to nursing regulators or employers abroad.',
    ],
    links: [
      { href: '/nurses', label: 'Nursing careers by country' },
      { href: '/contact', label: 'Submit a nursing inquiry' },
    ],
  },
  nurses: {
    heading: 'Nursing Careers Abroad by Destination',
    paragraphs: [
      'Explore country-specific nursing opportunities, workplace expectations, registration frameworks, and career progression options for internationally educated nurses.',
      'Each destination page summarizes why nurses choose that country, common care settings, and the support GCMA can provide before you begin applications.',
    ],
    links: [
      { href: '/nurses/australia', label: 'Nursing in Australia' },
      { href: '/nurses/canada', label: 'Nursing in Canada' },
      { href: '/nurses/united-kingdom', label: 'Nursing in the United Kingdom' },
    ],
  },
  breakTheSilence: {
    heading: 'Break the Silence English Communication Program',
    paragraphs: [
      'Break the Silence is a community initiative that helps learners improve spoken English through volunteer mentorship, confidence coaching, and accessible practice opportunities.',
      'Students and tutors can apply through GCMA to join a socially responsible language program focused on communication skills rather than commercial test coaching alone.',
    ],
    links: [
      { href: '/tutors', label: 'Become a volunteer tutor' },
      { href: '/english-classes/govt-students', label: 'English support for students' },
    ],
  },
  englishClasses: {
    heading: 'English Classes for Adults and School Students',
    paragraphs: [
      'GCMA English programs support adults, government school students, and private school students with spoken English, exam preparation, and academic communication skills.',
      'Training options include IELTS, PTE, OET, and general English pathways designed for learners preparing for study abroad, nursing registration, or professional migration goals.',
    ],
    links: [
      { href: '/english-classes/adults', label: 'Adult English classes' },
      { href: '/english-classes/govt-students', label: 'Government school students' },
      { href: '/english-classes/private-students', label: 'Private school students' },
    ],
  },
} satisfies Record<string, PageSeoContentProps>
