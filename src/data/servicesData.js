function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const tti = (prompt) => {
  const query = prompt.toLowerCase();
  if (/football|team building|huddle/.test(query)) return dsc.team;
  if (/executive|leadership|boardroom/.test(query)) return dsc.keynote;
  if (/customer|service/.test(query)) return dsc.training;
  if (/workforce|analytics/.test(query)) return dsc.team;
  if (/engagement|survey|belonging/.test(query)) return dsc.training;
  if (/matrix|performance|productivity/.test(query)) return dsc.workshop;
  if (/competency|assessment/.test(query)) return dsc.mentoring;
  return dsc.workshop;
};

const dsc = {
  keynote: '/assets/DSC00975.jpg',
  training: '/assets/DSC00997.jpg',
  workshop: '/assets/DSC01006.jpg',
  mentoring: '/assets/DSC01041.jpg',
  cohort: '/assets/DSC01091.jpg',
  team: '/assets/DSC01211.jpg',
};

export const categoryList = [
  'All',
  'Leadership & Executive Development',
  'Workforce Intelligence & Diagnostics',
  'Performance & Organizational Systems',
  'Capability Development',
];

const rawPrograms = [
  { category: 'Capability Development', title: 'Business As Game', subtitle: 'Experiential Team Management Training', description: 'Uses the dynamics of football to reveal how high-performing organizations actually win — through alignment, role clarity, communication, and disciplined execution.', impact: ['Stronger teamwork and collaboration', 'Clearer role ownership and accountability', 'Better strategy execution across teams', 'A unified performance mindset'], img: tti('corporate team building with football soccer analogy, diverse business team in a huddle, professional corporate photography, warm lighting, modern office') },
  { category: 'Leadership & Executive Development', title: 'P.A.S.T Leadership', subtitle: 'Psychology, Art, Science & Technology of Leadership', description: 'An integrated leadership framework recognizing that effective leadership requires the balanced integration of four critical intelligences.', impact: ['Better decision-making and judgment', 'Stronger people leadership capability', 'Balanced and credible leadership style', 'Greater influence and execution effectiveness'], img: tti('modern executive leadership collage with four elements: brain psychology, paintbrush art, beaker science, laptop technology, arranged around a confident executive, professional blue navy tones') },
  { category: 'Capability Development', title: 'Relational Intelligence for Customer Service', subtitle: 'Mastering the Human Side of Service', description: 'Equips service professionals with the ability to accurately read customer expectations and respond with the right relational approach.', impact: ['Reduced customer complaints', 'Higher customer trust and loyalty', 'Improved service professionalism', 'Lower frontline staff burnout'], img: tti('professional customer service interaction, diverse service employee helping a smiling customer, modern retail or office environment, warm professional photography') },
  { category: 'Capability Development', title: 'Bringing Your A-Game to Work', subtitle: 'Building Ownership, Responsibility & Professional Pride', description: 'A mindset re-engineering seminar designed to move employees from passive job-holding to intentional contribution.', impact: ['Stronger ownership culture', 'Higher engagement and work ethic', 'Reduced blame culture', 'Employees who take responsibility for results'], img: dsc.cohort },
  { category: 'Leadership & Executive Development', title: 'Understanding Self & Managing Others', subtitle: 'Psychology of Personality & Emotional Intelligence', description: 'Equips managers and professionals with practical psychological insight into how personality, emotions, and behaviour influence performance.', impact: ['Stronger emotional intelligence', 'Better communication across personalities', 'Reduced interpersonal conflict', 'More effective people management'], img: dsc.mentoring },
  { category: 'Workforce Intelligence & Diagnostics', title: 'The Workforce Republic', subtitle: 'Employee Experience & Culture Governance Framework', description: 'A consulting framework that helps organizations redesign employee experience and culture as systems of governance rather than slogans.', impact: ['Stronger workforce trust and engagement', 'Improved retention', 'Clearer organizational culture', 'Healthier leadership-employee relationships'], img: dsc.team },
  { category: 'Workforce Intelligence & Diagnostics', title: 'AURA Framework', subtitle: 'Workforce Intelligence & Capacity Alignment', description: 'A workforce intelligence framework that helps organizations understand how people truly show up at work, beyond job descriptions.', impact: ['Better role alignment and talent deployment', 'Early detection of disengagement risks', 'Smarter HR and leadership decisions', 'Stronger workforce performance activation'], img: tti('workforce analytics dashboard, modern HR intelligence visualization with data charts and people icons, clean corporate style, blue navy palette') },
  { category: 'Workforce Intelligence & Diagnostics', title: 'MoWE-BIS Survey', subtitle: 'Belonging & Engagement Intelligence System', description: 'A workplace intelligence survey providing leaders with deep insight into how employees truly experience their organization.', impact: ['Clear visibility into organizational health', 'Data-driven leadership development', 'Accurate identification of culture gaps', 'Better informed management decisions'], img: tti('employee engagement survey visualization, modern dashboard with belonging trust and engagement metrics, clean corporate analytics design') },
  { category: 'Performance & Organizational Systems', title: '2E2P Value Matrix', subtitle: 'Performance, Productivity & Value Contribution Framework', description: 'Evaluates employee and team performance across four critical dimensions: Effectiveness, Efficiency, Productivity, and Profit.', impact: ['Objective performance evaluation', 'Better productivity insights', 'Improved talent deployment', 'Stronger value-driven performance culture'], img: tti('performance matrix quadrant with 2E2P dimensions: Effectiveness Efficiency Productivity Profit, modern corporate infographic style, professional blue design') },
  { category: 'Performance & Organizational Systems', title: 'Enterprise Guidance & Management', subtitle: 'Strategy Alignment & Execution System', description: 'Helps organizations translate strategy into disciplined execution by aligning leadership direction, managerial accountability, and operational execution.', impact: ['Clear strategy-to-execution alignment', 'Stronger accountability systems', 'Faster decision-making', 'Improved organizational focus and results'], img: dsc.keynote },
  { category: 'Workforce Intelligence & Diagnostics', title: 'ECAP', subtitle: 'Employee Competency Assessment Platform', description: 'A workforce capability assessment system that measures employees based on real performance readiness, not just qualifications or tenure.', impact: ['Clear workforce capability visibility', 'Accurate identification of skill gaps', 'More targeted training investments', 'Stronger succession and promotion decisions'], img: tti('competency assessment platform interface, employee skills dashboard with proficiency levels, modern HR tech design') },
  { category: 'Capability Development', title: 'CBAM Mini-MBA', subtitle: 'Certified Business Admin Manager', description: 'A practical Mini-MBA style certification designed to prepare emerging managers for real leadership responsibility.', impact: ['Stronger managerial readiness', 'Improved supervisory effectiveness', 'Better operational understanding', 'Reliable pipeline of future leaders'], img: dsc.training },
  { category: 'Leadership & Executive Development', title: 'R-CAP Executive Certification', subtitle: 'Reputational Capital Architecture Program', description: 'A structured executive development experience designed to help senior leaders deliberately build, protect, and compound reputational capital.', impact: ['Greater executive stability during uncertainty', 'Higher-quality decision-making under pressure', 'Stronger leadership credibility across stakeholders', 'More durable succession pipelines'], img: tti('senior executive boardroom discussion, professional leaders in modern corporate boardroom, trust credibility and reputation, navy blue atmosphere') },
];

export const allPrograms = rawPrograms.map((p) => ({ ...p, id: slugify(p.title) }));
