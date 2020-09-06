import FORM from '__LOCALE__/form.js';

/**
 * When adding an item, you must also add it to
 * ./lang/de/form.js and
 * ./lang/en/form.js and
 */

export const commonSpecialities = [
  FORM.GENERAL,
  FORM.ORTHOPAEDICS,
  FORM.OBSTETRICS,
  FORM.GYNAE,
  FORM.UROLOGY,
  FORM.ENT
];

// if changed also update syncCustom encodeList
// if changed also update php api3 sync get f operations()
export const specialities = [
  //'Anaesthetics',
  FORM.BREAST,
  FORM.CARDIAC,
  FORM.CHRONIC_PAIN,
  FORM.DENTAL,
  FORM.ENT,
  FORM.GENERAL,
  FORM.GYNAE,
  FORM.HEPATOBILIARY,
  //'ICU',
  FORM.MAXILLO_FACIAL,
  FORM.NEURO,
  FORM.OBSTETRICS,
  FORM.OPHTHALMICS,
  FORM.ORTHOPAEDICS,
  FORM.OTHER,
  FORM.PHEM,
  FORM.PLASTICS,
  FORM.RADIOLOGY,
  FORM.RESUSCITATION,
  FORM.SIMULATION,
  FORM.THORACIC,
  FORM.TRANSPLANT,
  FORM.TRAUMA,
  FORM.UROLOGY,
  FORM.VASCULAR,
];
export const modules = [
  ...specialities,
  FORM.ANAESTHETICS,
  FORM.DAY_CASE,
  FORM.INCIDENTS,
  FORM.PAEDIATRICS,
  FORM.SEDATION,
].sort();

