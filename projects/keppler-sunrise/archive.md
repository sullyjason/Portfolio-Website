---
id: 018
company: "ZHdK / Lange Nacht"
status: published
thumbnailUrl: "images/closeup.png"
title: "Keppler's Sunrise - A Light Installation for a Planet with Two Suns"
description: "A light installation recreating the experience of standing under two suns, built from film lights, upcycled satellite dishes, and a tank of scattering fluid."
type: "Exhibition"
date: "May 2026"
slug: "/p/018"
skills: 
  - "Installation Design"
  - "Lighting Design"
  - "CAD"
  - "Laser Cutting"
  - "Blender"
collaborators:
  - "Sacha Schwarz | https://sacha-schwarz.ch/"
---

*Keppler's Sunrise* was a light installation meant to evoke the feeling of experiencing a sunrise on a different planet. It was exhibited at Lange Nacht at Toni-Areal in the spring of 2026, in a blacked-out room where visitors could sit down in front of a window and watch daybreak on a world that doesn't exist.

![Visitors watching the window at Lange Nacht](images/distant.png)

Sunlight is surprisingly difficult to replicate artificially. It arrives as a parallel beam, casting shadows that hold their shape regardless of distance, and its color shifts continuously as the atmosphere scatters it throughout the day. The experience of standing in sunlight is something we take for granted on Earth, but it is specific to our star and our atmosphere. We wanted to know whether we could recreate the feeling of standing under a different sun on a different world.

### A Planet with Two Suns
Single-star systems like ours are actually the minority in the universe, so we started with the more common case: a circumbinary world, a planet orbiting two stars of different temperatures. That system type accounts for roughly half of all stars in the galaxy.

The plan was to send two collimated beams into the same scattering vessel from slightly offset angles — one matched to a hot blue-white star, the other to a cooler orange companion. The medium should treat each spectrum differently: the blue star's light scattering intensely and flooding the vessel with a deep violet-blue glow, while the orange star's beam cuts cleanly through, barely touched. The color balance in the room would shift into a palette no earthly atmosphere has ever produced.

![The two parabolic reflectors, one warm and one blue-white](images/mirrors.png)

### Collimating the Light
Each star is a bright film light aimed at a parabolic mirror, made from an upcycled satellite dish covered in reflective vinyl tape. The parabola turns the lamp's conical dispersion into a straight beam, which casts the hard shadows we expect from direct sunlight. We used two dishes of different sizes, one per star. DIY Perks' [build of a realistic artificial sun](https://www.youtube.com/watch?v=6bqBsHSwPgw) was a useful reference for the optics.

### The Window
The light is cast through a glass tank filled with a thin layer of water mixed with a special surfactant, standing in for the atmospheric conditions on a probable exoplanet. The tank sits behind a frame with a cutout, so that from the visitor's side there is no apparatus at all — only a window facing the outdoors of a foreign planet.

![CAD assembly of the tank and the laser-cut layout](images/screenshot_cad.png)

The tank had to hold a few millimetres of fluid between two sheets of glass without leaking, so it was modelled in CAD around its gasket, and the frame was drawn as a set of laser-cut parts.

![Assembling the octagonal frame in the workshop](images/work_in_progress1.png)

### Planning the Room
Because the beams have to be collimated, offset from each other, and aimed through a single aperture, the geometry of the room mattered as much as the hardware did. We laid the whole thing out in Blender first — lights, tripods, dishes, tank, the wall with the window, and the space left over for visitors — before moving anything heavy.

![Blender layout of the installation](images/screenshot_blender.png)

We built the installation over a few weeks between March and May 2026, which left little room for rebuilding anything twice. Setting up on site meant getting the two beams to land on the same aperture from a lighting rig assembled around the tank, entirely out of the visitors' view.

![Setting up the lights, dishes and tank behind the window wall](images/behind_the_scenes.png)

### Lange Nacht
In practice the two spectra did not stay separate. The diffusion of the simulated environment mixed them, and instead of the violet-blue and orange split we had modelled, the room settled into an even pink glow. Not exactly as we intended, but the result was a deeply meditative landscape.

![Visitors silhouetted against the window](images/closeup2.png)
