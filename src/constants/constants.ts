export const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import consultant from '../assets/images/consultation.jpg';
import design from '../assets/images/design.jpg';


export const PACKAGES = [
    {
        id: 'consultation',
        name: 'Consultation Package',
        price: 1500,
        suitable: 'Clients who need expert direction without full design development.',
        details: "Professional advisory session providing conceptual design direction and functional clarity without issuance of formal drawings.",

        includes: [
            '60–90 minute consultation (online or on-site as agreed)',
            'Functional space planning guidance (verbal)',
            'Storage optimization suggestions',
            'Design direction advice',
            'Material category guidance',
            'Budget advisory (indicative range only)'
        ],
        notIncludes: [
            '2D drawings',
            '3D renders',
            'Detailed layouts',
            'Technical drawings',
            'BOQ',
            'Execution supervision'
        ],

        termsAndConditions: [
            'Verbal suggestions are conceptual and non-binding.',
            'No structural feasibility confirmation provided.',
            'Fee is non-refundable.',
            'Liability limited to consultation fee paid.'
        ],


        nature: 'Advisory service only. No design documentation issued.',
        img: img1,
        icon: 'fa-comments-o'
    },

    {
        id: 'measurement',
        name: 'Measurement & Consultation Package',
        price: 3500,
        suitable: 'Clients who want measurement-backed planning input.',
        details: 'Accurate site measurement combined with professional advisory input for spatial validation and planning clarity.',

        termsAndConditions: [
            'Measurements limited to accessible and visible areas only.',
            'Concealed wiring, plumbing or structural defects are not covered.',
            'Layout discussions remain conceptual unless drawings are separately contracted.',
            'Re-visits due to restricted access may attract additional charges.',
            'No execution supervision included.',
            'Liability limited to package fee paid.'
        ],


        includes: [
            'Laser + manual site measurement',
            'Dimension recording',
            '60-minute post-measurement consultation',
            'Feasibility discussion',
            'Preliminary layout direction (verbal)'
        ],
        notIncludes: [
            '3D views',
            'Detailed technical drawings',
            'Material specification sheets',
            'Cut lists'
        ],
        nature: 'Provides accurate spatial clarity but not full design development.',
        img: img2,
        icon: 'fa-ruler-combined'
    },

    {
        id: 'feasibility',
        name: 'Site Visit & Feasibility Package',
        price: 3000,
        suitable: 'Clients planning civil changes or structural adjustments.',
        details: 'Technical inspection and feasibility review for civil and structural considerations prior to design development.',

        termsAndConditions: [
            'Feasibility opinions are preliminary and subject to structural engineer approval where required.',
            'Firm is not responsible for regulatory violations without proper municipal or society approvals.',
            'Evaluation limited to visible site conditions only.',
            'No structural safety certification provided.',
            'No final costing commitment made during site visit.',
            'Liability limited to package fee paid.'
        ],


        includes: [
            'Technical site inspection',
            'Structural feasibility discussion',
            'Beam/column validation',
            'Civil modification evaluation',
            'Execution complexity assessment'
        ],
        notIncludes: [
            'Final design drawings',
            'Structural engineering certification',
            'Official municipal approval assistance'
        ],
        nature: 'Feasibility review only. Does not include design development.',
        img: img3,
        icon: 'fa-building-o'
    },

    {
        id: 'design-3d',
        name: '3D Design Package',
        price: 15000,
        suitable: 'Clients who require visual clarity before execution.',

        details: 'Concept-based 3D visualization to provide visual clarity before execution.',


        termsAndConditions: [
            '3D development is based on approved references and layout confirmation.',
            'Major aesthetic redirection may be treated as redesign.',
            'Revisions governed by structured revision framework.',
            'Designs remain intellectual property of the firm until full payment.',
            'No fabrication or execution guarantee included.',
            'Liability limited to package fee paid.'
        ],

        includes: [
            '3D renders of agreed areas',
            'Concept-based modeling',
            'Design detailing aligned with approved references',
            'Structured revision handling (as per revision framework)'
        ],
        notIncludes: [
            'Working drawings',
            'Cut lists',
            'BOQ',
            'Execution drawings',
            'On-site supervision'
        ],
        nature: 'Visual representation service only.',
        img: consultant,
        icon: 'fa-cube'
    },

    {
        id: 'design-full',
        name: '3D + 2D Drawing Package',
        price: 25000,
        suitable: 'Clients who require documentation for fabrication.',
        details: 'Visualization plus technical drawings required for fabrication and execution readiness.',

        termsAndConditions: [
            'Drawings are based strictly on recorded site measurements.',
            'Execution errors by third-party vendors are not attributable to the firm.',
            'Minor dimensional tolerances may occur during fabrication.',
            'No on-site supervision included unless separately contracted.',
            'Intellectual property rights retained until full payment.',
            'Liability limited to package fee paid.'
        ],


        includes: [
            '3D visualization',
            '2D working drawings',
            'Elevations and sections (as required)',
            'Dimensioned layouts',
            'Basic execution clarity'
        ],
        notIncludes: [
            'Detailed material BOQ',
            'Vendor coordination',
            'On-site supervision',
            'Structural engineering certification'
        ],
        nature: 'Design documentation for execution readiness.',
        img: design,
        icon: 'fa-pencil-square-o'
    },

    {
        id: 'documentation',
        name: '3D + 2D + Cut List Package',
        price: 35000,
        suitable: 'Clients executing through third-party vendors.',
        details: 'Complete design documentation package for clients executing through third-party vendors.',
        termsAndConditions: [
            'Cut list accuracy depends on vendor execution standards.',
            'Firm not liable for third-party workmanship defects.',
            'Structural modifications require external engineering approval.',
            'No execution supervision included unless separately contracted.',
            'Designs protected under applicable intellectual property laws in India.',
            'Liability limited to package fee paid.'
        ],

        includes: [
            '3D renders',
            'Detailed working drawings',
            'Elevations & sectional details',
            'Cut list for carpentry fabrication',
            'Material detailing guidance'
        ],
        notIncludes: [
            'Execution supervision',
            'Quality monitoring',
            'On-site coordination',
            'Warranty coverage'
        ],
        nature: 'Full design documentation only. Execution responsibility lies with client/vendor.',
        img: design,
        icon: 'fa-file-text-o'
    }
];