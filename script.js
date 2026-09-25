/**
 * Andy Tran - Engineering Projects & DIY Hub JS Module
 */

// Comprehensive Project Data Object for Modal Dynamic Popups
const projectDetails = {
    'pc1': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'High-Performance Liquid Cooling Thermal Benchmarking',
        tags: ['Custom Loops', 'Thermal Testing', 'Overclocking', 'Stress Benchmarks'],
        content: `
            <p class="mb-3">Detailed walkthrough of assembling, pressure testing, and thermal logging for high-end custom liquid-cooled (water loop) gaming and workstation PCs.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Key Steps:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Bending acrylic/PETG hard tubing with heat guns and Mandrel tools.</li>
                <li>Air pressure leak testing at 0.5 bar for 15 minutes before coolant filling.</li>
                <li>Evaluating liquid thermal delta across CPU/GPU blocks under FurMark and Prime95 stress workloads.</li>
            </ul>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-cyan-400">
                // BENCHMARK RESULT: Maximum load delta kept under 18°C above ambient temperature.
            </div>
        `
    },
    'pc2': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'Multilayer PCB Component Repair & SPI BIOS Flashing',
        tags: ['Multimeter', 'Oscilloscope', 'Soldering', 'EEPROM Flashing'],
        content: `
            <p class="mb-3">Component-level diagnosis and physical repair of non-booting motherboard PCBs suffering from corrupted EEPROM BIOS chips or shorted ceramic SMD capacitors.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Diagnostic Procedure:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Using a digital multimeter to test ground continuity and isolate shorted power rails.</li>
                <li>Hooking up an oscilloscope to probe SPI clock and MOSI/MISO pin signals.</li>
                <li>Desoldering corrupted SOP-8 flash ICs and reprogramming using CH341A hardware interfaces.</li>
            </ul>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-amber-400">
                // OUTCOME: Successfully restored 12+ dead server motherboard PCBs during RMA testing.
            </div>
        `
    },
    'pc3': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'Banking Server HSM Security Integration & QC Workflow',
        tags: ['Banking Servers', 'HSM Hardware', 'ISO Compliance', 'ERP System'],
        content: `
            <p class="mb-3">System integration workflows for high-security enterprise banking servers embedded with Hardware Security Modules (HSM).</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Key Quality & QC Processes:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Assembly in accordance with ISO 9001 quality standards and static-safe environments.</li>
                <li>Flashing dedicated cryptographic security firmware onto HSM modules.</li>
                <li>Integrating component serial tracking with Acumatica ERP for end-to-end auditability.</li>
            </ul>
        `
    },
    'el1': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'ESP32 Wireless Gas & Environment Sensor Telemetry',
        tags: ['ESP32', 'C++', 'MQ Sensors', 'MQTT Telemetry'],
        content: `
            <p class="mb-3">Designing a standalone sensor circuit that logs gas levels and environmental parameters wirelessly to a home server dashboard.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Implementation:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Wiring MQ series gas sensors with load resistors to ESP32 analog pins.</li>
                <li>Writing asynchronous C++ code utilizing Wi-Fi Manager and MQTT protocols.</li>
                <li>Calibrating analog voltage thresholds to eliminate baseline noise.</li>
            </ul>
        `
    },
    'el2': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'Logic Gate IC 74HC08 Analysis & Circuit Tinkercad Modeling',
        tags: ['Logic Gates', 'Tinkercad', 'Digital Circuits', 'Breadboard'],
        content: `
            <p class="mb-3">Educational hardware analysis of the 74HC08 Quad 2-Input AND Gate IC using virtual simulations and physical breadboard setups.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Key Highlights:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Designing Tinkercad schematics to verify IC voltage output logic levels under varying load states.</li>
                <li>Implementing 10k pull-down resistors to prevent floating gate behavior on digital inputs.</li>
            </ul>
        `
    },
    'el3': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'Variable Buck DC-DC Converter & MOSFET Switch Design',
        tags: ['Power Electronics', 'MOSFETs', 'Circuit Analysis', 'Kirchhoff Laws'],
        content: `
            <p class="mb-3">Hands-on application of electrical engineering principles: designing a step-down buck converter circuit driven by N-Channel MOSFETs.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Calculations & Circuit Design:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Calculating duty cycle parameters: V_out = D * V_in.</li>
                <li>Selecting Flyback Diodes and Inductor values to minimize ripple voltage.</li>
                <li>Verifying Kirchhoff’s Current and Voltage Laws across physical circuit branches.</li>
            </ul>
        `
    },
    'net1': {
        category: 'IT / NETWORKING',
        title: 'Segmented VLAN & Isolated Hardware Test Lab Network',
        tags: ['VLANs', 'Managed Switch', 'Network Isolation', 'Firewall'],
        content: `
            <p class="mb-3">Architecting a segregated network environment using 802.1Q tagged VLANs to isolate suspect client systems undergoing hardware testing or malware analysis.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Network Architecture:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>VLAN 10: Internal Management & Secure Storage.</li>
                <li>VLAN 20: Isolated Hardware Testing Bench (No local broadcast routing).</li>
                <li>Configuring pfSense firewall rules to block inter-VLAN communication.</li>
            </ul>
        `
    },
    'net2': {
        category: 'IT / NETWORKING',
        title: 'High-Availability TrueNAS Core/SCALE File Server',
        tags: ['TrueNAS', 'ZFS RAID', 'NFS / SMB', 'Data Security'],
        content: `
            <p class="mb-3">Building a dedicated Network Attached Storage (NAS) box using TrueNAS SCALE to house system backup images and software tools.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">System Specs & Configuration:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Configured 6x SAS drives in ZFS RAID-Z2 for double parity fault tolerance.</li>
                <li>Configured SMB shares with Active Directory / Local User permission lists.</li>
                <li>Set up automated ZFS snapshots scheduled every 24 hours.</li>
            </ul>
        `
    },
    'net3': {
        category: 'IT / NETWORKING',
        title: 'Mass OS Deployment via PXE Network Boot & Rescuezilla',
        tags: ['PXE Boot', 'Clonezilla', 'Rescuezilla', 'SysAdmin'],
        content: `
            <p class="mb-3">Deploying disk clone images to dozens of workstation systems simultaneously over the local network using PXE boot servers.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Deployment Strategy:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Configuring iPXE boot menus with custom HTTP/TFTP kernel images.</li>
                <li>Utilizing Clonezilla Multicast mode to image 15+ systems in under 10 minutes.</li>
                <li>Using Rescuezilla for quick bare-metal backup and partition cloning.</li>
            </ul>
        `
    }
};

