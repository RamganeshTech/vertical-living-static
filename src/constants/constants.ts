export const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import consultant from '../assets/images/consultation.jpg';
import design from '../assets/images/design.webp';
import poojaunit from '../assets/images/poojaunitwithoutWM.webp';
import crockeryunit from '../assets/images/crockeryimgWithoutWM.webp';
import kitchenBaseCabinets from '../assets/images/kitchenbasecabinets.webp';
import shoeRack from '../assets/images/shoeRack.webp';
import vanityStorage1 from '../assets/images/vanityStorage1.jpg';
import dressingunit from '../assets/images/dressingunit.jpg';
import studyCabinet1 from '../assets/images/studyCabinet1.jpg';
import bookshelf from '../assets/images/bookShelf.jpg';
import foyerArea from '../assets/images/foyerArea.jpg';
import windowSeating from '../assets/images/windowSeating.jpg';
import wallpaper from '../assets/images/wallpaper.jpg';
import roomPartition from '../assets/images/roompartition.jpg';

export const COMPANY_NAME="Vertical Living"

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



// CASE STUDIES

// export const CASE_STUDIES_DATA = [
//     {
//         id: "wardrobe",
//         title: "Wardrobe Design & Selection",
//         preview: "A comprehensive guide on selecting the right materials, mechanisms, and layouts for modern storage solutions.",
//         image: "https://www.squareyards.com/blog/wp-content/uploads/2023/11/Wardrobe-Design-with-Panelling.jpg",
//         fullContent: {
//             introduction: "Wardrobes are more than just storage; they are a critical element of bedroom aesthetics and daily organization. Choosing the right one requires a balance between available space and lifestyle needs.",
//             selectionProcess: "Our selection process begins with a 'Spatial Audit.' We analyze the floor area to determine if a sliding or hinged door system is appropriate. For compact Chennai apartments, we typically recommend sliding systems with slim aluminum profiles to save clearance space.",
//             materialScience: "We utilize high-density moisture-resistant (HDMR) boards for the carcass to ensure longevity in humid climates. For the exterior, we offer a range of finishes from anti-fingerprint laminates to back-painted glass.",
//             technicalInsights: "Internal lighting is integrated using motion sensors. The hardware involves soft-close German-engineered hinges and telescopic channels that can support up to 40kg per drawer."
//         }
//     },
//     {
//         id: "kitchen-wall-cabinets",
//         title: "Kitchen Wall Cabinets",
//         preview: "Maximizing vertical space with ergonomic lift-up systems and moisture-resistant overhead storage.",

//         image: "https://images.pexels.com/photos/94865/pexels-photo-94865.jpeg",
//         fullContent: {
//             introduction: "Wall cabinets are essential for keeping frequently used items within arm's reach while keeping the countertops clear for food preparation.",
//             selectionProcess: "We design based on the 'Golden Triangle' rule. Wall units are placed at a height that accommodates the user's reach, usually 18-20 inches above the counter. We prioritize hydraulic lift-ups over side-hinged doors to prevent head injuries in busy kitchens.",
//             materialScience: "Given the exposure to steam and heat, we treat all overhead units with specialized edge-banding. Our marine-grade plywood cores prevent warping over years of heavy usage.",
//             technicalInsights: "We incorporate recessed profile LED strips at the bottom of these cabinets to provide shadow-free task lighting for the workspace below."
//         }
//     },
//     {
//         id: "kitchen-base-cabinets",
//         title: "Kitchen Base Cabinets",
//         preview: "Engineering heavy-duty storage with pull-out mechanisms and seamless countertop integration.",
//         image: kitchenBaseCabinets,
        
//         fullContent: {
//             introduction: "Base cabinets form the foundation of your kitchen, bearing the weight of countertops and housing heavy cookware.",
//             selectionProcess: "We emphasize ergonomic accessibility. Instead of deep, static shelves where items get lost, we implement full-extension drawers. This allows users to view the entire contents of a drawer from a standing position.",
//             materialScience: "We use 18mm BWP (Boiling Water Proof) marine plywood for base units, as they are most susceptible to water exposure during floor cleaning or sink leaks.",
//             technicalInsights: "The corner spaces are utilized with 'LeMans' or 'Magic Corner' swivel units. All drawers are fitted with Tandembox systems for a weight-bearing capacity of up to 50kg."
//         }
//     },
//     {
//         id: "tv-unit",
//         title: "TV Units",
//         preview: "Creating focal points with integrated cable management and acoustic-friendly materials.",
//         image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200",
//         fullContent: {
//             introduction: "A TV unit is often the centerpiece of a living room, requiring a design that balances technology with home décor.",
//             selectionProcess: "We calculate the viewing height based on your seating arrangement to ensure optimal ergonomics. We also plan for peripheral devices, ensuring sufficient depth for soundbars and gaming consoles.",
//             materialScience: "We use charcoal louvers and fluted panels to add texture. For the back panel, we often utilize large-format sintered stones or marble-finish laminates for a luxury aesthetic.",
//             technicalInsights: "Concealed conduits are pre-installed for wire-free aesthetics. We also ensure proper ventilation gaps to prevent electronics from overheating within closed cabinets."
//         }
//     },
//     {
//         id: "shoe-rack",
//         title: "Smart Shoe Storage",
//         preview: "Compact foyer solutions with ventilation and specialized organizers for various footwear types.",
//         // image: "https://images.unsplash.com/photo-1620390141675-7b19803153c3?q=80&w=1200",
//         image: shoeRack, 
        
