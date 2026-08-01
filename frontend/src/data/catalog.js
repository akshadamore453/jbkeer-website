// Product catalog data extracted from JBKeer product catalog.
// 16 industry categories with full product lists.

export const CATEGORIES = [
  {
    slug: "wood-working-adhesives",
    name: "Wood Working Adhesives",
    tagline: "PVA · White Glue · Marine Grade · PUR",
    blurb:
      "High-performance PVA-based adhesives for all wood-working applications, from economical grades to premium waterproof formulations.",
    products: [
      { name: "PVA Wood Adhesive & White Glue SH Series", desc: "Water-based, high-performance PVA-based adhesives for all wood-working applications, from economical to premium waterproof formulations." },
      { name: "High-performance White Glue for wood working", desc: "Extra bonding strength for demanding assemblies." },
      { name: "Premium Synthetic Resin Adhesive (SH Grade)" },
      { name: "Economical PVA Wood Adhesive — 36% & 41% solids" },
      { name: "MarineX — Waterproof Adhesive", desc: "Waterproof wood adhesive for marine-grade applications." },
      { name: "HiPerX — Anti-Bubble formula", desc: "Instant grab with uniform glue line." },
      { name: "D3 Wood Adhesive" },
      { name: "ProBondX — PVC to Wood Bond" },
      { name: "1K PUR", desc: "Single-component moisture-curing polyurethane adhesive." },
      { name: "DDL Binder for Lime & Distemper" },
      { name: "Stationery, MR Craft, Transparent School Glue" },
      { name: "Fabric Glue", desc: "For beads, sequins, lace, ribbon, appliqué, foil." },
      { name: "Paper Lock — Paper Conversion Adhesive", desc: "Water-based · Quick setting · Fungus-resistant. For notebooks, files, paper bags, spiral rolls, fiber drums, exercise books." },
    ],
  },
  {
    slug: "paper-packaging-adhesives",
    name: "Paper & Packaging Adhesives",
    tagline: "Machine & Manual · Corrugation · Cone bonding",
    blurb:
      "Pasting adhesives for printing, packaging, corrugation, paper cones and cores — machine and manual application.",
    products: [
      { name: "Printing & Packaging Pasting Adhesive", desc: "Window patching (polyester film), side pasting for folder gluer machines (wheel & nozzle), high-speed folder gluer, poly-coated cartons with deep freeze resistance, manual side pasting, top-bottom paper winding, laminated carton pasting (tea box), medicine box side pasting." },
      { name: "Paper Cone & Core Bonding", desc: "E-fluting lamination for food-grade boxes, high-GSM board pasting, case sealing, paper-to-paper, paper-to-board, board-to-board, paper-to-coated-paper." },
      { name: "Paper Cone & Paper Core Adhesive", desc: "PVAc-based, high-GSM." },
      { name: "3 TRICOLL ADHESIVE", desc: "PVAc-based adhesive for high-GSM board-to-board pasting. Dilutable with water for economy. Multi-wall paper bags, gift boxes, hand-made paper products, bound books." },
      { name: "PS LAM — Laminated Paper Side Pasting", desc: "Co-polymer adhesive for paper to BOPP, polyester and PVC laminate surfaces. Medicine boxes, garment boxes, carton side pasting." },
      { name: "Paper Cone Binder", desc: "Ready-to-use poly-resin. Fast drying, zero odor, water/solvent/oil resistant." },
      { name: "Corrugation Manufacturing Adhesive", desc: "E-Flute · Master carton · Foil backing. High-speed and manual application." },
    ],
  },
  {
    slug: "lamination-uv-coatings",
    name: "Lamination Adhesives & UV Coatings",
    tagline: "Wet & Dry Lam · UV · Aqueous OPM",
    blurb:
      "Wet and dry lamination emulsions for BOPP, PVC, MET-PET and holographic films, plus UV and aqueous over-print coatings.",
    products: [
      { name: "Wet & Water-Based Dry Lamination Adhesive", desc: "BOPP · PVC · MET-PET · Holographic. High-gloss, high-peel wet lam for board substrates. Dry print lam for BOPP, MET-PET and poly film — pre and post print jobs. High-speed lam machines with online cutting. E-fluting food-grade boxes." },
      { name: "Dry Lamination — Wen Chyuan Yilee / Zhonky Machines", desc: "50/X 20 for PET, PVC, BOPP, MPET → paper/duplex board (high speed). 50/X 9 for PET, MPET, holographic film. 40/8 all-acrylic type for PET, PVC, BOPP, MPET films." },
      { name: "UV Over Print Coatings", desc: "Aqueous OPM · UV · LED UV. Slow and high speed (up to 12,000 sph), texture / drip-off effect, heat-seal coatings for blister packing in PVC, MET-PET primer, waterproofing coatings for paper/board/fabrics, spot UV gloss/texture for screen application." },
      { name: "Aqueous OPM (Over Print Medium)", desc: "For ink duct application on offset machines. Offline coater — high gloss & high scuff resistance, matt finished, heat seal lacquer for PVC blister, solvent-based blister pack coating medium." },
    ],
  },
  {
    slug: "bottle-labelling-adhesive",
    name: "Bottle Labelling Adhesive",
    tagline: "Distillery · Processed Food · Auto machines",
    blurb:
      "Manufacturing and formulation consultancy for cold-labelling adhesive suitable for distillery and processed food industries.",
    products: [
      { name: "Water-Based Bottle Labelling Adhesive", desc: "For high-speed and slow-speed pump-type automatic labelling machines. Water-white transparent adhesive. Cold labelling, water-based." },
    ],
  },
  {
    slug: "hot-melt-adhesives",
    name: "Hot Melt Adhesives",
    tagline: "Nonwoven · PSA · Speciality (70+ formulations)",
    blurb:
      "Hot-melt formulations for disposable hygiene, packaging, book binding, bottle labelling, mattress assembly and more.",
    products: [
      { name: "Nonwoven Hygiene Hot Melt", desc: "Eco-friendly formulations for baby diapers, feminine care, adult incontinence." },
      { name: "Hot Melt PSA", desc: "Pressure-sensitive hot melt for label stock, hologram, medical tape, jumbo/FIBC bags, surgical tape, courier bag sealing." },
      { name: "Speciality Hot Melt — 70+ Formulations", desc: "Nonwoven hygiene, carton/case sealing, packaging, ice cream, frozen foods, bottle labelling (PP/PET/HDPE/Tetra Pack/polyester to paper/board), air filter assembly, mattress assembly, WPP bag side sealing, automotive lamp & interior assembly, shoe foam-to-fabric lamination, antiskid carpet back coating, edge banding (auto/manual PVC/ABS on MDF/particle board), shrink sleeve tube making, WAD/induction sealing, book binding, soap wrapper coatings, hot foil stamping." },
      { name: "Non-Flammable Mattress Adhesive", desc: "Spray application. Non-flammable formulation, strong permanent bond, safe for production floors." },
      { name: "Non-Flammable Neoprene Contact Adhesive", desc: "Low VOC · Benzene-free. Automotive (felt-to-felt, non-woven to felt, hardboard to felt), carpet-to-carpet, PVC cloth to plastic, furniture (chairs, sofas, panels), mattresses (foam-to-foam, EP to coir, coir to coir). Grades 4 · 5 · 6 · 7 · 8 · 9 · 10." },
    ],
  },
  {
    slug: "silicone-sealants-pvc-cement",
    name: "Silicone Sealants & PVC Solvent Cement",
    tagline: "Turnkey plant & formulation consultancy",
    blurb:
      "Complete consultancy for silicone sealant and PVC solvent cement manufacturing — plant, machinery and formulations.",
    products: [
      { name: "Silicone Sealant — All Grades", desc: "Low RMC GP · GP Medium Grade · Premium · Windows & Doors · Sanitary · High Temperature. Complete plant and machinery guidance." },
      { name: "PVC Solvent Cement", desc: "cPVC and uPVC — regular, medium and heavy body. Complete turnkey project design, fully automated plant setup, flameproof norms compliance, lab setup, primers and cleaners." },
      { name: "PVC Membrane Press Glue (1K & 2K)", desc: "Water-based · Low VOC · Sprayable. For durable PVC membrane doors and kitchen cabinets. Ultra-low VOC sprayable membrane adhesive (7770), low heat activation with high heat-creep resistance." },
    ],
  },
  {
    slug: "automotive-sealants-coatings",
    name: "Automotive Sealants & Coatings",
    tagline: "Seam sealer · Underbody coating",
    blurb:
      "Single-component heat-curing sealers and anti-chipping coatings for automobile body protection.",
    products: [
      { name: "PVC Seam Sealer", desc: "Single component · Heat curing. Sealing joints and gaps in automobile bodies." },
      { name: "PVC Underbody Coating", desc: "Anti-chipping · Airless spray. Good adhesion to substrate, excellent flexibility, over-bake resistant, compatible over paint, curable at paint-shop ovens, good corrosion protection." },
    ],
  },
  {
    slug: "epoxy-pu-systems",
    name: "Epoxy & Polyurethane Systems",
    tagline: "Floor coatings · Structural adhesives",
    blurb:
      "Formulation and manufacturing consultancy for epoxy primers, self-levelling floors, PU coatings, epoxy adhesives and putties.",
    products: [
      { name: "Epoxy & PU Floor Coatings", desc: "Epoxy Primers · Mortar Epoxy Coatings · Self-Levelling Epoxy · Epoxy Top Clear Coat · PU Floor Coatings." },
      { name: "Epoxy Adhesive — Professional Grade", desc: "Epoxy Base 106 (Resin) + Hardener 953. Fast & clear epoxy, metallic paste, 5-minute epoxy, 5-minute putty, concrete grouting white paste, coal tar epoxy, epoxy tack coat, epoxy mortar, M-Seal epoxy putty." },
    ],
  },
  {
    slug: "construction-chemicals",
    name: "Construction Chemicals",
    tagline: "Waterproofing · Tile aids · Admixtures",
    blurb:
      "Liquid, elastomeric and crystalline waterproofing, tile adhesives, grouts, sealants and construction admixtures.",
    products: [
      { name: "Waterproofing Systems", desc: "Liquid integrated waterproofing compound, super plasticizers (Ligno, Melamine, PCE), latex-based coatings, SBR coating and binders, admixtures for ready-mix concrete, paver block hardener & lacquer, elastomeric coating, heat-reflective coating, cement-based and polymeric waterproofing, crystalline waterproofing, water-based silicon water repellent and injection system, D shuttering oil." },
      { name: "Tiling Aids, Repair & Bonding", desc: "Tile on tile adhesive, liquid tile adhesive, tile grout, crack-filling putty, cement white putty, AAC block wet & dry powder, polymer & cement-based binders, acrylic sealant, epoxy tile grouting, epoxy floor coatings." },
      { name: "Admixtures & Plasticizers", desc: "High-range hyper plasticizing admixture, fourth-generation polycarboxylic superplasticizer, low-dosage slump retention, multipurpose water-based polymer bonding agent for plaster/concrete/gypsum, liquid additive for fixing tiles/marble/granite, chloride-free plasticizing quick-setting compound." },
    ],
  },
  {
    slug: "road-marking-traffic-paints",
    name: "Road Marking & Traffic Paints",
    tagline: "Bitumen emulsions · Airport marking",
    blurb:
      "Bitumen emulsions per IS 8887:2004, waterborne acrylic airport/traffic paints, and thermoplastic road marking systems.",
    products: [
      { name: "Bitumen Emulsions for Road Construction", desc: "As per IS 8887:2004. Anionic & cationic. RS-1, RS-2, MS, SS-1, SS-2, Polymer Modified Bitumen (PMB), Surface Dressing Emulsions, Pot Hole Repair." },
      { name: "Waterborne Acrylic Airport & Traffic Marking Paints", desc: "IS-164 compliant · US Federal TT-P-1952 standard. Environmentally friendly, fast drying, conventional and airless spray application. Shades: White, Rapid Green, Rapid Red, PRO Red, Rapid Golden Yellow, Rapid Black, Black, Rapid Traffic Yellow, PRO Traffic Yellow." },
      { name: "Thermoplastic Road Marking Paint", desc: "Fast drying, high abrasion resistance (silica extenders), matt-to-semi-gloss anti-glare finish, water resistant for heavy rainfall, brushable on rough hot road surfaces. Golden yellow, black and white for zebra crossings. Institutional sale — municipalities, state government, airport authorities. Primers available." },
    ],
  },
  {
    slug: "decorative-industrial-paints",
    name: "Decorative & Industrial Paints",
    tagline: "250+ formulations · Interior · Exterior · Industrial",
    blurb:
      "Exterior emulsions, interior luxury emulsions, and 250+ accurate industrial paint formulations across epoxy, PU, synthetic enamel and heat-resistant systems.",
    products: [
      { name: "Exterior Emulsion Paint", desc: "UV-resistant water-based exterior emulsion, weather-protection premium performance paints, stretch and sheen durable exterior (warranted), 100% acrylic emulsion for roof tiles & bricks, long-lasting tough & flexible wall film." },
      { name: "Interior Emulsion Paint", desc: "Luxury emulsion with germ-killing formula, washable soft sheen finish, excellent stain-clean ability, luxury HD colors, ultra-fresh decor rich crème finish, economical rich smooth finish, ceiling emulsion with excellent whiteness and spatter resistance." },
      { name: "Industrial Paint — 250+ Formulations", desc: "EPOXY 2K: Primer, Finish, MIO Paint, Mastic, Coal Tar Epoxy, Zinc Rich Primer. PU 2K: Primer, Finish. Quick-drying primer & finish. Synthetic enamel: Red Oxide Zinc Chromate Primer, Enamel Finish. Heat resistant: Aluminium Paint 250°C, 400°C, 600°C. Chlorinated rubber primer/finish, Etch Primer." },
      { name: "Paint Binders", desc: "Pure acrylic & co-polymer emulsions manufacturing consultancy. Pure acrylic, styrene acrylic co-polymer, VAM acrylic, VAM-VeoVa co-polymer, polymer additives for paint." },
      { name: "Liquid Acrylic Resin", desc: "Formulations process consultancy for automotive refinish coatings, industrial maintenance paints, and high-performance protective coatings." },
    ],
  },
  {
    slug: "wood-coatings-preservatives",
    name: "Wood Coatings & Preservatives",
    tagline: "PU · NC · Melamine · Anti-termite",
    blurb:
      "Full range of solvent-based wood coatings — PU, NC, melamine — plus eco-friendly anti-termite wood preservatives.",
    products: [
      { name: "Wood Coatings — Full Range", desc: "Wood stain solvent-based (Pine, Chestnut, Walnut, Mahogany, Teak, Rosewood, Ebony), wood filler (Natural, White, Tick, Walnut, Antique Brown), PU 2K exterior & interior, PU 2K metallic, PU 1K clear & Touchwood shades, melamine finish all shades matt & glossy, PU non-yellowing super gloss (white too), PU/NC/melamine thinners, TPA base 1K coatings, French polish (spirit-based & non-alcoholic), single-pack urethane alkyd, nitrocellulose base finish, NC clear coat, NC sanding sealer, NC putty grey, NC primer grey." },
      { name: "Wood Preservative — Colourless Terminator", desc: "Anti-termite · Eco-friendly · Ready to use. Protects from termites and borers, mixable with oil-based paints & primers, deep penetration, all wood types. Variants: Colourless — Terminator, Soil Sprayable (Water-Based), Black Economical." },
    ],
  },
  {
    slug: "textile-emulsions-binders",
    name: "Textile Emulsions & Binders",
    tagline: "Finishing · Printing · Flocking · Carpet",
    blurb:
      "Polyvinyl acetate emulsions, polymerize binders and mixing auxiliaries for textile finishing, printing, flocking and carpet manufacturing.",
    products: [
      { name: "Textile Emulsion & Polymerize Binders", desc: "Polyvinyl acetate emulsion for textile finishing, textile binders for printing & flocking, emulsion for carpet industries." },
      { name: "Mixing Auxiliaries", desc: "Desizing agent, levelling agents, polyester weight-reducing catalyst, APEO-free wetting agent, scouring cum stain removing, silicon hydrophilic softener 8600, dye & tone agent, polyurethane finishing agent, peroxide killer, wetting & penetrating agents, non-silicate peroxide stabiliser, dispersing agent, scouring aids, silicon defogger, silicon softener, peach finish for cotton and polyester blends, non-volatile acid buffer for polyester dyeing, melamine formaldehyde fixer." },
      { name: "Polymerize Textile Binders — Full Range", desc: "Non-oven binder, non-oven soft binder, SLN binder, flock binder, MF fixer, FL 9400 M, SB 150, 100 SB, Laser 4000, ET ECO, pigment printing binder, FCE, JB 44, non-oven hard binder, Q 224 D, jari binder without NMA, EPO Free, Polysol all grades, MBX all grades, FC 1000 high tack elasticity, CRB 1000, VAM butyl, 4000, thickener binder (acrylonitrile), DM 44, KVS acrylic cross-linking agent, KBI penetrating agent, raise binder for colour paste, blanket adhesive MT & HT, non-oven 882, LC 40." },
    ],
  },
  {
    slug: "rubber-contact-adhesives",
    name: "Rubber & Contact Adhesives",
    tagline: "SR Series · Neoprene · SBS · Benzene-free",
    blurb:
      "Solvent-based, benzene-free rubber adhesives for furniture, foam, mattresses, carpeting, upholstery and footwear.",
    products: [
      { name: "Rubber-Based Adhesive — SR Series", desc: "Solvent-based · Toluene-free · Benzene-free. Fast drying, strong permanent bonds. Application: brush, spray, nozzle, wheel, roller/roll coat. Bonds metal, plastic, rubber, ceramic, glass, wood, paper, leather, fabric, foam." },
      { name: "Neoprene Grades", desc: "Toluene-free rubber-based adhesive, flame-proof, footwear sole, multi-purpose & general-purpose, SRA 4040 Foam Fix, SRA 5050-505, SRA 7070-707, SRA 9090-998, industrial-grade duct adhesive (eco-friendly), footwear grades 505, 998, Economical, SR Economical 12%." },
      { name: "Non-Conventional SBS Adhesive — SBS Series", desc: "Benzene-free · Low VOC · Environment friendly. Super first-bonding power, excellent penetration, moisture resistant after hardening, very high green tack, rapid drying. Grades 4 · 5 · 6 · 7 · 8 · 9 · 10." },
    ],
  },
  {
    slug: "resins-hardeners",
    name: "Resins & Hardeners",
    tagline: "Epoxy · Polyamide · UPR",
    blurb:
      "Manufacturing and formulation consultancy for epoxy resins, polyamide hardeners and unsaturated polyester resins (UPR).",
    products: [
      { name: "Epoxy Resins", desc: "Equivalent to GY 250, and Solid Epoxy Resin 6071." },
      { name: "Reactive Polyamide Resin", desc: "Grades 115 · 125 · 140 · 160." },
      { name: "Non-Reactive Polyamide Resin for Ink", desc: "Grades 900 · 930 · 961 · 967." },
      { name: "Unsaturated Polyester Resin (UPR)", desc: "For fiberglass composites, gel coats, casting resins, industrial laminates." },
    ],
  },
  {
    slug: "footwear-flexible-packaging",
    name: "Footwear Adhesives & Flexible Packaging",
    tagline: "PU total solution · Lamination · PSA · Hot melt",
    blurb:
      "Complete polyurethane footwear adhesive systems and flexible packaging lamination, coating and pressure-sensitive adhesives.",
    products: [
      { name: "Polyurethane Footwear Adhesive — Total Solution", desc: "PU adhesive, primer, cleaner and hardener." },
      { name: "Flexible Packaging — Lamination Adhesives", desc: "Acrylic water-based, PU solvent-free mono & bi-component, PU solvent-based." },
      { name: "Flexible Packaging — Coatings", desc: "Heat seal water-based (Al-foil to Al-foil), waterproof coatings for paper cups, UV varnish, solvent-based coatings, release & primer coatings, cold seal coatings." },
      { name: "Flexible Packaging — PSA & Hot Melt", desc: "Holograms, BOPP tape, label stock, WPP & Raffia bag side sealing, toffee twist wrapping, soap wrapper coatings." },
    ],
  },
];