// Category Filter Script
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryBlocks = document.querySelectorAll('.category-block');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    // Filter by Category Buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-md', 'active');
                btn.classList.add('text-slate-400');
            });
            
            button.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-md', 'active');
            button.classList.remove('text-slate-400');

            const selectedCategory = button.getAttribute('data-category');
            applyFilters(selectedCategory, searchInput.value.toLowerCase().trim());
        });
    });

    // Search Input Event
    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');
        const query = e.target.value.toLowerCase().trim();
        applyFilters(activeCategory, query);
    });

    // Core Filtering Function
    function applyFilters(category, query) {
        let visibleCardCount = 0;

        categoryBlocks.forEach(block => {
            const blockCategory = block.getAttribute('data-category-group');
            const cardsInBlock = block.querySelectorAll('.project-card');
            let visibleInBlock = 0;

            cardsInBlock.forEach(card => {
                const titleText = card.getAttribute('data-title').toLowerCase();
                const cardCategory = card.getAttribute('data-tags');
                
                const matchesCategory = (category === 'all' || cardCategory === category);
                const matchesSearch = (query === '' || titleText.includes(query));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    visibleInBlock++;
                    visibleCardCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show or hide whole category section based on matches
            if (visibleInBlock > 0) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });

        // Toggle No Results Message
        if (visibleCardCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
});

// Modal Control Functions
function openProjectModal(key) {
    const modal = document.getElementById('projectModal');
    const data = projectDetails[key];

    if (!data) return;

    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    
    let tagsHtml = `<div class="flex flex-wrap gap-1.5 mb-4">`;
    data.tags.forEach(t => {
        tagsHtml += `<span class="tech-tag">${t}</span>`;
    });
    tagsHtml += `</div>`;

    document.getElementById('modalBody').innerHTML = tagsHtml + data.content;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
}

// Close Modal on Outside Overlay Click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});