
try {

const INK = '#16324F';

/* =====================================================================
   COMPONENT DIAGRAMS
===================================================================== */
const SYMBOLS = {
  cpu: `<svg viewBox="0 0 220 220" fill="none">
    <rect x="60" y="60" width="100" height="100" rx="4" stroke="${INK}" stroke-width="3" fill="none"/>
    <rect x="80" y="80" width="60" height="60" rx="2" stroke="${INK}" stroke-width="2" fill="none" opacity=".5"/>
    ${Array.from({length:8}).map((_,i)=>`<line x1="${72+i*11}" y1="60" x2="${72+i*11}" y2="46" stroke="${INK}" stroke-width="2.5"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<line x1="${72+i*11}" y1="160" x2="${72+i*11}" y2="174" stroke="${INK}" stroke-width="2.5"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<line x1="60" y1="${72+i*11}" x2="46" y2="${72+i*11}" stroke="${INK}" stroke-width="2.5"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<line x1="160" y1="${72+i*11}" x2="174" y2="${72+i*11}" stroke="${INK}" stroke-width="2.5"/>`).join('')}
    <circle cx="70" cy="70" r="3" fill="${INK}"/>
  </svg>`,
  ram: `<svg viewBox="0 0 260 120" fill="none">
    <rect x="10" y="15" width="240" height="70" rx="4" stroke="${INK}" stroke-width="3" fill="none"/>
    ${Array.from({length:10}).map((_,i)=>`<rect x="${25+i*23}" y="25" width="14" height="30" fill="${INK}" opacity=".6"/>`).join('')}
    <path d="M10 85 v18 h95 v-10 l8 -8 h137 v-18" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <rect x="105" y="93" width="8" height="10" fill="${INK}"/>
    <text x="115" y="112" font-size="10" fill="${INK}">notch (keys correct orientation)</text>
  </svg>`,
  motherboard: `<svg viewBox="0 0 260 200" fill="none">
    <rect x="10" y="10" width="240" height="180" rx="4" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <rect x="150" y="25" width="60" height="60" rx="4" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="155" y="20" font-size="9" fill="${INK}">CPU socket</text>
    <rect x="220" y="20" width="16" height="70" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <rect x="220" y="20" width="16" height="14" fill="${INK}" opacity=".5"/>
    <rect x="220" y="40" width="16" height="14" fill="${INK}" opacity=".5"/>
    <text x="220" y="98" font-size="8" fill="${INK}">RAM</text>
    <rect x="30" y="110" width="90" height="10" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <rect x="30" y="128" width="60" height="8" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="30" y="145" font-size="8" fill="${INK}">PCIe slots</text>
    <rect x="30" y="155" width="30" height="20" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="26" y="182" font-size="8" fill="${INK}">M.2</text>
    <rect x="140" y="150" width="26" height="26" rx="3" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="136" y="182" font-size="8" fill="${INK}">chipset</text>
    <rect x="185" y="150" width="14" height="26" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="178" y="182" font-size="8" fill="${INK}">VRM</text>
  </svg>`,
  gpu: `<svg viewBox="0 0 260 130" fill="none">
    <rect x="15" y="20" width="200" height="70" rx="6" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <circle cx="60" cy="55" r="22" stroke="${INK}" stroke-width="2" fill="none"/>
    <circle cx="130" cy="55" r="22" stroke="${INK}" stroke-width="2" fill="none"/>
    <rect x="215" y="35" width="14" height="40" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="180" y="105" font-size="8" fill="${INK}">display outputs</text>
    <rect x="10" y="95" width="10" height="14" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="35" y="16" font-size="8" fill="${INK}">PCIe power connector (top)</text>
    <rect x="60" y="2" width="26" height="10" stroke="${INK}" stroke-width="1.5" fill="none"/>
  </svg>`,
  storage: `<svg viewBox="0 0 260 120" fill="none">
    <circle cx="60" cy="60" r="45" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <circle cx="60" cy="60" r="10" fill="${INK}"/>
    <line x1="60" y1="60" x2="95" y2="30" stroke="${INK}" stroke-width="2"/>
    <text x="30" y="112" font-size="9" fill="${INK}">HDD (spinning platter)</text>
    <rect x="150" y="30" width="100" height="16" rx="3" stroke="${INK}" stroke-width="2" fill="none"/>
    <rect x="155" y="34" width="18" height="8" fill="${INK}" opacity=".5"/>
    <rect x="178" y="34" width="18" height="8" fill="${INK}" opacity=".5"/>
    <rect x="201" y="34" width="18" height="8" fill="${INK}" opacity=".5"/>
    <text x="150" y="60" font-size="9" fill="${INK}">M.2 NVMe SSD (flash chips)</text>
  </svg>`,
  psu: `<svg viewBox="0 0 220 140" fill="none">
    <rect x="15" y="15" width="150" height="90" rx="4" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <circle cx="130" cy="60" r="28" stroke="${INK}" stroke-width="2" fill="none"/>
    <line x1="130" y1="45" x2="130" y2="75" stroke="${INK}" stroke-width="2"/>
    <line x1="115" y1="60" x2="145" y2="60" stroke="${INK}" stroke-width="2"/>
    <rect x="175" y="30" width="16" height="24" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="165" y="20" font-size="8" fill="${INK}">24-pin ATX</text>
    <rect x="175" y="65" width="14" height="16" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="165" y="98" font-size="8" fill="${INK}">PCIe/SATA</text>
  </svg>`,
  cooling: `<svg viewBox="0 0 240 130" fill="none">
    <circle cx="55" cy="55" r="40" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <circle cx="55" cy="55" r="8" fill="${INK}"/>
    <path d="M55 15 a40 40 0 0 1 30 20 M55 15 a40 40 0 0 0 -30 20" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="20" y="112" font-size="9" fill="${INK}">Air cooler (fan)</text>
    <rect x="150" y="20" width="70" height="16" rx="3" stroke="${INK}" stroke-width="2" fill="none"/>
    <path d="M155 36 q0 30 8 60" stroke="${INK}" stroke-width="4" fill="none"/>
    <path d="M215 36 q0 30 -8 60" stroke="${INK}" stroke-width="4" fill="none"/>
    <circle cx="185" cy="100" r="20" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="150" y="126" font-size="9" fill="${INK}">AIO liquid (radiator + pump)</text>
  </svg>`,
  'pcie-expansion': `<svg viewBox="0 0 260 100" fill="none">
    <rect x="20" y="40" width="220" height="14" stroke="${INK}" stroke-width="2" fill="none"/>
    <rect x="20" y="10" width="70" height="14" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="20" y="6" font-size="9" fill="${INK}">x1</text>
    <rect x="100" y="10" width="140" height="14" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="100" y="6" font-size="9" fill="${INK}">x16 (full length)</text>
    <text x="20" y="76" font-size="9" fill="${INK}">Longer slot = more lanes = more bandwidth</text>
  </svg>`,
  ports: `<svg viewBox="0 0 260 120" fill="none">
    <rect x="10" y="20" width="40" height="20" rx="2" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="10" y="50" font-size="8" fill="${INK}">USB-A</text>
    <rect x="65" y="24" width="30" height="12" rx="6" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="60" y="50" font-size="8" fill="${INK}">USB-C</text>
    <rect x="115" y="18" width="34" height="24" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="110" y="50" font-size="8" fill="${INK}">HDMI</text>
    <path d="M175 18 l30 0 l6 24 l-42 0 Z" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="170" y="50" font-size="8" fill="${INK}">DisplayPort</text>
  </svg>`,
};

const CONCEPT_DIAGRAMS = {
  bootProcess: `<svg viewBox="0 0 260 200" fill="none">
    ${['Power On','POST\n(hardware check)','BIOS/UEFI firmware','Bootloader','Operating System'].map((label,i)=>`
      <rect x="30" y="${10+i*38}" width="200" height="28" rx="6" stroke="${INK}" stroke-width="2" fill="none"/>
      <text x="130" y="${10+i*38+18}" font-size="11" text-anchor="middle" fill="${INK}">${label.split('\\n')[0]}</text>
      ${i<4?`<line x1="130" y1="${10+i*38+28}" x2="130" y2="${10+(i+1)*38}" stroke="${INK}" stroke-width="2"/><path d="M130 ${10+(i+1)*38} l-5 -8 l10 0 Z" fill="${INK}"/>`:''}
    `).join('')}
  </svg>`,
  dataFlow: `<svg viewBox="0 0 260 180" fill="none">
    <rect x="100" y="10" width="60" height="40" rx="4" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <text x="112" y="34" font-size="11" fill="${INK}">CPU</text>
    <line x1="130" y1="50" x2="130" y2="75" stroke="${INK}" stroke-width="2.5"/>
    <rect x="90" y="75" width="80" height="30" rx="4" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <text x="98" y="94" font-size="10" fill="${INK}">Chipset (PCH)</text>
    <line x1="60" y1="30" x2="100" y2="30" stroke="${INK}" stroke-width="2"/>
    <text x="10" y="26" font-size="9" fill="${INK}">RAM (direct)</text>
    <line x1="190" y1="30" x2="160" y2="30" stroke="${INK}" stroke-width="2"/>
    <text x="192" y="26" font-size="9" fill="${INK}">GPU (direct, PCIe)</text>
    <line x1="60" y1="90" x2="90" y2="90" stroke="${INK}" stroke-width="2"/>
    <text x="10" y="86" font-size="9" fill="${INK}">SATA/USB</text>
    <line x1="200" y1="90" x2="170" y2="90" stroke="${INK}" stroke-width="2"/>
    <text x="202" y="86" font-size="9" fill="${INK}">M.2/audio/LAN</text>
    <text x="20" y="150" font-size="9" fill="${INK}">The CPU talks directly to RAM and the primary GPU slot for speed;</text>
    <text x="20" y="165" font-size="9" fill="${INK}">everything else routes through the chipset over a slower shared link.</text>
  </svg>`,
  dualChannel: `<svg viewBox="0 0 260 90" fill="none">
    <rect x="10" y="20" width="240" height="40" rx="4" stroke="${INK}" stroke-width="2" fill="none"/>
    <rect x="25" y="28" width="35" height="24" fill="${INK}" opacity=".7"/>
    <text x="25" y="18" font-size="9" fill="${INK}">Slot 1</text>
    <rect x="75" y="28" width="35" height="24" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="75" y="18" font-size="9" fill="${INK}">Slot 2 (empty)</text>
    <rect x="150" y="28" width="35" height="24" fill="${INK}" opacity=".7"/>
    <text x="150" y="18" font-size="9" fill="${INK}">Slot 3</text>
    <rect x="200" y="28" width="35" height="24" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="200" y="18" font-size="9" fill="${INK}">Slot 4 (empty)</text>
    <text x="10" y="80" font-size="9" fill="${INK}">Use the motherboard manual to identify the correct slots for dual-channel</text>
  </svg>`,
};

function diagramCard(svg, caption){
  return `<div class="diagram-card">${svg}<p class="diagram-caption">${caption}</p></div>`;
}

/* =====================================================================
   COMPONENTS
===================================================================== */
const COMPONENTS = [
  {
    id:'cpu', title:'CPU (Processor)', color:'var(--slate)',
    summary:'The "brain" of the computer \u2014 executes instructions. Speed, core count, and architecture define its capability.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.cpu}<p class="symbol-caption">Pins/contacts on the underside connect to the motherboard socket</p></div>
      <p class="detail-summary">The CPU (Central Processing Unit) executes instructions and does the bulk of general-purpose computation. Modern CPUs have multiple cores (independent processing units on one chip) and can run multiple threads per core (via technologies like Intel Hyper-Threading/SMT), letting them handle several tasks in parallel.</p>

      <h3 class="detail-h3">Key specs to know</h3>
      <table class="spec-table">
        <tr><th>Spec</th><th>What it means</th></tr>
        <tr><td><strong>Cores</strong></td><td>Independent processing units \u2014 more cores helps with multitasking and multi-threaded workloads (video editing, compiling, many background tasks at once).</td></tr>
        <tr><td><strong>Threads</strong></td><td>Logical processing paths per core \u2014 often double the core count with simultaneous multithreading (SMT/Hyper-Threading).</td></tr>
        <tr><td><strong>Clock speed</strong></td><td>How many cycles per second (GHz) \u2014 higher generally means faster per-core performance, but isn\u2019t comparable directly across different CPU generations/architectures.</td></tr>
        <tr><td><strong>Cache (L1/L2/L3)</strong></td><td>Small, very fast memory built into the CPU itself \u2014 reduces how often the CPU has to wait on slower main RAM.</td></tr>
        <tr><td><strong>TDP</strong></td><td>Thermal Design Power \u2014 a rough guide to heat output/power draw, used to size cooling appropriately.</td></tr>
        <tr><td><strong>Socket</strong></td><td>The physical/electrical interface to the motherboard \u2014 must match the motherboard\u2019s socket exactly (see the Motherboard component page).</td></tr>
      </table>

      <h3 class="detail-h3">How to identify</h3>
      <div class="tip-box">The exact model is printed on the CPU\u2019s top surface (integrated heat spreader), though you\u2019ll usually need to remove the cooler to see it. Software (Task Manager on Windows, About This Mac, or a tool like CPU-Z/HWiNFO) reads this information without needing to open the case at all.</div>

      <h3 class="detail-h3">How to diagnose a CPU issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">CPU faults are relatively rare compared to other components \u2014 always rule out RAM, power, and motherboard issues first, since symptoms often overlap.</span></li>
        <li><span class="step-num">2</span><span class="step-body">No display/no POST with RAM and GPU confirmed good can indicate a CPU seating issue (reseat it carefully, checking for bent pins on the socket or CPU) or, less commonly, CPU failure.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Random crashes, freezes, or reboots under load can indicate CPU overheating (check cooler contact/thermal paste) or an unstable overclock \u2014 reset to default clock/voltage settings in BIOS as a test.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Stress-test with a tool like Prime95 or a built-in diagnostic while monitoring temperatures \u2014 sustained temperatures near the CPU\u2019s maximum rated limit indicate a cooling problem, not necessarily a faulty CPU.</span></li>
      </ol>
      <div class="warn-box">Never remove or install a CPU with the system powered on, and always handle it by the edges \u2014 avoid touching the pins (PGA) or the contact pads (LGA), since oils and static can cause corrosion or damage over time.</div>`
  },
  {
    id:'ram', title:'RAM (Memory)', color:'var(--purple)',
    summary:'Fast, temporary working memory \u2014 cleared on power-off. More RAM (and faster RAM) generally means smoother multitasking.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.ram}<p class="symbol-caption">A DIMM stick \u2014 the notch position keys correct orientation and slot compatibility</p></div>
      <p class="detail-summary">RAM (Random Access Memory) is fast, temporary working memory the CPU uses to store data it\u2019s actively working with \u2014 much faster than storage (SSD/HDD), but it\u2019s cleared completely when power is removed, unlike storage.</p>

      <h3 class="detail-h3">Key specs &amp; form factors</h3>
      <table class="spec-table">
        <tr><th>Spec</th><th>What it means</th></tr>
        <tr><td><strong>Capacity</strong></td><td>Total storage size (GB) \u2014 more allows more programs/data to stay in fast memory at once without swapping to slower storage.</td></tr>
        <tr><td><strong>Generation (DDR4/DDR5)</strong></td><td>Physically and electrically incompatible with each other \u2014 a motherboard supports only one generation, and the notch position differs to prevent wrong-generation insertion.</td></tr>
        <tr><td><strong>Speed (MHz/MT/s)</strong></td><td>How fast data transfers \u2014 higher is generally better, but must be supported by both the motherboard and CPU\u2019s memory controller.</td></tr>
        <tr><td><strong>Timings/latency (e.g. CL16)</strong></td><td>Lower numbers mean less delay per operation \u2014 a secondary factor to speed, matters more for some workloads than others.</td></tr>
        <tr><td><strong>DIMM vs SO-DIMM</strong></td><td>DIMM is the full-size desktop form factor; SO-DIMM is the smaller laptop/small-form-factor version \u2014 not interchangeable.</td></tr>
      </table>

      ${diagramCard(CONCEPT_DIAGRAMS.dualChannel, 'Populating matched slots (check the motherboard manual for which pair) enables dual-channel mode, roughly doubling memory bandwidth versus a single stick.')}

      <h3 class="detail-h3">How to diagnose a RAM issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">Symptoms of faulty/failing RAM: random crashes, blue screens with memory-related error codes, failure to boot, or the system beeping in a pattern (check the motherboard/BIOS manual for the specific beep code meaning).</span></li>
        <li><span class="step-num">2</span><span class="step-body">Reseat each stick firmly (power off first) \u2014 a surprising number of "faulty RAM" issues are actually a stick not fully seated.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Test one stick at a time in a known-good slot if you have multiple sticks, to isolate whether a specific stick or a specific slot is the problem.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Run a dedicated memory test (Windows Memory Diagnostic, or the more thorough MemTest86, run from a bootable USB) \u2014 let it complete at least one full pass, ideally more, since some errors only show up after extended testing.</span></li>
        <li><span class="step-num">5</span><span class="step-body">If instability only appears with XMP/EXPO (memory overclock profiles) enabled, try running at the RAM\u2019s base JEDEC speed instead \u2014 confirms whether it\u2019s a stability/overclock issue rather than a hardware fault.</span></li>
      </ol>`
  },
  {
    id:'motherboard', title:'Motherboard', color:'var(--teal)',
    summary:'The central circuit board connecting every component \u2014 form factor, socket, and chipset all need to match your other parts.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.motherboard}<p class="symbol-caption">Simplified layout \u2014 real boards vary, but these core areas are always present</p></div>
      <p class="detail-summary">The motherboard is the central circuit board that every other component connects to and communicates through. Choosing one means matching four things correctly: form factor (physical size), CPU socket (must match your CPU exactly), chipset (determines feature set), and RAM generation support.</p>

      <h3 class="detail-h4">Form factors</h3>
      <table class="type-table">
        <tr><th>Form factor</th><th>Approx. size</th><th>Notes</th></tr>
        <tr><td><strong>E-ATX</strong></td><td>305 \u00d7 330mm</td><td>Extended ATX \u2014 more expansion slots/features, needs a larger case.</td></tr>
        <tr><td><strong>ATX</strong></td><td>305 \u00d7 244mm</td><td>The standard full-size desktop board \u2014 most common, widest feature/expansion availability.</td></tr>
        <tr><td><strong>Micro-ATX (mATX)</strong></td><td>244 \u00d7 244mm</td><td>Smaller, fewer expansion slots, fits in more compact cases, usually more budget-friendly.</td></tr>
        <tr><td><strong>Mini-ITX</strong></td><td>170 \u00d7 170mm</td><td>Smallest common form factor \u2014 for small-form-factor builds, typically only one expansion slot.</td></tr>
      </table>
      <div class="tip-box">A smaller board always fits in a case designed for a larger form factor (an mATX board fits an ATX case), but not the reverse \u2014 always check your case\u2019s supported form factors before buying a board.</div>

      <h3 class="detail-h4">CPU sockets</h3>
      <table class="type-table">
        <tr><th>Socket type</th><th>Used by</th><th>Notes</th></tr>
        <tr><td><strong>LGA (Land Grid Array)</strong></td><td>Intel (e.g. LGA1700, LGA1200)</td><td>Pins are on the SOCKET/motherboard, not the CPU \u2014 the CPU has flat contact pads.</td></tr>
        <tr><td><strong>PGA/AM (Pin Grid Array)</strong></td><td>AMD (e.g. AM4, AM5)</td><td>AM5 moved to LGA-style (pins on socket); older AM4 has pins on the CPU itself \u2014 check generation carefully.</td></tr>
      </table>
      <div class="warn-box">A CPU only fits and works in its exact matching socket \u2014 a CPU will never physically fit an incompatible socket, so this isn\u2019t a "works but slow" mismatch, it\u2019s a "won\u2019t install at all" mismatch. Always confirm socket compatibility before buying either part.</div>

      <h3 class="detail-h4">Data routes (buses)</h3>
      ${diagramCard(CONCEPT_DIAGRAMS.dataFlow, 'The CPU connects directly to RAM and the main GPU slot for maximum speed; most other components route through the chipset over a shared, slower link (historically called the "southbridge").')}
      <div class="info-box">PCIe (PCI Express) is the main high-speed expansion bus \u2014 used for graphics cards, fast NVMe storage, and add-in cards. It\u2019s organised into "lanes"; a physically longer slot (x16) has more lanes and more bandwidth than a shorter one (x1). SATA is an older, much slower interface still used for many HDDs and some SSDs.</div>

      <h3 class="detail-h4">Key components on the board</h3>
      <table class="type-table">
        <tr><th>Component</th><th>Role</th></tr>
        <tr><td><strong>Chipset</strong></td><td>Manages communication between the CPU and most peripherals/expansion \u2014 determines how many USB ports, SATA ports, and PCIe lanes are available.</td></tr>
        <tr><td><strong>VRM (Voltage Regulator Module)</strong></td><td>Converts the PSU\u2019s 12V supply down to the precise, stable voltage the CPU needs \u2014 a weak VRM limits how much power-hungry CPUs can be pushed, especially under overclocking.</td></tr>
        <tr><td><strong>BIOS/UEFI chip</strong></td><td>Stores the firmware that initialises hardware and hands control to the operating system on boot.</td></tr>
        <tr><td><strong>M.2 slots</strong></td><td>Direct high-speed connectors for compact NVMe SSDs, bypassing SATA entirely for much higher speed.</td></tr>
      </table>

      <h3 class="detail-h3">How to diagnose a motherboard issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">No power at all (no fans, no lights) points to the PSU, the power button/front-panel connector, or a motherboard short \u2014 check the PSU with a purpose-built tester or qualified technician (see the PSU component page).</span></li>
        <li><span class="step-num">2</span><span class="step-body">Power on but no POST/no display: reseat RAM and GPU, check for any onboard debug LEDs or a POST code display (many modern boards have one), and check the manual for what that code means.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Random shutdowns or instability under load can point to a failing VRM/insufficient power delivery, especially with a demanding CPU on a budget board.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Visually inspect for bulged/leaking capacitors, burn marks, or physical damage \u2014 a genuinely failed motherboard often shows visible signs.</span></li>
      </ol>`
  },
  {
    id:'gpu', title:'GPU (Graphics Card)', color:'var(--red)',
    summary:'Handles graphics rendering and (increasingly) other parallel workloads \u2014 connects via a PCIe x16 slot.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.gpu}<p class="symbol-caption">Fans/cooler, PCIe power connector(s), and display outputs are the key visible features</p></div>
      <p class="detail-summary">A GPU (Graphics Processing Unit) is specialised for highly parallel processing \u2014 originally for rendering graphics, but also widely used now for video encoding, AI/machine learning workloads, and other tasks that benefit from many simple calculations running simultaneously.</p>

      <h3 class="detail-h3">Key specs to know</h3>
      <table class="spec-table">
        <tr><th>Spec</th><th>What it means</th></tr>
        <tr><td><strong>VRAM</strong></td><td>Dedicated video memory on the card itself \u2014 higher amounts help with higher resolutions, texture-heavy games, and larger AI models.</td></tr>
        <tr><td><strong>PCIe interface</strong></td><td>Almost all discrete GPUs use a PCIe x16 slot \u2014 check your motherboard has one free and physically accessible.</td></tr>
        <tr><td><strong>Power connectors</strong></td><td>Higher-power cards need supplementary PCIe power cables (6-pin, 8-pin, or newer 12VHPWR) direct from the PSU \u2014 check your PSU has the right connectors and sufficient wattage headroom.</td></tr>
      </table>

      <h3 class="detail-h3">How to diagnose a GPU issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">No display with a discrete GPU installed: check it\u2019s fully seated in the slot and any PCIe power cables are connected \u2014 many modern GPUs won\u2019t output anything at all without their supplementary power connected.</span></li>
        <li><span class="step-num">2</span><span class="step-body">Confirm you\u2019re plugged into a port on the GPU itself, not the motherboard\u2019s onboard video output (if your CPU even has one) \u2014 an easy mistake after installing a new card.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Artifacting (visual glitches, coloured squares/lines) during use can indicate overheating, an unstable overclock, or in worst cases, a failing GPU \u2014 monitor temperatures under load and reset any overclock as a first test.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Random crashes specifically during graphics-intensive tasks (but not otherwise) point toward the GPU or its power delivery rather than the CPU/RAM.</span></li>
        <li><span class="step-num">5</span><span class="step-body">Try the GPU in a different known-good system (or a different known-good GPU in your system) if possible \u2014 the fastest way to confirm whether the card itself is actually at fault.</span></li>
      </ol>`
  },
  {
    id:'storage', title:'Storage (HDD/SSD/NVMe)', color:'var(--amber)',
    summary:'Permanent data storage \u2014 HDDs use spinning platters, SSDs use flash memory with no moving parts.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.storage}<p class="symbol-caption">HDD (mechanical, spinning platter) vs. NVMe SSD (flash memory chips, no moving parts)</p></div>
      <p class="detail-summary">Storage holds data permanently, even with power removed \u2014 unlike RAM. HDDs (Hard Disk Drives) use spinning magnetic platters and a moving read/write head; SSDs (Solid State Drives) use flash memory chips with no moving parts, making them significantly faster and more shock-resistant.</p>

      <h3 class="detail-h3">Types &amp; interfaces</h3>
      <table class="type-table">
        <tr><th>Type</th><th>Interface</th><th>Notes</th></tr>
        <tr><td><strong>HDD</strong></td><td>SATA</td><td>Cheapest per GB, slowest, mechanical (has moving parts, sensitive to physical shock while running).</td></tr>
        <tr><td><strong>SATA SSD</strong></td><td>SATA</td><td>Much faster than HDD, limited by the SATA interface\u2019s bandwidth ceiling (\u2248550MB/s).</td></tr>
        <tr><td><strong>NVMe SSD</strong></td><td>M.2 (PCIe)</td><td>Fastest common option, connects directly via PCIe lanes rather than the older SATA protocol, no cables needed.</td></tr>
      </table>

      <h3 class="detail-h3">How to diagnose a storage issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">Check the drive\u2019s SMART status (Self-Monitoring, Analysis and Reporting Technology) using a tool like CrystalDiskInfo (Windows) or the built-in Disk Utility (macOS) \u2014 this reports the drive\u2019s own internal health assessment.</span></li>
        <li><span class="step-num">2</span><span class="step-body">Unusual clicking or grinding noises from an HDD are a serious warning sign \u2014 back up data immediately and stop using the drive for anything other than recovery.</span></li>
        <li><span class="step-num">3</span><span class="step-body">A drive not detected in BIOS/UEFI: check cable connections (SATA power and data, or reseat an M.2 drive), and try a different SATA port/cable to rule out a connection issue rather than the drive itself.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Slow performance on an SSD over time can indicate it\u2019s nearly full (performance often degrades as free space runs low) or, less commonly, wearing out \u2014 SMART data shows remaining write endurance for SSDs.</span></li>
        <li><span class="step-num">5</span><span class="step-body">File corruption or frequent errors reading/writing point toward a failing drive \u2014 back up immediately and plan replacement rather than continuing to rely on it.</span></li>
      </ol>
      <div class="warn-box">Any drive showing SMART warnings, unusual noises, or frequent errors should be treated as "back up now, replace soon" \u2014 drives rarely give much warning before complete failure.</div>`
  },
  {
    id:'psu', title:'PSU (Power Supply)', color:'var(--navy)',
    summary:'Converts mains AC to the DC voltages every component needs \u2014 undersized or failing PSUs cause a huge range of "mystery" faults.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.psu}<p class="symbol-caption">24-pin ATX (main motherboard power) plus separate PCIe and SATA power connectors</p></div>
      <p class="detail-summary">The PSU (Power Supply Unit) converts mains AC voltage into the various stable DC voltages (mainly 12V, 5V, 3.3V) every component needs. An undersized, cheap, or failing PSU is one of the most common root causes of seemingly unrelated instability across a whole system.</p>

      <h3 class="detail-h3">Key specs</h3>
      <table class="spec-table">
        <tr><th>Spec</th><th>What it means</th></tr>
        <tr><td><strong>Wattage</strong></td><td>Maximum power output \u2014 needs headroom above your system\u2019s actual peak draw, not just its average.</td></tr>
        <tr><td><strong>Efficiency rating (80 Plus Bronze/Gold/etc)</strong></td><td>Higher ratings waste less power as heat and are generally higher build quality \u2014 not just a "greener" label.</td></tr>
        <tr><td><strong>Modularity</strong></td><td>Modular PSUs let you attach only the cables you need, reducing case clutter; non-modular has all cables permanently attached.</td></tr>
      </table>

      <h3 class="detail-h3">How to assess PSU faults safely</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">This tests only whether the PSU CAN power on, not whether its output is clean/stable under load \u2014 useful as a first diagnostic step, not a full health check.</span></li>
        <li><span class="step-num">2</span><span class="step-body">Power down and unplug the computer. Inspect only external connections and the manufacturer-approved cables; never open the PSU housing.</span></li><li><span class="step-num">3</span><span class="step-body">Check wall power, power switch position, external cable and motherboard power connections.</span></li><li><span class="step-num">4</span><span class="step-body">Use a purpose-built PSU tester according to its instructions or ask a qualified technician to test the supply under load.</span></li>
        <li><span class="step-num">5</span><span class="step-body">A fan spinning up is a good sign but not a full confirmation \u2014 genuine voltage stability under real load can only be confirmed with a multimeter checking actual output voltages, or by testing the PSU in a working system.</span></li>
      </ol>
      <div class="warn-box">Never open a PSU casing to inspect internally \u2014 large capacitors inside can retain a dangerous charge even when unplugged, well beyond what\u2019s obvious from the outside. PSU internal repair is not a safe DIY task.</div>`
  },
  {
    id:'cooling', title:'Cooling (Air &amp; Liquid)', color:'var(--teal)',
    summary:'Removes heat from the CPU (and often GPU) to keep components within safe operating temperatures.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.cooling}<p class="symbol-caption">Air cooler (heatsink + fan) vs. AIO liquid cooler (radiator, pump, and tubing)</p></div>
      <p class="detail-summary">Cooling removes heat generated by the CPU (and GPU) to keep temperatures within safe limits \u2014 sustained excessive heat causes thermal throttling (the component deliberately slowing itself down) or, in extreme/prolonged cases, damage.</p>

      <h3 class="detail-h3">Types</h3>
      <table class="type-table">
        <tr><th>Type</th><th>Notes</th></tr>
        <tr><td><strong>Air cooler</strong></td><td>A metal heatsink (often with heat pipes) plus one or more fans \u2014 simple, reliable, no risk of leaks, generally quieter at idle.</td></tr>
        <tr><td><strong>AIO liquid cooler</strong></td><td>All-In-One \u2014 a sealed loop with a pump, tubing, and a radiator (with fans) \u2014 often better cooling capacity for high-heat CPUs, at added cost and (rare but real) leak risk.</td></tr>
      </table>

      <h3 class="detail-h3">How to diagnose a cooling issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">Monitor temperatures with a tool like HWiNFO or Core Temp \u2014 compare idle and full-load readings against the CPU\u2019s rated maximum (check the manufacturer\u2019s spec sheet).</span></li>
        <li><span class="step-num">2</span><span class="step-body">High idle temperatures often point to poor cooler contact (thermal paste applied poorly, cooler not fully seated/secured) rather than a genuinely inadequate cooler.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Reapply thermal paste if it\u2019s been more than a few years, or if the cooler has ever been removed \u2014 old, dried, or unevenly-applied paste is a very common cause of temperature problems.</span></li>
        <li><span class="step-num">4</span><span class="step-body">Check all case and cooler fans are actually spinning and correctly oriented for airflow (intake vs exhaust) \u2014 fans installed backward is a surprisingly common building mistake.</span></li>
        <li><span class="step-num">5</span><span class="step-body">For an AIO, listen for the pump running (a low hum) \u2014 a silent pump with rising temperatures suggests pump failure, which typically means replacing the whole unit.</span></li>
      </ol>`
  },
  {
    id:'pcie-expansion', title:'PCIe &amp; Expansion Cards', color:'var(--red)',
    summary:'The main high-speed expansion bus \u2014 used for GPUs, fast storage, capture cards, and more.',
    content: () => `
      <div class="symbol-card">${SYMBOLS['pcie-expansion']}<p class="symbol-caption">Slot length indicates lane count: x1 (shortest) up to x16 (longest, used by GPUs)</p></div>
      <p class="detail-summary">PCIe (PCI Express) is the primary high-speed expansion interface on modern motherboards, used for graphics cards, high-speed storage (via M.2), capture cards, sound cards, and more. It\u2019s organised into "lanes" \u2014 more lanes means more available bandwidth.</p>

      <h3 class="detail-h3">Understanding slot sizes and versions</h3>
      <div class="info-box">A card will physically fit into any slot at least as long as its connector (a x1 card fits an x16 slot), but a slot won\u2019t provide more bandwidth than it has lanes for. PCIe also has generations (3.0, 4.0, 5.0 etc.) \u2014 each doubling bandwidth per lane over the previous generation, and generally backward/forward compatible (a newer card works in an older slot at the older slot\u2019s speed, and vice versa).</div>

      <h3 class="detail-h3">How to diagnose an expansion card issue</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">A card not detected: reseat it firmly, ensuring it\u2019s fully seated and the slot\u2019s retention clip is engaged.</span></li>
        <li><span class="step-num">2</span><span class="step-body">Try a different PCIe slot if the board has more than one, to rule out a specific slot fault.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Check the card is getting any supplementary power it needs (some capture/sound cards, and virtually all GPUs beyond entry-level, need direct PSU power beyond what the slot itself provides).</span></li>
        <li><span class="step-num">4</span><span class="step-body">Some motherboards share bandwidth/lanes between certain slots (e.g. populating an M.2 slot can disable or reduce a nearby PCIe slot) \u2014 check the motherboard manual\u2019s lane-sharing diagram if a slot behaves unexpectedly.</span></li>
      </ol>`
  },
  {
    id:'ports', title:'Ports &amp; Connectors', color:'var(--slate)',
    summary:'The physical interfaces for peripherals and displays \u2014 knowing which is which speeds up troubleshooting connectivity issues.',
    content: () => `
      <div class="symbol-card">${SYMBOLS.ports}<p class="symbol-caption">Common rear-panel connectors \u2014 shapes are a reliable way to identify a port at a glance</p></div>
      <p class="detail-summary">Modern PCs use a range of standardised connectors for peripherals, storage, and displays. Recognising them by shape is often faster than checking labels, especially on the back of a case in poor lighting.</p>

      <h3 class="detail-h3">Common connectors</h3>
      <table class="type-table">
        <tr><th>Connector</th><th>Used for</th></tr>
        <tr><td><strong>USB-A</strong></td><td>The classic rectangular USB connector \u2014 keyboards, mice, flash drives, most peripherals.</td></tr>
        <tr><td><strong>USB-C</strong></td><td>Smaller, reversible oval connector \u2014 increasingly used for everything from charging to high-speed data and even video output.</td></tr>
        <tr><td><strong>HDMI</strong></td><td>Common video (and audio) output \u2014 trapezoidal connector, widely supported by monitors and TVs.</td></tr>
        <tr><td><strong>DisplayPort</strong></td><td>Video output, common on PC monitors and GPUs \u2014 often supports higher refresh rates/resolutions than HDMI at a given cable quality/version.</td></tr>
        <tr><td><strong>SATA</strong></td><td>L-shaped connector for internal HDDs/SSDs \u2014 separate data and power cables.</td></tr>
        <tr><td><strong>M.2</strong></td><td>A small slot (not a cable) directly on the motherboard for compact NVMe SSDs.</td></tr>
      </table>

      <h3 class="detail-h3">Basic connector troubleshooting</h3>
      <ol class="step-list">
        <li><span class="step-num">1</span><span class="step-body">"No signal" on a display: check the cable is fully seated at both ends, and try a different cable/port if available \u2014 cables fail more often than the ports themselves.</span></li>
        <li><span class="step-num">2</span><span class="step-body">A USB device not recognised: try a different port, ideally directly on the motherboard\u2019s rear panel rather than a front-panel header or hub, to rule out a wiring/hub issue.</span></li>
        <li><span class="step-num">3</span><span class="step-body">Intermittent connection issues often point to a worn/damaged cable or connector rather than the device itself \u2014 test with a known-good cable before assuming device failure.</span></li>
      </ol>`
  },
];

/* =====================================================================
   GUIDE CATEGORIES
===================================================================== */
const GUIDE_CATEGORIES = [
  {
    key:'architecture', title:'Architecture &amp; Fundamentals', color:'var(--slate)',
    icon:`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>`,
    blurb:'How the pieces actually work together.',
    topics:[
      { id:'cpu-architecture', title:'CPU architecture explained', summary:'x86 vs ARM, cores/threads, and why clock speed alone doesn\u2019t tell the whole story.',
        full:{ steps:[
          'An instruction set architecture (ISA) defines the basic commands a CPU understands \u2014 x86-64 dominates desktop/laptop PCs (Intel, AMD), while ARM dominates phones/tablets and is increasingly used in laptops (e.g. Apple Silicon) for its power efficiency.',
          'A "core" is an independent processing unit \u2014 a quad-core CPU can genuinely execute four instruction streams simultaneously. "Threads" (via SMT/Hyper-Threading) let each core juggle two instruction streams by filling idle execution gaps, giving a meaningful but smaller boost than a true additional core.',
          'Clock speed (GHz) measures cycles per second, but different CPU architectures/generations do different amounts of work per cycle (IPC \u2014 instructions per clock) \u2014 which is why a lower-clocked newer CPU can outperform a higher-clocked older one.',
          'Cache is small, extremely fast memory built directly into the CPU, arranged in levels (L1 fastest/smallest, L3 larger/slower) \u2014 it reduces how often the CPU has to wait on much slower main RAM.',
          '"Big.LITTLE" or hybrid architectures (used in many modern CPUs) combine high-performance cores with smaller, efficiency-focused cores on the same chip, letting the system use powerful cores for demanding tasks and efficient cores for background/light tasks.'
        ] }
      },
      { id:'ram-cpu-relationship', title:'How RAM &amp; the CPU work together', summary:'The CPU can\u2019t work directly with storage \u2014 everything active passes through RAM first.',
        full:{ steps:[
          'The CPU can only directly operate on data held in RAM (or its own internal cache) \u2014 it cannot compute directly against data still sitting on a hard drive or SSD.',
          'When you open a program, the operating system loads the relevant data from storage into RAM, where the CPU can then access and work with it far faster than storage would allow.',
          'This is why more RAM often improves overall system responsiveness \u2014 more data and more running programs can stay resident in fast memory without needing to be swapped back to slow storage.',
          '"Swapping" or "paging" is what happens when RAM is full and the OS temporarily moves some data out to a reserved area of storage to free up space \u2014 this is dramatically slower than RAM, which is the practical reason a system feels sluggish when memory is exhausted.',
          'The memory controller (built into the CPU in most modern designs, rather than a separate chip) manages this direct CPU-to-RAM communication, which is why RAM speed/generation support is tied to the specific CPU, not just the motherboard.'
        ] }
      },
      { id:'buses-data-routes', title:'Buses &amp; data routes explained', summary:'Different components connect via different "roads," each with different speed and priority.',
        full:{
          diagram:'dataFlow', diagramCaption:'The CPU prioritises direct, high-speed connections to RAM and the primary GPU slot; most other peripherals share a slower link through the chipset.',
          steps:[
            'A "bus" is a shared communication pathway that lets components exchange data \u2014 different buses exist for different purposes, each with a specific speed and role.',
            'The CPU connects directly (not through the chipset) to RAM and, on most modern motherboards, to the primary PCIe x16 slot \u2014 these are the highest-priority, highest-bandwidth connections in the whole system.',
            'The chipset (sometimes still informally called the "southbridge," though that term is technically outdated on modern integrated designs) handles most other connectivity: additional PCIe lanes, SATA ports, USB, onboard audio/networking \u2014 all sharing a single link back to the CPU.',
            'This is why heavily loading many chipset-connected devices simultaneously (several NVMe drives, USB devices, etc.) can occasionally create a bottleneck, even though each individual device seems to have plenty of bandwidth on paper.',
            'Understanding this hierarchy helps explain some motherboard quirks \u2014 like why populating one M.2 slot sometimes disables or shares bandwidth with a nearby SATA port or PCIe slot (documented in the motherboard\u2019s manual as a lane-sharing diagram).'
          ]
        }
      },
      { id:'boot-process', title:'The boot process (POST to OS)', summary:'Power button press to a usable desktop is a defined sequence of handoffs \u2014 knowing the stages helps pinpoint where a boot failure is happening.',
        full:{
          diagram:'bootProcess', diagramCaption:'Each stage hands off to the next \u2014 identifying which stage a boot failure happens at massively narrows down the likely cause.',
          steps:[
            'Power On: the PSU supplies power, and the motherboard begins initialising.',
            'POST (Power-On Self-Test): the motherboard\u2019s firmware checks that essential hardware (CPU, RAM, and typically a display) is present and responding \u2014 failures here often produce beep codes or a POST-code display, since the system can\u2019t yet output to screen reliably in all failure cases.',
            'BIOS/UEFI firmware: once POST passes, the firmware initialises further hardware and looks for a valid boot device according to the configured boot order.',
            'Bootloader: a small program stored on the boot device that loads the actual operating system kernel into memory and hands control over to it.',
            'Operating System: the OS kernel takes over, initialises drivers and services, and eventually presents the login screen or desktop.',
            'A failure at any stage tells you where to focus: no beeps/no POST activity at all points to power/motherboard/CPU/RAM; POST passes but no OS boot points to the boot device, boot order, or a corrupted OS; OS starts loading but crashes points to a software/driver issue rather than core hardware.'
          ]
        }
      },
    ],
  },
  {
    key:'operating-systems', title:'Operating Systems', color:'var(--navy)',
    icon:`<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>`,
    blurb:'What an OS does, file systems, installation and drivers.',
    topics:[
      { id:'what-os-does', title:'What an OS actually does', summary:'Manages hardware resources and provides a consistent platform for software to run on, without every app needing to talk to hardware directly.',
        full:{ steps:[
          'An operating system manages a computer\u2019s hardware resources (CPU time, memory, storage, peripherals) and provides a consistent, standardised way for software to use them \u2014 without an OS, every single application would need to know how to talk directly to your specific hardware.',
          'The kernel is the OS\u2019s core \u2014 it handles the lowest-level hardware communication, memory management, and scheduling which programs get CPU time and when.',
          'Drivers are small pieces of software that let the OS kernel communicate with specific hardware (a particular GPU model, a specific printer, etc.) \u2014 this is why installing new hardware sometimes requires installing a driver before it works correctly.',
          'The user interface (desktop, file explorer, etc.) sits on top of the kernel, giving people a way to interact with the system without needing to understand what\u2019s happening underneath.',
          'Background services/daemons handle ongoing tasks (networking, security updates, print spooling, etc.) that need to run continuously, independent of whatever application you\u2019re actively using.'
        ] }
      },
      { id:'os-comparison', title:'Windows vs macOS vs Linux', summary:'Different philosophies on openness, hardware support, and customisation \u2014 each with real strengths depending on the use case.',
        full:{ steps:[
          'Windows: the most widely used desktop OS, runs on a huge range of hardware from many manufacturers, has the broadest software and game compatibility, generally the most familiar for troubleshooting resources given its dominant market share.',
          'macOS: runs only on Apple hardware, tightly integrated with that specific hardware (contributing to its reputation for smooth performance and battery life on Macs), strong in creative industries, less software/game compatibility than Windows.',
          'Linux: open-source, available in many different "distributions" (Ubuntu, Fedora, Debian, etc.) each with different defaults and philosophies, highly customisable, dominant on servers, growing on desktops, historically needed more technical comfort though modern distributions have improved this significantly.',
          'File system, driver model, and software installation all differ meaningfully between the three \u2014 software written for one generally doesn\u2019t run natively on another without compatibility layers (like Wine for running Windows software on Linux) or virtualisation.',
          'Dual-booting (installing more than one OS on the same machine, choosing at startup) or virtualisation (running one OS inside a virtual machine within another) are both ways to use more than one OS without dedicating separate physical hardware to each.'
        ] }
      },
      { id:'file-systems', title:'File systems explained', summary:'The underlying structure that organises data on a drive \u2014 different OSes default to different, sometimes incompatible, file systems.',
        full:{ steps:[
          'A file system defines how data is actually organised and addressed on a storage device \u2014 without one, a drive is just an undifferentiated block of raw storage with no way to find anything.',
          'NTFS is Windows\u2019 primary file system \u2014 supports large file/volume sizes, permissions, and journaling (which helps recover from unexpected shutdowns without corruption).',
          'APFS (Apple File System) is macOS\u2019s modern file system \u2014 optimised for flash storage, supports snapshots and strong encryption.',
          'ext4 is a common Linux file system \u2014 reliable, journaling, well-supported across most distributions.',
          'exFAT is a cross-compatible file system readable/writable by Windows, macOS, and Linux \u2014 commonly used for USB drives and external storage that needs to move between different operating systems, though it lacks some of the more advanced features of NTFS/APFS/ext4.',
          'A drive formatted in one file system generally isn\u2019t natively writable (sometimes not even readable) by an OS that doesn\u2019t support it \u2014 this is why an external drive that works fine on Windows might only be readable, not writable, when plugged into a Mac.'
        ] }
      },
      { id:'os-install', title:'Installing/reinstalling an OS', summary:'Back up first, create bootable installation media, set the boot order, then follow the installer.',
        full:{ steps:[
          'Back up any important data first \u2014 a fresh OS install typically wipes the target drive, and this is not a step to skip or rush.',
          'Download the official installation image/tool from the OS vendor, and create bootable installation media (typically a USB drive) using their recommended tool.',
          'Enter the system\u2019s BIOS/UEFI settings (usually by pressing a specific key like Del or F2 during startup) and set the boot order so the installation USB is tried before the internal drive, or use the one-time boot menu if available.',
          'Boot from the installation media and follow the installer\u2019s prompts \u2014 selecting the correct target drive/partition carefully, since selecting the wrong one can erase data you meant to keep.',
          'Once the base install completes, install the latest drivers for your specific hardware (especially GPU and chipset drivers) and apply OS updates before considering the install fully finished.',
          'For a "clean" reinstall versus an "in-place upgrade" \u2014 a clean install wipes everything and starts fresh (more reliable for fixing deep software issues), while an in-place upgrade tries to preserve your files/settings/apps (more convenient, but can carry over existing problems).'
        ] }
      },
      { id:'drivers-explained', title:'Drivers explained', summary:'Small software packages that let the OS talk to specific hardware \u2014 outdated or missing drivers cause a huge range of odd symptoms.',
        full:{ steps:[
          'A driver is software that translates between the OS\u2019s generic instructions and the specific commands a particular piece of hardware understands \u2014 every distinct hardware component (GPU, network card, printer, etc.) needs an appropriate driver.',
          'Most common hardware gets a generic, functional driver automatically from the OS itself, but manufacturer-specific drivers usually unlock full performance and features (especially true for GPUs).',
          'Outdated drivers are a common cause of instability, poor performance, or missing features \u2014 checking for and updating drivers (especially GPU and chipset) is a standard early troubleshooting step for many issues.',
          'A driver conflict (two different driver versions or sources fighting over the same hardware) can cause crashes or malfunction \u2014 a clean driver reinstall (fully uninstalling the old one first, sometimes with a dedicated removal tool for GPU drivers) often resolves this.',
          'Windows Device Manager (or the equivalent on other OSes) shows the status of installed drivers, flagging any with errors \u2014 a useful first stop when troubleshooting a specific piece of hardware not working correctly.'
        ] }
      },
    ],
  },
  {
    key:'building', title:'Building &amp; Upgrading', color:'var(--amber)',
    icon:`<path d="m14.7 6.3 3 3L8 19H5v-3Z"/><path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L18 9l-3-3Z"/>`,
    blurb:'Compatibility, installation, and firmware settings.',
    topics:[
      { id:'compatibility-checklist', title:'Compatibility checklist', summary:'CPU socket, RAM generation, and physical size all need to match before you buy anything.',
        full:{ steps:[
          'CPU and motherboard: the CPU\u2019s socket type must exactly match the motherboard\u2019s socket \u2014 no exceptions, this isn\u2019t a "works but limited" mismatch.',
          'Motherboard and RAM: check which RAM generation (DDR4/DDR5) the motherboard supports \u2014 they are not interchangeable, and the physical notch position differs to prevent incorrect installation.',
          'Motherboard and case: confirm the motherboard\u2019s form factor is supported by the case (a case supports its own size and any smaller form factor, never larger).',
          'PSU wattage and connectors: check the PSU has enough headroom for your components\u2019 combined peak draw, and has the specific connectors your GPU/CPU need (PCIe power connectors and CPU power connectors vary in count and type).',
          'Cooler and case/CPU: check the cooler\u2019s physical height fits the case, and that it\u2019s rated for your specific CPU socket (many coolers support multiple sockets, but not all \u2014 always check).',
          'Storage interface: confirm the motherboard has the M.2 slot type (and PCIe generation) your NVMe drive needs for full speed, or sufficient SATA ports for SATA drives.'
        ] }
      },
      { id:'installing-cpu', title:'Installing a CPU', summary:'Handle by the edges only, align the orientation markers, and never force it \u2014 a correctly aligned CPU drops in with zero pressure.',
        full:{ steps:[
          'Ensure the system is fully powered off and unplugged before starting.',
          'Open the CPU socket\u2019s retention mechanism (varies by socket type, usually a lever or latch) and remove any protective cover.',
          'Handle the CPU only by its edges, never touching the pins (PGA) or contact pads (LGA).',
          'Align the CPU\u2019s orientation marker (usually a small triangle or notch) with the corresponding mark on the socket \u2014 this ensures correct orientation.',
          'Lower the CPU straight down into the socket \u2014 a correctly aligned CPU should drop into place under its own weight, with no force needed. If it doesn\u2019t seat easily, stop and recheck alignment rather than forcing it.',
          'Close the retention mechanism, which will typically require some firm (but controlled, expected) pressure \u2014 this is normal and different from forcing the CPU itself.',
          'Apply thermal paste (a small pea-sized dot in the centre is usually sufficient for most modern coolers, which spread it under mounting pressure) and install the cooler, following its specific mounting instructions.'
        ] }
      },
      { id:'installing-ram', title:'Installing RAM', summary:'Check the motherboard manual for which slots to use for dual-channel, and push down evenly until both clips click.',
        full:{ steps:[
          'Power off and unplug the system before starting.',
          'Check the motherboard manual for which slot pairing enables dual-channel mode (commonly slots 2 and 4, but this varies by board \u2014 always check rather than assuming).',
          'Open the retention clips at the ends of the target slots.',
          'Align the notch on the RAM stick with the key in the slot \u2014 this only fits one way, don\u2019t force it if it doesn\u2019t seem to align.',
          'Push down firmly and evenly on both ends of the stick until the retention clips click closed on their own \u2014 uneven pressure can cause the stick to seat at a slight angle.',
          'After installation, boot the system and check the RAM is correctly detected (BIOS/UEFI screen, or OS system information) at the expected total capacity.'
        ] }
      },
      { id:'bios-uefi-basics', title:'BIOS/UEFI settings basics', summary:'The firmware interface for boot order, XMP/EXPO memory profiles, and hardware monitoring \u2014 accessed before the OS loads.',
        full:{ steps:[
          'Access BIOS/UEFI by pressing a specific key (commonly Del, F2, F10, or F12 \u2014 check your motherboard/laptop\u2019s manual) during the very start of boot, before the OS begins loading.',
          'Boot order determines which device the system tries to boot from first \u2014 important when installing an OS from USB, or when troubleshooting a boot issue.',
          'XMP (Intel) or EXPO (AMD) are one-click profiles that run RAM at its rated marketing speed rather than a conservative default \u2014 RAM often runs at a lower "safe" speed until one of these profiles is enabled.',
          'Hardware monitoring pages show real-time temperatures, voltages, and fan speeds \u2014 useful for a quick health check without booting into the OS.',
          'Changes made in BIOS/UEFI are saved on exit (usually a dedicated "Save & Exit" option) \u2014 exiting without saving discards any changes made during that session.',
          'A "CMOS reset" (via a motherboard jumper, a dedicated button, or removing the CMOS battery briefly) resets all BIOS/UEFI settings to factory default \u2014 a useful troubleshooting step if a setting change causes a boot failure and you can no longer access the settings to undo it.'
        ] }
      },
      { id:'secure-boot-tpm-virt', title:'Secure Boot, TPM &amp; virtualisation settings', summary:'Three BIOS/UEFI settings that trip people up most often \u2014 especially since Windows 11 made two of them mandatory requirements.',
        full:{ steps:[
          'Secure Boot is a UEFI security feature that only allows the system to boot software signed by a trusted authority \u2014 blocking certain low-level malware (bootkits/rootkits) from loading before the OS itself even starts.',
          'Secure Boot requires UEFI mode (not Legacy/CSM) to function \u2014 if a system is set to Legacy/CSM boot mode, Secure Boot options are typically greyed out or unavailable until you switch to UEFI mode.',
          'TPM (Trusted Platform Module) is a dedicated security chip (or firmware-based equivalent, "fTPM"/"PTT") that securely stores encryption keys and other sensitive data in hardware \u2014 used by features like BitLocker drive encryption, and required for Windows 11.',
          'Both Secure Boot and TPM 2.0 are mandatory requirements for Windows 11 \u2014 a very common real-world troubleshooting scenario is a Windows 11 install/upgrade failing or refusing to proceed because one or both are disabled in BIOS/UEFI, even on hardware that fully supports them.',
          'Virtualisation settings (commonly labelled Intel VT-x/VT-d or AMD-V/AMD-Vi) must be enabled in BIOS/UEFI before software virtualisation (Hyper-V, VirtualBox, VMware, WSL2, Docker Desktop on Windows) can run \u2014 a very common cause of "virtualisation is not enabled" errors even when the CPU itself fully supports it.',
          'These settings are usually found under a "Security" or "Advanced" BIOS/UEFI menu (exact location and naming varies significantly between manufacturers) \u2014 if a feature seems unavailable, check whether a prerequisite setting (like UEFI mode for Secure Boot) needs enabling first.'
        ] }
      },
      { id:'esd-safe-practices', title:'ESD-safe working practices', summary:'Static discharge, often too small to feel, can silently damage sensitive components \u2014 a genuinely essential habit, not an optional precaution.',
        full:{ steps:[
          'Static electricity builds up on your body through ordinary movement, especially in dry conditions or on synthetic carpet/clothing \u2014 a static discharge you can actually feel is already thousands of volts, but damage to sensitive components (RAM, CPUs, motherboards, expansion cards) can occur at levels far too small to feel or see.',
          'An anti-static wrist strap, clipped to a genuinely grounded point (an unpainted metal part of the case chassis while it\u2019s plugged in but switched off at the wall, or a dedicated ground point), is the standard, reliable protection for regular hardware work \u2014 far more consistent than relying on remembering to touch something beforehand.',
          'If a wrist strap isn\u2019t available, frequently touching a grounded unpainted metal surface (like the PC case itself, still plugged into a switched-off but earthed outlet) before handling components is a reasonable minimum precaution.',
          'Handle expansion cards, RAM, and CPUs by their edges, avoiding contact with connector pins, contacts, or exposed circuitry wherever possible.',
          'Store sensitive components in anti-static bags when not installed \u2014 the metallic/pink anti-static bags components originally ship in are specifically designed for this, not just generic packaging.',
          'Work on a hard, non-carpeted surface where practical, and avoid ESD-risky habits like wearing wool clothing or working in a low-humidity room without any static precautions during hardware work.'
        ] }
      },
    ],
  },
  {
    key:'diagnostics', title:'Diagnostics &amp; Troubleshooting', color:'var(--red)',
    icon:`<path d="M12 9v4M12 17h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>`,
    blurb:'A methodical approach, and the most common specific faults.',
    topics:[
      { id:'troubleshooting-method', title:'General troubleshooting method', summary:'Work from simple/likely causes to complex/unlikely ones, changing one thing at a time.',
        full:{ steps:[
          'Start with the simplest, most common causes before assuming something exotic \u2014 a loose cable is far more likely than a failed CPU.',
          'Reproduce the fault reliably if you can \u2014 a fault you can trigger on demand is far easier to diagnose than one that happens randomly.',
          'Change only one variable at a time when testing a potential fix \u2014 changing multiple things simultaneously means you won\u2019t know which change actually mattered.',
          'Use the process of elimination: swap suspect components with known-good ones where possible (borrowed RAM, a spare known-good PSU, etc.) to isolate the actual faulty part.',
          'Note what you\u2019ve already tried and ruled out as you go \u2014 easy to lose track on a stubborn fault and end up re-testing the same thing.',
          'When stuck, search the exact error message or symptom online \u2014 many hardware/software faults produce specific, well-documented error codes that point directly to a known cause.'
        ] }
      },
      { id:'no-post', title:'No power / no POST troubleshooting', summary:'Work outward from the PSU: power, then motherboard activity, then RAM/GPU, then CPU.',
        full:{ steps:[
          'No lights, no fans at all: check the wall outlet/power strip, the PSU\u2019s own power switch (on the back of the unit), and try the PSU paperclip test to confirm it can power on at all.',
          'Fans spin briefly then stop, or spin but nothing displays: this usually means POST is failing \u2014 strip the system down to bare essentials (CPU, one RAM stick, GPU if the CPU has no built-in graphics) and reseat each component.',
          'Try one RAM stick at a time in different slots \u2014 a single bad stick or slot is a very common no-POST cause.',
          'Check for a POST code display or debug LEDs on the motherboard (common on many boards) and cross-reference the code against the manual, which usually pinpoints the failing stage precisely.',
          'Reseat the CPU carefully if RAM and GPU are confirmed working individually, checking for any bent socket pins.',
          'If available, test known-good components (a spare PSU, RAM, or GPU) one at a time to isolate which part is actually at fault.'
        ] }
      },
      { id:'bsod-troubleshooting', title:'Blue screen (BSOD) troubleshooting', summary:'Note the exact stop code \u2014 it usually points directly at a driver, RAM, or a specific subsystem.',
        full:{ steps:[
          'Note the exact error/stop code shown on the blue screen (or check Windows\u2019 Reliability History / Event Viewer afterward if it flashed too quickly to read) \u2014 this is the single most useful piece of information for diagnosis.',
          'Search the specific stop code \u2014 many are well-documented and point directly at a likely cause (e.g. memory management codes suggest RAM, specific driver names in the error suggest that driver).',
          'If BSODs started after installing new hardware or a new/updated driver, that\u2019s the prime suspect \u2014 try rolling back or removing it first.',
          'Run a memory test (MemTest86) to rule out faulty RAM, a very common underlying cause of seemingly random BSODs.',
          'Check for overheating and unstable overclocks (CPU or RAM) \u2014 reset to default/stock settings as a diagnostic step if you\u2019ve overclocked anything.',
          'Update chipset and GPU drivers, and check Windows Update for pending updates \u2014 driver/OS bugs are a common non-hardware cause.'
        ] }
      },
      { id:'overheating-diagnosis', title:'Overheating diagnosis', summary:'Monitor real temperatures under load first \u2014 don\u2019t assume based on fan noise or case temperature alone.',
        full:{ steps:[
          'Use a monitoring tool (HWiNFO, Core Temp, or similar) to check actual CPU/GPU temperatures at idle and under a sustained load/stress test \u2014 don\u2019t rely on how hot the case feels, which isn\u2019t a reliable indicator.',
          'Compare readings against the component\u2019s rated maximum temperature (check the manufacturer\u2019s spec sheet) rather than a generic number \u2014 safe limits vary meaningfully between components.',
          'Check case airflow: confirm fans are actually spinning, oriented correctly (intake vs exhaust), and not clogged with dust.',
          'Reapply thermal paste if the cooler hasn\u2019t been serviced in a few years, or if temperatures seem high despite otherwise-good airflow.',
          'Check the cooler is fully and evenly mounted \u2014 an unevenly seated cooler (from improper mounting pressure) causes poor contact and elevated temperatures even with fresh paste.',
          'For a laptop, check the intake vents aren\u2019t blocked (use on a hard, flat surface rather than a soft one like a bed) and consider whether internal dust buildup needs professional cleaning.'
        ] }
      },
      { id:'testing-ram-diag', title:'Testing RAM (MemTest)', summary:'Boot a dedicated memory-test tool from USB and let it run at least one full pass \u2014 some errors only appear after extended testing.',
        full:{ steps:[
          'Download MemTest86 (free, widely used) and create a bootable USB using their provided tool.',
          'Boot from the USB (set boot order in BIOS/UEFI, or use the one-time boot menu) rather than booting into your normal OS.',
          'Let the test run at least one full pass \u2014 ideally several hours or overnight for a thorough check, since some intermittent errors only surface after extended testing.',
          'Any errors reported indicate a genuine RAM problem \u2014 note which stick/slot combination was in use, then test each stick individually in different slots to isolate whether it\u2019s a specific stick or a specific slot.',
          'If using multiple sticks and errors only appear with a specific pairing (but each stick passes alone), this can indicate a compatibility issue between that pair rather than an outright faulty stick.'
        ] }
      },
      { id:'storage-health-check', title:'Storage health checks (SMART)', summary:'SMART data reports a drive\u2019s own internal health assessment \u2014 check it periodically, not just after symptoms appear.',
        full:{ steps:[
          'Use a tool like CrystalDiskInfo (Windows), Disk Utility (macOS), or `smartctl` (Linux/command line) to read a drive\u2019s SMART data.',
          'Look at the overall health status first (often a simple Good/Caution/Bad summary) before digging into individual attributes.',
          'Key attributes to watch: reallocated sector count (bad sectors the drive has had to work around \u2014 rising numbers are a bad sign), and for SSDs, remaining write endurance/wear level.',
          'A drive reporting "Caution" or "Bad" status should be backed up immediately and scheduled for replacement, even if it\u2019s still functioning normally day to day \u2014 SMART warnings often precede failure by weeks to months, not always with obvious symptoms first.',
          'SMART isn\u2019t infallible \u2014 a drive can still fail suddenly with no prior warning, so it\u2019s a useful early-warning tool, not a guarantee.'
        ] }
      },
      { id:'slow-performance', title:'Slow performance troubleshooting', summary:'Check what\u2019s actually the bottleneck (CPU, RAM, storage, or background processes) before assuming new hardware is the fix.',
        full:{ steps:[
          'Open Task Manager (Windows) or Activity Monitor (macOS) and check CPU, memory, and disk usage while the system feels slow \u2014 this identifies which resource is actually the bottleneck, rather than guessing.',
          'High disk usage with an HDD (not SSD) is extremely common and often the single biggest upgrade win available \u2014 an HDD-to-SSD upgrade transforms overall responsiveness for most everyday use.',
          'Check for unnecessary startup programs/background processes consuming resources continuously \u2014 easy to accumulate over time without noticing.',
          'Confirm storage isn\u2019t nearly full \u2014 both HDDs and SSDs can slow down significantly as free space runs low.',
          'Check for malware if slowness is unexplained and sudden \u2014 a reputable, updated anti-malware scan rules this out or confirms it.',
          'For a system slow since new, or after a fresh OS install, check drivers are all correctly installed and up to date \u2014 a missing chipset or storage driver can silently limit performance well below what the hardware is capable of.'
        ] }
      },
    ],
  },
  {
    key:'cli', title:'Command Line &amp; PowerShell', color:'var(--slate)',
    icon:`<path d="m8 9 3 3-3 3M13 15h5"/><rect x="2" y="4" width="20" height="16" rx="2"/>`,
    blurb:'The tools that let you fix what the GUI can\u2019t reach.',
    topics:[
      { id:'command-prompt-basics', title:'Command Prompt basics', summary:'Windows\u2019 traditional command-line interface \u2014 navigate the file system and run diagnostic utilities directly.',
        full:{ steps:[
          'Open Command Prompt via the Start menu search, or <code>Win+R</code> then typing <code>cmd</code> \u2014 many diagnostic/repair tools specifically need it run "as administrator" (right-click, Run as administrator) to work correctly.',
          'Basic navigation: <code>cd</code> changes directory, <code>dir</code> lists files/folders in the current directory, <code>cd ..</code> moves up one level.',
          'File operations: <code>copy</code>, <code>move</code>, <code>del</code>, <code>mkdir</code> (make directory) work similarly to their GUI equivalents, but let you script or repeat actions precisely.',
          'Many diagnostic and repair utilities (covered in the next guide) only run from the command line \u2014 not because they\u2019re obscure, but because they need to run before/without a full desktop environment in some repair scenarios.',
          'Command Prompt is being gradually superseded by PowerShell as Microsoft\u2019s primary command-line tool, but it remains present, widely used, and still the expected environment for several classic diagnostic utilities.'
        ] }
      },
      { id:'essential-cmd-utilities', title:'Essential CMD utilities (chkdsk, sfc, DISM, diskpart)', summary:'Four command-line tools that solve problems the Windows GUI genuinely can\u2019t reach on its own.',
        full:{ steps:[
          '<code>chkdsk</code> (Check Disk) scans a drive for file system errors and bad sectors, and can attempt to fix them \u2014 run as <code>chkdsk C: /f</code> to fix errors, or add <code>/r</code> to also locate bad sectors and recover readable information from them.',
          '<code>sfc /scannow</code> (System File Checker) scans all protected Windows system files and replaces any that are corrupted or missing with the correct cached version \u2014 a very common first step when Windows is behaving strangely without an obvious cause.',
          '<code>DISM</code> (Deployment Image Servicing and Management) works at a deeper level than <code>sfc</code>, repairing the underlying Windows image itself \u2014 run <code>DISM /Online /Cleanup-Image /RestoreHealth</code> when <code>sfc</code> alone can\u2019t fix a corruption issue (it draws on Windows Update or installation media as a source).',
          '<code>diskpart</code> is a powerful, text-based disk partitioning utility \u2014 lets you list disks/partitions, create/delete/format partitions, and assign drive letters, useful when Disk Management\u2019s GUI can\u2019t handle a particular situation (or isn\u2019t available, like in a recovery environment).',
          'A sensible troubleshooting order for suspected Windows corruption: run <code>sfc /scannow</code> first; if it reports errors it couldn\u2019t fix, run <code>DISM</code> to repair the underlying image, then re-run <code>sfc</code> again.'
        ] }
      },
      { id:'powershell-fundamentals', title:'PowerShell fundamentals', summary:'A more powerful, modern command-line and scripting environment, built around structured objects rather than plain text.',
        full:{ steps:[
          'PowerShell commands are called "cmdlets," following a consistent Verb-Noun naming pattern (e.g. <code>Get-Process</code>, <code>Stop-Service</code>, <code>Get-ChildItem</code>) \u2014 far more discoverable and predictable than Command Prompt\u2019s more arbitrary command names.',
          'Unlike Command Prompt, PowerShell passes structured objects between commands (not just plain text) \u2014 letting you filter, sort, and manipulate results precisely, e.g. <code>Get-Process | Sort-Object CPU -Descending</code>.',
          '<code>Get-Help &lt;cmdlet&gt;</code> shows detailed usage information for any cmdlet \u2014 genuinely useful for learning PowerShell as you go, rather than needing to memorise syntax upfront.',
          'Common practical cmdlets: <code>Get-Service</code> / <code>Restart-Service</code> for managing Windows services, <code>Get-Process</code> / <code>Stop-Process</code> for managing running programs, <code>Get-EventLog</code> for querying system logs directly from the command line.',
          'PowerShell\u2019s execution policy controls whether/which scripts are allowed to run \u2014 a security feature that can block a legitimate script from running until explicitly adjusted (<code>Set-ExecutionPolicy</code>), which is a common early stumbling block for newcomers.'
        ] }
      },
      { id:'network-diagnostic-commands', title:'Network diagnostic commands', summary:'ipconfig, ping, tracert, netstat, and nslookup \u2014 the essential command-line toolkit for diagnosing connectivity problems.',
        full:{ steps:[
          '<code>ipconfig</code> shows the current network configuration (IP address, subnet mask, default gateway) \u2014 add <code>/all</code> for full details including the adapter\u2019s MAC address and DNS servers; <code>ipconfig /release</code> and <code>/renew</code> force a new DHCP lease, often fixing IP configuration issues.',
          '<code>ping &lt;address&gt;</code> sends test packets to a target and reports whether they\u2019re answered \u2014 the fastest way to check basic connectivity to another device, a website, or (pinging the router\u2019s own address) the local network itself.',
          '<code>tracert &lt;address&gt;</code> (traceroute) shows every network hop between you and a destination \u2014 useful for identifying roughly WHERE a connectivity problem is occurring along the path, not just that it exists.',
          '<code>netstat</code> shows active network connections and listening ports on the local machine \u2014 useful for confirming a service is actually listening where expected, or spotting unexpected/suspicious connections.',
          '<code>nslookup &lt;domain&gt;</code> queries DNS directly, showing what IP address a domain name currently resolves to \u2014 useful for confirming whether a connectivity problem is a DNS issue specifically, versus a routing/reachability issue further along.',
          'A practical diagnostic sequence for "the internet isn\u2019t working": <code>ipconfig</code> to confirm you have a valid IP address, <code>ping</code> the default gateway to confirm local network connectivity, <code>ping</code> an external IP to confirm internet reachability, then <code>nslookup</code>/<code>ping</code> a domain name to isolate whether DNS specifically is the problem.'
        ] }
      },
      { id:'system-info-commands', title:'System information &amp; diagnostic commands', summary:'Quick command-line ways to pull hardware/OS details and check overall system health without opening several different GUI tools.',
        full:{ steps:[
          '<code>systeminfo</code> dumps a comprehensive summary of the system: OS version and install date, hardware details, installed hotfixes, and more \u2014 useful for quickly documenting a machine\u2019s configuration, especially remotely.',
          '<code>msinfo32</code> (System Information, launched by typing this into Run) opens a GUI tool with similarly detailed hardware/driver/software information, often easier to browse visually than the command-line output.',
          '<code>tasklist</code> lists all currently running processes from the command line \u2014 useful in a remote session or script, where opening Task Manager\u2019s GUI isn\u2019t practical.',
          '<code>driverquery</code> lists all installed drivers, useful for auditing driver versions or spotting an unexpected/outdated one without manually checking Device Manager entry by entry.',
          'These command-line tools matter especially for remote support work \u2014 many can be run over a remote session or even scripted to run unattended, letting you gather diagnostic information without needing to walk a user through clicking through several different GUI windows.'
        ] }
      },
    ],
  },
  {
    key:'winadmin', title:'Windows Administration Deep Dive', color:'var(--navy)',
    icon:`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
    blurb:'The tools built into Windows for real diagnosis and repair, beyond basic settings.',
    topics:[
      { id:'task-device-manager', title:'Task Manager &amp; Device Manager', summary:'Task Manager for what\u2019s running and consuming resources right now; Device Manager for hardware and driver status.',
        full:{ steps:[
          'Task Manager (<code>Ctrl+Shift+Esc</code>) shows running applications and processes, and their real-time CPU/memory/disk/network usage \u2014 the first place to look when a system feels slow or unresponsive, to identify what\u2019s actually consuming resources.',
          'The Startup tab in Task Manager shows programs configured to launch automatically at boot, along with their measured impact on startup time \u2014 disabling unnecessary startup items is a common, effective way to speed up boot time.',
          'The Performance tab gives a live graph of CPU, memory, disk, and network utilisation, along with detailed specs (core count, RAM speed, etc.) \u2014 useful both for troubleshooting and quickly confirming hardware specs without opening System Information separately.',
          'Device Manager (accessible via right-click on Start, or searching) lists every piece of hardware Windows recognises, organised by category \u2014 a yellow warning triangle indicates a driver problem, and a device simply missing from the list can indicate it\u2019s not being detected at all (a deeper hardware/connection issue).',
          'From Device Manager you can update, roll back, disable, or uninstall a specific device\u2019s driver \u2014 "roll back driver" is a particularly useful troubleshooting step when a problem started right after a driver update.'
        ] }
      },
      { id:'disk-management', title:'Disk Management', summary:'The GUI tool for partitioning, formatting, and managing drives \u2014 the visual counterpart to the command-line diskpart utility.',
        full:{ steps:[
          'Disk Management (search "Create and format hard disk partitions," or <code>diskmgmt.msc</code>) shows every connected drive and its partitions in a visual layout, making it easy to see free/unallocated space at a glance.',
          'From here you can create new partitions/volumes, format a drive with a chosen file system (NTFS, exFAT, FAT32), assign or change drive letters, extend a partition into adjacent free space, or shrink one to free up space for a new partition.',
          'A drive showing as "Not Initialized" is brand new/blank and needs a partition style (MBR or GPT) assigned before it can be used at all \u2014 a very common first step when installing a new drive.',
          'Shrinking a partition is generally safe (Windows only shrinks into genuinely free space), but shrink amounts are sometimes limited by unmovable files; extending requires adjacent unallocated space, which is why partition order/planning matters when setting up multiple partitions.',
          'For more advanced operations Disk Management\u2019s GUI can\u2019t handle (like certain RAID configurations or scripted repeatable operations), the command-line <code>diskpart</code> utility offers finer control over the same underlying disk operations.'
        ] }
      },
      { id:'event-viewer', title:'Event Viewer &amp; log analysis', summary:'Windows logs almost everything significant that happens \u2014 Event Viewer is where you go to actually read that history.',
        full:{ steps:[
          'Event Viewer (search "Event Viewer," or <code>eventvwr.msc</code>) organises logged events into categories \u2014 Application (software-related events), System (OS/driver/hardware-related events), and Security (login attempts, permission changes) are the three most commonly useful.',
          'Events are marked with a severity level: Information (routine, expected), Warning (something worth noting but not necessarily broken), and Error/Critical (something actually failed).',
          'When troubleshooting a crash or unexpected behaviour, filter by time (around when the problem occurred) and severity (Error/Critical) to cut through the large volume of routine logged events to what actually matters.',
          'Each event has an Event ID \u2014 searching that specific ID number alongside relevant keywords online very often turns up documentation of exactly what it means and common causes, since IDs are consistent and well-documented across systems.',
          'A BSOD or unexpected restart nearly always leaves a corresponding entry in the System log (often with the specific stop code and driver/module implicated) \u2014 checking Event Viewer after an unexplained crash is a genuinely high-value habit, not just theoretical advice.'
        ] }
      },
      { id:'system-restore-recovery', title:'System Restore &amp; the Recovery Environment', summary:'Rolling Windows back to a known-good previous state, and the special repair environment that runs when Windows itself won\u2019t start.',
        full:{ steps:[
          'System Restore uses periodically-created "restore points" to roll system files, installed programs, and registry settings back to an earlier state \u2014 it does NOT affect personal files (documents, photos), only system-level changes, which is a common point of confusion.',
          'Restore points are created automatically before significant changes (driver installs, Windows updates) and can also be created manually before you make a risky change yourself, as a safety net.',
          'The Windows Recovery Environment (WinRE) is a special minimal environment that can boot even when Windows itself can\u2019t \u2014 accessed by interrupting the boot process a few times to trigger automatic repair, or via Settings > Recovery, or by booting from installation media and choosing "Repair your computer."',
          'From WinRE you can access Startup Repair (automatically attempts to fix common boot problems), System Restore, System Image Recovery (restore from a full backup image), Command Prompt (for manual repair using the CLI tools covered earlier), and Safe Mode.',
          'Safe Mode boots Windows with only essential drivers and services loaded \u2014 useful for troubleshooting when a driver, startup program, or piece of software is preventing normal boot; if a problem disappears in Safe Mode, that strongly points to something loading at normal startup as the actual cause.'
        ] }
      },
      { id:'registry-sysconfig', title:'Registry fundamentals &amp; System Configuration', summary:'The Registry stores low-level Windows and application settings; System Configuration (msconfig) gives a simpler, safer way to adjust some of the most commonly-needed settings.',
        full:{ steps:[
          'The Windows Registry is a hierarchical database storing configuration settings for the OS and installed applications \u2014 accessed via <code>regedit</code>, organised into root keys (like <code>HKEY_LOCAL_MACHINE</code> for system-wide settings, <code>HKEY_CURRENT_USER</code> for the logged-in user\u2019s settings).',
          'Direct registry editing is powerful but genuinely risky \u2014 an incorrect change can cause serious instability or prevent Windows from booting; always back up the specific key (or export the whole registry) before making manual changes, and only edit what you\u2019re following specific, trusted guidance for.',
          'System Configuration (<code>msconfig</code>) provides a safer, more limited GUI for some common troubleshooting needs: selectively disabling startup services, choosing a specific boot mode (like booting into Safe Mode without needing to interrupt startup manually), and viewing/managing startup items (though modern Windows has moved most startup-item management into Task Manager\u2019s Startup tab).',
          '"Diagnostic startup" in <code>msconfig</code> loads only basic devices/services, similar in spirit to Safe Mode \u2014 useful for narrowing down whether a startup problem is caused by a third-party service/driver.',
          'As a general troubleshooting principle: prefer the safer, more limited tools (Task Manager, Device Manager, System Configuration) over direct Registry editing whenever they can achieve the same result \u2014 reach for <code>regedit</code> only when a specific fix genuinely requires it.'
        ] }
      },
    ],
  },
  {
    key:'laptop', title:'Laptop Maintenance', color:'var(--amber)',
    icon:`<rect x="4" y="4" width="16" height="11" rx="1"/><path d="M2 19h20l-2-4H4Z"/>`,
    blurb:'The same core hardware, but with real constraints: tighter spaces, glued components, and no standard sizes.',
    topics:[
      { id:'laptop-disassembly', title:'Laptop disassembly &amp; component access', summary:'Far less standardised than desktop PCs \u2014 always find the specific model\u2019s service manual before opening anything.',
        full:{ steps:[
          'Unlike desktop PCs (which follow fairly consistent standards for form factor, sockets, and layout), laptops vary hugely between manufacturers and even between models from the same manufacturer \u2014 always find the specific model\u2019s official service manual or a trusted teardown guide before starting, rather than assuming based on general experience.',
          'Always fully power off (not just sleep) and disconnect the charger before opening a laptop, and where the design allows it, disconnect the internal battery connector as an extra safety step before working near other components.',
          'Note screw positions and lengths carefully as you remove them \u2014 laptops very commonly use different screw lengths in different positions, and using the wrong one back in the wrong hole can damage the case or internal components.',
          'Many modern laptops have some components soldered directly to the motherboard (commonly RAM and sometimes storage on thin/ultrabook designs) \u2014 always check what\u2019s actually upgradeable on that specific model before assuming standard desktop-style upgradability.',
          'Ribbon cables (connecting the keyboard, trackpad, and display) are fragile and use small locking connectors \u2014 always release the locking tab/flap gently before pulling, never pull directly on the cable itself.'
        ] }
      },
      { id:'laptop-battery-power', title:'Battery replacement &amp; power troubleshooting', summary:'Batteries degrade predictably over time and charge cycles \u2014 knowing what\u2019s normal wear versus an actual fault saves unnecessary replacement.',
        full:{ steps:[
          'Lithium batteries degrade gradually with age and charge cycles regardless of how carefully they\u2019re used \u2014 reduced maximum capacity over a year or more of regular use is normal wear, not necessarily a fault.',
          'Windows\u2019 built-in battery report (<code>powercfg /batteryreport</code> from an elevated command prompt) shows design capacity versus current full-charge capacity, and full charge cycle count \u2014 a genuinely useful way to quantify actual battery health rather than guessing from behaviour alone.',
          'A battery that won\u2019t hold ANY meaningful charge, or that causes the laptop to shut down unexpectedly even when the reported percentage is well above 0%, points to genuine battery failure rather than normal capacity loss.',
          'A swollen battery (visibly bulging, sometimes pushing the trackpad or case out of alignment) is a real safety hazard and needs replacement immediately \u2014 stop using the device until it\u2019s addressed.',
          'For charging problems specifically: check the charger/cable and port for damage first (the single most common cause), try a different known-good charger if available, and check for corrosion or debris in the charging port before assuming the battery or motherboard charging circuit itself has failed.'
        ] }
      },
      { id:'laptop-cooling-thermal', title:'Laptop cooling maintenance &amp; thermal paste replacement', summary:'Laptop cooling systems are compact and dust-prone \u2014 periodic cleaning and thermal paste renewal genuinely extends usable life.',
        full:{ steps:[
          'Laptop cooling systems (small fans, thin heat pipes, compact heatsinks) have far less thermal headroom than desktop cooling, and their tight intake/exhaust vents clog with dust more easily \u2014 periodic cleaning matters more, not less, than on a desktop.',
          'Compressed air through the vents (with the fan blades held still to prevent them spinning too fast and generating damaging reverse voltage) removes surface dust without opening the case, and is worth doing periodically as basic preventive maintenance.',
          'For a genuine deep clean or thermal paste renewal, the cooling assembly (fan, heat pipes, heatsink) typically needs to be removed following the model\u2019s specific service manual \u2014 laptop thermal paste application uses the same principle as desktop (thin, even layer) but often in a much smaller, harder-to-access area.',
          'Rising temperatures, increased fan noise/speed, and thermal throttling (the CPU/GPU deliberately slowing down to avoid overheating) after a few years of use are common symptoms that dust buildup and/or degraded thermal paste are the cause.',
          'Never block a laptop\u2019s intake vents by using it on a soft surface (a bed, a cushion, your lap) for extended periods \u2014 use on a hard, flat surface, or a cooling pad, especially under sustained load.'
        ] }
      },
      { id:'laptop-component-replacement', title:'Keyboard, display &amp; Wi-Fi card replacement', summary:'Common laptop-specific repairs, each with its own particular access route and connector type.',
        full:{ steps:[
          'Keyboard replacement: many laptop keyboards are a single assembly that lifts out after removing a specific set of screws (sometimes accessed from underneath, sometimes from inside after removing the palm rest) \u2014 always check the specific model\u2019s procedure, and handle the ribbon cable connector carefully.',
          'Display replacement fundamentals: the screen assembly connects via a display cable (and sometimes a separate cable for webcam/microphone) routed through the hinge \u2014 note the routing carefully during disassembly, since hinge cable routing is a common source of reassembly mistakes and can risk cable damage on subsequent opening/closing if done wrong.',
          'Wi-Fi card replacement: most laptops use a small M.2 Wi-Fi card, secured by a single screw, with two or more small antenna cables that clip onto the card \u2014 these tiny clips are fragile and a common point of accidental damage; note which antenna cable (usually labelled with a colour or a "MAIN"/"AUX" marking) connects where.',
          'A "no Wi-Fi networks visible at all" symptom after a laptop has been dropped or after opening it for other work should specifically raise suspicion of a loose or disconnected antenna cable at the Wi-Fi card, not just a driver/software issue.',
          'For all these repairs: buying the CORRECT specific replacement part for that exact model (not just "a laptop keyboard" or "a laptop screen") matters enormously, since connectors, dimensions, and even backlight compatibility vary between models that otherwise look near-identical.'
        ] }
      },
    ],
  },
  {
    key:'security', title:'PC Security', color:'var(--red)',
    icon:`<path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"/>`,
    blurb:'Windows Defender, Firewall, accounts, and keeping a system patched.',
    topics:[
      { id:'defender-malware', title:'Windows Security / Microsoft Defender &amp; malware', summary:'Windows\u2019 built-in antivirus is genuinely capable for most users \u2014 knowing how to use and verify it matters more than which brand-name product sits on top of it.',
        full:{ steps:[
          'Windows Security (built on Microsoft Defender) provides real-time antivirus/anti-malware protection out of the box on every modern Windows install, automatically updating its threat definitions \u2014 for most home/general users, it\u2019s a genuinely adequate solution on its own without needing a separate paid product.',
          'A full/offline scan (available in Windows Security\u2019s scan options) runs before Windows fully loads, letting it check files that a running malware process might otherwise be able to hide from a scan performed while Windows is fully booted.',
          'Symptoms suggesting active malware: unexplained slowdowns, unfamiliar programs/browser toolbars appearing, excessive pop-ups, browser homepage/search engine changed without your action, or unusually high network/CPU activity with nothing obvious running.',
          'For a suspected active infection, boot into Safe Mode with Networking first (limits what malware can do, since many rely on other Windows services/startup items that won\u2019t load in Safe Mode) before running a thorough scan.',
          'A reputable dedicated malware removal tool (like Malwarebytes, run alongside rather than replacing Windows Security) is a reasonable second opinion for a specifically stubborn or suspected infection \u2014 different tools catch different things, and running two full-time antivirus products simultaneously can cause conflicts, so use a second tool for a targeted scan, not as a permanent second layer.',
          'After removing malware, change passwords for any accounts that may have been accessed from the infected machine \u2014 credentials typed or stored while a system was compromised should be treated as potentially exposed.'
        ] }
      },
      { id:'windows-firewall', title:'Windows Firewall fundamentals', summary:'Controls which network traffic is allowed in and out of the machine \u2014 usually invisible when working correctly, very visible when misconfigured.',
        full:{ steps:[
          'Windows Firewall filters network traffic based on rules \u2014 by default, it blocks unsolicited incoming connections (protecting against external scanning/attacks) while generally allowing outgoing connections your own applications initiate.',
          'Windows automatically classifies each network connection as Public, Private, or Domain \u2014 Public networks (like a coffee shop Wi-Fi) get stricter default rules than Private (your trusted home network), since you don\u2019t know who else is on a public network.',
          'A common real-world troubleshooting scenario: a local network application (file sharing, a game\u2019s local multiplayer, a media server) not being discoverable/reachable from another device on the same network \u2014 often resolved by adding a specific inbound rule allowing that application/port, rather than disabling the firewall entirely.',
          'Disabling the firewall entirely to "fix" a connectivity problem is almost never the right long-term answer \u2014 it\u2019s a genuine security control; the correct fix is almost always a specific, scoped rule for the particular application/port that needs access.',
          'Windows Firewall with Advanced Security (accessible via search) gives fuller control \u2014 viewing/creating specific inbound and outbound rules, useful when troubleshooting exactly why a specific piece of software can\u2019t communicate as expected.'
        ] }
      },
      { id:'accounts-uac', title:'User accounts, administrator vs. standard, &amp; UAC', summary:'The difference between an administrator and a standard account is a genuine security boundary, not just a permissions inconvenience.',
        full:{ steps:[
          'An administrator account can install software, change system-wide settings, and modify other users\u2019 accounts; a standard account is deliberately restricted from these actions \u2014 day-to-day use on a standard account (rather than administrator) meaningfully limits what malware or a mistake can do, since it inherits the same restrictions the logged-in account has.',
          'UAC (User Account Control) is the prompt that appears asking for permission (or, for a standard account, an administrator\u2019s credentials) before an action requiring elevated privileges proceeds \u2014 designed specifically to stop software silently making system-level changes without the user\u2019s explicit awareness and consent.',
          'A UAC prompt appearing unexpectedly (not triggered by something you were actually trying to do) is a warning sign worth paying attention to \u2014 it can indicate something is attempting an action you didn\u2019t initiate.',
          'Multiple user accounts on a shared family/household PC, each with their own standard account (rather than everyone sharing one administrator account), is a genuinely good practical security habit \u2014 isolates each person\u2019s files/settings and limits the blast radius of any one account being compromised or misused.',
          'Local accounts vs. Microsoft accounts is a separate distinction from administrator/standard \u2014 a Microsoft account (signed in with an email) syncs settings and enables features like Find My Device, while a local account stays entirely on that one machine; either can be set as administrator or standard.'
        ] }
      },
      { id:'password-mfa', title:'Password security practices &amp; MFA', summary:'The two most impactful, practical security habits for protecting any account \u2014 genuinely more effective than most other measures combined.',
        full:{ steps:[
          'A strong, unique password per account (not reused across multiple sites/services) is the single most impactful basic security practice \u2014 password reuse means one breached, unrelated site can expose accounts on completely different services.',
          'A password manager (built into most browsers, or a dedicated app) makes unique-per-site passwords practical, since you only need to remember one master password rather than dozens of unique ones.',
          'MFA (Multi-Factor Authentication, also called 2FA) requires a second proof of identity beyond just the password \u2014 typically a code from an authenticator app, a text message, or a physical security key \u2014 meaning a leaked/guessed password alone isn\u2019t enough to access the account.',
          'Authenticator apps (generating a time-based code) are generally considered more secure than SMS-based MFA, since SMS can be vulnerable to SIM-swapping attacks \u2014 use an authenticator app where the service offers the choice.',
          'Enabling MFA on email accounts specifically is disproportionately valuable \u2014 email is usually the "master key" used to reset passwords on most other accounts, so its compromise cascades into everything else tied to that email address.',
          'Windows Hello (fingerprint, face recognition, or PIN) provides convenient, secure local sign-in without typing a password each time, while still requiring the actual account password/credentials be strong for any recovery or remote-access scenario.'
        ] }
      },
      { id:'patch-management', title:'Patch management &amp; Windows Update', summary:'The single most impactful, lowest-effort security habit for a whole system \u2014 unpatched, known vulnerabilities are a very common way systems actually get compromised.',
        full:{ steps:[
          'Windows Update (and equivalent update mechanisms for installed applications, browsers, and drivers) delivers security patches fixing known vulnerabilities \u2014 many real-world compromises exploit vulnerabilities that were already patched months or years earlier, on systems that simply hadn\u2019t applied the update.',
          'Feature updates (larger, less frequent, adding new capabilities) are distinct from security/quality updates (smaller, more frequent, fixing bugs and vulnerabilities) \u2014 security updates specifically shouldn\u2019t be delayed or skipped, even if a feature update is held back for compatibility testing in a business environment.',
          'Third-party software (browsers, PDF readers, and other frequently-targeted applications) needs its own update discipline \u2014 Windows Update alone doesn\u2019t patch every application installed on a system.',
          'In a business/managed environment, patches are often tested in a controlled group before wider rollout, rather than applied instantly everywhere \u2014 balances the real risk of an untested patch causing its own problems against the risk of remaining unpatched too long.',
          'For a system that\u2019s been offline or neglected for a long period, expect a substantial and sometimes multi-stage update process to catch up fully \u2014 sometimes needing several rounds of updates and restarts before it reaches a fully current state.'
        ] }
      },
    ],
  },
  {
    key:'networking', title:'PC Networking', color:'var(--teal)',
    icon:`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>`,
    blurb:'The support-level networking a PC technician needs day to day \u2014 for deeper protocol theory, see a dedicated networking app.',
    topics:[
      { id:'network-adapters', title:'Network adapters &amp; connections', summary:'Ethernet and Wi-Fi adapters, and the basic checks for confirming one is actually working before troubleshooting further.',
        full:{ steps:[
          'A network adapter (built-in, a PCIe card, or a USB adapter) is the hardware that actually connects a PC to a network, either via a physical Ethernet cable or wirelessly via Wi-Fi.',
          'Check Device Manager first for a network adapter showing a warning icon or missing entirely \u2014 confirms whether it\u2019s a driver/detection issue before assuming a cabling or network configuration problem.',
          'For Ethernet, check the physical link lights on the port itself (usually a small LED that lights/blinks when a valid connection is detected) \u2014 no light at all often points to a cable, port, or switch/router issue rather than a Windows configuration problem.',
          'For Wi-Fi, confirm the adapter is actually enabled (some laptops have a physical or function-key toggle for wireless) and that it can see any networks at all \u2014 seeing no networks whatsoever (not even neighbours\u2019) points to the adapter/driver, while seeing other networks but not your own points toward the specific network/router.',
          'A quick network adapter reset (disable then re-enable it in Windows, or a full restart) resolves a surprising number of "suddenly no connection" issues, similar in spirit to power-cycling a router.'
        ] }
      },
      { id:'ip-dhcp-dns-basics', title:'IP addressing, DHCP &amp; DNS basics', summary:'The essential support-level version of how a PC gets an address on a network, and finds things by name rather than number.',
        full:{ steps:[
          'Every device on a network needs a unique IP address to communicate \u2014 DHCP (Dynamic Host Configuration Protocol) is how most devices get one automatically from the router, rather than needing manual configuration on every single device.',
          'A device with no valid IP address (Windows shows this as a distinct "no internet, limited connectivity" state, sometimes with a self-assigned 169.254.x.x address) usually indicates a failed DHCP request \u2014 common causes include a router/DHCP server issue, or a cable/Wi-Fi connection problem preventing the request from ever reaching the router.',
          '<code>ipconfig /release</code> followed by <code>ipconfig /renew</code> forces a fresh DHCP request, often resolving an IP configuration problem without needing to restart anything.',
          'DNS translates domain names into IP addresses \u2014 a device can have a perfectly valid IP address and internet connectivity, yet still fail to load websites if DNS specifically isn\u2019t working; testing by IP address directly (or via <code>nslookup</code>) helps isolate a DNS-specific problem from a broader connectivity one.',
          'The default gateway is the address of the router itself \u2014 the device every outbound request first passes through to reach anything outside the local network; confirming you can <code>ping</code> the gateway is a fast way to check basic local network connectivity, separate from whether the wider internet itself is reachable.'
        ] }
      },
      { id:'network-shares-smb', title:'Network shares &amp; SMB', summary:'How Windows machines share files and folders directly with each other over a local network, without needing cloud storage.',
        full:{ steps:[
          'SMB (Server Message Block) is the protocol Windows uses for file and printer sharing over a network \u2014 what lets you browse to <code>\\\\COMPUTERNAME\\ShareName</code> and access files on another PC directly.',
          'A shared folder needs both sharing permissions (who can access the share at all, and at what level \u2014 read or read/write) and NTFS permissions on the underlying folder itself \u2014 the more restrictive of the two always applies, a common source of "access denied" confusion when troubleshooting.',
          'Network discovery (a Windows setting) needs to be enabled for computers to automatically see each other browsing the network \u2014 a share can still be accessed directly by typing its exact path even with discovery off, but won\u2019t appear automatically in Network browsing.',
          'A mapped network drive assigns a shared folder a drive letter (like <code>Z:</code>), making it appear and behave like a local drive for convenience \u2014 useful for folders accessed regularly, rather than navigating the full network path each time.',
          'Common troubleshooting steps for "can\u2019t access a network share": confirm both machines are actually on the same network, check the sharing/NTFS permissions on the source machine, and confirm the network profile is set to Private rather than Public (which restricts discovery/sharing by default).'
        ] }
      },
      { id:'firewall-vpn-remote', title:'Firewall/VPN fundamentals &amp; Remote Desktop', summary:'Understanding VPNs and remote access at a support level \u2014 what they do, and the common connectivity issues each brings.',
        full:{ steps:[
          'A VPN (Virtual Private Network) creates an encrypted tunnel between a device and a remote network/server \u2014 commonly used to securely access a work network from outside the office, or to route traffic through a different network/location.',
          'A common support scenario: a user can access some resources but not others while connected to a VPN \u2014 often a routing or split-tunnelling configuration issue (whether ALL traffic goes through the VPN, or only traffic destined for the remote network) rather than the VPN itself being "broken."',
          'Remote Desktop (RDP) lets you connect to and control another Windows machine\u2019s desktop remotely \u2014 needs to be explicitly enabled on the target machine (Settings > Remote Desktop), and the target must be reachable on the network (or via VPN if remote), with appropriate firewall rules allowing the connection.',
          'For Remote Desktop failing to connect: confirm it\u2019s enabled on the target, check Windows Firewall isn\u2019t blocking it, confirm the target\u2019s network name/IP is correct and reachable, and check the user account attempting to connect actually has permission to do so.',
          'VPN client software commonly interacts with (and can sometimes conflict with) network adapter settings and firewall rules \u2014 if network connectivity behaves oddly after installing/using VPN software, checking for leftover virtual network adapters or firewall rules it created is a reasonable troubleshooting step.'
        ] }
      },
    ],
  },
  {
    key:'storagedata', title:'Storage &amp; Data Management', color:'var(--amber)',
    icon:`<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14a8 3 0 0 0 16 0V5"/><path d="M4 12a8 3 0 0 0 16 0"/>`,
    blurb:'Partitioning, cloning, redundancy, encryption, and backup.',
    topics:[
      { id:'partitioning-mbr-gpt', title:'Disk partitioning &amp; MBR vs. GPT', summary:'A partition table defines how a drive is divided; MBR and GPT are two different standards with real practical differences.',
        full:{ steps:[
          'A partition divides a physical drive into one or more separate logical sections, each of which can be formatted with its own file system and treated as a distinct drive letter \u2014 useful for separating an OS installation from data, or hosting multiple operating systems.',
          'MBR (Master Boot Record) is the older partitioning standard \u2014 limited to 4 primary partitions (or 3 primary plus extended partitions containing multiple logical drives), and can\u2019t address drives larger than 2TB.',
          'GPT (GUID Partition Table) is the modern standard \u2014 supports far more partitions, addresses drives well beyond 2TB, and is required for booting Windows in UEFI mode (rather than Legacy/CSM).',
          'A drive\u2019s partition style (MBR or GPT) is set when it\u2019s first initialised, and converting between them on a drive with existing data/an OS installed typically requires backing up and starting fresh (or specific conversion tools with real risk if something goes wrong) \u2014 not a simple, casual setting to flip.',
          'For a new drive being set up as a boot drive for a modern Windows 11 UEFI installation, GPT is the expected, essentially required choice \u2014 MBR is now mainly relevant for older systems, older Legacy-BIOS-only hardware, or specific compatibility scenarios.'
        ] }
      },
      { id:'disk-cloning-migration', title:'Disk cloning &amp; drive migration', summary:'Copying an entire working drive (OS, settings, and all) to a new one \u2014 usually far faster than a fresh install and full reconfiguration.',
        full:{ steps:[
          'Disk cloning copies an entire drive\u2019s contents \u2014 partition structure, OS, installed programs, and files \u2014 to a new (typically larger, or faster, like HDD-to-SSD) drive, resulting in a fully bootable replacement without needing to reinstall the OS and every application from scratch.',
          'Dedicated cloning software (many SSD manufacturers provide free tools specifically for this, alongside general-purpose options) handles the process \u2014 typically run either from within the running OS (cloning to a drive connected via USB adapter) or from bootable media for a cleaner clone.',
          'The target drive must be at least as large as the actual USED space on the source drive (not necessarily as large as the source drive\u2019s total capacity) \u2014 cloning to a smaller drive than the data actually in use will fail or require first shrinking the source partition.',
          'After cloning, the system needs to actually boot from the new drive \u2014 either by physically swapping it in place of the old one, or by changing the boot order in BIOS/UEFI if both drives remain connected.',
          'Migration is a closely related but distinct process \u2014 rather than a byte-for-byte clone, it selectively moves the OS and chosen data to a new drive (sometimes resizing partitions to fit a smaller target drive), which most modern cloning tools support as an alternative mode to a straight clone.'
        ] }
      },
      { id:'raid-fundamentals', title:'RAID fundamentals', summary:'Combining multiple physical drives into one logical unit for either performance, redundancy, or both \u2014 different RAID levels make very different trade-offs.',
        full:{ steps:[
          'RAID (Redundant Array of Independent Disks) combines multiple physical drives into a single logical volume, according to a chosen "level" that determines the trade-off between capacity, performance, and fault tolerance.',
          'RAID 0 (striping) spreads data across multiple drives for improved performance, but provides NO redundancy \u2014 losing any one drive in the array loses ALL the data; genuinely higher risk than a single drive, not lower.',
          'RAID 1 (mirroring) writes identical data to two drives simultaneously \u2014 if one fails, the other has a complete, immediately usable copy; halves total usable capacity in exchange for that redundancy.',
          'RAID 5 (striping with distributed parity, minimum 3 drives) balances capacity, performance, and redundancy \u2014 can survive any single drive failure, at the cost of one drive\u2019s worth of capacity for parity data across the array.',
          'RAID is NOT a backup \u2014 it protects against a physical drive failure specifically, but does nothing to protect against accidental deletion, ransomware/malware, or a fire/theft affecting the whole system; a genuine backup strategy remains necessary even with RAID in place.',
          'RAID can be implemented in hardware (a dedicated RAID controller card) or software (managed by the OS itself) \u2014 hardware RAID generally offers better performance and reliability but at higher cost, while software RAID is simpler and cheaper for less demanding use cases.'
        ] }
      },
      { id:'bitlocker-encryption', title:'BitLocker &amp; drive encryption fundamentals', summary:'Encrypts an entire drive so its contents are unreadable without the correct key \u2014 protects data if a device is lost or stolen.',
        full:{ steps:[
          'BitLocker is Windows\u2019 built-in full-disk encryption feature \u2014 once enabled, the entire drive\u2019s contents are encrypted, and unreadable by anyone who doesn\u2019t have the correct decryption key/credentials, even with the physical drive removed and connected to another machine.',
          'BitLocker typically relies on the system\u2019s TPM (Trusted Platform Module) to securely store the encryption key and verify the system hasn\u2019t been tampered with before automatically unlocking the drive at boot \u2014 this is why TPM availability matters for BitLocker, not just for Windows 11 itself.',
          'A BitLocker recovery key is generated when encryption is first enabled \u2014 a genuinely critical piece of information to save somewhere safe (a Microsoft account, printed, or an organisation\u2019s IT system) since losing both the normal unlock method AND the recovery key means the data is permanently inaccessible, by design.',
          'BitLocker can unexpectedly prompt for the recovery key after certain hardware or firmware changes (like a BIOS update, or moving the drive to different hardware) \u2014 the system detects a change to its expected trusted state and requires the recovery key as a safety measure before proceeding.',
          'Before major hardware changes or BIOS updates on a BitLocker-encrypted system, it\u2019s good practice to have the recovery key readily accessible \u2014 avoids being locked out unexpectedly with no way to retrieve it in the moment.'
        ] }
      },
      { id:'backup-data-recovery', title:'Backup &amp; data recovery fundamentals', summary:'A working backup is the single most effective protection against data loss from any cause \u2014 hardware failure, malware, or simple human error.',
        full:{ steps:[
          'The commonly cited "3-2-1" backup rule: at least 3 copies of important data, on 2 different types of storage media, with at least 1 copy stored off-site \u2014 protects against a wide range of failure scenarios (drive failure, theft, fire, ransomware) that a single backup location wouldn\u2019t.',
          'Windows File History and built-in image backup tools provide basic, built-in options; third-party backup software and cloud backup services offer more flexibility (versioning, automated scheduling, off-site storage by default).',
          'A backup that has never actually been tested for successful restoration is not a reliable backup \u2014 periodically verifying that files can genuinely be restored from a backup is as important as taking the backup in the first place.',
          'Data recovery (attempting to retrieve data from a failed or corrupted drive AFTER the fact, with no existing backup) is fundamentally different from backup \u2014 far less reliable, often requiring specialist software or professional data recovery services for anything beyond simple accidental deletion, and success is never guaranteed.',
          'For a drive showing signs of imminent failure (SMART warnings, unusual noises, frequent errors), prioritise getting a backup of anything still accessible immediately, rather than continuing normal use \u2014 the window to recover data cheaply and easily narrows the longer a failing drive keeps running.'
        ] }
      },
    ],
  },
  {
    key:'peripherals', title:'Peripheral &amp; Device Troubleshooting', color:'var(--purple)',
    icon:`<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
    blurb:'Printers, displays, audio, and USB \u2014 the everyday support tickets.',
    topics:[
      { id:'printer-scanner-troubleshooting', title:'Printer &amp; scanner troubleshooting', summary:'A small, predictable set of usual suspects covers the large majority of real-world printer problems.',
        full:{ steps:[
          'Check the obvious first: powered on, paper loaded correctly, no visible error lights/messages on the printer\u2019s own display, and (for network printers) actually connected to the network.',
          'For a print job stuck in the queue, clearing the Windows print spooler (stopping the Print Spooler service, deleting stuck job files, restarting the service) resolves a large share of "nothing happens when I print" issues where the printer itself is actually fine.',
          'Driver mismatches are a common cause of garbled output, missing features, or a printer working from one application but not another \u2014 reinstalling with the correct, current driver for that specific model (not just a generic one) often resolves this.',
          'For a network printer, confirm it still has the IP address the computer expects to send jobs to \u2014 a printer\u2019s IP can change (especially if it\u2019s using DHCP rather than a static/reserved address) and silently break existing connections until reconfigured.',
          'Scanner issues often trace back to the same driver/software layer as printing (many scanning problems are actually the scanning SOFTWARE, not the physical scanner) \u2014 try scanning via Windows\u2019 built-in scan app as a way to isolate whether the hardware itself works, separate from a specific third-party scanning application.',
          'Physical issues (paper jams, worn pickup rollers causing multi-page feeds or misfeeds, low/empty ink or toner) remain the most common real-world cause overall \u2014 always rule these out before assuming a software/driver/network problem.'
        ] }
      },
      { id:'display-monitor-troubleshooting', title:'Display &amp; monitor troubleshooting', summary:'No signal, wrong resolution, or flickering \u2014 narrowing down cable, port, driver, or the monitor itself.',
        full:{ steps:[
          'For "no signal": confirm the cable is fully seated at both ends, try a different cable and a different port on both the GPU and monitor if possible \u2014 cables and ports fail more often than people expect, and swapping them is the fastest way to rule this out.',
          'Confirm the monitor is actually set to the correct input source \u2014 many monitors have multiple inputs (HDMI, DisplayPort, etc.) and a common, easy-to-overlook cause of "no signal" is simply the monitor looking at the wrong input.',
          'Wrong or blurry resolution/scaling is usually a Windows display settings issue rather than a hardware fault \u2014 check Settings > Display for the correct native resolution (matching the monitor\u2019s actual panel resolution) and appropriate scaling.',
          'Flickering can stem from several different causes: a loose cable connection, an outdated/corrupted GPU driver, an incorrect refresh rate setting, or (less commonly) a failing monitor or GPU \u2014 updating the GPU driver and confirming the cable connection are the two fastest, most common fixes to try first.',
          'For a laptop with a built-in display showing a problem, connecting an external monitor helps isolate whether the issue is the GPU/graphics output itself (would also affect the external display) versus the built-in screen or its cable specifically (external display would work fine).',
          'Dead or stuck pixels, or a physically cracked/damaged panel, indicate a hardware fault in the display itself rather than anything fixable through software or cable troubleshooting.'
        ] }
      },
      { id:'audio-troubleshooting', title:'Audio troubleshooting', summary:'No sound, wrong output device, or crackling/distorted audio \u2014 a methodical check through Windows\u2019 audio settings and drivers.',
        full:{ steps:[
          'Check the obvious first: volume not muted or at zero (both in Windows and on any physical volume controls), and the correct output device actually selected in Windows\u2019 sound settings \u2014 a laptop connected to external speakers/headphones can easily end up "talking" to the wrong output device.',
          'For no sound from a specific application only (while other sounds work fine), check that application\u2019s own internal volume/output settings, and Windows\u2019 per-app volume mixer, which can independently mute or lower an individual application\u2019s audio.',
          'Crackling, popping, or distorted audio often points to an outdated or corrupted audio driver \u2014 reinstalling the correct driver for that specific audio hardware (not always the generic Windows-provided one) frequently resolves this.',
          'For a completely missing audio device (no playback devices listed at all), check Device Manager for a driver issue on the audio controller, and confirm audio hasn\u2019t been disabled in BIOS/UEFI (an uncommon but real possibility, especially after a BIOS reset).',
          'Bluetooth audio devices add their own layer of potential issues (pairing problems, connection drops, audio/video sync lag) distinct from wired audio troubleshooting \u2014 removing and re-pairing the device is a reasonable first step for persistent Bluetooth-specific audio problems.'
        ] }
      },
      { id:'usb-device-troubleshooting', title:'USB device problems', summary:'A device not recognised, working intermittently, or drawing too much power \u2014 systematic checks that quickly narrow down the cause.',
        full:{ steps:[
          'Try a different USB port first, ideally directly on the motherboard\u2019s rear panel rather than a front-panel header, hub, or dock \u2014 rules out a specific port, header wiring, or hub issue before suspecting the device itself.',
          'Try a different known-good cable if the device uses a separate USB cable \u2014 cables fail more often in practice than either the device or the port.',
          'Check Device Manager for the device showing a warning icon, or appearing as an unrecognised/generic device \u2014 indicates a driver problem rather than a fundamental hardware fault.',
          'For a device that disconnects and reconnects repeatedly (sometimes audible as a repeated connection "chime"), suspect insufficient power \u2014 particularly for USB hubs, external hard drives, or several devices sharing one hub \u2014 and try a powered USB hub, or connecting the device directly to the PC rather than through a hub/dock.',
          'USB selective suspend (a Windows power-saving feature that can power down idle USB ports) occasionally causes devices to become briefly unresponsive after a period of inactivity \u2014 disabling it for a specific troublesome device\u2019s power management settings can resolve intermittent "device stopped responding" symptoms.',
          '"USB device not recognised" errors that persist across multiple ports, cables, and even other computers point to the device itself having failed, rather than anything on the host PC\u2019s side.'
        ] }
      },
    ],
  },
  {
    key:'itsupport', title:'Professional IT Support Skills', color:'var(--navy)',
    icon:`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
    blurb:'The workflow and communication skills around the technical work itself.',
    topics:[
      { id:'helpdesk-method', title:'Help-desk troubleshooting method', summary:'A structured approach to a support call or ticket \u2014 gathering the right information first saves far more time than it costs.',
        full:{ steps:[
          'Start by clearly identifying the actual problem from the user\u2019s description \u2014 what they report as "the internet is broken" might actually be one specific website down, a browser issue, or something else entirely; ask clarifying questions rather than assuming.',
          'Establish a timeline: when did the problem start, and did anything change around that time (a recent update, a new piece of software installed, a physical change like moving the desk/cables)? This very often points directly at the cause.',
          'Reproduce the issue if possible, either by walking through the exact steps with the user or attempting it yourself \u2014 confirms you understand the actual problem before attempting a fix, rather than fixing something adjacent to the real issue.',
          'Establish a theory of probable cause, starting with the most common/likely explanations before moving to more obscure ones \u2014 the same "simple and likely before exotic and rare" principle covered in general hardware troubleshooting applies directly here too.',
          'Test the theory, implement a fix, then verify the fix actually resolved the reported problem with the user before closing it out \u2014 a fix that "should" work but was never actually confirmed with the user is an unfinished job, not a completed one.',
          'Document what was found and done (see the next guide) \u2014 both for your own future reference and for anyone else who might pick up a related issue later.'
        ] }
      },
      { id:'documentation-ticketing', title:'Documentation &amp; ticketing systems', summary:'A ticket that\u2019s clear, specific, and complete is genuinely valuable \u2014 both to future-you and to anyone else who touches that issue.',
        full:{ steps:[
          'A ticketing system tracks support requests from initial report through to resolution \u2014 providing a record of what was reported, what was tried, and what ultimately fixed it, rather than relying on memory or scattered notes.',
          'A well-written ticket includes: the specific symptom as reported (in the user\u2019s own words where useful), steps to reproduce if applicable, what was tried and the result of each attempt, and the final resolution \u2014 vague notes like "fixed it" help nobody, including future you revisiting a similar issue months later.',
          'Documenting hardware/software inventory (what\u2019s installed on which machine, warranty status, asset tags) separately from individual tickets makes future troubleshooting faster \u2014 knowing a machine\u2019s exact specs and history immediately narrows down likely causes for a new issue.',
          'Consistent categorisation and priority levels on tickets (even a simple scheme) help with both day-to-day triage and spotting patterns over time \u2014 like the same issue recurring across many tickets, which might indicate a systemic problem worth addressing at the root rather than repeatedly firefighting individual instances.',
          'Good documentation habits compound over time \u2014 a well-documented ticket history becomes a genuinely useful knowledge base for recurring or similar future issues, saving real time on problems you\u2019ve (or a colleague has) already solved before.'
        ] }
      },
      { id:'remote-support-tools', title:'Remote support tools', summary:'Diagnosing and fixing a problem on a machine you\u2019re not physically sitting in front of \u2014 an increasingly standard part of IT support work.',
        full:{ steps:[
          'Remote desktop/screen-sharing tools (Windows\u2019 built-in Quick Assist, TeamViewer, AnyDesk, and similar) let a technician view and control a user\u2019s screen remotely, with the user\u2019s permission \u2014 essential for diagnosing and fixing many issues without needing to be physically present.',
          'Always confirm the user\u2019s understanding and consent before taking remote control, and explain generally what you\u2019re about to do \u2014 both good practice and, in many contexts, a genuine requirement for handling their system responsibly.',
          'Command-line tools (see the Command Line & PowerShell category) are particularly valuable in remote support \u2014 they let you gather diagnostic information or make changes quickly via a script or a few typed commands, without needing to walk a user through clicking through several different GUI windows themselves.',
          'For unattended remote access (connecting to a machine without someone present to grant access each time, common for managing servers or regularly-supported machines), proper authentication and access controls matter even more than for one-off, user-initiated remote sessions.',
          'Network conditions affect remote support quality \u2014 a slow or unstable connection on the user\u2019s end can make an otherwise straightforward remote fix frustrating; knowing when a remote session genuinely isn\u2019t practical and an on-site visit or different approach is needed is itself a useful judgement call.'
        ] }
      },
      { id:'escalation-communication', title:'Escalation procedures &amp; communication', summary:'Knowing when and how to hand a problem up the chain, and communicating clearly with the user throughout \u2014 both genuinely part of the job, not separate from the technical work.',
        full:{ steps:[
          'Escalation means passing an issue to someone with more specialised knowledge, higher access privileges, or authority to make a decision you can\u2019t \u2014 recognising when an issue is genuinely beyond your current scope or access is a sign of good judgement, not a failure.',
          'A clear escalation includes everything the next person needs to pick up where you left off: what\u2019s been tried already, what the current understanding of the problem is, and why it\u2019s being escalated specifically \u2014 escalating with no context just pushes the same investigative work onto someone else redundantly.',
          'Setting realistic expectations with the user about timelines, and proactively updating them on progress (rather than leaving them wondering) matters as much as the technical resolution itself for how the overall interaction is actually experienced.',
          'Communicating in plain language appropriate to the person\u2019s technical background \u2014 not over-explaining to someone technical, and not drowning a non-technical user in jargon \u2014 is a genuinely practical, learnable skill that significantly affects how support interactions go.',
          'Following up after a fix to confirm the issue hasn\u2019t recurred (rather than assuming silence means it\u2019s resolved) closes the loop properly and often catches a problem that seemed fixed but wasn\u2019t fully resolved.'
        ] }
      },
    ],
  },
];

/* =====================================================================
   VIEW SWITCHING
===================================================================== */
function showView(name, param, direction, exitDirection){
  direction = direction || 'push';
  exitDirection = exitDirection || direction;
  const next = document.getElementById('view-' + name);
  const current = document.querySelector('.view.active');

  if (name === 'home') renderHome();
  if (name === 'components') renderComponentsList();
  if (name === 'guides') renderCategoriesList();

  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  const tabMap = { home:'tabHome', components:'tabComponents', 'component-detail':'tabComponents', guides:'tabGuides', category:'tabGuides', topic:'tabGuides', search:'tabSearch', study:'tabStudy', lab:'tabStudy' };
  const tabId = tabMap[name];
  if (tabId) document.getElementById(tabId).classList.add('active');

  const enterClass = 'enter-' + direction;
  const exitClass = 'exit-' + exitDirection;

  if (current && current !== next) {
    current.classList.remove('active', 'enter-push', 'enter-pop');
    current.classList.add(exitClass);
    setTimeout(() => { current.classList.remove(exitClass); }, 320);
  }

  next.classList.remove('exit-push', 'exit-pop');
  next.classList.add('active', enterClass);
  window.scrollTo(0, 0);
  setTimeout(() => { next.classList.remove(enterClass); }, 320);
}

/* =====================================================================
   RENDER: HOME + COMPONENTS
===================================================================== */
function componentRow(c){
  return `
    <button class="list-row" style="--row-color:${c.color};" onclick="openComponent('${c.id}')">
      <span class="row-symbol">${SYMBOLS[c.id] || ''}</span>
      <span class="row-text">
        <h3>${c.title}</h3>
        <p>${c.summary}</p>
      </span>
      <svg class="row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `;
}

function renderHome(){
  document.getElementById('homeComponentsList').innerHTML = COMPONENTS.map(componentRow).join('');
  renderAcademyHome();
}
function renderAcademyHome(){
  const total=COMPONENTS.length+GUIDE_CATEGORIES.reduce((n,c)=>n+c.topics.length,0)+DEEP_MODULES.reduce((n,m)=>n+m.lessons.length,0);
  const done=(learningState.completed?.length||0)+(deepState.done?.length||0);
  const count=document.getElementById('academyDone');if(count)count.textContent=done;
  const meter=document.getElementById('academyMeterFill');if(meter)meter.style.width=(total?Math.min(100,Math.round(done/total*100)):0)+'%';
  try {
    const last=JSON.parse(localStorage.getItem('computepro-academy-recent')||'null');
    if(!last)return;
    const title=document.getElementById('academyResumeTitle'),btn=document.getElementById('academyResumeBtn');
    if(last.type==='topic'){
      const cat=GUIDE_CATEGORIES.find(c=>c.key===last.cat),topic=cat?.topics.find(t=>t.id===last.id);
      if(topic){title.textContent=topic.title;btn.textContent='Resume guide →';btn.onclick=()=>openTopic(last.cat,last.id)}
    }else if(last.type==='component'){
      const item=COMPONENTS.find(c=>c.id===last.id);
      if(item){title.textContent=item.title;btn.textContent='Resume component →';btn.onclick=()=>openComponent(last.id)}
    }
  }catch(e){}
}
function academyRemember(type,id,cat){try{localStorage.setItem('computepro-academy-recent',JSON.stringify({type,id,cat}))}catch(e){}}

function renderComponentsList(){
  document.getElementById('componentsListWrap').innerHTML = COMPONENTS.map(componentRow).join('');
}

function openComponent(id){
  academyRemember('component',id);
  const c = COMPONENTS.find(x => x.id === id);
  if (!c) return;
  document.getElementById('componentDetailTitle').innerHTML = c.title;
  document.getElementById('componentDetailContent').innerHTML = c.content();
  showView('component-detail', null, 'push');
}

/* =====================================================================
   RENDER: GUIDES
===================================================================== */
function categoryRow(c){
  return `
    <button class="list-row" style="--row-color:${c.color};" onclick="openCategory('${c.key}')">
      <span class="row-symbol"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="2">${c.icon}</svg></span>
      <span class="row-text">
        <h3>${c.title}</h3>
        <p>${c.blurb}</p>
        <p class="row-count">${c.topics.length} topics</p>
      </span>
      <svg class="row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `;
}

function renderCategoriesList(){
  document.getElementById('categoriesListWrap').innerHTML = GUIDE_CATEGORIES.map(categoryRow).join('');
}

function openCategory(key){
  const c = GUIDE_CATEGORIES.find(x => x.key === key);
  if (!c) return;
  document.getElementById('categoryTitle').innerHTML = c.title;

  const topicsHtml = c.topics.map(t => `
    <button class="topic-row" onclick="openTopic('${c.key}','${t.id}')">
      <span class="topic-text">
        <h4>${t.title}</h4>
        <p>${t.summary}</p>
      </span>
      <svg class="row-chevron-sm" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `).join('');

  document.getElementById('categoryContent').innerHTML = topicsHtml;
  showView('category', null, 'push');
}

function openTopic(categoryKey, topicId){
  academyRemember('topic',topicId,categoryKey);
  const c = GUIDE_CATEGORIES.find(x => x.key === categoryKey);
  if (!c) return;
  const t = c.topics.find(x => x.id === topicId);
  if (!t) return;

  document.getElementById('topicEyebrow').innerHTML = c.title.toUpperCase();
  document.getElementById('topicTitle').textContent = t.title;

  let html = `<p class="detail-summary">${t.summary}</p>`;
  if (t.full.diagram) html += diagramCard(CONCEPT_DIAGRAMS[t.full.diagram], t.full.diagramCaption || '');
  html += `<ol class="step-list">`;
  html += t.full.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span class="step-body">${s}</span></li>`).join('');
  html += `</ol>`;

  document.getElementById('topicContent').innerHTML = html;

  const backBtn = document.getElementById('topicBackBtn');
  backBtn.onclick = () => showView('category', null, 'pop');
  openCategory(categoryKey);
  showView('topic', null, 'push');
}

/* =====================================================================
   INITIAL RENDER
===================================================================== */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}


/* ===== COMPUTEPRO MASTERCLASS MODULE ===== */
const STORE_KEY='computepro-masterclass-v1';
let learningState={completed:[],practice:[],notes:'',quizIndex:0};
try { const saved=JSON.parse(localStorage.getItem(STORE_KEY)||'null'); if(saved&&typeof saved==='object')learningState={...learningState,...saved}; }catch(e){}
function persistLearning(){try{localStorage.setItem(STORE_KEY,JSON.stringify(learningState))}catch(e){}}
function startLearning(){openCategory(GUIDE_CATEGORIES[0].key)}
function masterArrow(){return '<svg class="row-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>'}
const bootStages=[['Power on','The PSU receives a power-on signal and supplies regulated DC power to the board.'],['Firmware / POST','UEFI firmware initialises essential hardware and runs checks. A debug LED or code can help identify failures.'],['Boot selection','Firmware selects a bootable device according to the configured boot order.'],['Bootloader','The bootloader locates and starts the operating system kernel.'],['Operating system','The kernel initialises drivers and services, then presents a login or desktop.']];
function nval(id){const n=Number(document.getElementById(id)?.value);return Number.isFinite(n)?Math.max(0,n):0}
function updateLab(){const cpu=nval('cpuWatts'),gpu=nval('gpuWatts'),other=nval('otherWatts'),head=Math.min(nval('headroom'),100),total=cpu+gpu+other,recommended=Math.ceil(total*(1+head/100)/50)*50;document.getElementById('powerResult').innerHTML=`<strong>Estimated peak: ${total.toLocaleString()} W</strong><br>Suggested PSU capacity: <strong>${recommended.toLocaleString()} W</strong> (rounded up to 50 W).<br><small>Verify manufacturer power recommendations, transient spikes and connector requirements.</small>`;const modules=Math.min(nval('ramModules'),8),each=Math.min(nval('ramEach'),128);document.getElementById('ramResult').innerHTML=`<strong>${modules} × ${each} GB = ${modules*each} GB RAM</strong><br><small>For dual-channel operation, follow the motherboard manual for the correct slot pairing and supported module configuration.</small>`}
function showBoot(i){document.querySelectorAll('.boot-stage').forEach((b,j)=>b.classList.toggle('active',i===j));document.getElementById('bootResult').innerHTML=`<strong>${bootStages[i][0]}</strong><br>${bootStages[i][1]}`}
const QUESTIONS=[
['Which component holds working data only while powered?', ['SSD','RAM','PSU','UEFI firmware'],1,'RAM is volatile working memory; SSD storage retains data without power.'],
['What is POST primarily used for?', ['Checking essential hardware during startup','Updating the OS','Formatting storage','Testing internet speed'],0,'POST is part of the firmware startup checks.'],
['What should you do before opening a desktop PC case?', ['Remove the CPU','Disconnect power and follow safe handling guidance','Short the PSU pins','Enable XMP'],1,'Shut down, unplug and follow the manufacturer’s safety instructions. Never open a PSU housing.'],
['Which interface is typically used by an NVMe SSD?', ['VGA','SATA only','PCI Express','PS/2'],2,'NVMe SSDs use PCIe; M.2 is a common connector/form factor.'],
['A computer overheats under load. What should you check first?', ['Cooling airflow, fan operation and temperatures','Delete the operating system','Increase voltage','Replace the display'],0,'Inspect temperatures and cooling before replacing expensive components.'],
['Which specification must match for CPU/motherboard compatibility?', ['Case colour','CPU socket and supported CPU list','Monitor refresh rate','Keyboard layout'],1,'Socket compatibility and firmware support both matter.'],
['What does a PSU wattage rating describe?', ['Maximum rated output capacity','CPU clock speed','Memory bandwidth','SSD write endurance'],0,'The PSU rating describes its output capability under specified conditions.'],
['Why is a backup important before storage diagnostics?', ['It improves frame rate','Tests may stress a failing drive and data may be at risk','It changes PCIe lanes','It resets UEFI'],1,'Prioritise data preservation when a drive shows signs of failure.'],
['What is a sensible first check for a PC with no display?', ['Inspect display connection and GPU output selection','Reinstall the CPU immediately','Open the PSU','Flash firmware without checking model'],0,'Start with reversible, low-risk checks such as cables, display inputs and power.'],
['What is the purpose of the bootloader?', ['Cool the CPU','Load the operating system kernel','Power USB ports','Allocate GPU VRAM'],1,'The bootloader locates and starts the operating system kernel.']
];
const PRACTICE=['Identify CPU, RAM, storage and motherboard in a PC diagram.','Check a motherboard manual for supported CPU socket and memory slots.','Trace the boot sequence from power-on to the operating system.','Estimate PSU capacity for a sample CPU/GPU build.','Write a safe troubleshooting plan for a no-display problem.','Explain the difference between SATA SSD and NVMe SSD.','Describe how you would verify a backup before storage repair.'];
function renderQuiz(){const i=learningState.quizIndex%QUESTIONS.length,q=QUESTIONS[i],box=document.getElementById('quizBox');box.innerHTML=`<div class="quiz-meta">QUESTION ${i+1} OF ${QUESTIONS.length}</div><h4>${q[0]}</h4>${q[1].map((a,j)=>`<button class="quiz-answer" onclick="answerQuiz(${j})">${String.fromCharCode(65+j)}. ${a}</button>`).join('')}<div id="quizFeedback" aria-live="polite"></div>`}
function answerQuiz(choice){const q=QUESTIONS[learningState.quizIndex%QUESTIONS.length];document.querySelectorAll('.quiz-answer').forEach((el,j)=>{el.disabled=true;el.classList.add(j===q[2]?'correct':j===choice?'incorrect':'')});document.getElementById('quizFeedback').innerHTML=`<div class="result-panel"><strong>${choice===q[2]?'Correct!':'Not quite.'}</strong> ${q[3]}</div><button class="quiz-next" onclick="nextQuiz()">Next question →</button>`}
function nextQuiz(){learningState.quizIndex=(learningState.quizIndex+1)%QUESTIONS.length;persistLearning();renderQuiz()}
function renderPractice(){document.getElementById('practiceBox').innerHTML=PRACTICE.map((p,i)=>`<label class="practice-item"><input type="checkbox" ${learningState.practice.includes(i)?'checked':''} onchange="togglePractice(${i},this.checked)"><span>${p}</span></label>`).join('')}
function togglePractice(i,on){learningState.practice=on?[...new Set([...learningState.practice,i])]:learningState.practice.filter(x=>x!==i);persistLearning();renderProgress()}
function saveNotes(){learningState.notes=document.getElementById('studyNotes').value;persistLearning()}
function renderProgress(){const all=COMPONENTS.length+GUIDE_CATEGORIES.reduce((n,c)=>n+c.topics.length,0),done=learningState.completed.length,percent=all?Math.round(done/all*100):0;document.getElementById('studyProgress').innerHTML=`<div class="progress-track"><div style="width:${percent}%"></div></div><small>${done} of ${all} reference pages / lessons completed (${percent}%) · ${learningState.practice.length} of ${PRACTICE.length} practice tasks done</small>`}
function completeLesson(key){if(!learningState.completed.includes(key))learningState.completed.push(key);persistLearning();const b=document.getElementById('completeLessonBtn');if(b){b.textContent='✓ Completed';b.disabled=true}renderProgress()}
function lessonToolbar(key){return `<div class="lesson-tools"><button id="completeLessonBtn" onclick="completeLesson('${key}')" ${learningState.completed.includes(key)?'disabled':''}>${learningState.completed.includes(key)?'✓ Completed':'✓ Mark as learned'}</button><p>Review the explanation, study the diagram and check your understanding before marking complete.</p></div>`}
function renderMasterclass(){document.getElementById('bootFlow').innerHTML=bootStages.map((s,i)=>`<button class="boot-stage" onclick="showBoot(${i})">${i+1}. ${s[0]}</button>`).join('');showBoot(0);updateLab();renderQuiz();renderPractice();document.getElementById('studyNotes').value=learningState.notes||'';renderProgress();}
function renderSearch(){const q=document.getElementById('globalSearch').value.trim().toLowerCase(),box=document.getElementById('searchResults');if(!q){box.innerHTML='<p class="empty-state">Type a component, topic or troubleshooting term to search.</p>';return}const c=COMPONENTS.filter(x=>(x.title+' '+x.summary).toLowerCase().includes(q)),topics=GUIDE_CATEGORIES.flatMap(g=>g.topics.filter(t=>(g.title+' '+t.title+' '+t.summary).toLowerCase().includes(q)).map(t=>({...t,cat:g})));box.innerHTML=(c.length?'<h3 class="search-group">Components</h3>'+c.map(x=>`<button class="search-result" onclick="openComponent('${x.id}')"><strong>${x.title} →</strong><small>${x.summary}</small></button>`).join(''):'')+(topics.length?'<h3 class="search-group">Guides</h3>'+topics.map(t=>`<button class="search-result" onclick="openTopic('${t.cat.key}','${t.id}')"><strong>${t.title} →</strong><small>${t.cat.title} · ${t.summary}</small></button>`).join(''):'')||'<p class="empty-state">No matches. Try a shorter search term.</p>'}

/* Extended ComputePro Masterclass curriculum: original library and workbench remain intact. */
const DEEP_MODULES = [{"id": "m1", "title": "Computer architecture", "summary": "Understand how a complete computer operates", "lessons": [{"id": "m1l1", "title": "The fetch–decode–execute cycle", "theory": "A CPU repeatedly fetches an instruction from memory, decodes its meaning, executes the operation and commits the result. Registers hold values immediately needed by execution units; caches reduce the delay of fetching frequently used data.", "context": "Trace an application request from input through operating-system scheduling, CPU execution, RAM access and storage output. Compare latency with throughput: a fast CPU cannot remove every storage or network bottleneck.", "exercise": "Draw a simple data path linking CPU, registers, caches, RAM, storage and input/output. Explain which elements retain data after power loss.", "mistakes": "Confusing processor clock speed with total performance; ignoring memory stalls, core count, instruction efficiency and thermal limits."}, {"id": "m1l2", "title": "Buses, lanes and bottlenecks", "theory": "The motherboard connects components through interfaces such as PCI Express, memory channels, USB and storage controllers. PCIe bandwidth depends on generation and lane width; an x16 physical slot may be wired for fewer lanes.", "context": "Compare a GPU installed in an appropriate PCIe slot with a card in a restricted slot. Look up the board manual before assuming the printed connector size tells the whole story.", "exercise": "Locate the chipset diagram in a motherboard manual. Label CPU-attached lanes and chipset-attached ports.", "mistakes": "Assuming every M.2 socket supports every protocol; overlooking shared lanes and disabled ports."}, {"id": "m1l3", "title": "Firmware to operating system", "theory": "After power-on, firmware performs early hardware initialization and checks, chooses a boot device, and hands control to a bootloader. The bootloader starts the kernel, which initializes drivers, memory management and user services.", "context": "Contrast UEFI with legacy BIOS boot, and explain the roles of GPT partitions, the EFI System Partition and Secure Boot. A firmware setup screen is not itself the operating system.", "exercise": "Write a boot-flow checklist from PSU power-good through POST, firmware, bootloader, kernel and login.", "mistakes": "Treating a missing boot device as proof of a failed SSD before checking boot order and cabling."}]}, {"id": "m2", "title": "Processors and cooling", "summary": "Choose, install and diagnose CPUs safely", "lessons": [{"id": "m2l1", "title": "CPU compatibility and performance", "theory": "Compatibility requires the correct socket, chipset support, firmware version, power delivery and cooling. Performance depends on architecture, sustained power, workload, memory access and software parallelism—not core count alone.", "context": "A newer CPU may fit the socket yet require a BIOS update. Verify manufacturer support lists and update instructions before removing a working processor.", "exercise": "Prepare a compatibility checklist for a hypothetical CPU upgrade including socket, BIOS, RAM, PSU and cooler clearance.", "mistakes": "Forcing a CPU into a socket; touching contacts; applying excessive cooler pressure."}, {"id": "m2l2", "title": "Thermal design and airflow", "theory": "Heat travels from the silicon through the integrated heat spreader, thermal interface and heatsink into moving air or liquid. Sustained overheating can reduce clock speeds, increase noise or trigger shutdowns.", "context": "Airflow should provide an unobstructed route through the case. Fan orientation, dust filters, ambient temperature and cooler mounting affect real results.", "exercise": "Record idle and load temperatures, fan speed and workload; compare trends under consistent conditions rather than relying on a single temperature reading.", "mistakes": "Using too much thermal compound; ignoring protective film; blocking intake fans."}, {"id": "m2l3", "title": "CPU troubleshooting", "theory": "Separate thermal throttling, unstable settings, power delivery faults and software load. A hot CPU does not automatically mean the processor is defective.", "context": "Check cooler mounting, fan/pump operation, dust, thermal readings and recent BIOS changes. Revert unsupported overclocks before replacing hardware.", "exercise": "Build a decision tree for a system that shuts down under load, including safe observations and stop conditions.", "mistakes": "Running repeated stress tests when the system is already shutting down or showing dangerous temperatures."}]}, {"id": "m3", "title": "Memory systems", "summary": "From RAM basics to instability diagnosis", "lessons": [{"id": "m3l1", "title": "RAM, cache and virtual memory", "theory": "RAM stores active code and data; CPU caches are smaller and faster. Virtual memory provides address-space isolation and can move less-used pages to storage, but swapping is much slower than RAM.", "context": "A system with insufficient memory may feel slow even when the CPU is not fully utilized. Distinguish memory capacity, bandwidth and latency.", "exercise": "Observe memory usage during a workload and explain what happens when physical RAM becomes scarce.", "mistakes": "Assuming high reported memory use always means a leak; confusing allocated memory with actively used memory."}, {"id": "m3l2", "title": "DDR generations and channels", "theory": "Memory modules must match the motherboard generation and supported configuration. Dual-channel operation increases available memory bandwidth when correctly populated; frequency and timing profiles may require firmware support.", "context": "Follow the motherboard manual for DIMM population order. EXPO/XMP profiles are overclock settings and may not be stable on every combination.", "exercise": "Create a table comparing capacity, supported speeds, module count and slot placement for two hypothetical builds.", "mistakes": "Mixing incompatible DDR generations; enabling unstable profiles without testing."}, {"id": "m3l3", "title": "Diagnosing memory faults", "theory": "Symptoms may include boot loops, application crashes, corrupted files or intermittent blue screens. Start with firmware defaults and inspect seating before changing multiple settings.", "context": "Test one supported module at a time when safe and practical, then use a reputable memory diagnostic. Record error patterns and avoid assuming every crash originates in RAM.", "exercise": "Document a repeatable test plan including baseline, one-change-at-a-time method and results log.", "mistakes": "Ignoring backups when instability could corrupt data; touching DIMM contacts without ESD precautions."}]}, {"id": "m4", "title": "Storage and filesystems", "summary": "Understand drives, interfaces and data protection", "lessons": [{"id": "m4l1", "title": "HDD, SATA SSD and NVMe", "theory": "Hard disks use mechanical heads and rotating platters. SSDs use flash memory; NVMe is a command protocol commonly transported over PCIe, while SATA is an older storage interface.", "context": "Sequential transfer speed matters for large files, but access latency and random I/O strongly affect everyday responsiveness. M.2 describes a form factor, not necessarily NVMe support.", "exercise": "Compare a SATA SSD and NVMe SSD for booting, gaming and large-file transfers; identify when a faster drive will not solve a CPU bottleneck.", "mistakes": "Buying an M.2 drive without checking keying, protocol, length and motherboard compatibility."}, {"id": "m4l2", "title": "Partitions, filesystems and boot disks", "theory": "Partitions divide a physical device into logical regions; filesystems organise files and metadata. Windows commonly uses NTFS; Linux often uses ext4 or Btrfs; removable media may use exFAT.", "context": "UEFI systems typically use an EFI System Partition. Formatting destroys filesystem structures and may make data inaccessible; never format a suspect drive as a first diagnostic step.", "exercise": "Sketch a GPT disk with EFI, OS and data partitions, and explain the difference between a partition and a directory.", "mistakes": "Confusing a missing drive letter or mount point with a physically failed drive."}, {"id": "m4l3", "title": "Backups and drive health", "theory": "A backup is a separately recoverable copy, ideally with versioning and an off-device/off-site copy. RAID improves availability for some failures but is not a substitute for backups.", "context": "SMART indicators and manufacturer diagnostics provide clues, not guarantees. When failure is suspected, reduce unnecessary writes and prioritise copying irreplaceable files.", "exercise": "Design a 3-2-1-style backup plan and test restoring a sample file to a separate location.", "mistakes": "Running destructive repair tools before preserving data; keeping the only backup on the same disk."}]}, {"id": "m5", "title": "Motherboards and power", "summary": "Connect hardware without compatibility or power mistakes", "lessons": [{"id": "m5l1", "title": "Sockets, connectors and expansion", "theory": "The motherboard distributes power and data between CPU, RAM, expansion cards, storage and peripherals. Check form factor, rear I/O, header locations, PCIe lanes and supported firmware.", "context": "A graphics card can physically fit while colliding with the case or blocking other connectors. Check case dimensions and board manuals.", "exercise": "Label ATX power, CPU EPS power, fan headers, front-panel header, SATA ports, M.2 slots and PCIe slots on a board diagram.", "mistakes": "Confusing PCIe power cables with CPU EPS cables; forcing keyed connectors."}, {"id": "m5l2", "title": "PSU ratings and protections", "theory": "Power supplies convert mains electricity into regulated DC rails. Select a reputable unit with adequate sustained output, compatible connectors and protection features. Headroom helps accommodate transient loads and future changes.", "context": "The label wattage is not actual consumption. Estimate peak CPU, GPU and other loads, then evaluate connector requirements and manufacturer recommendations.", "exercise": "Calculate a sample 125 W CPU + 250 W GPU + 70 W other = 445 W estimated load; with 30% planning headroom, approximately 579 W. Select an appropriate quality PSU rather than treating the result as an exact requirement.", "mistakes": "Opening a PSU enclosure; mixing modular cables from different PSU models; ignoring GPU transient requirements."}, {"id": "m5l3", "title": "Safe assembly sequence", "theory": "Work on an unplugged system, use ESD-aware handling and keep fasteners organised. Assemble CPU, RAM and cooler carefully, mount the board on correct standoffs and route cables clear of fans.", "context": "Perform a visual check before first power: cooler, power connectors, RAM seating, display output and case headers. Avoid improvising with damaged connectors.", "exercise": "Create a pre-power checklist and a first-boot observation sheet for fan movement, POST indications and firmware detection.", "mistakes": "Leaving an extra standoff beneath the board; forgetting CPU power; running without a mounted cooler."}]}, {"id": "m6", "title": "Operating systems", "summary": "Learn processes, drivers, permissions and recovery", "lessons": [{"id": "m6l1", "title": "Kernel, processes and services", "theory": "The kernel manages scheduling, memory, devices and protected access to hardware. Processes run in isolated address spaces; services provide background functionality. User-space applications interact with hardware through system calls and drivers.", "context": "High CPU use can result from one busy process, many background tasks or driver activity. Identify the actual resource consumer before applying fixes.", "exercise": "Use a system monitor to inspect process CPU, RAM, disk and network activity; explain why killing an unfamiliar process can be risky.", "mistakes": "Treating every background process as malware; disabling essential services without understanding dependencies."}, {"id": "m6l2", "title": "Drivers and updates", "theory": "Drivers translate operating-system requests into device-specific operations. Updates can fix bugs and security flaws but may introduce compatibility issues. Firmware updates have higher failure consequences than ordinary application updates.", "context": "Record the current version, read vendor release notes and maintain a rollback plan. Obtain drivers from trusted vendors and avoid random driver-updater utilities.", "exercise": "Document an update plan including backup, restore point or snapshot, verification and rollback.", "mistakes": "Installing a driver for the wrong model; interrupting firmware flashing; ignoring release notes."}, {"id": "m6l3", "title": "Permissions, logs and recovery", "theory": "File permissions restrict access; logs record events that help diagnose failures. Recovery environments and safe modes reduce startup complexity when a normal boot fails.", "context": "Distinguish a permissions error from disk corruption. On Linux, examine journal entries and file ownership; on Windows, inspect Event Viewer and recovery options.", "exercise": "Create a non-destructive diagnostic workflow for an application that fails to start, including timestamps and error messages.", "mistakes": "Changing broad permissions recursively without understanding security impact."}]}, {"id": "m7", "title": "Networks and connectivity", "summary": "Diagnose connectivity systematically", "lessons": [{"id": "m7l1", "title": "IP, DNS, routing and DHCP", "theory": "IP addresses identify interfaces; routing determines where packets go; DNS maps names to addresses; DHCP can assign network configuration. A working Wi-Fi association does not prove internet access.", "context": "Test local link, gateway, IP connectivity and DNS separately. A website failing by name but working by IP suggests a different problem from no gateway reachability.", "exercise": "Draw a packet path from laptop through router, ISP and remote server, marking where DNS resolution happens.", "mistakes": "Resetting all network settings before checking the actual layer that fails."}, {"id": "m7l2", "title": "Wi-Fi and Ethernet", "theory": "Ethernet is generally predictable and low-latency. Wi-Fi performance depends on signal quality, interference, channel width, congestion, access point placement and client capabilities.", "context": "Signal strength alone does not measure throughput or reliability. Compare a wired baseline with Wi-Fi and measure at multiple locations.", "exercise": "Make a site survey table of signal, throughput, latency and packet loss for three rooms.", "mistakes": "Assuming advertised Wi-Fi speeds are guaranteed real-world application speeds."}, {"id": "m7l3", "title": "Network troubleshooting", "theory": "Start with physical links and adapter state, then address, gateway, DNS and application service. Use ping, traceroute, name resolution and interface statistics as appropriate.", "context": "A successful ping is not proof that every protocol works; firewalls may block ICMP while web traffic succeeds, or vice versa.", "exercise": "Build a decision tree for connected-but-no-internet, slow DNS and intermittent Wi-Fi.", "mistakes": "Disabling security software permanently as a troubleshooting shortcut."}]}, {"id": "m8", "title": "Graphics and displays", "summary": "Understand GPU workloads and display faults", "lessons": [{"id": "m8l1", "title": "GPU architecture and VRAM", "theory": "GPUs execute many operations in parallel, making them useful for rendering, compute and media tasks. VRAM stores textures, frame buffers and other GPU data; bandwidth and memory capacity can limit demanding workloads.", "context": "Integrated graphics share system resources; discrete GPUs have dedicated hardware and usually dedicated VRAM. Performance depends on software, drivers, thermal limits and workload.", "exercise": "Compare a basic office workload with video editing and 3D rendering, and identify likely GPU and memory constraints.", "mistakes": "Assuming more VRAM always means a faster GPU."}, {"id": "m8l2", "title": "Display interfaces and settings", "theory": "HDMI and DisplayPort capabilities depend on version, cable quality, device implementation and chosen resolution/refresh rate. Colour depth and chroma settings also affect bandwidth.", "context": "A blank display can be caused by wrong input, unsupported refresh settings, cable issues or the monitor being connected to the wrong output.", "exercise": "Create a safe no-display checklist beginning with power, input selection, cable and known-good screen.", "mistakes": "Changing firmware settings or removing hardware before checking simple display connections."}, {"id": "m8l3", "title": "GPU stability and heat", "theory": "Artifacting, driver resets and crashes may arise from overheating, power delivery, unstable tuning, faulty drivers or failing hardware. One symptom rarely proves a single cause.", "context": "Monitor temperatures and power behavior, test at stock settings and review logs. Avoid repeated heavy loads if power connectors are damaged or overheating is severe.", "exercise": "Record a fault timeline and isolate driver, application and hardware variables one at a time.", "mistakes": "Using aggressive stress tests before checking fans and power connectors."}]}, {"id": "m9", "title": "Security and maintenance", "summary": "Protect data, devices and users", "lessons": [{"id": "m9l1", "title": "Threat models and accounts", "theory": "Security begins by identifying what needs protection, likely threats and consequences. Use unique passwords, a password manager, multifactor authentication and least-privilege accounts.", "context": "Phishing often targets the user rather than exploiting hardware. Verify domains, avoid unexpected attachments and keep recovery methods current.", "exercise": "Write a threat model for a home PC containing photos, banking access and work documents.", "mistakes": "Reusing passwords; storing recovery codes only on the device they protect."}, {"id": "m9l2", "title": "Patching, encryption and backups", "theory": "Operating-system and application patches reduce exposure to known vulnerabilities. Full-disk encryption protects data at rest when a device is lost, but does not replace backups.", "context": "Plan updates and verify backups before major changes. Keep encryption recovery keys separate and accessible to authorised owners.", "exercise": "Design a monthly maintenance checklist covering updates, restore testing, storage health and account recovery.", "mistakes": "Assuming encryption prevents malware while a device is unlocked."}, {"id": "m9l3", "title": "Cleaning and physical care", "theory": "Dust buildup impairs airflow and increases fan noise. Power down and disconnect the PC before cleaning; use appropriate tools and avoid liquids on powered electronics.", "context": "Support fan blades when using air, prevent static buildup and keep cables clear. Inspect for swollen batteries, damaged insulation or overheating and stop work when found.", "exercise": "Create a quarterly inspection log of dust, temperatures, fan operation, cable condition and backup status.", "mistakes": "Opening sealed PSUs; spraying household cleaners into ports; working around damaged lithium batteries."}]}, {"id": "m10", "title": "Advanced diagnostics", "summary": "Use evidence to isolate faults", "lessons": [{"id": "m10l1", "title": "No power versus no POST versus no boot", "theory": "No power means no signs of startup; no POST means firmware initialization does not complete; no boot means firmware may work but the operating system fails to load. These stages require different tests.", "context": "Start with wall power, switch, external connections and indicators. For POST, use board diagnostic LEDs and minimal supported configuration. For boot, inspect firmware detection and error text.", "exercise": "Create three distinct decision trees and mark when to stop, seek professional repair or protect data.", "mistakes": "Using operating-system fixes on a machine that cannot complete POST."}, {"id": "m10l2", "title": "Blue screens and kernel faults", "theory": "A stop error can involve drivers, memory, storage, firmware or unstable tuning. Error codes and dump files are clues that require context.", "context": "Record exact stop code, recent changes, workload and frequency. Revert recent changes systematically, check logs and preserve data before invasive tests.", "exercise": "Write a fault report with reproducibility, evidence, hypotheses, one-variable tests and outcomes.", "mistakes": "Assuming a named driver in a crash report is always the root cause."}, {"id": "m10l3", "title": "Performance investigation", "theory": "Performance is constrained by the bottleneck relevant to the workload: CPU, GPU, RAM, storage, network or thermal limits. Measure before upgrading.", "context": "Compare idle and load utilisation, clock speeds, temperatures, disk latency and memory pressure. A high percentage alone does not reveal the whole story.", "exercise": "Profile a slow application and propose two hypotheses with measurable tests and expected outcomes.", "mistakes": "Buying hardware before confirming which resource is limiting performance."}]}, {"id": "m11", "title": "Building and upgrade projects", "summary": "Plan real-world projects from start to verification", "lessons": [{"id": "m11l1", "title": "Compatibility audit", "theory": "Before buying parts, verify case form factor, motherboard CPU support, cooler clearance, RAM generation, PSU capacity, connector types and available ports.", "context": "Check official specifications for every part and document any required BIOS update. Budget for cooling, cables and backup media—not just headline components.", "exercise": "Produce a parts checklist and compatibility matrix for an entry-level PC and a workstation.", "mistakes": "Assuming retail product names guarantee compatibility."}, {"id": "m11l2", "title": "Build, first boot and validation", "theory": "Install components carefully and validate incrementally. Confirm that firmware sees CPU, RAM and drives before installing the operating system.", "context": "Use official installation media, install drivers from trusted sources and verify updates. Test storage, memory, thermals and device functionality before declaring the build complete.", "exercise": "Create a commissioning sheet recording BIOS version, memory speed, drive detection, temperatures, test results and backup status.", "mistakes": "Enabling aggressive performance profiles before establishing a stable baseline."}, {"id": "m11l3", "title": "Upgrade decision-making", "theory": "An upgrade should address a measured limitation and fit the overall platform. Extra RAM helps memory pressure; a faster SSD helps storage-bound work; a stronger GPU helps GPU-limited tasks.", "context": "Compare cost, compatibility, power, thermal impact and expected real-world gain. Sometimes maintenance or software configuration is the better first step.", "exercise": "Evaluate a slow five-year-old PC and justify a ranked upgrade plan using observed bottlenecks.", "mistakes": "Replacing multiple parts at once and losing the ability to identify what fixed the issue."}]}];
const deepStoreKey='computepro-deep-v2';
let deepState={done:[],notes:{},answers:{}};
try{const s=JSON.parse(localStorage.getItem(deepStoreKey)||'{}');if(s&&typeof s==='object')deepState={...deepState,...s}}catch(e){}
function deepSave(){try{localStorage.setItem(deepStoreKey,JSON.stringify(deepState))}catch(e){}}
function deepEscape(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function deepProgress(){const total=DEEP_MODULES.reduce((n,m)=>n+m.lessons.length,0);return `${deepState.done.length} / ${total} lessons completed`}
function openDeep(){showView('deep',null,'push');renderDeep()}
function renderDeep(){const q=(document.getElementById('deepSearch').value||'').trim().toLowerCase();document.getElementById('deepProgress').textContent=deepProgress();document.getElementById('deepModules').innerHTML=DEEP_MODULES.filter(m=>!q||(m.title+' '+m.summary+' '+m.lessons.map(l=>Object.values(l).join(' ')).join(' ')).toLowerCase().includes(q)).map((m,i)=>`<section class="deep-module"><div class="deep-module-heading"><span class="deep-number">${String(DEEP_MODULES.indexOf(m)+1).padStart(2,'0')}</span><div><h3>${deepEscape(m.title)}</h3><p>${deepEscape(m.summary)}</p></div></div><div class="deep-lessons">${m.lessons.filter(l=>!q||(m.title+' '+Object.values(l).join(' ')).toLowerCase().includes(q)).map(l=>`<button class="deep-lesson" onclick="openDeepLesson('${m.id}','${l.id}')"><span>${deepState.done.includes(l.id)?'✓':'○'}</span><strong>${deepEscape(l.title)}</strong><span aria-hidden="true">→</span></button>`).join('')}</div></section>`).join('')||'<p>No matching lessons. Try a different search term.</p>'}
function openDeepLesson(mid,lid){const m=DEEP_MODULES.find(x=>x.id===mid),l=m?.lessons.find(x=>x.id===lid);if(!l)return;showView('deep-lesson',null,'push');document.getElementById('deepLessonTitle').textContent=l.title;document.getElementById('deepLessonBody').innerHTML=`<p class="deep-breadcrumb">${deepEscape(m.title)} · In-depth lesson</p><div class="deep-reading"><h3>1. Core principles</h3><p>${deepEscape(l.theory)}</p><h3>2. How it works in practice</h3><p>${deepEscape(l.context)}</p><h3>3. Practical masterclass exercise</h3><p>${deepEscape(l.exercise)}</p><h3>4. Common mistakes and warning signs</h3><p>${deepEscape(l.mistakes)}</p><h3>5. Diagnostic thinking</h3><p>Before replacing parts or changing settings, write down the symptoms, the conditions under which they appear, and at least two possible explanations. Begin with safe, reversible checks. Change one variable at a time, record the result, and preserve important data before storage or firmware operations.</p><h3>6. Knowledge check</h3><p>Explain this lesson in your own words. Which observation would support your diagnosis? What would disprove it? What is the safest next action if the first test fails?</p><label class="deep-note-label" for="deepNote">Your notes and answers</label><textarea id="deepNote" class="master-input" rows="6" placeholder="Write what you learned, your observations and answers..."></textarea><div class="deep-actions"><button class="quiz-next" onclick="saveDeepNote('${lid}')">Save notes</button><button class="quiz-next" id="deepComplete" onclick="completeDeep('${lid}')">${deepState.done.includes(lid)?'✓ Completed':'Mark lesson complete'}</button></div><p class="deep-small">Notes and progress are stored in this browser. Keep a separate backup for important work.</p></div>`;document.getElementById('deepNote').value=deepState.notes[lid]||''}
function saveDeepNote(id){deepState.notes[id]=document.getElementById('deepNote').value;deepSave();document.getElementById('deepNoteStatus').textContent='Notes saved on this device.'}
function completeDeep(id){if(!deepState.done.includes(id))deepState.done.push(id);saveDeepNote(id);document.getElementById('deepComplete').textContent='✓ Completed';deepSave()}
function exportDeep(){const blob=new Blob([JSON.stringify({app:'ComputePro Masterclass',version:2,exported:new Date().toISOString(),data:deepState},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='computepro-masterclass-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function importDeep(file){if(!file)return;const r=new FileReader();r.onload=()=>{try{const parsed=JSON.parse(r.result);if(parsed.app!=='ComputePro Masterclass'||!parsed.data||!Array.isArray(parsed.data.done)||typeof parsed.data.notes!=='object')throw Error('Invalid backup');deepState={done:parsed.data.done.filter(x=>typeof x==='string'),notes:parsed.data.notes,answers:{}};deepSave();renderDeep();alert('Progress imported successfully')}catch(e){alert('Could not import this backup: '+e.message)}};r.readAsText(file)}
renderHome();

renderMasterclass();
const originalOpenComponent=openComponent;openComponent=function(id){originalOpenComponent(id);document.getElementById('componentDetailContent').insertAdjacentHTML('afterbegin',lessonToolbar('component:'+id))};
const originalOpenTopic=openTopic;openTopic=function(categoryKey,topicId){originalOpenTopic(categoryKey,topicId);document.getElementById('topicContent').insertAdjacentHTML('afterbegin',lessonToolbar('topic:'+categoryKey+':'+topicId))};

} catch (err) {
  console.error('ComputePro failed to start:', err);
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#B4472E;color:#fff;padding:16px;font-family:monospace;font-size:12px;white-space:pre-wrap;max-height:70vh;overflow:auto;';
  banner.textContent = 'APP FAILED TO START\n\n' + (err && err.message ? err.message : String(err)) + '\n\n' + (err && err.stack ? err.stack : '');
  document.body.prepend(banner);
}