export function findCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

// Clientele — countries + Indian regions (from jbkeer.com/clientele/)
export const COUNTRIES = [
  { name: "India", scope: "Pan-India — HQ Pune", products: "Full portfolio across all 16 categories" },
  { name: "Bangladesh", products: "Wood, SR, PVC, Epoxy and cyanide-based adhesives" },
  { name: "Egypt", products: "Mattress adhesive & rubber-based adhesive" },
  { name: "UAE (Dubai)", products: "Epoxy, polyamide resins, rubber-based adhesive, emulsion paint & construction chemicals" },
  { name: "Uzbekistan", products: "Wood adhesives & rubber-based adhesive" },
  { name: "Nepal", products: "Wood adhesives, anti-termite & rubber-based adhesive" },
  { name: "Zimbabwe", products: "Tile adhesive" },
  { name: "Sri Lanka", products: "Wood adhesive, PVC solvent cement & epoxy adhesive" },
  { name: "Ethiopia", products: "Construction chemicals & wood adhesives" },
  { name: "Israel", products: "Paint formulations" },
  { name: "Turkey", products: "Hot melt adhesives" },
  { name: "Uganda", products: "Rubber-based, mattress adhesives" },
  { name: "Oman", products: "Silicone sealant" },
  { name: "Germany", products: "Advisory partnerships (via referrals)" },
  { name: "Singapore", products: "Advisory partnerships (via referrals)" },
];