export const lists = {
  session: [FORM.MORNING, FORM.AFTERNOON, FORM.EVENING, FORM.NIGHT],
  speciality: specialities,
  supervision: [FORM.IMMEDIATE, FORM.LOCAL, FORM.DISTANT, FORM.SOLO],
  supervisor: [FORM.NONE, FORM.CONSULTANT, FORM.SAS, FORM.SENIOR_TRAINEE],
  teaching: [FORM.NONE, FORM.TRAINEE, FORM.ODP, FORM.PARAMEDIC, FORM.STUDENT, FORM.NOVICE],
  priority: [FORM.ELECTIVE, FORM.EXPEDITED, FORM.URGENT, FORM.IMMEDIATE],
  destination: [FORM.DAY_CASE, FORM.WARD, FORM.POCU, FORM.CRITICAL_CARE],
  position: [
    FORM.SUPINE,
    FORM.LATERAL,
    FORM.PRONE,
    FORM.BEACH_CHAIR,
    FORM.LLOYD_DAVIES,
    FORM.LITHOTOMY,
    FORM.TRENDELENBURG,
    FORM.REVERSE_TRENDELENBURG
  ],
  sex: [FORM.FEMALE, FORM.MALE],
  asa: ['1', '2', '3', '4', '5', '6'],
  ageUnit: [FORM.MONTHS, FORM.YEARS],
  custom1: [
    FORM.ADMISSION,
    FORM.DAILY_REVIEW,
    FORM.WARD_REVIEW,
    FORM.CARDIAC_ARREST,
    FORM.TRAUMA_TEAM,
    FORM.LEAD_WARD_ROUND,
    FORM.DISCUSSION_WITH_RELATIVES,
    FORM.END_OF_LIFE_CARE,
    FORM.INTRA_HOSPITAL_TRANSFER,
    FORM.INTER_HOSPITAL_TRANSFER,
    FORM.PROCEDURE,
  ],
  custom2: [
    '',
    FORM.POST_OPERATIVE_ADMISSION,
    FORM.AIRWAY_CONCERN,
    FORM.TYPE_1_RESPIRATORY_FAILURE,
    FORM.TYPE_2_RESPIRATORY_FAILURE,
    FORM.HYPOTENSION,
    FORM.ROSC_PERI_ARREST,
    FORM.ALTERED_LEVEL_OF_CONSCIOUSSNESS,
    FORM.RENAL_REPLACEMENT_THERAPY,
    FORM.MASSIVE_HAEMORRHAGE,
    FORM.MULTI_ORGAN_FAILURE,
    FORM.OTHER,
  ],
  analgesia: [
    FORM.MORPHINE,
    FORM.DIAMORPHINE,
    FORM.OXYCODONE,
    FORM.TRAMADOL,
    FORM.MAGNESIUM,
    FORM.CLONIDINE,
    FORM.KETAMINE,
    FORM.LIGNOCAINE,
    FORM.PCA,
  ],
  anaesthetic1: [FORM.SEDATION, FORM.VOLATILE, FORM.TIVA, FORM.RSI, FORM.LMA, FORM.ETT, FORM.DLT, FORM.MASK],
  anaesthesia: [FORM.SEDATION, FORM.VOLATILE, FORM.TIVA, FORM.RSI],
  airway: [FORM.LMA, FORM.ETT, FORM.DLT, FORM.MASK],
  support: [FORM.RESPIRATORY, FORM.CARDIOVASCULAR, FORM.NEURO, FORM.RENAL, FORM.LIVER],
  regionalCentral: [
    FORM.SPINAL,
    FORM.EPIDURAL_LUMBAR,
    FORM.EPIDURAL_THORACIC,
    FORM.EPIDURAL_TOP_UP,
    FORM.BLOOD_PATCH,
    FORM.CSE,
    FORM.CAUDAL
  ],
  regionalAxial: [
    FORM.PARAVERTEBRAL,
    FORM.CERVICAL_PLEXUS,
    FORM.LUMBAR_PLEXUS,
    FORM.TAP,
    FORM.ILIOINGUIONAL,
    FORM.PENILE
  ],
  regionalPeripheral: [
    FORM.INTERSCALENE,
    FORM.SUPRACLAVICULAR,
    FORM.INFRACLAVICULAR,
    FORM.AXILLARY,
    FORM.FEMORAL,
    FORM.SCIATICA,
    FORM.FASCIA_ILIACA,
    FORM.POPLITEAL,
    FORM.ANKLE,
  ],
  moreRegional: [FORM.LANDMARK, FORM.ULTRASOUND, FORM.NERVE_STIMULATOR, FORM.CATHETER, FORM.OBSERVED],
  procedures: [
    FORM.INTUBATION,
    FORM.GAS_INDUCTION,
    FORM.NASAL_INTUBATION,
    FORM.VIDEOLARYNGOSCOPE,
    FORM.FIBREOPTIC_AWAKE,
    FORM.FIBREOPTIC_ASLEEP,
    FORM.BRONCHIAL_BLOCKER,
    FORM.JET_VENTILATION,
    FORM.ARTERIAL_LINE,
    FORM.CVC,
    FORM.VASCATH,
    FORM.BLOOD_PATCH,
    FORM.CHEST_DRAIN,
    FORM.PA_CATHETER,
    FORM.INTRAOSSEOUS_ACCESS,
  ],
  procedure1: [
    FORM.INTUBATION,
    FORM.GAS_INDUCTION,
    FORM.NASAL_INTUBATION,
    FORM.VIDEOLARYNGOSCOPE,
    FORM.FIBREOPTIC_AWAKE,
    FORM.FIBREOPTIC_ASLEEP,
    FORM.BRONCHIAL_BLOCKER,
    FORM.JET_VENTILATION,
  ],
  procedure2: [FORM.ARTERIAL_LINE, FORM.CVC, FORM.VASCATH, FORM.PA_CATHETER, FORM.INTRAOSSEOUS_ACCESS],
  procedure3: [FORM.CHEST_DRAIN, FORM.BLOOD_PATCH],
  incident: [
    '',
    FORM.DIFFICULT_AIRWAY,
    FORM.OESOPHAGEAL_INTUBATION,
    FORM.ACUTE_CORONARY_SYNDROME,
    FORM.EMBOLISM,
    FORM.BONE_CEMENT_IMPLANTATION_SYNDROME,
    FORM.ANAPHYLAXIS,
    FORM.AWARENESS,
    FORM.ASYSTOLE,
    FORM.BRONCHOSPASM,
    FORM.CICV,
    FORM.CARDIAC_ARREST,
    FORM.HIGH_BLOCK,
    FORM.LARYNGOSPASM,
    FORM.LOCAL_ANAESTHETIC_SYSTEMIC_TOXICITY,
    FORM.MALIGNANT_HYPERPYREXIA,
    FORM.MALIGNANT_HYPERTENSION,
    FORM.DRUG_ERROR,
    FORM.EQUIPMENT_PROBLEM,
    FORM.NEUROPRAXIA,
    FORM.MAJOR_HAEMORRHAGE,
    FORM.DENTAL_DAMAGE,
    FORM.WRONG_SIDED_BLOCK,
    FORM.SEIZURE,
    FORM.CEREBROVASCULAR_EVENT,
    FORM.FAILED_REGIONAL,
    FORM.SUXAMETHONIUM_APNOEA,
    FORM.DURAL_PUNCTURE,
    FORM.UNEXPECTED_CRITICAL_CARE_ADMISSION,
    FORM.ACCIDENTAL_EXTUBATION,
    FORM.ASPIRATION,
    FORM.PNEUMOTHORAX,
    FORM.SVT_VT,
    FORM.OTHER
  ],
  labels: [FORM.COVID19, FORM.SEVERE_COMORBIDITIES, FORM.HIGH_BMI],
  clinic: [FORM.CPEX, FORM.PRE_OP_CLINIC, FORM.ACUTE_PAIN, FORM.CHRONIC_PAIN],
  evt_session: [FORM.MORNING, FORM.AFTERNOON, FORM.ALL_DAY],
  evt_type: [FORM.TEACHING, FORM.COURSE, FORM.ACTIVITY],
  evt_cpdtype: [FORM.INTERNAL, FORM.EXTERNAL],
};
export const listsUganda = {
  supervisor: [FORM.NONE, FORM.ANAESTHESIOLOGIST, FORM.RESIDENT, FORM.ANAESTHETIC_OFFICER, FORM.SENIOR_STUDENT],
  teaching: [FORM.NONE, FORM.RESIDENT, FORM.ANAESTHETIC_OFFICER, FORM.ANAESTHESIA_STUDENT, FORM.MEDICAL_STUDENT],
  anaesthetic1: [FORM.MASK, FORM.SEDATION, FORM.LMA, FORM.ETT, FORM.DLT, FORM.TIVA],
  procedures: [FORM.RSI, FORM.GAS_INDUCTION, FORM.NASAL_INTUBATION, FORM.INTRAOSSEOUS_ACCESS],
  procedures_all: [
    FORM.RSI,
    FORM.GAS_INDUCTION,
    FORM.NASAL_INTUBATION,
    FORM.VIDEOLARYNGOSCOPE,
    FORM.FIBREOPTIC_AWAKE,
    FORM.FIBREOPTIC_ASLEEP,
    FORM.BRONCHIAL_BLOCKER,
    FORM.JET_VENTILATION,
    FORM.ARTERIAL_LINE,
    FORM.CVC,
    FORM.VASCATH,
    FORM.BLOOD_PATCH,
    FORM.CHEST_DRAIN,
    FORM.PA_CATHETER,
    FORM.INTRAOSSEOUS_ACCESS,
  ],
};
export const listsSmart = {
  [FORM.CARDIAC]: {
    regional: [FORM.SPINAL, FORM.EPIDURAL_THORACIC],
    procedures: [
      FORM.CARDIOPULMONARY_BYPASS,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.VASCATH,
      FORM.PA_INTRODUCER,
      FORM.PA_CATHETER,
      FORM.TOE,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.FIBREOPTIC_AWAKE,
      FORM.FIBREOPTIC_ASLEEP,
      FORM.GAS_INDUCTION,
      FORM.NASAL_INTUBATION,
      FORM.CHEST_DRAIN,
    ]
  },
  [FORM.CHRONIC_PAIN]: {
    anaesthetic1: [],
    regional: [],
    procedures: []
  },
  [FORM.DENTAL]: {
    regional: []
  },
  [FORM.ENT]: {
    regional: []
  },
  [FORM.GENERAL]: {
    regional: [FORM.SPINAL, FORM.EPIDURAL_LUMBAR, FORM.EPIDURAL_THORACIC, FORM.CAUDAL]
  },
  [FORM.GYNAE]: {
    regional: [FORM.SPINAL, FORM.EPIDURAL_LUMBAR, FORM.TAP]
  },
  [FORM.ICU]: {
    regional: [FORM.EPIDURAL_THORACIC],
    regional_all: [
      FORM.EPIDURAL_THORACIC,
      FORM.PARAVERTEBRAL,
      FORM.INTERSCALENE,
      FORM.SUPRACLAVICULAR,
      FORM.INFRACLAVICULAR,
      FORM.AXILLARY,
      FORM.FEMORAL,
      FORM.FASCIA_ILIACA,
      FORM.POPLITEAL,
    ],
    procedures: [
      FORM.INTUBATION,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.PERCUTANEOUS_TRACHEOSTOMY,
      FORM.BRONCHOSCOPY,
      FORM.CHEST_DRAIN,
      FORM.CARDIOVERSION,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.VASCATH,
      FORM.ECHOCARDIOGRAM,
      FORM.LUMBAR_PUNCTURE,
      FORM.BRAINSTEM_DEATH_TESTING,
      FORM.ASCITIC_DRAIN,
    ],
    procedures_all: [
      FORM.INTUBATION,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.PERCUTANEOUS_TRACHEOSTOMY,
      FORM.BRONCHOSCOPY,
      FORM.CHEST_DRAIN,
      FORM.LUNG_ULTRASOUND,
      FORM.CARDIOVERSION,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.VASCATH,
      FORM.INTRAOSSEOUS_ACCESS,
      FORM.CO_MONITORING,
      FORM.ECHOCARDIOGRAM,
      FORM.LUMBAR_PUNCTURE,
      FORM.BRAINSTEM_DEATH_TESTING,
      FORM.ASCITIC_DRAIN,
      FORM.SENGSTAKEN_TUBE,
      FORM.ABDOMINAL_ULTRASOUND,
    ],
  },
  [FORM.MAXILLO_FACIAL]: {
    regional: []
  },
  [FORM.NEURO]: {
    regional: [FORM.SCALP_BLOCK]
  },
  [FORM.OBSTETRICS]: {
    priority: [
      FORM.ELECTIVE,
      FORM.EXPEDITED,
      FORM.URGENT,
      FORM.IMMEDIATE,
      FORM.CATEGORY_1,
      FORM.CATEGORY_2,
      FORM.CATEGORY_3,
    ],
    priority_all: [
      FORM.ELECTIVE,
      FORM.EXPEDITED,
      FORM.URGENT,
      FORM.IMMEDIATE,
      FORM.CATEGORY_1,
      FORM.CATEGORY_2,
      FORM.CATEGORY_3,
    ],
    regional: [FORM.SPINAL, FORM.EPIDURAL_LUMBAR, FORM.EPIDURAL_TOP_UP, FORM.CSE, FORM.TAP],
    procedures: [FORM.VIDEOLARYNGOSCOPE, FORM.ARTERIAL_LINE, FORM.CVC, FORM.BLOOD_PATCH, FORM.INTRAOSSEOUS_ACCESS],
    labels: [
      FORM.COVID19,
      FORM.HIGH_BMI,
      FORM.MULTIPLE_PREGNANCY,
      FORM.PLACENTA_PRAEVIA,
      FORM.PRETERM,
      FORM.PRE_ECLAMPSIA,
    ],
    labels_all: [
      FORM.COVID19,
      FORM.HIGH_BMI,
      FORM.MULTIPLE_PREGNANCY,
      FORM.PLACENTA_PRAEVIA,
      FORM.PRETERM,
      FORM.PRE_ECLAMPSIA,
    ]
  },
  [FORM.OPHTHALMICS]: {
    regional: [FORM.RETROBULBAR, FORM.SUBTENONS]
  },
  [FORM.ORTHOPAEDICS]: {
    regional: [
      FORM.SPINAL,
      FORM.EPIDURAL_LUMBAR,
      FORM.CSE,
      FORM.INTERSCALENE,
      FORM.SUPRACLAVICULAR,
      FORM.AXILLARY,
      FORM.FEMORAL,
      FORM.SCIATICA,
      FORM.FASCIA_ILIACA,
      FORM.POPLITEAL,
      FORM.ANKLE,
    ],
    procedures: [
      FORM.GAS_INDUCTION,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.FIBREOPTIC_AWAKE,
      FORM.FIBREOPTIC_ASLEEP,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.INTRAOSSEOUS_ACCESS,
    ]
  },
  [FORM.RADIOLOGY]: {
    regional: []
  },
  [FORM.THORACIC]: {
    regional: [FORM.PARAVERTEBRAL, FORM.EPIDURAL_THORACIC]
  },
  [FORM.VASCULAR]: {
    regional: [FORM.SPINAL, FORM.EPIDURAL_LUMBAR, FORM.EPIDURAL_THORACIC, FORM.CSE]
  }
};
export const listsSmartUganda = {
  [FORM.DENTAL]: { regional: [] },
  [FORM.ENT]: { regional: [] },
  [FORM.ICU]: {
    procedures: [
      FORM.RSI,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.PERCUTANEOUS_TRACHEOSTOMY,
      FORM.BRONCHOSCOPY,
      FORM.CHEST_DRAIN,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.VASCATH,
      FORM.ECHOCARDIOGRAM,
      FORM.ASCITIC_DRAIN,
      FORM.LUMBAR_PUNCTURE,
      FORM.BRAINSTEM_DEATH_TESTING,
    ],
    procedures_all: [
      FORM.RSI,
      FORM.VIDEOLARYNGOSCOPE,
      FORM.PERCUTANEOUS_TRACHEOSTOMY,
      FORM.BRONCHOSCOPY,
      FORM.CHEST_DRAIN,
      FORM.LUNG_ULTRASOUND,
      FORM.ARTERIAL_LINE,
      FORM.CVC,
      FORM.VASCATH,
      FORM.INTRAOSSEOUS_ACCESS,
      FORM.CO_MONITORING,
      FORM.ECHOCARDIOGRAM,
      FORM.ASCITIC_DRAIN,
      FORM.SENGSTAKEN_TUBE,
      FORM.ABDOMINAL_ULTRASOUND,
      FORM.LUMBAR_PUNCTURE,
      FORM.BRAINSTEM_DEATH_TESTING,
    ],
  },
  [FORM.MAXILLO_FACIAL]: { regional: [] },
  [FORM.RADIOLOGY]: { regional: [] }
};
