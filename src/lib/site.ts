export const SITE = {
  name: "Jeep Insurance",
  domain: "jeepinsurance.co",
  url: "https://jeepinsurance.co",
  tagline: "Insurance for Jeep Tour & Rental Operators",
  description: "Specialized insurance for commercial Jeep and off-road tour, rental, and event operators — general liability, participant accident, rental fleet physical damage, abuse & molestation liability, commercial auto, special event liability, and workers comp. Licensed in all 50 states. Same-day quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "general-liability-insurance",
    title: "General Liability Insurance",
    short: "Covers third-party bodily injury and property damage across your tour and rental operation — the foundation policy.",
    icon: "Shield",
    description:
      "General liability is the core policy for any commercial Jeep tour or rental business. It protects against third-party claims of bodily injury and property damage — at your staging area, your office, the trailhead, and around your operation.",
    longDescription: `## General Liability for Jeep Tour & Rental Operators

Running guided off-road tours or a 4x4 rental fleet means the public is constantly around your vehicles, your staging area, and the trail. General liability insurance is the foundation that protects your business when a customer, bystander, or third party is injured or their property is damaged in connection with your operation.

## What GL Covers

- **Bodily injury:** A customer or bystander hurt at your staging area, office, or trailhead
- **Property damage:** Your operation damages someone else's property or vehicle
- **Personal & advertising injury:** Marketing and reputational claims
- **Medical payments:** Minor injuries handled without a lawsuit
- **Legal defense:** Defense costs for covered claims, even unfounded ones

## Why GL Alone Is Not Enough

General liability typically covers third-party and bystander claims — but it usually **excludes injuries to the passengers and riders actively participating** in your tour or operating a rental (a participant exclusion), and it doesn't cover physical damage to your own 4x4 fleet. Those gaps are filled by participant accident coverage and rental fleet physical damage coverage. GL also commonly excludes abuse & molestation claims, which require a separate endorsement.

## Permits & Land-Use Requirements

BLM permits, national forest and state land-use authorizations, private trail parks, and event venues routinely require proof of general liability, often naming the land manager or venue as additional insured. We issue certificates same-day.

## Why Off-Road Operators Need a Specialist

A general business carrier may not understand the difference between a bystander injury at your booth and a rollover on a rock-crawl trail. We place Jeep and off-road operators with carriers that write outdoor recreation risk and structure GL alongside participant, fleet, and abuse coverage.`,
    coverages: [
      "Third-party bodily injury",
      "Property damage liability",
      "Bystander & spectator claims",
      "Personal & advertising injury",
      "Medical payments",
      "Additional insured for land managers & venues",
    ],
    faqs: [
      {
        q: "Does general liability cover injuries to my tour passengers?",
        a: "Usually not while they're actively on the tour or operating a rental — that's a participant exclusion on most GL forms. You need participant accident coverage for the passengers and riders themselves. GL covers third parties and bystanders.",
      },
      {
        q: "Do BLM or land-use permits require liability insurance?",
        a: "Yes. Land managers, national forests, and trail parks typically require proof of general liability and often an additional insured endorsement naming them. We issue certificates same-day.",
      },
    ],
  },
  {
    slug: "participant-accident-insurance",
    title: "Participant Accident Insurance",
    short: "Medical coverage for the tour passengers and rental riders injured on your trails — the GL gap.",
    icon: "HeartPulse",
    description:
      "Participant accident insurance pays medical expenses when a tour passenger or rental rider is injured during your activity — the rollover, trail-accident, and getting-in/out exposure general liability typically excludes.",
    longDescription: `## Participant Accident Insurance for Off-Road Operators

The people in your Jeeps are doing exactly what your business is built around — riding the trails. Injuries happen even in well-run operations: rollovers, hard impacts on rough terrain, getting in and out of lifted vehicles, and dust-related incidents. General liability usually **excludes** injuries to the participating passenger, and participant accident coverage fills that gap.

## What Participant Accident Covers

- **Medical expenses** for injuries to passengers and riders during covered activities
- **Primary or excess medical** toward bills the guest's own health plan doesn't cover
- **Accidental death & dismemberment** benefits for catastrophic accidents
- **Covered activities:** guided tours, self-drive rentals, instruction, and staging-area handling

## Why It Matters for Jeep Operators

A rollover or hard impact on a technical trail can produce serious injuries and large medical bills. A guest facing an ER bill after an accident on your tour is far less likely to sue when a participant accident policy steps in to pay medical costs. It protects your guests **and** dramatically reduces the chance an injury becomes a liability lawsuit against you.

## Waivers Are Not Insurance

Many operators rely on a signed waiver. Waivers help, but they are routinely challenged — and they pay nothing toward a guest's medical bills. Participant accident coverage is the financial backstop a waiver can't provide. Use both: a strong release **and** participant accident coverage.

## Blanket Coverage for Your Guests

Most operators carry a **blanket** participant accident policy covering all tour passengers and rental customers, priced per participant or by volume. We structure the limit and deductible to match your ride volume and budget.`,
    coverages: [
      "Accident medical expense",
      "Primary or excess medical",
      "Accidental death & dismemberment",
      "Guided tour & rental coverage",
      "Blanket participant basis",
      "Staging-area handling coverage",
    ],
    faqs: [
      {
        q: "Isn't general liability enough to cover an injured passenger?",
        a: "No. GL generally excludes injuries to participants actively on a tour or operating a rental. Participant accident insurance is the coverage that pays their medical bills — one of the most important policies a Jeep tour operator can carry.",
      },
      {
        q: "Does a signed waiver replace participant accident insurance?",
        a: "No. Waivers can be challenged and pay nothing toward medical bills. Participant accident coverage pays medical costs regardless and helps keep a passenger injury from becoming a lawsuit. Carry both.",
      },
    ],
  },
  {
    slug: "rental-fleet-physical-damage-insurance",
    title: "Rental Fleet Physical Damage",
    short: "Physical-damage coverage for your Jeep & 4x4 rental fleet — rollovers, trail damage, theft, and renter-caused damage.",
    icon: "Car",
    description:
      "Rental fleet physical damage coverage protects your Jeep and 4x4 fleet against rollover and trail damage, theft, and renter-caused damage — off-road use that standard auto policies exclude, and the asset that runs your business.",
    longDescription: `## Rental Fleet Physical Damage for Jeep Operators

Your Jeeps and 4x4s are the revenue-generating core of your business — and they take a beating on the trail. Rental fleet physical damage coverage protects the fleet itself against the damage and loss that standard auto policies and general liability specifically exclude.

## What's Covered

- **Rollover and trail damage** on technical terrain — the most common fleet loss
- **Collision and impact damage** to the vehicles
- **Theft and vandalism** from staging areas, lots, and storage
- **Renter-caused damage** beyond normal wear (per policy terms)
- **In-transit damage** while hauling or shuttling the fleet
- **Agreed-value or replacement-cost** settlement options

## Why Standard Auto Won't Respond

Most personal and even standard commercial auto policies contain an **off-road use exclusion** — exactly the activity your business is built on. A rollover on a rock-crawl trail or a vehicle damaged on a rental can be denied under a standard policy. Rental fleet physical damage coverage is written for off-road commercial use.

## Setting Your Fleet Limit

Your limit should reflect the **total value of your fleet** and the maximum exposed at one time (including units on the trail, at the staging area, and in transit). We help you schedule the fleet — by unit or on a blanket basis — and set agreed values so there's no depreciation surprise after a loss.

## Documentation Lowers Your Cost

Carriers reward operators who run GPS/telematics, document pre- and post-rental inspections, and keep maintenance logs and VINs. Good records speed claims and improve your pricing.`,
    coverages: [
      "Rollover & trail damage",
      "Collision & impact damage",
      "Theft & vandalism",
      "Renter-caused damage",
      "In-transit / hauling coverage",
      "Agreed-value fleet scheduling",
    ],
    faqs: [
      {
        q: "Doesn't my commercial auto policy cover my fleet on the trail?",
        a: "Usually not. Standard auto policies typically exclude off-road use — the core of your business. Rollovers, trail damage, theft, and renter-caused damage to your 4x4 fleet require rental fleet physical damage coverage written for off-road commercial use.",
      },
      {
        q: "How much fleet coverage do I need?",
        a: "Enough to cover the total value of your fleet and the maximum exposed at once, including units on the trail and in transit. We schedule units with agreed values so a destroyed Jeep is replaced without a depreciation gap.",
      },
    ],
  },
  {
    slug: "abuse-molestation-liability-insurance",
    title: "Abuse & Molestation Liability Insurance",
    short: "Essential protection when your tours serve minors, families, or youth groups — coverage standard GL excludes.",
    icon: "ShieldCheck",
    description:
      "Abuse & molestation (A&M) liability covers claims alleging abuse, molestation, or negligent supervision, hiring, or retention — critical for tour and rental operators who serve minors, families, and youth groups, since standard GL excludes it.",
    longDescription: `## Abuse & Molestation Liability for Tour & Rental Operators

Guided Jeep tours and off-road outfitters regularly serve families, minors, summer camps, scout troops, and youth groups, with guides and staff in close contact with guests for hours on the trail. That creates an exposure most operators overlook — and one that most general liability policies **specifically exclude**. Without a dedicated abuse & molestation endorsement, a single allegation could be financially devastating and entirely uncovered.

## What A&M Coverage Responds To

- **Allegations of abuse or molestation** by a guide, employee, or volunteer
- **Negligent hiring:** Failure to properly screen or background-check staff
- **Negligent supervision:** Inadequate oversight that allowed misconduct
- **Negligent retention:** Keeping a staff member after warning signs
- **Defense costs:** Legal defense even for allegations that prove unfounded

## Why Standard GL Won't Help

Insurers added broad abuse and molestation exclusions to most liability forms years ago. If a claim is filed and you only carry standard GL, you may fund both the defense and any settlement entirely out of pocket. A&M coverage — written as an endorsement or standalone policy — is what actually responds.

## Risk Management That Lowers Your Exposure

Carriers price A&M based on your safeguards. Strong operators implement:

- **Background checks** on every guide, employee, and volunteer
- **Two-deep leadership** — never one adult alone with one minor
- **Documented guide conduct and communication policies**
- **Training and clear reporting procedures**

These controls reduce risk *and* help you qualify for better terms and limits.

## Especially Important If You Serve Youth Groups

If your tours host camps, school trips, scout groups, or family minors, treat abuse & molestation coverage as essential — not optional. We make sure it's in place with adequate limits.`,
    coverages: [
      "Abuse & molestation defense and liability",
      "Negligent hiring coverage",
      "Negligent supervision coverage",
      "Negligent retention coverage",
      "Guide & employee acts",
      "Defense cost coverage",
    ],
    faqs: [
      {
        q: "Why would a Jeep tour operator need abuse & molestation coverage?",
        a: "Because tours and rentals often serve minors, families, and youth groups with guides in close contact for hours — and most GL policies exclude abuse and molestation claims. A dedicated A&M endorsement is what responds, backed by background checks and two-deep leadership.",
      },
      {
        q: "Doesn't my general liability already cover this?",
        a: "Almost never. Most GL policies carry an explicit abuse and molestation exclusion. You need a dedicated A&M endorsement or standalone policy — without it, these claims are typically uninsured.",
      },
    ],
  },
  {
    slug: "commercial-auto-insurance",
    title: "Commercial Auto Insurance",
    short: "Covers your tour and shuttle vehicles on public roads, plus the trucks and trailers that haul your fleet.",
    icon: "Truck",
    description:
      "Commercial auto covers the on-road vehicles your business owns and operates — tour vehicles driven on public roads to the trailhead, guest shuttle vans, and the trucks and trailers that haul your 4x4 fleet. Personal auto excludes this business use.",
    longDescription: `## Commercial Auto for Jeep Tour & Rental Operators

Most off-road tours involve public roads — driving or shuttling guests from your office to the trailhead, and hauling vehicles between locations. Commercial auto covers these on-road vehicles; a personal auto policy excludes business use and won't respond.

## What's Covered

- **Liability:** At-fault on-road accidents causing injury or property damage
- **Collision:** Damage to your owned tour and shuttle vehicles from a crash
- **Comprehensive:** Theft, fire, and weather damage to your road vehicles
- **Trailers:** The trailers that haul your 4x4 fleet
- **Hired & non-owned auto (HNOA):** Rented vehicles and employee vehicles used for the business
- **Passenger / shuttle exposure:** Moving paying guests by road

## Where Commercial Auto Stops and Other Coverages Begin

Commercial auto covers your **on-road** vehicles and their liability. It does **not** cover:

- **Off-road damage to the fleet** on the trail — that's rental fleet physical damage coverage
- **Passenger injuries on the tour** — that's participant accident coverage

We structure commercial auto alongside those coverages so the on-road exposure, the off-road fleet, and the riders are all protected with no gap.

## Guest Transport Matters

If you shuttle paying guests on public roads, underwriters look closely at your driver records and vehicle maintenance. A clean program improves both safety and pricing.`,
    coverages: [
      "On-road liability",
      "Collision & comprehensive",
      "Trailer coverage",
      "Hired & non-owned auto (HNOA)",
      "Guest shuttle / passenger exposure",
      "Multi-vehicle fleet",
    ],
    faqs: [
      {
        q: "Do I need commercial auto if I drive guests to the trailhead?",
        a: "Yes. Driving or shuttling paying guests on public roads is business use, which personal auto policies exclude. You need commercial auto so an on-road accident moving guests or hauling vehicles is covered.",
      },
      {
        q: "Does commercial auto cover my Jeeps on the trail?",
        a: "Generally no — most auto policies exclude off-road use. On-trail damage to your fleet is covered by rental fleet physical damage coverage. We coordinate commercial auto and fleet physical damage so there's no gap between road and trail.",
      },
    ],
  },
  {
    slug: "special-event-liability-insurance",
    title: "Special Event Liability Insurance",
    short: "Liability coverage for organized trail rides, 4x4 events, and club gatherings you host or organize.",
    icon: "CalendarDays",
    description:
      "Special event liability covers organized trail rides, 4x4 competitions, club gatherings, and outfitter events — the spectator and participant exposure that a standard policy or club coverage won't address for an organized event.",
    longDescription: `## Special Event Liability for Off-Road Events

When you organize a trail ride, a 4x4 competition, an overland gathering, or a club event, you take on the liability of an event host — for spectators, participants, vendors, and the public. Special event liability is the coverage built for that exposure, whether it's a one-time event or a recurring series.

## What It Covers

- **Spectator and attendee bodily injury** at the event
- **Participant injury** exposure for organized rides and competitions
- **Property damage** arising from the event
- **Vendor and setup exposure** at the venue
- **Additional insured** for the land manager, venue, or sponsor
- **One-time or annual** event coverage

## Why Club or Personal Coverage Won't Respond

A personal auto policy, a member's coverage, or a casual club arrangement is not built to cover an **organized event** with the public, paid entries, or spectators. When you advertise and host an event, you need event-specific liability — and venues and land managers will require proof of it.

## Permits, Venues & Additional Insured

BLM and land-use permits, fairgrounds, and private venues almost always require special event liability naming them as additional insured before they'll authorize your event. We issue event certificates and additional insured endorsements quickly so you can lock in your date.

## Participant Releases Plus Coverage

Strong participant releases help, but they aren't insurance. Pair signed releases with special event liability — and, for participant medical costs, participant accident coverage — for a complete event program.`,
    coverages: [
      "Spectator & attendee injury",
      "Participant injury at events",
      "Event property damage",
      "Vendor & setup coverage",
      "Venue / land-manager additional insured",
      "One-time or annual events",
    ],
    faqs: [
      {
        q: "Do I need special event coverage if I already have general liability?",
        a: "Often yes. A standard GL policy may not extend to a large organized event with spectators, paid entries, and vendors. Special event liability is written for that exposure, and venues and land managers typically require it as a condition of hosting.",
      },
      {
        q: "Can you name the venue or land manager as additional insured?",
        a: "Yes. BLM permits, fairgrounds, and private venues routinely require an additional insured endorsement before authorizing your event. We issue event certificates and AI endorsements quickly so you can confirm your date.",
      },
    ],
  },
  {
    slug: "workers-compensation-insurance",
    title: "Workers Compensation Insurance",
    short: "Covers medical bills and lost wages when guides, drivers, mechanics, or staff are injured on the job.",
    icon: "Users",
    description:
      "Workers compensation covers medical expenses and lost wages when tour guides, drivers, mechanics, or office staff are injured on the job — required in most states once you have employees.",
    longDescription: `## Workers Comp for Jeep Tour & Rental Operators

Off-road tour and rental work is physical and hazardous — guides ride rough trails all day, drivers shuttle guests, mechanics service the fleet, and staff load and stage vehicles. When an employee is hurt on the job, workers compensation pays their medical bills and lost wages, and in most states carrying it is required once you have employees.

## What Workers Comp Covers

- **Medical expenses** for work-related injuries
- **Lost wage replacement** during recovery
- **Disability benefits** for lasting injuries
- **Employer liability** if an injured worker pursues a claim
- **Return-to-work / light duty** support

## Common Staff Injuries

- A guide injured in a trail rollover or impact
- A mechanic hurt servicing or lifting on a vehicle
- Strains from loading, winching, and staging vehicles
- Heat-related illness working long days in the desert sun
- Shuttle-driver road accidents

## Classifying Your Payroll Correctly

Guides who ride the trails, drivers, mechanics, and office/clerical staff carry different classifications and rates. Misclassification can cost you at audit — or leave a gap. We classify your payroll accurately across these roles.

## Controlling Your Premium

- Maintain a clean claims record to keep your experience modifier low
- Document a safety program: trail protocols, vehicle handling, heat, and shop safety
- Return injured staff to light duty quickly to limit lost-time claims
- Verify coverage for any 1099 guides — uninsured contractors can be deemed your employees at audit

We place off-road operators with carriers that understand recreation and tour payroll.`,
    coverages: [
      "Medical expense coverage",
      "Lost wage replacement",
      "Disability benefits",
      "Employer liability",
      "Guides, drivers, mechanics & staff",
      "Return-to-work / light duty",
    ],
    faqs: [
      {
        q: "Do I need workers comp for a small tour operation?",
        a: "In almost every state, workers compensation is required as soon as you have employees — often from the first one. The thresholds vary by state, and we'll confirm the rule where your operation runs.",
      },
      {
        q: "Are my 1099 guides covered?",
        a: "Not automatically — and it's a common audit trap. In most states a contractor without their own coverage can be deemed your employee for workers comp. We help you classify guides correctly and verify contractor policies.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Insuring Recreation" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 1000, suffix: "+", label: "Tour & Rental Operators Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const FAQS = [
  {
    q: "What insurance does a commercial Jeep tour or rental operator need?",
    a: "At minimum: general liability and participant accident for injured passengers. Most operators also carry rental fleet physical damage for the 4x4 fleet, abuse & molestation liability (especially serving minors/groups), commercial auto for on-road and shuttle vehicles, special event liability for organized rides, and workers comp once they have employees.",
  },
  {
    q: "Does insurance cover injuries to my tour passengers and riders?",
    a: "Participant accident insurance does. It pays medical expenses when a passenger or rider is hurt on a guided tour or operating a rental — the rollover and trail-accident exposure general liability typically excludes.",
  },
  {
    q: "Is my Jeep fleet covered for rollover or trail damage?",
    a: "Only under rental fleet physical damage coverage. Standard auto policies usually exclude off-road use, and general liability covers third-party claims, not damage to your own vehicles. Fleet rollovers, trail damage, theft, and renter-caused damage need dedicated fleet coverage.",
  },
  {
    q: "I organize trail rides and 4x4 events — am I covered?",
    a: "Organized events need their own special event / general liability coverage with the venue or land manager named as additional insured. Personal and club coverage won't cover an organized event. We arrange event coverage alongside your tour and rental program.",
  },
  {
    q: "How much does Jeep tour & rental insurance cost?",
    a: "It varies with your ride volume, fleet size and value, whether you run guided tours or self-drive rentals, location and permits, events, and payroll. A small rental operation pays far less than a large multi-vehicle tour and event company. We shop specialty recreation carriers for a competitive same-day quote.",
  },
  {
    q: "Can you provide certificates for BLM permits and land managers?",
    a: "Yes. We issue certificates of insurance and additional insured endorsements same-day — exactly what BLM permits, national forests, trail parks, and event venues require.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Off-Road Tour & Rental Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