export const INDIAN_REGIONS = [
  { region: "Maharashtra", cities: ["Mumbai", "Pune", "Kolhapur", "Nashik", "Aurangabad", "Solapur", "Ichalkaranji", "Nagpur", "Miraj", "Ahmadnagar"] },
  { region: "Delhi & NCR", cities: ["Delhi"] },
  { region: "Punjab & North", cities: ["Ambala", "Jalandhar", "Chandigarh"] },
  { region: "Uttar Pradesh", cities: ["Agra", "Aligarh", "Kanpur", "Lucknow", "Firozabad", "Rudrapur"] },
  { region: "Rajasthan", cities: ["Kota", "Alwar", "Jodhpur", "Jaipur", "Falna", "Bhilwara"] },
  { region: "Madhya Pradesh", cities: ["Bhopal", "Indore"] },
  { region: "Gujarat", cities: ["Ahmedabad", "Morbi", "Rajkot", "Valsad", "Surat"] },
  { region: "Karnataka", cities: ["Bangalore", "Belgaum", "Hubli"] },
  { region: "Andhra & Telangana", cities: ["Renigunta", "Hyderabad"] },
  { region: "Tamil Nadu", cities: ["Chennai", "Karur"] },
  { region: "Bihar", cities: ["Patna"] },
  { region: "West Bengal", cities: ["Kolkata"] },
  { region: "Assam", cities: ["Jorhat"] },
];

