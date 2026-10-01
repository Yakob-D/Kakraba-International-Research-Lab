export type Presentation = {
  authors: string;
  date: string;
  title: string;
  type: string;
  venue: string;
};

export type YearGroup = {
  year: string;
  items: Presentation[];
};

const TRICS_2026 =
  "Tulane Research, Innovation, & Creativity Summit (TRICS) 2026, Tulane University, New Orleans, LA, USA";
const AI_SYMPOSIUM_2025 =
  "AI Research Symposium, Tulane University, New Orleans, LA, USA";
const LDH_SYMPOSIUM =
  "Louisiana Department of Health Artificial Intelligence Symposium, E. J. Ourso College of Business Executive Education, Louisiana State University, Baton Rouge, LA, USA";
const EKU = "Eastern Kentucky University, Richmond, KY, USA";

export const conferences: YearGroup[] = [
  {
    year: "2026",
    items: [
      {
        authors: "Kakraba, S.",
        date: "September 11, 2026",
        title:
          "Beyond the Algorithm: Building Trustworthy, Fair, and Useful AI in Health and Higher Education",
        type: "Invited speaker for spark talk via Zoom",
        venue:
          "Office of Artificial Intelligence Strategies, Innovation, and Success (OAISIS), Eastern Kentucky University, Richmond, KY, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "September 11, 2026",
        title:
          "Scalable Multi-Target AI/ML Systems for Public Health Surveillance, Precision Prediction, and Drug Discovery",
        type: "Invited speaker",
        venue:
          "Biostatistics and Data Science Seminar Series, Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine at Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "August 13, 2026",
        title:
          "Practical AI Applications Use in Disease Surveillance/Epidemiology & Immunization",
        type: "Invited speaker",
        venue: LDH_SYMPOSIUM,
      },
      {
        authors: "Kakraba, S.",
        date: "August 13, 2026",
        title:
          "Practical AI Tools for Louisiana Department of Health Workers: Ethical Implementation, Community Trust, and Workforce Efficiency",
        type: "Invited panelist",
        venue: LDH_SYMPOSIUM,
      },
      {
        authors:
          "Emma Darr, Edem K. Netsey, Samuel M. Naandam, Joseph Asante, Kuukua E. Abraham, Aayire C. Yadem, Gabriel Owusu, Jeffrey G. Shaffer, Sudesh K. Srivastav, Seydou Doumbia, Ellis Owusu-Dabo, Chris E. Morkle, Desmond Yemeh, Stephen Manortey, Ernest Yankson, Mamadou Sangare, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Multiscale Predictive Modeling of SARS-CoV-2 Spike RBD Mutations: Structural and Functional Insights",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Samuel D. Assefa, Farhana Chaudhry, Edmund Agyemang, Daniela Candanedo, Bailey Taylor, Kevin Siliezar, Desmond Yemeh, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Machine Learning–Driven Survival Prediction and Risk Stratification in Heart Failure",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Daniela Candanedo, Edmund Agyemang, Farhana Chaudhry, Taylor Franks, Bailey Taylor, Kevin Siliezar, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Explainable Machine Learning for Predicting Workplace Mental Health Treatment-Seeking",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors: "Adeshola Lawal, Bailey Taylor, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Explainable Machine Learning for Improved Thyroid Cancer Recurrence Risk Stratification",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Desmond Yemeh, Samuel Kakraba, Srinivas Ayyadevara, Aayire Yadem Clement, Kuukua E. Abraham, Cesar M. Compadre, Robert J. Shmookler Reis",
        date: "Spring 2026",
        title:
          "Machine Learning-Enhanced Quantitative Structure-Activity Relationship Modeling for DNA Polymerase Inhibitor Discovery: Algorithm Development and Validation",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Edmund Fosu Agyemang, Han Wenzheng, Sudesh Srivastav, Jeffrey Shaffer, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Design and Evaluation of an AI-Enhanced Multi-Model R Shiny Application for Predictive Analytics in Alzheimer’s Disease",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Daniela Candanedo, Edmund Agyemang, Farhana Chaudhry, Taylor Franks, Bailey Taylor, Kevin Siliezar, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Leveraging Machine Learning Algorithms and Explainable AI for Predicting Mental Health Disorder Treatment at the Workplace",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors: "Subashini Muthaiah, Edmund F. Agyemang, Samuel Kakraba",
        date: "Spring 2026",
        title:
          "Near-Perfect Survival Prediction in Pancreatic Cancer with Ensemble Machine Learning: Evidence from a SEER-Based African American Cohort",
        type: "Invited poster",
        venue: TRICS_2026,
      },
      {
        authors:
          "Ema Akter, Zhengxiao Yang, Hao Zhou, Sudesh Srivastav, Jeffrey G. Shaffer, Kuukua E. Abraham, Samuel M. Naandam, and Samuel Kakraba",
        date: "Spring 2026",
        title:
          "A Comparative Analysis of Data Aggregation Approaches for Parkinson’s Disease Prediction Using Multi-Recording Voice Data and an Automated Artificial Intelligence Pipeline",
        type: "Invited poster",
        venue: TRICS_2026,
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        authors: "Kakraba, S.",
        date: "Fall 2025",
        title: "Harnessing Artificial Intelligence for Faster Drug Discovery",
        type: "Keynote speaker",
        venue: "11th Biennial Scientific Conference, KNUST, Kumasi, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "Fall 2025",
        title:
          "Design and Implementation of Scalable and Equitable AI/ML Workflows for Population-Health Measurement and Disease Diagnostics to Improve Public Health Outcomes in Low-Resource Settings",
        type: "Invited speaker",
        venue:
          "AI Research Symposium: Demystifying AI in Public Health, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "Fall 2025",
        title: "Opportunities with AI/ML in Public Health",
        type: "Invited speaker",
        venue:
          "AI Research Symposium: Demystifying AI in Public Health, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Agyemang, E., Wenzheng, H., Srivastav, S., Shaffer, J., Kakraba, S.",
        date: "Fall 2025",
        title:
          "AI-Enhanced Multi-Algorithm R Shiny App for Predictive Modeling and Analytics",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors:
          "Akter, E., Yang, Z., Zhou, H., Srivastav, S., Shaffer, J.G., Abraham, K.E., Naandam, S.M., Kakraba, S.",
        date: "Fall 2025",
        title: "Optimizing Parkinson’s Disease Prediction",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Yemeh, D., Kakraba, S., et al.",
        date: "Fall 2025",
        title:
          "Discovery of DNA Polymerase Inhibitors: ML-Enhanced QSAR Modeling Approach",
        type: "Poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Sivebukola, I.O., Kakraba, S., Shmookler Reis, R.J.",
        date: "Fall 2025",
        title:
          "Accelerating Discovery of Leukemia Inhibitors with AI-Driven QSAR Modeling",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Taylor, B., Kakraba, S.",
        date: "Fall 2025",
        title:
          "Enhancing Thyroid Cancer Recurrence Risk Stratification with Explainable Machine Learning",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Owusu, G., Netsey, E.K., et al., Kakraba, S.",
        date: "Fall 2025",
        title:
          "Structural and Functional Impacts of SARS-CoV-2 Spike Protein Mutations",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors:
          "Candanedo, D., Agyemang, E., Chaudhry, F., Franks, T., Taylor, B., Siliezar, K., Kakraba, S.",
        date: "Fall 2025",
        title:
          "Leveraging ML and Explainable AI for Predicting Mental Health Disorder Treatment at the Workplace",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Taylor, F., Kakraba, S.",
        date: "Fall 2025",
        title:
          "Enhancing Early Detection of Cervical Cancer: ML Prediction of Biopsy Outcomes",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Chaudhry, F.S., Kakraba, S.",
        date: "Fall 2025",
        title:
          "Harnessing ML and Model Interpretability for Survival Prediction in Heart Failure Patients",
        type: "Invited poster",
        venue: AI_SYMPOSIUM_2025,
      },
      {
        authors: "Kakraba, S.",
        date: "Fall 2025",
        title: "Improving Student Visa Outcomes Before and After 214(b) Denials",
        type: "Invited speaker",
        venue:
          "Graduate Admissions, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "July 15, 2025",
        title: "Global Health Initiatives: University of Ghana Meets Tulane University",
        type: "Invited panelist",
        venue: "University of Ghana, Accra, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "July 14, 2025",
        title:
          "Shaping the Future of Global Health: University of Cape Coast Meets Tulane University",
        type: "Invited panelist",
        venue: "University of Cape Coast, Cape Coast, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "July 11, 2025",
        title:
          "Data Science as Powerful Transformational Tool for Enhanced Health Outcomes",
        type: "Invited speaker",
        venue: "School of Physical Sciences, University of Cape Coast, Cape Coast, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "July 10, 2025",
        title:
          "Global Health Initiatives: Kwame Nkrumah University of Science and Technology Meets Tulane University",
        type: "Invited panelist",
        venue: "Kwame Nkrumah University of Science and Technology, Kumasi, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "July 8, 2025",
        title: "Future of Global Public Health Research and Practice",
        type: "Invited panelist",
        venue: "Ensign Global University, Kpong, Ghana",
      },
      {
        authors: "Kakraba, S.",
        date: "April 10, 2025",
        title:
          "Harnessing AI to Revolutionize Diagnostics and Drug Discovery for Neurodegenerative and Other Diseases",
        type: "Invited lightning talk",
        venue: "3rd Annual TRICS, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "April 9, 2025",
        title: "Harnessing AI to Revolutionize Diagnostics and Drug Discovery",
        type: "Invited poster",
        venue: "3rd Annual TRICS, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "April 4, 2025",
        title: "Revolutionizing Public Health: Predictive AI-Enhanced Workflows",
        type: "Invited webinar",
        venue: "Ensign Global University, Kpong, Ghana",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        authors: "Kakraba, S.",
        date: "December 2, 2024",
        title: "Harnessing AI for Enhanced Health Outcomes",
        type: "Invited speaker",
        venue: "Medical Grand Rounds, Tulane School of Medicine, New Orleans, LA, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "November 13, 2024",
        title:
          "Design and Implementation of AI-Powered Pipelines for Predictive Modeling",
        type: "Invited speaker",
        venue:
          "Public Health Discovery Seminar Series, Tulane University, New Orleans, LA, USA",
      },
      {
        authors: "Abraham, E.K., Kakraba, S., et al.",
        date: "June 2024",
        title:
          "Identifying and Designing Better DNA Polymerase Inhibitors Using ML-Oriented QSAR",
        type: "Invited poster",
        venue:
          "10th Drug Discovery Colloquium (DDC)/MALTO, University of Arkansas for Medical Sciences, Little Rock, AR, USA",
      },
      {
        authors: "Zhou, H., Kakraba, S., et al.",
        date: "June 2024",
        title: "Modeling Anti-Aggregative Activity of Quinoline Analogs",
        type: "Invited poster",
        venue:
          "10th DDC/MALTO, University of Arkansas for Medical Sciences, Little Rock, AR, USA",
      },
      {
        authors: "Yang, Z., Kakraba, S., et al.",
        date: "June 2024",
        title: "ML-Driven QSAR to Model Anti-Leukemic Activity of TDZD Family",
        type: "Invited poster",
        venue:
          "10th DDC/MALTO, University of Arkansas for Medical Sciences, Little Rock, AR, USA",
      },
      {
        authors: "Kakraba, S., Yang, Z., Zhou, H.",
        date: "June 2024",
        title: "Building Machine Learning Pipelines for Predictive Modeling and Analytics",
        type: "Invited workshop",
        venue:
          "DDC/MALTO, University of Arkansas for Medical Sciences, Little Rock, AR, USA",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        authors: "Kakraba, S., et al.",
        date: "2023",
        title:
          "Computer-Aided Drug Discovery to Modeling the Inhibition of Protein Aggregation",
        type: "Invited poster",
        venue: "19th Annual MCBIOS Conference, USA",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        authors: "Kakraba, S.",
        date: "Fall 2022",
        title: "Application of Machine Learning to Drug Discovery and Design",
        type: "Guest speaker",
        venue: EKU,
      },
      {
        authors: "Naandam, S.M., Gogovi, G.K., Kakraba, S.",
        date: "July 2022",
        title:
          "Temperature Effect on the Structural Dynamics of SARS-CoV-2 Nucleocapsid Domain",
        type: "Oral presentation",
        venue: "23rd Intl BIOCOMP’22, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "2022",
        title: "Application of ML to Modeling of the Inhibition of Protein Aggregation",
        type: "Invited speaker",
        venue: "18th Annual MCBIOS, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "February 2022",
        title:
          "A Mathematical Graph-Theoretic Model of Single Point Mutations Associated with Sickle Cell Anemia Disease",
        type: "Invited colloquium speaker",
        venue: EKU,
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        authors: "Kakraba, S.",
        date: "September 2021",
        title: "Application of Machine Learning in Drug Design and Discovery",
        type: "Colloquium talk",
        venue: EKU,
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        authors: "Kakraba, S., et al.",
        date: "November 2019",
        title:
          "Using QSAR Approach for Identifying Novel Drugs for Treatment of Neurodegenerative Diseases",
        type: "Oral presentation",
        venue: "Southeast Regional IDeA Conference, Louisville, KY, USA",
      },
      {
        authors: "Kakraba, S., et al.",
        date: "November 2019",
        title:
          "Identification of Novel Drugs for Treatment of Neurodegenerative Diseases by QSAR Approach",
        type: "Oral presentation",
        venue: "DDC/MALTO, UALR, Little Rock, AR, USA",
      },
      {
        authors: "Ayyadevara, S., Kakraba, S., et al.",
        date: "June 2019",
        title:
          "A Novel Microtubule-Binding Drug Attenuates and Reverses Protein Aggregation",
        type: "Poster",
        venue: "22nd Intl C. elegans Conference, Los Angeles, CA, USA",
      },
      {
        authors: "Balasubramaniam, M., Kakraba, S., et al.",
        date: "2019",
        title: "Aggregate Interactome Based on Protein-Crosslinking Interfaces",
        type: "Poster",
        venue: "NSF meeting, Chicago, IL, USA",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        authors: "Kakraba, S., et al.",
        date: "June 2018",
        title:
          "Identifying Novel Drugs for Treatment of Neurodegenerative Diseases by QSAR Approach",
        type: "Invited poster",
        venue: "NISBRE, Washington, DC, USA",
      },
      {
        authors: "Kakraba, S., et al.",
        date: "March 2018",
        title: "Using QSAR in Drug Discovery",
        type: "Invited poster",
        venue: "14th Annual MCBIOS, Starkville, MS, USA",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        authors: "Kakraba, S., et al.",
        date: "June 2017",
        title: "Screening and Characterization of Drugs to Block Protein Aggregation",
        type: "Invited poster",
        venue: "Southeast Regional IDeA Conference, WVU, Morgantown, WV, USA",
      },
      {
        authors: "Kakraba, S., et al.",
        date: "June 2017",
        title: "Drugs to Block Protein Aggregation in Neurodegenerative Diseases",
        type: "Invited poster",
        venue: "DDC, UAMS, Little Rock, AR, USA",
      },
      {
        authors: "Bowroju, K.S., Kakraba, S., et al.",
        date: "June 2017",
        title: "Design and Synthesis of Cyanoresveratrol Analogs",
        type: "Invited poster",
        venue: "DDC/MALTO, UAMS, Little Rock, AR, USA",
      },
      {
        authors: "Bowroju, K.S., Kakraba, S., et al.",
        date: "May 2017",
        title: "P16-Synthesis and Evaluation of Novel Drug Molecules",
        type: "Invited poster",
        venue: "MALTO, University of Louisiana Monroe, Monroe, LA, USA",
      },
      {
        authors: "Kakraba, S., et al.",
        date: "March 2017",
        title:
          "Screening and Characterization of Small Molecules that Reduce Amyloid Aggregation",
        type: "Invited poster",
        venue: "14th Annual MCBIOS, Little Rock, AR, USA",
      },
    ],
  },
  {
    year: "2016",
    items: [
      {
        authors: "Kakraba, S.",
        date: "June 2016",
        title: "Drug Design and Discovery",
        type: "Invited guest speaker",
        venue: "MAA SUMMA Program, ETSU, Johnson City, TN, USA",
      },
      {
        authors: "Kakraba, S.",
        date: "June 2016",
        title:
          "Effects of Small Molecules on Protein Aggregation and Paralysis in C. elegans",
        type: "Invited speaker",
        venue: "NISBRE, Washington, DC, USA",
      },
      {
        authors: "Kakraba, S., et al.",
        date: "April 2016",
        title: "Effects of Small Molecules on Protein Aggregation",
        type: "Invited poster",
        venue: "AR-BIC Second Annual Conference, Little Rock, AR, USA",
      },
    ],
  },
  {
    year: "2015",
    items: [
      {
        authors: "Kakraba, S., Ke-Sheng Wang",
        date: "November 2015",
        title:
          "Association of Alcohol Consumption and Skin Allergy with Non-Melanoma Skin Cancer",
        type: "Invited speaker",
        venue: "2015 Southeast Regional IDeA Meeting, Biloxi, MS, USA",
      },
      {
        authors: "Kakraba, S., Knisley, J.D.",
        date: "March 2015",
        title: "A Graph-Theoretic Model of Nucleotide-Binding Domain 2 of the CFTR",
        type: "Invited speaker",
        venue: "13th Annual MCBIOS Conference, Memphis, TN, USA",
      },
    ],
  },
];
