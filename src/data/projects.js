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
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