// Company timeline (45 years — founded ~1980)
export const TIMELINE = [
  { period: "1980", title: "Founded in Pune", desc: "Established as an independent adhesive advisory — outside any single manufacturer's distribution network." },
  { period: "1990s", title: "Furniture & Packaging", desc: "Built a name with furniture and packaging majors across Maharashtra's industrial belt." },
  { period: "2000s", title: "Pan-India Reach", desc: "Expanded consulting operations to Delhi, Gujarat, Karnataka, Tamil Nadu and beyond." },
  { period: "2010s", title: "Construction Chemicals & Coatings", desc: "Entered construction chemicals, road marking paints and industrial coatings as infrastructure scaled nationally." },
  { period: "2020s", title: "Going Global", desc: "First international clients onboarded across UAE, Egypt, Bangladesh, Sri Lanka, Nepal, Uzbekistan, Zimbabwe, Ethiopia, Israel, Turkey, Uganda and Oman." },
  { period: "Today", title: "45 Years · 1,200+ Projects", desc: "16 product categories, 300+ formulations, and continuous advisory to manufacturers, contractors and OEMs — in India and abroad." },
];

export const TEAM = [
  { initials: "JK", name: "J. B. Keer", role: "Founder & Principal Consultant" },
  { initials: "NK", name: "Nikita Keer", role: "Manager — Administration & Accounts" },
  { initials: "AD", name: "Ankita Deshpande", role: "Manager — Customer Relationship" },
];
