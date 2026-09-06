export const projects = [
  {
    slug: 'via',
    code: 'VIA-01',
    title: 'V.I.A. — Vane Integrated Avionics',
    summary: 'Custom flight computer for vane-based TVC on an EDF Hopper.',
    description:
      'V.I.A. (Vane Integrated Avionics) is a custom flight computer I designed and built to provide full attitude and position control of an EDF Hopper through vane based thrust vector control. The system is built around a custom PCB I engineered in KiCad, integrating a BNO08x IMU, status LEDs, and an ESP32 microcontroller, along with power distribution, I2C sensor interfacing, and real time wireless telemetry broadcasting over ESP-NOW. On the firmware side, I am developing a PID control logic in C++ running on a dedicated control loop split across the ESP32s dual cores to regulate vehicle altitude, attitude, and position, with SD card data logging built in for post flight analysis and control tuning.',
    tags: ['ESP32-S3', 'KiCad', 'C++', 'BNO08x IMU', 'ESP-NOW', 'PID Controllers'],
    specs: [
      { label: 'Microcontroller', value: 'ESP32-S3' },
      { label: 'Sensors', value: 'BNO08x IMU over I2C' },
      { label: 'Telemetry', value: 'Transmitted to another ESP-32 Using ESP-Now which hosts a webserver' },
      { label: 'Data logging', value: 'Flash chip for immediate logging, transferred to microSD once in stable state' },
      { label: 'Control', value: '4 "Vanes" direct the airflow' },
      { label: 'Coding Language', value: 'VS Code + PlatformIO' },
    ],
    images: [
       { src: 'photos/via/VIA-Disassemble.jpg', caption: 'Front of PCB' },
       { src: 'photos/via/ViaBack.jpg', caption: 'Back of PCB' },
       { src: 'photos/via/DigitalVIa.png', caption: 'VIA in the PCB Editor' },
    ],
    models: [
       { name: 'VIA Flight Computer', obj: 'models/via/VIA Flight Computer.obj', mtl: 'models/via/VIA Flight Computer.mtl' },
    ],
  },
  {
    slug: 'edf-02',
    code: 'EDF-02',
    title: 'Fin-Deflection Control Vehicle',
    summary: 'Cascaded PID control for a fin-steered ducted-fan vehicle.',
    description:
      'Ducted-fan vehicle stabilized and steered through fin deflection rather than gimbaled thrust. Designed a cascaded PID architecture to cover both hover and waypoint/divert flight modes, and modeled fin aerodynamic forces from EDF exhaust velocity to size control authority ahead of a planned ANSYS Fluent CFD pass.',
    tags: ['Control theory', 'Cascaded PID', 'Aero modeling', 'ANSYS Fluent'],
    specs: [
      { label: 'Control architecture', value: 'Cascaded PID' },
      { label: 'Flight modes', value: 'Hover, waypoint / divert' },
      { label: 'Aero modeling', value: 'Fin force from EDF exhaust velocity' },
      { label: 'Planned validation', value: 'ANSYS Fluent CFD' },
    ],
    images: [],
    models: [],
  },
  {
    slug: 'rf-01',
    code: 'RF-01',
    title: '433 MHz Telemetry Downlink Antenna',
    summary: 'Circularly polarized antenna for a high-apogee rocket telemetry link.',
    description:
      'Antenna selection for a high-power rocket telemetry downlink, targeting roughly 50,000 ft apogee with a ground station 500 m from the pad. The rocket flies vertical through boost and coast and returns to vertical under parachute, with a possible brief tumble near apogee before deployment. A turnstile / cloverleaf circularly polarized design was chosen to hold link margin through that near-overhead geometry and any tumble.',
    tags: ['RF/antenna design', 'Circular polarization', 'Link budget'],
    specs: [
      { label: 'Frequency', value: '433 MHz' },
      { label: 'Target apogee', value: '~50,000 ft' },
      { label: 'Ground station range', value: '~500 m from pad' },
      { label: 'Flight profile', value: 'Vertical boost/coast, possible tumble near apogee, vertical under chute' },
      { label: 'Antenna type', value: 'Turnstile / cloverleaf, circularly polarized' },
    ],
    images: [],
    models: [],
  },
  {
    slug: 'gse-01',
    code: 'GSE-01',
    title: 'Draco Engine Feed System & Ground Support Equipment',
    summary: 'High-pressure feed system and GSE work for ERPL\u2019s Draco engine.',
    description:
      'ERPL propulsion team contribution to the Draco liquid engine program: assembly and integration of high-pressure GN\u2082 plumbing and LOX upstream bus hardware, relief valve integration, and hose assemblies rated to roughly 6,000 psi for the feed system and ground support equipment.',
    tags: ['High-pressure systems', 'GN\u2082 / LOX plumbing', 'Assembly & integration', 'ERPL'],
    specs: [
      { label: 'Program', value: 'Draco liquid engine (ERPL)' },
      { label: 'Systems', value: 'GN\u2082 plumbing, LOX upstream bus' },
      { label: 'Pressure rating', value: '~6,000 psi hose assemblies' },
      { label: 'Scope', value: 'Relief valve integration, feed system + GSE assembly/integration' },
    ],
    images: [],
    models: [],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
