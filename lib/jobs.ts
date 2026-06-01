export interface JobSection {
  heading: string;
  body: string; // \n\n = paragraph break; \n = bullet list items
}

export interface Job {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  sections: JobSection[];
}

export const jobs: Job[] = [
  {
    slug: "investment-analyst",
    title: "Investment Analyst",
    location: "Pakistan",
    type: "On-Site",
    description:
      "Support the MSS investment team in evaluating new opportunities, preparing market research, building investment notes, and tracking portfolio performance.",
    sections: [
      {
        heading: "Role Overview",
        body: "MSS Investments Holding is seeking a driven and analytically capable Investment Analyst to join its Pakistan-based team. This role supports the investment function across deal evaluation, market research, financial modelling, and portfolio monitoring, working closely with senior members of the team to develop insights and recommendations across MSS's areas of focus — including payments, financial services, technology, digital asset infrastructure, and venture growth.\n\nThis is a high-ownership role suited to a motivated individual who is comfortable operating in a fast-paced, cross-sector environment and wants meaningful exposure to investment decision-making at an early stage of their career.",
      },
      {
        heading: "Responsibilities",
        body: "Support the identification and evaluation of investment opportunities across target sectors and geographies.\nConduct in-depth market and competitive analysis to underpin investment decisions.\nBuild and maintain financial models covering valuations, return projections, and scenario analyses.\nPrepare investment memos, management presentations, and board-level reporting materials.\nTrack portfolio company performance against agreed metrics and escalate risks or variances for senior review.\nCoordinate with legal, financial, and operational advisors during due diligence processes.\nMaintain and update the firm's investment pipeline, records, and internal databases.",
      },
      {
        heading: "What We Expect",
        body: "A degree in Finance, Economics, Business, or a closely related field; progress toward a CFA designation or a relevant postgraduate qualification is an advantage.\nOne to three years of experience in investment banking, private equity, corporate finance, or a related financial services environment.\nStrong financial modelling skills and comfort operating with data-driven analysis under time pressure.\nClear written and verbal communication with the ability to synthesise complex information into concise, actionable outputs.\nHigh attention to detail and the ability to manage multiple priorities effectively without close supervision.\nA genuine interest in global markets, emerging technologies, and the broader investment landscape.",
      },
      {
        heading: "What We Offer",
        body: "Broad exposure to a diverse and evolving portfolio across multiple sectors and international markets.\nA high-ownership environment where your analytical contributions directly influence real investment decisions.\nMentorship and professional development support from experienced investment professionals within the MSS team.\nCompetitive compensation and benefits package reflective of the role and location.\nAn opportunity to grow your career within a dynamic, internationally focused holding company at an important stage of its development.",
      },
    ],
  },
  {
    slug: "portfolio-operations-associate",
    title: "Portfolio Operations Associate",
    location: "Dubai",
    type: "Hybrid",
    description:
      "Work with portfolio companies to improve reporting, operations, execution rhythm, and cross-company coordination across the MSS ecosystem.",
    sections: [
      {
        heading: "Role Overview",
        body: "MSS Investments Holding is seeking a Portfolio Operations Associate to work directly with portfolio companies and the MSS management team on operational performance, reporting frameworks, and cross-company coordination across the MSS ecosystem. Based in Dubai, this role provides a broad view across a diverse portfolio and the opportunity to contribute meaningfully to the operational health of multiple businesses spanning different sectors and markets.\n\nThe ideal candidate brings strong analytical skills, a structured approach to problem-solving, and the professional maturity to work across different company environments with clarity and credibility.",
      },
      {
        heading: "Responsibilities",
        body: "Partner with portfolio company management teams to identify and address operational improvement opportunities.\nImplement and maintain consistent performance reporting frameworks across the MSS portfolio.\nConsolidate portfolio data and prepare performance summaries for senior leadership and board-level review.\nSupport the execution of strategic and operational initiatives within and across portfolio companies.\nCoordinate cross-company working groups and communication channels on shared operational challenges.\nAssist with board documentation, governance processes, and stakeholder reporting.\nSupport MSS's operational due diligence on new investment targets as required.",
      },
      {
        heading: "What We Expect",
        body: "Two to four years of experience in management consulting, private equity operations, or a business operations function within a high-growth company.\nStrong analytical capabilities with experience building reports, performance models, and management presentations.\nAbility to manage multiple stakeholder relationships and parallel workstreams simultaneously without losing rigour.\nExcellent written and verbal communication, with a professional and structured approach to output.\nA process-oriented mindset combined with the flexibility to adapt quickly across different business environments.\nExperience with business intelligence tools, financial reporting platforms, or data visualisation software is advantageous.\nFluency in English is required; Arabic is an advantage but not a prerequisite.",
      },
      {
        heading: "What We Offer",
        body: "A cross-portfolio role offering significant breadth of exposure across sectors, geographies, and business models within the MSS ecosystem.\nDirect access to leadership at both MSS and its portfolio companies, with visibility into how decisions are made at the holding company level.\nA collaborative, execution-focused environment where initiative and ownership are recognised and rewarded.\nA hybrid working arrangement based in Dubai, with flexibility appropriate to the scope of the role.\nCompetitive salary and benefits package aligned to the Dubai market.",
      },
    ],
  },
  {
    slug: "strategy-growth-manager",
    title: "Strategy & Growth Manager",
    location: "Pakistan",
    type: "Hybrid",
    description:
      "Help shape growth initiatives across ventures, identify market opportunities, support business planning, and work closely with leadership teams.",
    sections: [
      {
        heading: "Role Overview",
        body: "MSS Investments Holding is seeking a commercially minded and analytically rigorous Strategy & Growth Manager to work closely with the MSS leadership team and its portfolio companies. Based in Pakistan, this role involves identifying market opportunities, developing and pressure-testing strategic recommendations, and supporting growth execution across multiple ventures simultaneously.\n\nThe successful candidate will combine analytical depth with operational engagement — contributing not just to the direction of businesses but to their performance. This is a high-visibility role for someone who wants meaningful work and direct access to senior decision-makers.",
      },
      {
        heading: "Responsibilities",
        body: "Identify and evaluate growth opportunities across MSS portfolio companies and prospective investment areas.\nDevelop strategic recommendations grounded in rigorous market analysis, competitive intelligence, and financial logic.\nWork directly with portfolio company leadership teams to design, plan, and track growth initiatives through to execution.\nSupport annual planning cycles, business case development, and resource prioritisation discussions at the holding company level.\nConduct market sizing, landscape mapping, and thematic analysis across sectors of strategic interest to MSS.\nPrepare high-quality materials for senior leadership, board committees, and external stakeholders.\nMonitor execution progress against strategic milestones and provide structured support to resolve blockers or course-correct where needed.",
      },
      {
        heading: "What We Expect",
        body: "Four to six years of experience in strategy consulting, corporate development, or a senior business strategy function within a complex or multi-sector environment.\nA demonstrated ability to structure and solve ambiguous business and commercial problems with minimal direction.\nStrong financial and analytical capabilities, including experience building business cases, growth models, and strategic frameworks.\nExcellent communication skills with the credibility and confidence to engage across different seniority levels.\nPrior experience working in or closely alongside fast-growing businesses across multiple sectors is highly valued.\nSelf-directed, intellectually curious, and comfortable managing competing priorities under pressure.\nBased in Pakistan with willingness to travel domestically and regionally as the role requires.",
      },
      {
        heading: "What We Offer",
        body: "A high-visibility, cross-portfolio strategy role with direct access to the MSS leadership team and meaningful input into strategic direction across the group.\nSignificant breadth of exposure across sectors, business models, and international markets.\nA dynamic, ownership-driven culture that rewards clear thinking, structured analysis, and consistent follow-through.\nCompetitive compensation reflecting the seniority and scope of the position.\nThe opportunity to grow within a globally oriented holding company at a pivotal stage of its expansion.",
      },
    ],
  },
  {
    slug: "head-of-compliance",
    title: "Head of Compliance",
    location: "Dubai",
    type: "On-Site",
    description:
      "Lead the compliance function at MSS, overseeing regulatory frameworks, monitoring obligations, and governance requirements across Dubai-based and regional entity structures.",
    sections: [
      {
        heading: "Role Overview",
        body: "MSS Investments Holding is seeking an experienced and credible Head of Compliance to establish and lead the compliance function across its Dubai-based operations. Reporting directly to senior leadership, this role is responsible for designing, implementing, and maintaining a robust compliance framework suited to MSS's regulated activities and evolving jurisdictional obligations.\n\nThe ideal candidate brings deep expertise in financial services regulation, sound professional judgement, and the leadership capability required to build a credible compliance function within a growing international holding company. This is a rare opportunity to shape a function from its foundations and establish its standards and culture.",
      },
      {
        heading: "Responsibilities",
        body: "Design, implement, and continuously enhance the compliance framework for MSS's Dubai-based and regionally structured entities.\nAct as the primary compliance contact for the MSS leadership team, board, and relevant regulatory authorities.\nMonitor and interpret applicable regulatory requirements across relevant jurisdictions, with a particular focus on UAE financial services regulation.\nProvide practical compliance guidance to business units on regulatory obligations affecting investment activity, operations, and business conduct.\nOversee compliance monitoring programmes, thematic reviews, and all regulatory reporting obligations.\nDevelop and maintain compliance policies, procedures, and internal controls.\nLead compliance risk assessments and contribute to enterprise-wide risk management processes.\nManage regulatory filings, submissions, and ongoing relationships with relevant regulatory bodies.",
      },
      {
        heading: "What We Expect",
        body: "A minimum of eight to ten years of compliance experience within regulated financial services, investment management, or a closely related environment.\nDemonstrable expertise in UAE financial services regulation; familiarity with additional international regulatory frameworks is a significant advantage.\nProven experience building or materially strengthening compliance functions within regulated financial entities.\nStrong working knowledge of governance, conflicts of interest, AML and KYC requirements, and conduct risk frameworks.\nExcellent communication skills with the ability to translate complex regulatory requirements into clear, actionable guidance for diverse business teams.\nHigh professional credibility, sound judgement, and the confidence to operate effectively at a senior level across the organisation.\nA relevant professional qualification in law, compliance, or financial regulation is strongly preferred.",
      },
      {
        heading: "What We Offer",
        body: "A rare opportunity to establish and lead the compliance function within a growing international holding company at a significant moment in its development.\nA senior reporting line with direct access to the MSS leadership team and meaningful input into governance, risk strategy, and regulatory positioning.\nCompetitive compensation package reflective of the seniority and strategic importance of this role within the organisation.\nProfessional development support, including access to regulatory training, industry forums, and relevant external networks.\nThe opportunity to build and scale the compliance team over time as MSS's regulated activities expand across additional markets and jurisdictions.",
      },
    ],
  },
];
