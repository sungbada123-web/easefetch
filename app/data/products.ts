export interface Product {
    id: string;
    name: string;
    series: 'logistics' | 'cold-chain' | 'lifestyle' | 'enterprise' | 'specialty' | 'retail' | 'software';
    seriesName: string;
    tagline: string;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    image: string;
    color: string;
    badge?: string;
    href: string;
}

export const products: Product[] = [
    // --- SERIES 1: URBAN LOGISTICS ---
    {
        id: 'standard-parcel',
        name: 'Smart Parcel Locker',
        series: 'logistics',
        seriesName: 'Urban Logistics Series',
        tagline: 'The Standard for Last-Mile Efficiency',
        description: 'Modular, high-density parcel locker system designed for residential complexes and office parks. Supports courier-agnostic integration and 24/7 self-service turnover.',
        features: ['Modular column design', 'Corrosion-resistant galvanized steel', '1080p surveillance integrated', 'Barcode & QR scanner'],
        specs: [
            { label: 'Modules', value: 'Main + unlimited extensions' },
            { label: 'Screen', value: '21.5" Cap Touch' },
            { label: 'IP Rating', value: 'IP54 (Indoor/Sheltered)' },
            { label: 'Power', value: '110-240V AC' }
        ],
        image: '/images/product-standard-parcel.png',
        color: '#2C3E50',
        badge: 'Best Seller',
        href: '/products/standard-parcel'
    },
    {
        id: 'outdoor-tower',
        name: 'Outdoor Express Tower',
        series: 'logistics',
        seriesName: 'Urban Logistics Series',
        tagline: 'Ruggedized for Extreme Environments',
        description: 'Heavy-duty outdoor standalone unit with integrated rain shelter and IP65 waterproofing. Perfect for public plazas and street-side deployment.',
        features: ['IP65 Waterproofing', 'Anti-graffiti coating', 'High-brightness sunlight readable display', 'Solar ready option'],
        specs: [
            { label: 'Material', value: 'Double-walled Steel' },
            { label: 'Temp Range', value: '-30°C to +50°C' },
            { label: 'Lock Type', value: 'Motorized Latch' },
            { label: 'Mounting', value: 'Concrete Anchor' }
        ],
        image: '/images/product-outdoor-tower.png',
        color: '#E67E22',
        href: '/products/outdoor-tower'
    },
    {
        id: 'auto-robot',
        name: 'Autonomous Mobile Locker',
        series: 'logistics',
        seriesName: 'Urban Logistics Series',
        tagline: 'Logistics on Wheels',
        description: 'Self-driving L4 autonomous vehicle with integrated locker compartments. Delivers directly to curbside or building lobby, reducing courier walking time to zero.',
        features: ['L4 Autonomous Navigation', 'LiDAR obstacle avoidance', 'Auto-return to base', 'App-based unlocking'],
        specs: [
            { label: 'Speed', value: 'Max 25km/h' },
            { label: 'Range', value: '80km per charge' },
            { label: 'Payload', value: '150kg' },
            { label: 'Compartments', value: '12 Slots' }
        ],
        image: '/images/product-auto-robot.png',
        color: '#34495E',
        badge: 'Innovation',
        href: '/products/auto-robot'
    },

    // --- SERIES 2: COLD CHAIN ---
    {
        id: 'fresh-food',
        name: 'Fresh Food Locker',
        series: 'cold-chain',
        seriesName: 'Cold Chain Series',
        tagline: 'Farm to Table, Unbroken Chain',
        description: 'Refrigerated locker system maintaining 0-4°C stable temperature. Ideal for grocery delivery, meal kits, and perishable pharmaceutical storage.',
        features: ['Precise temp control (0-4°C)', 'Remote temp monitoring', 'Anti-condensation glass', 'Ozone disinfection'],
        specs: [
            { label: 'Refrigerant', value: 'R290 Eco' },
            { label: 'Insulation', value: '60mm Polyurethane' },
            { label: 'Energy', value: 'Smart Cycle Mode' },
            { label: 'Compartments', value: '18-24 per module' }
        ],
        image: '/images/product-fresh-food.png',
        color: '#27AE60',
        href: '/products/fresh-food'
    },
    {
        id: 'heated-meal',
        name: 'Heated Meal Locker',
        series: 'cold-chain',
        seriesName: 'Cold Chain Series',
        tagline: 'Hot Food, Zero Wait',
        description: 'Thermostatically controlled heated compartments (40-60°C) for food delivery pickup. Keeps takeout orders standard-compliant and appetizing.',
        features: ['Constant heating (60°C)', 'Thermal glass display', 'UV sterilization', 'Easy-clean interior'],
        specs: [
            { label: 'Temp', value: '40°C - 65°C' },
            { label: 'Heating', value: 'PTC Element' },
            { label: 'Safety', value: 'Overheat Protection' },
            { label: 'Material', value: 'Food Grade Steel' }
        ],
        image: '/images/product-heated-meal.png',
        color: '#D35400',
        href: '/products/heated-meal'
    },

    // --- SERIES 3: LIFESTYLE ---
    {
        id: 'laundry-service',
        name: 'Laundry Service Locker',
        series: 'lifestyle',
        seriesName: 'Lifestyle Series',
        tagline: '24/7 Dry Cleaning Concierge',
        description: 'A hybrid system with hanging closet modules and folded item compartments. Facilitates drop-off and pickup for laundry businesses without staffing a front desk.',
        features: ['Hanging rail modules', 'Dirty laundry drop chute', 'App payment integration', 'Ventilated doors'],
        specs: [
            { label: 'Height', value: '2000mm Standard' },
            { label: 'Payment', value: 'Card/QR/App' },
            { label: 'Finish', value: 'Woodgrain / White' },
            { label: 'Usage', value: 'Condo / Office' }
        ],
        image: '/images/product-laundry-service.png',
        color: '#8E44AD',
        href: '/products/laundry-service'
    },
    {
        id: 'library-book',
        name: 'Library Book Station',
        series: 'lifestyle',
        seriesName: 'Lifestyle Series',
        tagline: 'The Neighborhood Micro-Library',
        description: 'Self-service book dispensing and return kiosk. RFID integration tracks inventory automatically. Extends library reach to subway stations and community centers.',
        features: ['RFID Book Tracking', 'Auto-sort return bin', 'Touchscreen catalog', 'Receipt printer'],
        specs: [
            { label: 'Capacity', value: '300-500 Books' },
            { label: 'RFID', value: 'ISO 15693 / 18000-3' },
            { label: 'Network', value: '4G / LAN' },
            { label: 'Access', value: 'Library Card Scan' }
        ],
        image: '/images/product-library-book.png',
        color: '#F39C12',
        href: '/products/library-book'
    },

    // --- SERIES 4: ENTERPRISE ASSET ---
    {
        id: 'it-asset',
        name: 'IT Asset Manager',
        series: 'enterprise',
        seriesName: 'Enterprise Series',
        tagline: 'Automated IT Helpdesk',
        description: 'Secure dispensing for laptops, keyboards, and mice. Tracks expensive company assets and automates employee equipment loan/return workflows.',
        features: ['Internal Charging (USB-C/AC)', 'Asset Tag Scanning', 'Employee Badge Auth', 'Loan duration tracking'],
        specs: [
            { label: 'Charging', value: '65W PD Fast Charge' },
            { label: 'Auth', value: 'NFC/HID/RFID' },
            { label: 'Audit', value: 'Real-time logs' },
            { label: 'Slots', value: 'Configurable' }
        ],
        image: '/images/product-it-asset.png',
        color: '#2980B9',
        badge: 'Corporate',
        href: '/products/it-asset'
    },
    {
        id: 'doc-exchange',
        name: 'Secure Doc Exchange',
        series: 'enterprise',
        seriesName: 'Enterprise Series',
        tagline: 'Confidential Paperwork Handover',
        description: 'Ultra-secure, slim-slot lockers for exchanging legal documents, contracts, or keys. Ensures chain of custody for sensitive physical items.',
        features: ['Slim profile slots', 'Millisecond audit trail', 'Biometric option', 'Auto-notify recipient'],
        specs: [
            { label: 'Security', value: 'Grade 3 Lock' },
            { label: 'Slot height', value: '50mm / 100mm' },
            { label: 'Finish', value: 'Brushed Aluminum' },
            { label: 'Alerts', value: 'SMS / Email' }
        ],
        image: '/images/product-doc-exchange.png',
        color: '#95A5A6',
        href: '/products/doc-exchange'
    },
    {
        id: 'smart-tool-crib',
        name: 'Smart Tool Crib',
        series: 'enterprise',
        seriesName: 'Enterprise Series',
        tagline: 'Factory Floor Efficiency',
        description: 'Ruggedized industrial locker with weight-sensing shelves. Automatically detects missing tools (FOD prevention) and tracks usage by shift workers.',
        features: ['Weight scale sensors (±1g)', 'Heavy duty steel', 'Fingerprint access', 'Calibration tracking'],
        specs: [
            { label: 'Load', value: '100kg per shelf' },
            { label: 'Sensor', value: 'Load Cell Matrix' },
            { label: 'Finish', value: 'Safety Yellow' },
            { label: 'Power', value: '24V Industrial' }
        ],
        image: '/images/product-smart-tool-crib.png',
        color: '#F1C40F',
        href: '/products/smart-tool-crib'
    },

    // --- SERIES 5: SPECIALTY ---
    {
        id: 'pharmacy-pickup',
        name: 'Pharmacy Pickup Locker',
        series: 'specialty',
        seriesName: 'Specialty Series',
        tagline: '24/7 Prescription Collection',
        description: 'HIPAA/GDPR compliant locker for secure medication dispensing. Features privacy screens and integration with hospital information systems.',
        features: ['Privacy wings', 'Temp monitoring', 'ID verification', 'Restock audit software'],
        specs: [
            { label: 'Compliance', value: 'HIPAA / GDPR' },
            { label: 'Security', value: 'Patient Auth' },
            { label: 'Temp', value: 'Ambient / Cool' },
            { label: 'Material', value: 'Anti-bacterial' }
        ],
        image: '/images/product-pharmacy-pickup.png',
        color: '#C0392B',
        href: '/products/pharmacy-pickup'
    },
    {
        id: 'evidence-custody',
        name: 'Evidence Custody Locker',
        series: 'specialty',
        seriesName: 'Specialty Series',
        tagline: 'Chain of Custody Assurance',
        description: 'Pass-through locker system for police stations and evidence rooms. Officers deposit from one side; evidence tech retrieves from trusted rear side.',
        features: ['Pass-through design', 'Electronic logging', 'Non-retrievable deposit', 'Evidence bag fit'],
        specs: [
            { label: 'Steel', value: '14 Gauge' },
            { label: 'Lock', value: 'Solenoid / Key Override' },
            { label: 'Log', value: 'Immutable Ledger' },
            { label: 'Install', value: 'In-Wall' }
        ],
        image: '/images/product-evidence.png',
        color: '#7F8C8D',
        href: '/products/evidence-custody'
    },

    // --- SERIES 6: RETAIL ---
    {
        id: 'click-collect',
        name: 'Click & Collect Hub',
        series: 'retail',
        seriesName: 'Retail Series',
        tagline: 'The BOPIS Engine',
        description: 'A vibrant, branded hub for shopping malls. Aggregates orders from multiple retailers into one pickup point, driving foot traffic and reducing queue times.',
        features: ['Custom branding wrap', 'Barcode / QR scan', 'Oversized slots', 'Marketing display screen'],
        specs: [
            { label: 'Display', value: '43" Ad Screen' },
            { label: 'Scanner', value: '2D Imager' },
            { label: 'Theme', value: 'Customizable' },
            { label: 'Connectivity', value: 'WiFi/4G' }
        ],
        image: '/images/product-click-collect.png',
        color: '#E74C3C',
        href: '/products/click-collect'
    },
    {
        id: 'smart-vending',
        name: 'Smart Vending Locker',
        series: 'retail',
        seriesName: 'Retail Series',
        tagline: 'High-Value Automated Retail',
        description: 'Transparent door lockers with individual payment terminals per box or central kiosk. Perfect for selling electronics, beauty products, or mystery boxes.',
        features: ['See-through Polycarbonate', 'Internal LED lighting (RGB)', 'Cart payment system', 'Inventory sync'],
        specs: [
            { label: 'Door', value: 'Transparent PC' },
            { label: 'Lights', value: 'App Controlled RGB' },
            { label: 'Payment', value: 'Nayax / Stripe' },
            { label: 'Control', value: 'Cloud Dashboard' }
        ],
        image: '/images/product-smart-vending.png',
        color: '#16A085',
        badge: 'Popular',
        href: '/products/smart-vending'
    },

    // --- SOFTWARE ---
    {
        id: 'cloud-core',
        name: 'Cloud Core Dashboard',
        series: 'software',
        seriesName: 'Software Suite',
        tagline: 'Centralized Network Command',
        description: 'The brain of the operation. Manage thousands of lockers, specialized user roles, and view real-time health statistics from a single web dashboard.',
        features: ['Real-time status map', 'Remote open/reboot', 'User role management', 'API key generation'],
        specs: [
            { label: 'Platform', value: 'SaaS / On-Prem' },
            { label: 'Uptime', value: '99.99% SLA' },
            { label: 'Security', value: 'AES-256 Encrypted' },
            { label: 'Mobile', value: 'Responsive Web' }
        ],
        image: '/images/software-cloud.png',
        color: '#2C3E50',
        href: '/products/cloud-core'
    }
];
