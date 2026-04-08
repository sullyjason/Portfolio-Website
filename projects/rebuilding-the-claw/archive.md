---
id: 006
company: "ETH Zürich"
status: published
thumbnailUrl: "images/thumbnail--ey.jpeg"
title: "Rebuilding the CLAW - a VR Controller with tactile feedback"
description: "Rebuilding and iterating upon a VR controller prototype for the HCI research lab at ETH"
type: "Research"
date: "Aug 2024"
slug: "/p/006"
skills: 
  - "3D Printing"
  - "Electronics Hardware Design"
  - "Industrial Design"
  - "Prototyping"
collaborators:
  - "Rayan Armani | https://rayanarmani.com"
---

## Task
To rebuild the original CLAW Controller, a haptic VR controller with force simulation, designed by Inrak Choi from Microsoft Research in 2018 ([paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2018/03/CLAW_Choi_et_al_CHI2018.pdf)).

> CLAW is a handheld virtual reality controller that augments the typical controller functionality with force feedback and actuated movement to the index finger. Our controller enables three distinct interactions...and changes its corresponding haptic rendering by sensing the differences in the user’s grasp (Choi et al, 2018)

### Role
- Prototyping
- PCB Design
- Industrial design
- Firmware
- Documentation

![CLAW Main](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-T9ED.png)

---

## Process

### Version 1
The first iteration of the rebuilding the controller according to the documentation provided in the paper. I 3D printed the enclosure in PLA and breadboarded the electronics.

![Version 1 breadboard](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-KvHU.png)

### Version 1.1
Between the first and final version there was an attempt to rebuild the controller from the ground up, optimizing the ergonomics and industrial design by moving the servo arm downward.

![Ergonomics testing](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-fu8t.png)

I tested the form with foam and cardboard, then 3D scanned and imported this into CAD, where a built a parametric model for 3D printing.

![CAD design](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-1w6r.png)

Due to time constraints we decided to focus on improving the electronics and code rather than the industrial design, and this version of the controller was shelved.

---

### Final implementation
The second and final iteration of the controller was a slimmed down, more compact version based on the original designs. I designed a PCB to hold the Teensy 3.2 microcontroller, the load cell amplifier, and the vibration coil driver IC.

![Final PCB](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-0r6X.png)

Some components from the servo arm were improved and I designed a custom Meta Quest 3 controller adapter which could be used for more accurate hand tracking, if needed.

![Quest 3 Adapter](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-vWRD.png)

The controller's firmware was written entirely in Arduino C, using the serial monitor as the interface to read sensors and send commands. A Unity build can then talk to the controller to allow the user to control and interact with their virtual reality environment.

![Software interface](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-6j53.png)

### Revision
Testing showed a few mechanical failure points, which led us to fabricate one final version. We took this opportunity to revise the PCB and polish the appearance. The parts were SLA printed in black nylon.

![Final black nylon version](images/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-yCtc.png)
