export const projects = [
  {
    slug: 'tvc-04',
    code: 'TVC-04',
    title: 'ESP32 Thrust Vector Control Flight Controller',
    summary: 'Four-servo TVC flight controller on ESP32 with dual-core FreeRTOS.',
    description:
      'Four-servo thrust vector control system built around an ESP32, with a dual-core FreeRTOS architecture running PID control at 200 Hz on one core and telemetry and status LEDs on the other. Attitude sensing via a BNO08x IMU over I2C, with ESP-NOW auto-pairing telemetry to a browser-based ground dashboard and dual SD card / LittleFS data logging.',
    tags: ['ESP32', 'FreeRTOS', 'C/C++', 'PlatformIO', 'BNO08x IMU', 'PID control'],
    specs: [
      { label: 'Compute', value: 'ESP32, dual-core FreeRTOS' },
      { label: 'Control loop', value: 'PID at 200 Hz (core 1)' },
      { label: 'Telemetry / LED', value: 'core 0' },
      { label: 'Attitude sensing', value: 'BNO08x IMU over I2C' },
      { label: 'Telemetry link', value: 'ESP-NOW to browser dashboard' },
      { label: 'Data logging', value: 'SD card + LittleFS' },
      { label: 'Actuation', value: '4x servo, thrust vector control' },
      { label: 'Toolchain', value: 'PlatformIO' },
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
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
