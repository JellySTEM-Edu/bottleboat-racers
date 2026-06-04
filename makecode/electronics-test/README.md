# Electronics Test (et-v1)

[cite_start]This program is the technical backend file for the physical hardware validation phase[cite: 15]. [cite_start]The complete step-by-step tutorial, assembly animations, and interactive guidance for this file are hosted on the eLearning platform[cite: 9].

## 🎓 Moodle Course Mapping
To access the full student tutorial and deployment instructions for this code, navigate to:
* **Course Name:** `BottleBoat - DEV`
* **Topic Section:** `Basic BottleBoat Build Guide`
* **Activity Page:** `Electronics Test`

## Controls
* **Logo (Short Press):** Run all motors forward at 50% speed.
* **Logo (Long Press):** Stop all motors.
* **Button A:** Turn the steering servo left (135°) and show a left-facing indicator.
* **Button B:** Turn the steering servo right (45°) and show a right-facing indicator.
* **Button A+B:** Center the steering servo (90°) and show a vertical alignment line.

## Startup Sequence
When the micro:bit powers on or resets, it executes the following baseline initialization:
1. Stops all connected motors.
2. Sets pins S1 through S4 to Servo mode.
3. Centers the steering servo connected to pin S4 at 90°.
4. Scrolls the program identifier string `et-v1` across the screen.
5. Displays a static vertical alignment line on the LED grid.