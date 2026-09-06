export const projects = [
  {
    slug: 'via',
    code: 'VIA-01',
    title: 'V.I.A. — Vane Integrated Avionics',
    summary: 'Custom flight computer for vane-based TVC on an EDF Hopper.',
    description:
      'V.I.A. (Vane Integrated Avionics) is a custom flight computer I designed and built to provide full attitude and position control of an EDF Hopper through vane based thrust vector control. The system is built around a custom PCB I engineered in KiCad, integrating a BNO08x IMU, status LEDs, and an ESP32 microcontroller, along with power distribution, I2C sensor interfacing, and real time wireless telemetry broadcasting over ESP-NOW. On the firmware side, I am developing a PID control logic in C++ running on a dedicated control loop split across the ESP32s dual cores to regulate vehicle altitude, attitude, and position, with SD card data logging built in for post flight analysis and control tuning.',
    tags: ['KiCad', 'C++', 'Soldering'],
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
    slug: 'current',
    code: 'CURRENT-01',
    title: 'Current — EDF Hopper',
    summary: 'A flight testbed platform for testing the V.I.A. flight computer and vane based thrust vector control.',
    description:
      'Current is an EDF (Electric Ducted Fan) flight vehicle built as a testbed for validating flight control software and hardware in a real flight environment, ahead of a future thrust-vector-controlled rocket. The vehicle uses a 90mm EDF paired with four digital servos to vector airflow, enabling real-time attitude and position control through a cascaded PID architecture. Every component was designed in Autodesk Inventor, combining a 3D-printed airframe with a carbon fiber support structure to keep the vehicle light without sacrificing structural rigidity. The project serves as a stepping stone toward more complex TVC systems, letting me iterate on control loops and hardware integration in a lower-risk, hover-capable platform before committing to a full rocket flight.',
    tags: ['Autodesk Inventor', '3D Printing', 'Dynamics', 'Simulation'],
    specs: [
      { label: 'SupportStructure', value: 'Carbon Fiber' },
      { label: 'Main Body', value: 'PETG' },
      { label: 'Control System', value: 'Servo Controlled Airvanes' },
      { label: 'Power', value: '2 Independent systems. A 7.4 volt battery feeds into the servos, then stepped down to 3.3V for VIA. The EDF is powered separately by a 6S LiPo battery.' },
      { label: 'EDF Interfacing', value: 'The EDF is controlled by an ESC which recieves signals from the flight computer.' },
      { label: 'Thrust', value: 'The EDF provides 3.5 KG of thrust at 100% power.' },
    ],
    images: [],
    models: [
       { name: 'Current V1 Hopper', obj: 'models/current/EDFAsembly.obj', mtl: 'models/current/EDFAsembly.mtl' },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