//         fullContent: {
//             introduction: "The foyer is the first impression of your home. A well-designed shoe rack keeps the entrance organized and clutter-free.",
//             selectionProcess: "We design based on footwear volume. For narrow hallways, we use 'Tilt-out' shoe drawers that require only 6-8 inches of depth. For larger spaces, we create seated benches with pull-out organizers.",
//             materialScience: "The interiors are lined with easy-to-clean laminates. We incorporate louvered doors or CNC-cut vents to allow air circulation and prevent odor buildup.",
//             technicalInsights: "Lower sections are kept slightly elevated for 'wet shoe' storage, while upper sections include drawers for socks, keys, and accessories."
//         }
//     },
//     {
//         id: "pooja-unit",
//         title: "Traditional & Modern Pooja Units",
//         preview: "Divine spaces designed with sacred geometry, intricate CNC patterns, and ambient lighting.",
//         // image: "https://images.unsplash.com/photo-1616489953149-9892582f3471?q=80&w=1200",
//         image: poojaunit,
//         fullContent: {
//             introduction: "The Pooja unit is a sanctuary within the home. Our designs focus on tranquility and traditional Vastu principles.",
//             selectionProcess: "We prioritize East-facing placements. Depending on the space, we create standalone wooden 'Mantapas' or integrated niches with backlit Jali work.",
//             materialScience: "We often use Teak or Rosewood for a traditional look, or Corian stone for a seamless modern finish. Bells and brass accents are integrated into the shutters.",
//             technicalInsights: "Internal shelves are designed with heat-resistant materials near the Diya area. We use warm-white LED backlighting to enhance the spiritual ambiance."
//         }
//     },
//     {
//         id: "crockery-unit",
//         title: "Crockery Units",
//         preview: "Showcasing fine dining collections with glass displays and mood lighting.",
//         // image: "https://images.unsplash.com/photo-1594913785162-e67856710922?q=80&w=1200",
//         image: crockeryunit,
//         fullContent: {
//             introduction: "Crockery units bridge the gap between the kitchen and dining area, serving both as storage and a display piece.",
//             selectionProcess: "We categorize storage into 'Display' and 'Utility.' Glass-fronted top units with profile lighting are used for fine crystal, while lower opaque cabinets house heavy serveware.",
//             materialScience: "We use tinted or fluted glass for a contemporary look. The shelving is reinforced with 12mm thick glass or 18mm ply to handle the weight of heavy dinner sets.",
//             technicalInsights: "Integrated wine glass holders and bottle racks are common additions. We use soft-close hinges to ensure delicate glassware never vibrates during closure."
//         }
//     },
//     {
//         id: "loft",
//         title: "Loft & Overhead Storage",
//         preview: "Utilizing ceiling-height spaces for long-term storage with seamless integration.",
//         // image: "https://images.unsplash.com/photo-1513519247388-4a2640ddf9fc?q=80&w=1200",
//         image: "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Search: "Modern Loft Storage"
//         fullContent: {
//             introduction: "Lofts are the ultimate space-savers in high-ceiling homes, perfect for stowing away seasonal items.",
//             selectionProcess: "We ensure the loft doors align perfectly with the wardrobe or kitchen units below to maintain a 'Single Wall' appearance. This prevents the room from looking visually heavy.",
//             materialScience: "Lightweight plywood cores are used to reduce the load on the wall-mounted structure. White or light-colored finishes are preferred to help the loft blend into the ceiling.",
//             technicalInsights: "We use 'Push-to-Open' mechanisms to eliminate the need for handles, keeping the top section completely flush and minimalistic."
//         }
//     },

//     {
//         id: "dressing-unit",
//         title: "Dressing Units & Vanity Mirrors",
//         preview: "Elegant grooming stations with specialized lighting and organized jewelry storage.",
//         image: dressingunit,
//         fullContent: {
//             introduction: "A dressing unit is a personal sanctuary for grooming, requiring a combination of clear reflection, ample lighting, and meticulous organization.",
//             selectionProcess: "We design based on the user's routine. Full-length mirrors are standard for wardrobe-adjacent units, while sit-down vanities are prioritized for dedicated makeup stations. We ensure the mirror height is customized to the user's eye level.",
//             materialScience: "We use high-definition, copper-free mirrors to prevent black edges (oxidation) over time. Table surfaces are often finished with scratch-resistant acrylic or quartz for easy cleanup of cosmetic spills.",
//             technicalInsights: "Integrated 'Hollywood' style LED lighting or backlit mirrors provide shadow-free illumination. We also include concealed hair-dryer holders with built-in power points for a clutter-free look."
//         }
//     },
//     {
//         id: "study-cabin",
//         title: "Study Cabins & Home Offices",
//         preview: "Ergonomic workspaces designed for focus, productivity, and tech integration.",
//         image: studyCabinet1,
//         fullContent: {
//             introduction: "With the rise of remote work, a study cabin must balance professional functionality with the comfort of home.",
//             selectionProcess: "We focus on ergonomics. Desk heights are strictly maintained at 29-30 inches. We incorporate overhead open shelving for quick-access books and closed cabinets for filing to maintain a clean visual environment.",
//             materialScience: "Matte-finish laminates are used for the tabletop to reduce glare from overhead lights. We use 25mm thick boards for the desk surface to prevent sagging under the weight of monitors and CPUs.",
//             technicalInsights: "Wire management is handled via brush-grommets and under-desk cable trays. We often integrate magnetic whiteboards or pin-boards into the wall cladding for brainstorming."
//         }
//     },
//     {
//         id: "vanity-storage",
//         title: "Bathroom Vanity Storage",
//         preview: "Moisture-proof cabinetry designed for humid environments and daily essentials.",
//         image: vanityStorage1,
//         fullContent: {
//             introduction: "Bathroom vanities must withstand high humidity while providing organized storage for toiletries and linens.",
//             selectionProcess: "We offer both wall-hung (floating) and floor-mounted designs. Floating vanities are recommended for smaller bathrooms to make the floor visible, creating an illusion of space.",
//             materialScience: "This is the most critical area for material choice. We exclusively use WPC (Wood Plastic Composite) or BWP Plywood to ensure the cabinets are 100% waterproof and termite-proof.",
//             technicalInsights: "We use 'U-shaped' drawer cutouts to navigate around sink plumbing, ensuring no storage space is wasted. Soft-close slides are mandatory to prevent damage in wet conditions."
//         }
//     },
//     {
//         id: "bookshelf",
//         title: "Custom Bookshelves & Libraries",
//         preview: "Structural storage solutions for bibliophiles, from floor-to-ceiling units to floating ledges.",
//         image: bookshelf,
//         fullContent: {
//             introduction: "A bookshelf is more than storage; it's a display of personality. Our designs focus on structural integrity and visual rhythm.",
//             selectionProcess: "We analyze the collection size. For heavy encyclopedias, we design shorter shelf spans to prevent bowing. For modern décor, we use asymmetrical open-box designs.",
//             materialScience: "We use reinforced 18mm ply with vertical supports every 2-3 feet. Finishes range from natural wood veneers to bold PU paints to create a focal point in the room.",
//             technicalInsights: "Adjustable shelf tracks are often used to accommodate books of varying heights. We also incorporate vertical LED strip lights recessed into the side panels for a library-like glow."
//         }
//     },
//     {
//         id: "room-partition",
//         title: "Wall & Dining Partitions",
//         preview: "Defining spaces without losing light, using CNC jalis, glass, and fluted panels.",
//         image: roomPartition,
//         fullContent: {
//             introduction: "Partitions allow for functional zoning between living and dining areas while maintaining an open-plan feel.",
//             selectionProcess: "We choose between 'Visual Barriers' (lightweight/see-through) and 'Storage Partitions' (functional units). Revolving TV units or breakfast counters often serve as dual-purpose dividers.",
//             materialScience: "We utilize diverse materials like metal frames, fluted glass, or CNC-cut MDF panels. Toughened glass is used for safety in high-traffic dining zones.",
//             technicalInsights: "Floor-to-ceiling partitions are anchored securely with hidden tension bolts. We often integrate planter boxes at the base to add a touch of biophilic design."
//         }
//     },
//     {
//         id: "wallpapers",
//         title: "Wallpapers & Textures",
//         preview: "Transforming surfaces with premium vinyl, fabric, and 3D textured wall coverings.",
//         image: wallpaper,
//         fullContent: {
//             introduction: "Wallpapers provide an instant personality shift to a room, offering textures and patterns that paint cannot achieve.",
//             selectionProcess: "We guide clients based on the room's light. Dark, metallic patterns are used for accent walls in bedrooms, while light, washable vinyl is recommended for hallways.",
//             materialScience: "We source non-woven and fabric-backed wallpapers for breathability, preventing mold. Our adhesives are eco-friendly and low-VOC to ensure indoor air quality.",
//             technicalInsights: "Proper wall preparation is key; we ensure a Level 5 primer finish before application. For high-moisture areas, we apply a protective clear coat over the wallpaper."
//         }
//     },
//     {
//         id: "foyer-console",
//         title: "Foyer Seating & Consoles",
//         preview: "Creating a welcoming transition with functional seating and drop-off zones.",
//         image: foyerArea,
//         fullContent: {
//             introduction: "The foyer is the bridge between the outside world and your home. It needs to be practical for 'grab-and-go' items while looking inviting.",
//             selectionProcess: "We incorporate a 'Drop Zone' for keys and mail, paired with a padded bench for comfortably wearing shoes. Wall-mounted consoles are used in narrow entries to keep floor space clear.",
//             materialScience: "High-traffic durability is key. We use stone-top consoles or high-pressure laminates that can handle heavy keys and bags without scratching.",
//             technicalInsights: "We often hide electrical hubs inside foyer drawers for charging phones and smartwatches immediately upon entering the home."
//         }
//     },
//     {
//         id: "window-seating",
//         title: "Window Seating & Bay Windows",
//         preview: "Transforming window areas into cozy reading nooks with integrated storage.",
//         image: windowSeating,
//         fullContent: {
//             introduction: "Window seating turns an underutilized space into a functional retreat, perfect for reading or enjoying the view.",
//             selectionProcess: "We measure the window sill height to ensure the seat is at a comfortable 15-18 inches from the floor. The depth is kept at 24 inches for relaxed sitting.",
//             materialScience: "The base is built with heavy-duty ply to support multiple people. We use high-density foam cushions covered in stain-resistant upholstery fabrics.",
//             technicalInsights: "The space beneath the seat is never wasted; we design it with either deep drawers for linens or 'top-lift' shutters for bulky luggage storage."
//         }
//     }
   
