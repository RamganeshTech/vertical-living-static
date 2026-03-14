export const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import consultant from '../assets/images/consultation.jpg';
import design from '../assets/images/design.jpg';
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

export const CASE_STUDIES_DATA = [
    {
        id: "wardrobe",
        title: "Wardrobe Design & Selection",
        preview: "A comprehensive guide on selecting the right materials, mechanisms, and layouts for modern storage solutions.",
        // image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
        image: "https://www.squareyards.com/blog/wp-content/uploads/2023/11/Wardrobe-Design-with-Panelling.jpg",
        fullContent: {
            introduction: "Wardrobes are more than just storage; they are a critical element of bedroom aesthetics and daily organization. Choosing the right one requires a balance between available space and lifestyle needs.",
            selectionProcess: "Our selection process begins with a 'Spatial Audit.' We analyze the floor area to determine if a sliding or hinged door system is appropriate. For compact Chennai apartments, we typically recommend sliding systems with slim aluminum profiles to save clearance space.",
            materialScience: "We utilize high-density moisture-resistant (HDMR) boards for the carcass to ensure longevity in humid climates. For the exterior, we offer a range of finishes from anti-fingerprint laminates to back-painted glass.",
            technicalInsights: "Internal lighting is integrated using motion sensors. The hardware involves soft-close German-engineered hinges and telescopic channels that can support up to 40kg per drawer."
        }
    },
    {
        id: "kitchen-wall-cabinets",
        title: "Kitchen Wall Cabinets",
        preview: "Maximizing vertical space with ergonomic lift-up systems and moisture-resistant overhead storage.",
        // image: "https://images.unsplash.com/photo-1556911220-e15595b6a981?q=80&w=800",
        // image: "https://images.unsplash.com/photo-1556912177-c54030639a6d?q=80&w=800",
        image: "https://images.pexels.com/photos/94865/pexels-photo-94865.jpeg",
        fullContent: {
            introduction: "Wall cabinets are essential for keeping frequently used items within arm's reach while keeping the countertops clear for food preparation.",
            selectionProcess: "We design based on the 'Golden Triangle' rule. Wall units are placed at a height that accommodates the user's reach, usually 18-20 inches above the counter. We prioritize hydraulic lift-ups over side-hinged doors to prevent head injuries in busy kitchens.",
            materialScience: "Given the exposure to steam and heat, we treat all overhead units with specialized edge-banding. Our marine-grade plywood cores prevent warping over years of heavy usage.",
            technicalInsights: "We incorporate recessed profile LED strips at the bottom of these cabinets to provide shadow-free task lighting for the workspace below."
        }
    },
    {
        id: "kitchen-base-cabinets",
        title: "Kitchen Base Cabinets",
        preview: "Engineering heavy-duty storage with pull-out mechanisms and seamless countertop integration.",
        // image: "https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg",
        image: kitchenBaseCabinets,
        
        fullContent: {
            introduction: "Base cabinets form the foundation of your kitchen, bearing the weight of countertops and housing heavy cookware.",
            selectionProcess: "We emphasize ergonomic accessibility. Instead of deep, static shelves where items get lost, we implement full-extension drawers. This allows users to view the entire contents of a drawer from a standing position.",
            materialScience: "We use 18mm BWP (Boiling Water Proof) marine plywood for base units, as they are most susceptible to water exposure during floor cleaning or sink leaks.",
            technicalInsights: "The corner spaces are utilized with 'LeMans' or 'Magic Corner' swivel units. All drawers are fitted with Tandembox systems for a weight-bearing capacity of up to 50kg."
        }
    },
    {
        id: "tv-unit",
        title: "TV Units",
        preview: "Creating focal points with integrated cable management and acoustic-friendly materials.",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200",
        fullContent: {
            introduction: "A TV unit is often the centerpiece of a living room, requiring a design that balances technology with home décor.",
            selectionProcess: "We calculate the viewing height based on your seating arrangement to ensure optimal ergonomics. We also plan for peripheral devices, ensuring sufficient depth for soundbars and gaming consoles.",
            materialScience: "We use charcoal louvers and fluted panels to add texture. For the back panel, we often utilize large-format sintered stones or marble-finish laminates for a luxury aesthetic.",
            technicalInsights: "Concealed conduits are pre-installed for wire-free aesthetics. We also ensure proper ventilation gaps to prevent electronics from overheating within closed cabinets."
        }
    },
    {
        id: "shoe-rack",
        title: "Smart Shoe Storage",
        preview: "Compact foyer solutions with ventilation and specialized organizers for various footwear types.",
        // image: "https://images.unsplash.com/photo-1620390141675-7b19803153c3?q=80&w=1200",
        image: shoeRack, 
        
        fullContent: {
            introduction: "The foyer is the first impression of your home. A well-designed shoe rack keeps the entrance organized and clutter-free.",
            selectionProcess: "We design based on footwear volume. For narrow hallways, we use 'Tilt-out' shoe drawers that require only 6-8 inches of depth. For larger spaces, we create seated benches with pull-out organizers.",
            materialScience: "The interiors are lined with easy-to-clean laminates. We incorporate louvered doors or CNC-cut vents to allow air circulation and prevent odor buildup.",
            technicalInsights: "Lower sections are kept slightly elevated for 'wet shoe' storage, while upper sections include drawers for socks, keys, and accessories."
        }
    },
    {
        id: "pooja-unit",
        title: "Traditional & Modern Pooja Units",
        preview: "Divine spaces designed with sacred geometry, intricate CNC patterns, and ambient lighting.",
        // image: "https://images.unsplash.com/photo-1616489953149-9892582f3471?q=80&w=1200",
        image: poojaunit,
        fullContent: {
            introduction: "The Pooja unit is a sanctuary within the home. Our designs focus on tranquility and traditional Vastu principles.",
            selectionProcess: "We prioritize East-facing placements. Depending on the space, we create standalone wooden 'Mantapas' or integrated niches with backlit Jali work.",
            materialScience: "We often use Teak or Rosewood for a traditional look, or Corian stone for a seamless modern finish. Bells and brass accents are integrated into the shutters.",
            technicalInsights: "Internal shelves are designed with heat-resistant materials near the Diya area. We use warm-white LED backlighting to enhance the spiritual ambiance."
        }
    },
    {
        id: "crockery-unit",
        title: "Crockery Units",
        preview: "Showcasing fine dining collections with glass displays and mood lighting.",
        // image: "https://images.unsplash.com/photo-1594913785162-e67856710922?q=80&w=1200",
        image: crockeryunit,
        fullContent: {
            introduction: "Crockery units bridge the gap between the kitchen and dining area, serving both as storage and a display piece.",
            selectionProcess: "We categorize storage into 'Display' and 'Utility.' Glass-fronted top units with profile lighting are used for fine crystal, while lower opaque cabinets house heavy serveware.",
            materialScience: "We use tinted or fluted glass for a contemporary look. The shelving is reinforced with 12mm thick glass or 18mm ply to handle the weight of heavy dinner sets.",
            technicalInsights: "Integrated wine glass holders and bottle racks are common additions. We use soft-close hinges to ensure delicate glassware never vibrates during closure."
        }
    },
    {
        id: "loft",
        title: "Loft & Overhead Storage",
        preview: "Utilizing ceiling-height spaces for long-term storage with seamless integration.",
        // image: "https://images.unsplash.com/photo-1513519247388-4a2640ddf9fc?q=80&w=1200",
        image: "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Search: "Modern Loft Storage"
        fullContent: {
            introduction: "Lofts are the ultimate space-savers in high-ceiling homes, perfect for stowing away seasonal items.",
            selectionProcess: "We ensure the loft doors align perfectly with the wardrobe or kitchen units below to maintain a 'Single Wall' appearance. This prevents the room from looking visually heavy.",
            materialScience: "Lightweight plywood cores are used to reduce the load on the wall-mounted structure. White or light-colored finishes are preferred to help the loft blend into the ceiling.",
            technicalInsights: "We use 'Push-to-Open' mechanisms to eliminate the need for handles, keeping the top section completely flush and minimalistic."
        }
    },

    {
        id: "dressing-unit",
        title: "Dressing Units & Vanity Mirrors",
        preview: "Elegant grooming stations with specialized lighting and organized jewelry storage.",
        image: dressingunit,
        fullContent: {
            introduction: "A dressing unit is a personal sanctuary for grooming, requiring a combination of clear reflection, ample lighting, and meticulous organization.",
            selectionProcess: "We design based on the user's routine. Full-length mirrors are standard for wardrobe-adjacent units, while sit-down vanities are prioritized for dedicated makeup stations. We ensure the mirror height is customized to the user's eye level.",
            materialScience: "We use high-definition, copper-free mirrors to prevent black edges (oxidation) over time. Table surfaces are often finished with scratch-resistant acrylic or quartz for easy cleanup of cosmetic spills.",
            technicalInsights: "Integrated 'Hollywood' style LED lighting or backlit mirrors provide shadow-free illumination. We also include concealed hair-dryer holders with built-in power points for a clutter-free look."
        }
    },
    {
        id: "study-cabin",
        title: "Study Cabins & Home Offices",
        preview: "Ergonomic workspaces designed for focus, productivity, and tech integration.",
        image: studyCabinet1,
        fullContent: {
            introduction: "With the rise of remote work, a study cabin must balance professional functionality with the comfort of home.",
            selectionProcess: "We focus on ergonomics. Desk heights are strictly maintained at 29-30 inches. We incorporate overhead open shelving for quick-access books and closed cabinets for filing to maintain a clean visual environment.",
            materialScience: "Matte-finish laminates are used for the tabletop to reduce glare from overhead lights. We use 25mm thick boards for the desk surface to prevent sagging under the weight of monitors and CPUs.",
            technicalInsights: "Wire management is handled via brush-grommets and under-desk cable trays. We often integrate magnetic whiteboards or pin-boards into the wall cladding for brainstorming."
        }
    },
    {
        id: "vanity-storage",
        title: "Bathroom Vanity Storage",
        preview: "Moisture-proof cabinetry designed for humid environments and daily essentials.",
        image: vanityStorage1,
        fullContent: {
            introduction: "Bathroom vanities must withstand high humidity while providing organized storage for toiletries and linens.",
            selectionProcess: "We offer both wall-hung (floating) and floor-mounted designs. Floating vanities are recommended for smaller bathrooms to make the floor visible, creating an illusion of space.",
            materialScience: "This is the most critical area for material choice. We exclusively use WPC (Wood Plastic Composite) or BWP Plywood to ensure the cabinets are 100% waterproof and termite-proof.",
            technicalInsights: "We use 'U-shaped' drawer cutouts to navigate around sink plumbing, ensuring no storage space is wasted. Soft-close slides are mandatory to prevent damage in wet conditions."
        }
    },
    {
        id: "bookshelf",
        title: "Custom Bookshelves & Libraries",
        preview: "Structural storage solutions for bibliophiles, from floor-to-ceiling units to floating ledges.",
        image: bookshelf,
        fullContent: {
            introduction: "A bookshelf is more than storage; it's a display of personality. Our designs focus on structural integrity and visual rhythm.",
            selectionProcess: "We analyze the collection size. For heavy encyclopedias, we design shorter shelf spans to prevent bowing. For modern décor, we use asymmetrical open-box designs.",
            materialScience: "We use reinforced 18mm ply with vertical supports every 2-3 feet. Finishes range from natural wood veneers to bold PU paints to create a focal point in the room.",
            technicalInsights: "Adjustable shelf tracks are often used to accommodate books of varying heights. We also incorporate vertical LED strip lights recessed into the side panels for a library-like glow."
        }
    },
    {
        id: "room-partition",
        title: "Wall & Dining Partitions",
        preview: "Defining spaces without losing light, using CNC jalis, glass, and fluted panels.",
        image: roomPartition,
        fullContent: {
            introduction: "Partitions allow for functional zoning between living and dining areas while maintaining an open-plan feel.",
            selectionProcess: "We choose between 'Visual Barriers' (lightweight/see-through) and 'Storage Partitions' (functional units). Revolving TV units or breakfast counters often serve as dual-purpose dividers.",
            materialScience: "We utilize diverse materials like metal frames, fluted glass, or CNC-cut MDF panels. Toughened glass is used for safety in high-traffic dining zones.",
            technicalInsights: "Floor-to-ceiling partitions are anchored securely with hidden tension bolts. We often integrate planter boxes at the base to add a touch of biophilic design."
        }
    },
    {
        id: "wallpapers",
        title: "Wallpapers & Textures",
        preview: "Transforming surfaces with premium vinyl, fabric, and 3D textured wall coverings.",
        image: wallpaper,
        fullContent: {
            introduction: "Wallpapers provide an instant personality shift to a room, offering textures and patterns that paint cannot achieve.",
            selectionProcess: "We guide clients based on the room's light. Dark, metallic patterns are used for accent walls in bedrooms, while light, washable vinyl is recommended for hallways.",
            materialScience: "We source non-woven and fabric-backed wallpapers for breathability, preventing mold. Our adhesives are eco-friendly and low-VOC to ensure indoor air quality.",
            technicalInsights: "Proper wall preparation is key; we ensure a Level 5 primer finish before application. For high-moisture areas, we apply a protective clear coat over the wallpaper."
        }
    },
    {
        id: "foyer-console",
        title: "Foyer Seating & Consoles",
        preview: "Creating a welcoming transition with functional seating and drop-off zones.",
        image: foyerArea,
        fullContent: {
            introduction: "The foyer is the bridge between the outside world and your home. It needs to be practical for 'grab-and-go' items while looking inviting.",
            selectionProcess: "We incorporate a 'Drop Zone' for keys and mail, paired with a padded bench for comfortably wearing shoes. Wall-mounted consoles are used in narrow entries to keep floor space clear.",
            materialScience: "High-traffic durability is key. We use stone-top consoles or high-pressure laminates that can handle heavy keys and bags without scratching.",
            technicalInsights: "We often hide electrical hubs inside foyer drawers for charging phones and smartwatches immediately upon entering the home."
        }
    },
    {
        id: "window-seating",
        title: "Window Seating & Bay Windows",
        preview: "Transforming window areas into cozy reading nooks with integrated storage.",
        image: windowSeating,
        fullContent: {
            introduction: "Window seating turns an underutilized space into a functional retreat, perfect for reading or enjoying the view.",
            selectionProcess: "We measure the window sill height to ensure the seat is at a comfortable 15-18 inches from the floor. The depth is kept at 24 inches for relaxed sitting.",
            materialScience: "The base is built with heavy-duty ply to support multiple people. We use high-density foam cushions covered in stain-resistant upholstery fabrics.",
            technicalInsights: "The space beneath the seat is never wasted; we design it with either deep drawers for linens or 'top-lift' shutters for bulky luggage storage."
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

