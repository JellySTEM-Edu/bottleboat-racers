# Electronics Test (et-v1)

This program verifies the physical operation of the BottleBoat's motors, steering servo alignment, and micro:bit LED indicators.

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