// ];


export const CASE_STUDIES_DATA = [
    {
        id: "wardrobe",
        title: "Modern Wardrobe Design & Selection Guide",
        preview: "A comprehensive guide on selecting the right materials, mechanisms, and layouts for modern storage solutions in Chennai.",
        image: "https://www.squareyards.com/blog/wp-content/uploads/2023/11/Wardrobe-Design-with-Panelling.jpg",
        technicalDeepDive: "When designing wardrobes for the Chennai climate, we prioritize structural stability against high humidity levels. Our engineering team utilizes a combination of 18mm High-Density Moisture-Resistant (HDMR) boards for the carcass, ensuring that the unit remains immune to the swelling often seen in standard particle boards. We pay close attention to the 'Internal Architecture'—calculating the exact ratio of hanging space to drawer volume based on the user's inventory. For apartments in high-density areas like Anna Nagar or Velachery, we implement floor-to-ceiling sliding systems. These systems utilize top-tier Italian or German hardware, allowing for silent, effortless movement while saving up to 4 square feet of floor clearance compared to traditional hinged doors. Every unit is finished with zero-line edge banding technology, creating a seamless seal that prevents moisture ingress and ensures a lifespan of over 15 years.",
        fullContent: {
            introduction: "Wardrobes are more than just storage; they are a critical element of bedroom aesthetics and daily organization. Choosing the right one requires a balance between available space and lifestyle needs.",
            detailedSections: [
                {
                    heading: "Spatial Audit & Door Systems",
                    content: "We analyze the floor area to determine if a sliding or hinged door system is appropriate. For compact Chennai apartments, we typically recommend sliding systems with slim aluminum profiles to save clearance space.",
                    bullets: ["Floor-to-ceiling designs for maximum volume", "Soft-close sliding mechanisms", "Slim profile aluminum frames for a modern look"]
                },
                {
                    heading: "Material Science: HDMR vs Plywood",
                    content: "We utilize high-density moisture-resistant (HDMR) boards for the carcass to ensure longevity in humid climates. For the exterior, we offer a range of finishes from anti-fingerprint laminates to back-painted glass.",
                    bullets: ["Moisture-resistant core for Chennai humidity", "Scratch-resistant exterior laminates", "Environmentally friendly low-emission boards"]
                },
                {
                    heading: "Technical Hardware Insights",
                    content: "Internal lighting is integrated using motion sensors. The hardware involves soft-close German-engineered hinges and telescopic channels that can support up to 40kg per drawer.",
                    bullets: ["Motion-sensor LED internal lighting", "Heavy-duty telescopic drawer channels", "German-engineered soft-close hinges"]
                }
            ]
        }
    },
    {
        id: "kitchen-wall-cabinets",
        title: "Kitchen Wall Cabinets & Vertical Storage",
        preview: "Maximizing vertical space with ergonomic lift-up systems and moisture-resistant overhead storage.",
        image: "https://images.pexels.com/photos/94865/pexels-photo-94865.jpeg",
        technicalDeepDive: "Vertical storage optimization in the kitchen requires a deep understanding of weight distribution and ergonomic reach. For wall-mounted units, we utilize 18mm Boiling Water Resistant (BWR) plywood to ensure that the cabinets do not warp due to the constant exposure to steam from stovetop cooking. Our designs incorporate specialized hydraulic lift-up systems, such as the Aventos series, which allow the shutters to stay open at any angle—preventing head injuries and making the workspace feel more open. To ensure the safety of the installation on various wall types found in Chennai apartments, from solid brick to hollow blocks, we use heavy-duty chemical anchors. Lighting is the final technical layer; we integrate recessed profile LEDs at the base of the units to eliminate shadows on the countertop, providing a clear, high-visibility task zone for food preparation.",
        fullContent: {
            introduction: "Wall cabinets are essential for keeping frequently used items within arm's reach while keeping the countertops clear for food preparation.",
            detailedSections: [
                {
                    heading: "The Golden Triangle & Ergonomics",
                    content: "We design based on the 'Golden Triangle' rule. Wall units are placed at a height that accommodates the user's reach, usually 18-20 inches above the counter. We prioritize hydraulic lift-ups over side-hinged doors.",
                    bullets: ["18-20 inch clearance for ergonomic reach", "Hydraulic lift-up systems for safety", "Integration with the kitchen work triangle"]
                },
                {
                    heading: "Steam & Heat Resistance",
                    content: "Given the exposure to steam and heat, we treat all overhead units with specialized edge-banding. Our marine-grade plywood cores prevent warping over years of heavy usage.",
                    bullets: ["Boiling Water Resistant (BWR) plywood", "Zero-line edge banding for seamless finish", "Heat-resistant interior linings"]
                },
                {
                    heading: "Integrated Task Lighting",
                    content: "We incorporate recessed profile LED strips at the bottom of these cabinets to provide shadow-free task lighting for the workspace below.",
                    bullets: ["Recessed aluminum LED profiles", "Warm-white task lighting for food prep", "Concealed wiring for a clean aesthetic"]
                }
            ]
        }
    },
    {
        id: "kitchen-base-cabinets",
        title: "Heavy Duty Kitchen Base Cabinets",
        preview: "Engineering heavy-duty storage with pull-out mechanisms and seamless countertop integration.",
        image: kitchenBaseCabinets,
        technicalDeepDive: "In the context of Indian cooking environments, base cabinets face the harshest conditions: heat, heavy spice-laden cookware, and frequent floor mopping. To combat this, we exclusively utilize IS:710 Grade BWP (Boiling Water Proof) Marine Plywood. This material is specifically engineered to withstand up to 72 hours of continuous boiling without delamination, making it the only viable choice for the moisture-prone zones under the sink and hob. We replace old-fashioned static shelves with Tandembox drawer systems that can support dynamic loads of up to 50kg per drawer. This ergonomic shift allows the user to access the deepest corners of the kitchen without bending or straining. Furthermore, we install adjustable PVC or Stainless Steel legs hidden behind a waterproof skirting, ensuring that the wood never makes direct contact with the floor, effectively eliminating the risk of termite infestation and water rot.",
        fullContent: {
            introduction: "Base cabinets form the foundation of your kitchen, bearing the weight of countertops and housing heavy cookware.",
            detailedSections: [
                {
                    heading: "Access & Organization",
                    content: "Instead of deep, static shelves where items get lost, we implement full-extension drawers. This allows users to view the entire contents from a standing position.",
                    bullets: ["Full-extension Tandembox drawers", "Organized plate and cutlery organizers", "Easy-access bottle pull-outs"]
                },
                {
                    heading: "710 Grade Waterproofing",
                    content: "We use 18mm BWP (Boiling Water Proof) marine plywood for base units, as they are most susceptible to water exposure during floor cleaning or sink leaks.",
                    bullets: ["IS:710 Grade BWP Marine Plywood", "Termite and borer proof treatment", "Waterproof base skirting to prevent floor moisture"]
                },
                {
                    heading: "Corner & Weight Engineering",
                    content: "The corner spaces are utilized with 'LeMans' or 'Magic Corner' swivel units. All drawers are fitted with Tandembox systems for a weight-bearing capacity of up to 50kg.",
                    bullets: ["Magic Corner swivel mechanisms", "50kg load-bearing drawer slides", "Soft-close technology to protect porcelain"]
                }
            ]
        }
    },
    {
        id: "tv-unit",
        title: "Modern TV Units & Media Centers",
        preview: "Creating focal points with integrated cable management and acoustic-friendly materials.",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200",
        technicalDeepDive: "A modern media center is as much an engineering challenge as an aesthetic focal point. We begin by calculating the 'Viewing Delta'—adjusting the screen height to match the eye level of the specific sofa set used. Technologically, our units are built with internal 'cable conduits' that allow for a zero-wire aesthetic, where power and HDMI cables are routed through hidden channels within the wall cladding. For the back panels, we often use charcoal louvers or sintered stone, which provide acoustic dampening properties to enhance the sound quality of soundbars and home theaters. Ventilation is another critical technical detail; we incorporate 'breathe-through' gaps in the lower cabinets to prevent gaming consoles and AV receivers from thermal throttling. The result is a clean, luxury finish that protects your expensive electronics while elevating the living room's design language.",
        fullContent: {
            introduction: "A TV unit is often the centerpiece of a living room, requiring a design that balances technology with home décor.",
            detailedSections: [
                {
                    heading: "Viewing Ergonomics",
                    content: "We calculate the viewing height based on your seating arrangement to ensure optimal ergonomics. We also plan for peripheral devices like soundbars and consoles.",
                    bullets: ["Eye-level viewing height calculation", "Dedicated depth for AV receivers", "Acoustic-friendly material selection"]
                },
                {
                    heading: "Premium Finishes & Textures",
                    content: "We use charcoal louvers and fluted panels to add texture. For the back panel, we often utilize large-format sintered stones or marble-finish laminates.",
                    bullets: ["Luxury fluted panel textures", "Sintered stone backdrops", "Hidden storage for media libraries"]
                },
                {
                    heading: "Cable Management Systems",
                    content: "Concealed conduits are pre-installed for wire-free aesthetics. We also ensure proper ventilation gaps to prevent electronics from overheating.",
                    bullets: ["Internal wire management conduits", "Hidden power strip accessibility", "Ventilated electronics cabinets"]
                }
            ]
        }
    },
    {
        id: "shoe-rack",
        title: "Smart Shoe Storage & Foyer Solutions",
        preview: "Compact foyer solutions with ventilation and specialized organizers for various footwear types.",
        image: shoeRack,
        technicalDeepDive: "Foyer storage must solve the twin problems of space constraints and odor management. In our 'Smart Shoe' systems, we utilize a 'Tilt-out' mechanism for narrow foyers, allowing 20+ pairs of shoes to be stored in a cabinet that is only 7 inches deep. For hygiene, we integrate CNC-cut ventilation patterns or louvered shutters that facilitate cross-ventilation, preventing moisture and odor buildup which is common in Chennai’s humid air. The interior shelves are finished with high-pressure, easy-wipe laminates that are resistant to the dirt and moisture brought in from the outdoors. We often include a 'Wet Zone'—an elevated bottom shelf made of stainless steel or stone—where damp rain-soaked footwear can dry without damaging the wooden structure of the rack.",
        fullContent: {
            introduction: "The foyer is the first impression of your home. A well-designed shoe rack keeps the entrance organized and clutter-free.",
            detailedSections: [
                {
                    heading: "Volume-Based Design",
                    content: "For narrow hallways, we use 'Tilt-out' shoe drawers that require only 6-8 inches of depth. For larger spaces, we create seated benches.",
                    bullets: ["Space-saving tilt-out mechanisms", "Seated bench integration", "Dedicated boots and heels storage"]
                },
                {
                    heading: "Hygiene & Ventilation",
                    content: "The interiors are lined with easy-to-clean laminates. We incorporate louvered doors or CNC-cut vents to allow air circulation and prevent odor buildup.",
                    bullets: ["CNC-cut ventilation patterns", "Louvered doors for airflow", "Easy-wipe interior surfaces"]
                },
                {
                    heading: "Utility Integration",
                    content: "Lower sections are kept slightly elevated for 'wet shoe' storage, while upper sections include drawers for socks, keys, and accessories.",
                    bullets: ["Elevated 'wet zone' storage", "Accessory drawers for essentials", "Integrated umbrella holders"]
                }
            ]
        }
    },
    {
        id: "pooja-unit",
        title: "Traditional & Modern Pooja Units",
        preview: "Divine spaces designed with sacred geometry, intricate CNC patterns, and ambient lighting.",
        image: poojaunit,
        technicalDeepDive: "Designing a Pooja unit in a modern Chennai home requires a delicate balance between Vastu Shastra and contemporary minimalism. We focus on the North-East (Ishanya) orientation to ensure a flow of positive energy. Our construction involves the use of premium Teak wood or high-grade Corian for a seamless, joint-free finish that mimics natural stone. For the backdrops, we utilize CNC-cut Jali patterns inspired by traditional temple architecture, often backlit with warm 3000K LEDs to create a serene, spiritual ambiance. Safety is a paramount technical consideration; we integrate heat-resistant marble or granite slabs at the base where oil lamps (diyas) are placed. Additionally, we provide concealed exhaust solutions and specialized drawers for incense, bells, and sacred texts, ensuring that the divine space remains clutter-free while serving as the aesthetic heart of the household.",
        fullContent: {
            introduction: "The Pooja unit is a sanctuary within the home. Our designs focus on tranquility and traditional Vastu principles.",
            detailedSections: [
                {
                    heading: "Vastu & Placement",
                    content: "We prioritize East-facing placements. Depending on the space, we create standalone wooden 'Mantapas' or integrated niches with backlit Jali work.",
                    bullets: ["Vastu-compliant East-facing orientation", "Intricate CNC Jali patterns", "Compact wall-mounted options"]
                },
                {
                    heading: "Material Selection",
                    content: "We often use Teak or Rosewood for a traditional look, or Corian stone for a seamless modern finish. Bells and brass accents are integrated.",
                    bullets: ["Premium Teak wood options", "Seamless Corian stone finishes", "Inlaid brass accents"]
                },
                {
                    heading: "Heat & Smoke Management",
                    content: "Internal shelves are designed with heat-resistant materials near the Diya area. We use warm-white LED backlighting to enhance the spiritual ambiance.",
                    bullets: ["Heat-resistant marble or stone bases", "Concealed exhaust for agarbatti", "Warm ambient LED backlighting"]
                }
            ]
        }
    },
    {
        id: "crockery-unit",
        title: "Bespoke Crockery Units & Displays",
        preview: "Showcasing fine dining collections with glass displays and mood lighting.",
        image: crockeryunit,
        technicalDeepDive: "Crockery units require high-precision structural engineering to safely display heavy ceramics and delicate glassware. We use 12mm or 15mm toughened glass for the internal shelves, supported by specialized bracket systems that distribute weight evenly across the carcass. The shutters are often made of tinted or fluted glass, which adds a layer of modern sophistication while partially obscuring the contents for a cleaner look. For the lighting, we use side-mounted profile LEDs rather than top-down spots; this prevents 'shadow stacking' where the top shelf blocks light from reaching the bottom. Every door is fitted with soft-close hinges that have a 110-degree opening angle, ensuring that even if a door is pushed hard, it closes silently without vibrating the delicate glassware inside.",
        fullContent: {
            introduction: "Crockery units bridge the gap between the kitchen and dining area, serving both as storage and a display piece.",
            detailedSections: [
                {
                    heading: "Display vs Utility",
                    content: "We categorize storage into 'Display' and 'Utility.' Glass-fronted top units are used for fine crystal, while lower opaque cabinets house heavy serveware.",
                    bullets: ["Toughened glass display shutters", "Heavy-duty lower storage for ceramics", "Integrated bar cabinet options"]
                },
                {
                    heading: "Structural Glass Engineering",
                    content: "We use tinted or fluted glass for a contemporary look. The shelving is reinforced with 12mm thick glass or 18mm ply.",
                    bullets: ["12mm thick load-bearing glass shelves", "Tinted or fluted aesthetic glass", "Spotlight integration for displays"]
                },
                {
                    heading: "Hardware Precision",
                    content: "Integrated wine glass holders and bottle racks are common additions. We use soft-close hinges to ensure delicate glassware never vibrates.",
                    bullets: ["Vibration-free soft-close hardware", "Wine glass stemware holders", "Pull-out bottle racks"]
                }
            ]
        }
    },
    {
        id: "loft",
        title: "Loft & Overhead Storage Solutions",
        preview: "Utilizing ceiling-height spaces for long-term storage with seamless integration.",
        image: "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop",
        technicalDeepDive: "Loft storage is essential in Chennai homes for stowing away seasonal items like luggage and heavy bedding. Our technical approach focuses on 'Visual Weight Management.' By aligning the loft shutters perfectly with the units below and using handle-less push-to-open mechanisms, we make the loft blend into the ceiling, preventing the room from feeling cramped. Structurally, we use lightweight yet strong MR-grade plywood to reduce the dead load on the wall-mounted supports. We seal every edge with 2mm PVC banding to ensure that the loft remains dust-proof and pest-proof over long periods of non-use. The result is a seamless, architectural extension of the room that provides massive storage capacity without compromising the aesthetic flow.",
        fullContent: {
            introduction: "Lofts are the ultimate space-savers in high-ceiling homes, perfect for stowing away seasonal items.",
            detailedSections: [
                {
                    heading: "Visual Integration",
                    content: "We ensure the loft doors align perfectly with the wardrobe or kitchen units below to maintain a 'Single Wall' appearance.",
                    bullets: ["Seamless ceiling-flush alignment", "Single-wall visual continuity", "Color-matched finish to walls"]
                },
                {
                    heading: "Weight & Load Distribution",
                    content: "Lightweight plywood cores are used to reduce the load on the wall-mounted structure. White or light-colored finishes are preferred.",
                    bullets: ["Lightweight MR-grade plywood", "Heavy-duty wall anchors", "Minimalist light-toned finishes"]
                },
                {
                    heading: "Hardware Minimalism",
                    content: "We use 'Push-to-Open' mechanisms to eliminate the need for handles, keeping the top section completely flush.",
                    bullets: ["Handle-less push-to-open tech", "Concealed magnetic catches", "Dust-proof overhead sealing"]
                }
            ]
        }
    },
    {
        id: "dressing-unit",
        title: "Luxury Dressing Units & Vanities",
        preview: "Elegant grooming stations with specialized lighting and organized jewelry storage.",
        image: dressingunit,
        technicalDeepDive: "A luxury dressing station is defined by its lighting and mirror quality. We exclusively use copper-free, high-definition mirrors which are resistant to the 'black edge' oxidation common in coastal cities like Chennai. For lighting, we implement the 'True Color' principle—using LEDs with a high Color Rendering Index (CRI >90) to ensure that makeup looks the same indoors as it does in natural sunlight. The vanity tabletop is finished with scratch-resistant acrylic or quartz to withstand cosmetic spills and heat from styling tools. Internally, we design 'Micro-Organizers'—shallow, velvet-lined drawers with specialized slots for jewelry, watches, and skincare products, keeping your grooming routine efficient and your surfaces clutter-free.",
        fullContent: {
            introduction: "A dressing unit is a personal sanctuary for grooming, requiring a combination of clear reflection and meticulous organization.",
            detailedSections: [
                {
                    heading: "Ergonomics & Reflection",
                    content: "We design based on the user's routine. Full-length mirrors are standard for wardrobe-adjacent units, while sit-down vanities are prioritized for makeup.",
                    bullets: ["Full-length copper-free mirrors", "Sit-down ergonomic vanities", "Customized eye-level positioning"]
                },
                {
                    heading: "Makeup & Surface Selection",
                    content: "We use high-definition mirrors to prevent oxidation. Table surfaces are often finished with scratch-resistant acrylic or quartz.",
                    bullets: ["HD copper-free mirrors (Anti-rust)", "Scratch-resistant quartz tops", "Spill-proof laminate finishes"]
                },
                {
                    heading: "Integrated Vanity Tech",
                    content: "Integrated 'Hollywood' style LED lighting or backlit mirrors provide shadow-free illumination. We also include concealed hair-dryer holders.",
                    bullets: ["Shadow-free backlit mirror tech", "Built-in power points for hair tools", "Velvet-lined jewelry organizers"]
                }
            ]
        }
    },
    {
        id: "study-cabin",
        title: "Ergonomic Study Cabins & Home Offices",
        preview: "Ergonomic workspaces designed for focus, productivity, and tech integration.",
        image: studyCabinet1,
        technicalDeepDive: "Productivity in a home office is heavily dependent on ergonomic standards. We strictly maintain a desk height of 29.5 inches, which is the global gold standard for comfort during long working hours. The desktop is constructed from 25mm thick reinforced boards to prevent bowing under the weight of multiple monitors and heavy PC towers. We use matte-finish laminates for the work surface to eliminate the glare from overhead lights, reducing eye strain. Our 'Cable Ecosystem' involves brush-grommets on the desk surface and hidden cable trays underneath, ensuring that the workspace remains free of wire-clutter. For the overhead storage, we use a mix of open shelves for reference books and closed cabinets for sensitive filing, creating a balanced, professional environment.",
        fullContent: {
            introduction: "With the rise of remote work, a study cabin must balance professional functionality with the comfort of home.",
            detailedSections: [
                {
                    heading: "Height & Posture Standards",
                    content: "We focus on ergonomics. Desk heights are strictly maintained at 29-30 inches. We incorporate overhead open shelving for quick-access books.",
                    bullets: ["29-30 inch ergonomic desk height", "Overhead quick-access shelving", "Dedicated CPU and UPS cabinets"]
                },
                {
                    heading: "Surface Durability",
                    content: "Matte-finish laminates are used for the tabletop to reduce glare. We use 25mm thick boards for the desk surface to prevent sagging.",
                    bullets: ["Anti-glare matte tabletop finishes", "25mm heavy-duty desk surfaces", "Anti-sag structural support"]
                },
                {
                    heading: "Wire & Tech Management",
                    content: "Wire management is handled via brush-grommets and under-desk cable trays. We often integrate magnetic whiteboards.",
                    bullets: ["Under-desk cable management trays", "Brush-grommets for wire routing", "Integrated magnetic brainstorming boards"]
                }
            ]
        }
    },
    {
        id: "vanity-storage",
        title: "Waterproof Bathroom Vanity Storage",
        preview: "Moisture-proof cabinetry designed for humid environments and daily essentials.",
        image: vanityStorage1,
        technicalDeepDive: "Vanity units in bathrooms are exposed to the highest levels of direct moisture and humidity. Consequently, we move away from traditional plywood and exclusively utilize 100% Waterproof Wood Plastic Composite (WPC) or BWP Marine Ply. All hardware—from hinges to drawer slides—is made of SS-304 grade stainless steel to prevent rust. We design 'U-Shaped' drawer cutouts that wrap around the sink's plumbing trap, allowing you to use 100% of the drawer space without interfering with the pipes. To ensure easy cleaning and hygiene, we often recommend 'Floating' or wall-hung vanities; this allows for easy floor mopping and prevents water from stagnating at the base of the cabinet, ensuring the bathroom feels spacious and remains odor-free.",
        fullContent: {
            introduction: "Bathroom vanities must withstand high humidity while providing organized storage for toiletries and linens.",
            detailedSections: [
                {
                    heading: "Installation Typology",
                    content: "We offer both wall-hung (floating) and floor-mounted designs. Floating vanities are recommended for smaller bathrooms.",
                    bullets: ["Space-saving floating vanities", "Floor-mounted utility cabinets", "Easy-to-clean underside access"]
                },
                {
                    heading: "WPC & Waterproofing",
                    content: "We exclusively use WPC (Wood Plastic Composite) or BWP Plywood to ensure the cabinets are 100% waterproof and termite-proof.",
                    bullets: ["100% Waterproof WPC boards", "Termite and borer proof cores", "Corrosion-resistant stainless steel hinges"]
                },
                {
                    heading: "Plumbing Optimization",
                    content: "We use 'U-shaped' drawer cutouts to navigate around sink plumbing, ensuring no storage space is wasted.",
                    bullets: ["U-shaped plumbing-friendly drawers", "Soft-close moisture-proof slides", "Anti-fungal interior coatings"]
                }
            ]
        }
    },
    {
        id: "bookshelf",
        title: "Structural Bookshelves & Home Libraries",
        preview: "Structural storage solutions for bibliophiles, from floor-to-ceiling units to floating ledges.",
        image: bookshelf,
        technicalDeepDive: "The primary technical challenge of a bookshelf is 'Shelf Deflection'—the tendency of wood to sag under the weight of books over time. We solve this by calculating the span-to-thickness ratio, usually limiting the width of a single shelf to 30 inches or adding vertical structural ribs for support. We use high-grade 18mm or 25mm plywood, finished in natural veneers or PU lacquer for a premium feel. For bibliophiles, we offer 'Double-Deep' shelving or adjustable height tracks, allowing the library to evolve as the collection grows. To add a modern architectural touch, we integrate vertical LED strip lights into the side panels, which not only makes it easier to find a specific title but also turns the bookshelf into a dramatic ambient light source for the room.",
        fullContent: {
            introduction: "A bookshelf is more than storage; it's a display of personality. Our designs focus on structural integrity.",
            detailedSections: [
                {
                    heading: "Load-Bearing Engineering",
                    content: "We analyze the collection size. For heavy encyclopedias, we design shorter shelf spans to prevent bowing.",
                    bullets: ["Short-span anti-bowing shelving", "Floor-to-ceiling structural frames", "Asymmetrical modern open boxes"]
                },
                {
                    heading: "Material Integrity",
                    content: "We use reinforced 18mm ply with vertical supports every 2-3 feet. Finishes range from natural wood veneers to bold PU paints.",
                    bullets: ["Reinforced 18mm plywood core", "Premium natural wood veneers", "Custom PU lacquer finishes"]
                },
                {
                    heading: "Versatility & Lighting",
                    content: "Adjustable shelf tracks are used for varying heights. We incorporate vertical LED strip lights recessed into the side panels.",
                    bullets: ["Height-adjustable shelf tracks", "Recessed side-panel LED strips", "Library-style display lighting"]
                }
            ]
        }
    },
    {
        id: "room-partition",
        title: "Modern Wall & Dining Partitions",
        preview: "Defining spaces without losing light, using CNC jalis, glass, and fluted panels.",
        image: roomPartition,
        technicalDeepDive: "Room partitions are designed to provide 'Functional Zoning' without blocking the natural light and ventilation that define an open-plan home. We utilize a mix of 'Heavy' and 'Light' elements—for example, a solid wooden base for storage paired with a top half made of CNC-cut metal or fluted glass. Structurally, these units are anchored using hidden tension bolts into both the floor and the ceiling, ensuring they are rock-solid even in high-traffic areas. We often integrate 'Biophilic' elements, such as built-in planter boxes with internal waterproof lining, allowing you to bring greenery into the living space. Whether it’s a revolving TV unit partition or a simple decorative Jali, our designs focus on maintaining a visual connection between rooms while clearly defining their separate uses.",
        fullContent: {
            introduction: "Partitions allow for functional zoning between living and dining areas while maintaining an open-plan feel.",
            detailedSections: [
                {
                    heading: "Zoning Strategy",
                    content: "We choose between 'Visual Barriers' and 'Storage Partitions.' Breakfast counters often serve as dual-purpose dividers.",
                    bullets: ["Functional storage-based partitions", "Visual lightweight jali dividers", "Breakfast counter integration"]
                },
                {
                    heading: "Aesthetic Material Mix",
                    content: "We utilize diverse materials like metal frames, fluted glass, or CNC-cut MDF panels. Toughened glass is used for safety.",
                    bullets: ["Premium fluted glass panels", "Metal-frame industrial aesthetics", "CNC-cut architectural patterns"]
                },
                {
                    heading: "Structural Anchoring",
                    content: "Floor-to-ceiling partitions are anchored securely with hidden tension bolts. We often integrate planter boxes.",
                    bullets: ["Hidden tension-bolt anchoring", "Integrated biophilic planter boxes", "Toughened glass safety standards"]
                }
            ]
        }
    },
    {
        id: "wallpapers",
        title: "Wallpapers & Luxury Wall Textures",
        preview: "Transforming surfaces with premium vinyl, fabric, and 3D textured wall coverings.",
        image: wallpaper,
        technicalDeepDive: "In the humid Chennai environment, the choice of wallpaper is as much about material science as it is about pattern. We source premium non-woven or fabric-backed wallpapers that allow the walls to 'breathe,' preventing the growth of mold and mildew behind the paper. Before application, we perform a 'Level-5' wall preparation, ensuring the surface is perfectly smooth and treated with an anti-fungal primer. We use eco-friendly, low-VOC adhesives that are odorless and safe for children and pets. For high-traffic areas like hallways or dining rooms, we recommend vinyl-coated wallpapers that are 100% washable and scratch-resistant. Our precision application process ensures that seams are virtually invisible, creating a high-end, continuous fabric-like finish on your walls.",
        fullContent: {
            introduction: "Wallpapers provide an instant personality shift, offering textures and patterns that paint cannot achieve.",
            detailedSections: [
                {
                    heading: "Lighting & Pattern Selection",
                    content: "We guide clients based on the room's light. Dark, metallic patterns are used for accents, while light vinyl is for hallways.",
                    bullets: ["Accent wall focal patterns", "High-durability washable vinyl", "Light-reflective metallic finishes"]
                },
                {
                    heading: "Material Breathability",
                    content: "We source non-woven and fabric-backed wallpapers for breathability, preventing mold in humid Chennai weather.",
                    bullets: ["Non-woven breathable backings", "Anti-mold and anti-fungal materials", "Eco-friendly low-VOC adhesives"]
                },
                {
                    heading: "Precision Application",
                    content: "Proper wall preparation is key; we ensure a Level 5 primer finish. For high-moisture areas, we apply a protective clear coat.",
                    bullets: ["Level 5 surface preparation", "Seam-free application techniques", "Protective clear-coat options"]
                }
            ]
        }
    },
    {
        id: "foyer-console",
        title: "Functional Foyer Consoles & Seating",
        preview: "Creating a welcoming transition with functional seating and drop-off zones.",
        image: foyerArea,
        technicalDeepDive: "A foyer console serves as the 'Landing Zone' for your home. We design these units with high-durability surfaces like sintered stone or marble-finish laminates that can handle the impact of heavy keys, bags, and groceries without scratching. Technically, we focus on 'Entryway Flow'—ensuring the unit provides enough storage for essentials while leaving enough clearance for people to enter and leave comfortably. We often hide the home's primary 'Charging Hub' inside a felt-lined foyer drawer, where you can charge your smartphones, watches, and tablets out of sight. The seating section is built with high-density foam and stain-resistant performance fabrics, providing a comfortable and durable spot for the family to prepare for the day ahead.",
        fullContent: {
            introduction: "The foyer is the bridge to your home. It needs to be practical for 'grab-and-go' items while looking inviting.",
            detailedSections: [
                {
                    heading: "The 'Drop Zone' Concept",
                    content: "We incorporate a 'Drop Zone' for keys and mail, paired with a padded bench for comfortably wearing shoes.",
                    bullets: ["Integrated key and mail drop zones", "Ergonomic padded seating benches", "Wall-mounted space-saving consoles"]
                },
                {
                    heading: "High-Traffic Durability",
                    content: "We use stone-top consoles or high-pressure laminates that can handle heavy keys and bags without scratching.",
                    bullets: ["Scratch-resistant stone tops", "High-pressure laminate (HPL) durability", "Impact-resistant edge banding"]
                },
                {
                    heading: "Hidden Charging Hubs",
                    content: "We often hide electrical hubs inside foyer drawers for charging phones and smartwatches immediately upon entering.",
                    bullets: ["Concealed electrical charging hubs", "Organized drawer compartments", "Warm welcoming entry lighting"]
                }
            ]
        }
    },
    {
        id: "window-seating",
        title: "Bay Window Seating",
        preview: "Transforming window areas into cozy reading nooks with integrated storage.",
        image: windowSeating,
        technicalDeepDive: "Window seating, or Bay Window Nooks, are engineered to turn dead space into a structurally sound retreat. We build the base with a heavy-duty 18mm plywood framework, reinforced with internal cross-beams to support the weight of multiple adults. The seating height is precisely set at 17-18 inches (inclusive of the cushion) to match standard ergonomic seating levels. For the upholstery, we use high-Crocking-grade fabrics that are resistant to fading from direct sunlight exposure. The space beneath is utilized for 'Deep Storage'—using either heavy-duty pull-out drawers for linens or top-lift shutters for large suitcases. By integrating the seating with the adjacent wall cladding or bookshelves, we create a 'Cosey Enclosure' that adds both square footage and character to the bedroom or living room.",
        fullContent: {
            introduction: "Window seating turns an underutilized space into a functional retreat, perfect for reading or enjoying the view.",
            detailedSections: [
                {
                    heading: "Sill Height & Comfort",
                    content: "We measure the window sill height to ensure the seat is at a comfortable 15-18 inches from the floor.",
                    bullets: ["Standard 15-18 inch seating height", "Relaxed 24-inch seating depth", "Plush high-density foam cushions"]
                },
                {
                    heading: "Structural Ply Base",
                    content: "The base is built with heavy-duty ply to support multiple people. We use stain-resistant upholstery fabrics.",
                    bullets: ["Heavy-duty load-bearing ply base", "Stain-resistant performance fabrics", "Custom-fit cushion tailoring"]
                },
                {
                    heading: "Under-Seat Utility",
                    content: "The space beneath the seat is never wasted; we design it with either deep drawers for linens or top-lift shutters.",
                    bullets: ["Deep drawers for extra linens", "Top-lift luggage storage units", "Seamless integration with walls"]
                }
            ]
        }
    }
];




//  GTM 

//  event name         |   conversion label
// ============================================
// inquiry_form_VL     | D7O_CLLa9oIcEIqyh_JC
// cost_calculator_VL  | 3vRnCK2pioMcEIqyh_JC
// whatsapp_click_VL   | cVXwCKiqioMcEIqyh_JC
// phone_call_click_VL | J1MeCKuqioMcEIqyh_JC
// phone_call_website_VL | z7M0CN-Gh4McEIqyh_JC


// conversionid = 17955936522



// curl -X POST "https://graph.facebook.com/v19.0/985219248013758/register" -H "Authorization: Bearer EAANcjjXPLR8BQz9DRhGgU7WzTjYzjTRjLGZCVcmPajMX4fkh7wGKNZB8YDPtKK0VnOrYZAGbfbw9BDEpoeiyLwMrdBBntPCQlpnsvuj4FHWSTXx7riYMZBVOSc6yXZAdEibyUBMBZCG59inkysDVC8MtWwdJEzlDOlN4cDKMLZCjJoyxZB8IlDwpROalZAQF0CIYysQZDZD" -H "Content-Type: application/json" -d "{\"messaging_product\": \"whatsapp\", \"pin\": \"227854\"}"

