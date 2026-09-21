export const STATUSES = [
  { id: 'active', label: 'Active' },
  { id: 'complete', label: 'Complete' },
  { id: 'paused', label: 'Paused' },
  { id: 'archived', label: 'Archived' },
]

export const projects = [
  {
    slug: 'moe-fin-can',
    status: 'active',
    title: 'MOE Fin Can: Design and Manufacturing',
    summary: "Lead for the fin control assembly on ERPL's high-power launch vehicle, MOE.",
    description:
      'Lead for the MOE Fin Can at ERPL, owning aerodynamic and structural performance for the fin control assembly on MOE, a high-power rocket with a design max velocity of Mach 1.9 (630 m/s) and a 60,000 ft apogee. Simulated fin control authority across flight regimes to select the optimal aerodynamic geometry, then ran Ansys Fluent CFD to determine peak aerodynamic loading on the fin structure and verified those results independently with hand calculations in Python before committing to a rigid, high-load-bearing connection to the vehicle body. Ran flutter velocity analysis across candidate fin materials, and selected carbon fiber for the strength-to-weight margin it holds at max velocity. Now preparing a tip-to-tip fiberglass layup to reinforce the structure, and compiled the bill of materials for procurement and manufacturing.',
    tags: ['CFD', 'Ansys Fluent', 'Composite materials', 'Python', 'Autodesk Inventor'],
    materials: [
      { label: 'Material selection', value: '1/4" Quasi-isotropic carbon fiber' },
      { label: 'Primary structure', value: 'E-120HP epoxy resin with 2" fillets at the roots' },
      { label: 'Secondary structure', value: 'Tip-to-tip 7.5 Oz fiberglass layup (in progress)' },
    ],
    requirements: [
      'Vehicle: MOE, designed for Mach 1.9 (630 m/s) and a 60,000 ft apogee',
      'Margin of safety: at least 2 across all flight regimes',
    ],
    analysis: {
      text: 'Calculations done in Python to cross-check Ansys Fluent CFD results and aerodynamic loading on the fin structure before committing to a rigid fin-to-body connection.',
      note: 'Manual calculations cross-checking the Ansys Fluent CFD results and flutter velocity analysis before committing to the fin-to-body connection.',
      href: 'https://github.com/AstroJoaquinPC/MOEFinCalculations',
      linkLabel: 'View the calculations on GitHub',
    },
    why: "ERPL is mainly a ground-based liquid propulsion test stand club, and we're evolving toward building liquid launch vehicles. MOE is part of that shift. The fins are the only control the rocket has, so the fin can has to be almost perfect. I wanted to own it to grow my skills in composites and manufacturing, and to learn how to integrate that work with a team.",
    images: [
      { src: 'photos/moe-fin-can/MoeFinPressure.png', caption: 'The pressure distribution across the fin surface' },
      { src: 'photos/moe-fin-can/MoeFinPressureWall.png', caption: 'Pressure at the leading and trailing edges' },
    ],
    models: [
      { name: 'Fin can assembly', obj: 'models/moe-fin-can/MoeFinCan.obj', mtl: 'models/moe-fin-can/MoeFinCan.mtl' },
    ],
    videos: [],
  },
  {
    slug: 'via',
    status: 'active',
    title: 'V.I.A.: Vane Integrated Avionics',
    summary: 'Custom flight computer for vane-based TVC on an EDF Hopper.',
    description:
      "V.I.A. (Vane Integrated Avionics) is a custom flight computer I designed and built to provide full attitude and position control of an EDF Hopper through vane-based thrust vector control. The system is built around a custom PCB I engineered in KiCad, integrating a BNO08x IMU, status LEDs, and an ESP32 microcontroller, along with power distribution, I2C sensor interfacing, and real-time wireless telemetry broadcasting over ESP-NOW. On the firmware side, I am developing a PID control logic in C++ running on a dedicated control loop split across the ESP32's dual cores to regulate vehicle altitude, attitude, and position, with SD card data logging built in for post flight analysis and control tuning.",
    tags: ['KiCad', 'C++', 'Soldering'],
    materials: [
      { label: 'Microcontroller', value: 'ESP32-S3' },
      { label: 'Sensors', value: 'BNO08x IMU over I2C' },
      { label: 'Data logging', value: 'Flash chip for immediate logging, transferred to microSD once in stable state' },
      { label: 'Development environment', value: 'VS Code + PlatformIO' },
    ],
    requirements: [
      'Run the control loop on a dedicated core, with telemetry and LEDs on the other core',
      'Actuate with four servo-driven vanes',
      'Stream real-time telemetry over ESP-NOW to a ground ESP32 hosting a web dashboard',
      'Log to flash immediately and transfer to microSD once stable',
      'Fit everything on one custom KiCad PCB',
    ],
    analysis: null,
    why: "I built V.I.A. as a test bed and prototype for my future rocket flight computers. It's a little more advanced than a rocket flight computer needs to be, because it has more outputs to drive the servos on each axis.\n\nI chose vane-based TVC because, in my opinion, it's harder than direct TVC. With vanes you have to work out the airflow, while on a rocket you just point the engine where you want the thrust to go. If I can make the harder system work, the easier one becomes that much easier.",
    images: [
      { src: 'photos/via/PrototypeAndV1.jpg', caption: 'VIA Prototype and Version 1 boards' },
      { src: 'photos/via/VIA-Disassemble.jpg', caption: 'Front of PCB' },
      { src: 'photos/via/ViaBack.jpg', caption: 'Back of PCB' },
      { src: 'photos/via/DigitalVIa.png', caption: 'VIA in the PCB Editor' },
    ],
    models: [
      { name: 'VIA Flight Computer', obj: 'models/via/VIA Flight Computer.obj', mtl: 'models/via/VIA Flight Computer.mtl' },
    ],
    videos: [],
  },
  {
    slug: 'current',
    status: 'active',
    title: 'Current: EDF Hopper',
    summary: 'A flight testbed platform for testing the V.I.A. flight computer and vane-based thrust vector control.',
    description:
      'Current is an EDF (Electric Ducted Fan) flight vehicle built as a testbed for validating flight control software and hardware in a real flight environment, ahead of a future thrust-vector-controlled rocket. The vehicle uses a 90mm EDF paired with four digital servos to vector airflow, enabling real-time attitude and position control through a cascaded PID architecture. Every component was designed in Autodesk Inventor, combining a 3D-printed airframe with a carbon fiber support structure to keep the vehicle light without sacrificing structural rigidity. The project serves as a stepping stone toward more complex TVC systems, letting me iterate on control loops and hardware integration in a lower-risk, hover-capable platform before committing to a full rocket flight.',
    tags: ['Autodesk Inventor', '3D Printing', 'Dynamics', 'Simulation'],
    materials: [
      { label: 'Support structure', value: 'Carbon Fiber' },
      { label: 'Main body', value: 'PETG' },
      {
        label: 'Power',
        value:
          '2 Independent systems. A 7.4 volt battery feeds into the servos, then stepped down to 3.3V for VIA. The EDF is powered separately by a 6S LiPo battery.',
      },
      { label: 'EDF interfacing', value: 'The EDF is controlled by an ESC which receives signals from the flight computer.' },
    ],
    requirements: [
      'Deliver 3.5 kg of thrust at full power. Vehicle mass must stay below that to hover',
      'Steer with four servo-actuated airvanes under cascaded PID control',
      'Provide position and hover control',
      'Keep the EDF (6S LiPo) and the servos and flight computer (7.4V) on independent power systems',
      'Stay light but rigid, with a PETG body and carbon fiber support structure',
      'Carry V.I.A. as its flight computer',
    ],
    analysis: null,
    why: "I've always wanted to build a rocket hopper or a TVC-controlled rocket. That takes a very finely tuned control system, and a rocket doesn't give you much time to tune one. Current solves that. Because it's an EDF hopper, I can fly it and tune the controls over and over, working out the control loops and hardware before any of it goes on a rocket.",
    images: [],
    models: [
      { name: 'Current V1 Hopper', obj: 'models/current/EDFAsembly.obj', mtl: 'models/current/EDFAsembly.mtl' },
    ],
    videos: [
      {
        type: 'file',
        src: 'videos/current/ServoTests.mp4',
        caption: 'VIA completing startup sequence and going into idle state',
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
