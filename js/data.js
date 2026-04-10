const projectsData = [
    {
      "id": "001",
      "thumbnailUrl": "images/projects/mood-logger/thumbnail-emotion-tracking-assistant-vv.jpg",
      "title": "Mood logger - A fidget cube to track your mood (WIP)",
      "description": "A non-invasive, fidget toy-like device designed to track emotional patterns over time.",
      "company": "Personal Project",
      "status": "published",
      "type": "Interaction Design",
      "date": "Nov 2025",
      "slug": "/p/001",
      "skills": ["Industrial Design", "Qualitative Data", "User-centered Design", "Affective Technology", "ESP32"],
      "collaborators": [],
      "links": [],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">The Challenge of Mood Tracking</h3>
I aimed to create a more reliable way to track mood over time, recognizing that understanding the patterns and triggers behind emotional shifts is a crucial first step toward better self-regulation. My initial thought was to design an ambient "companion device" that would use colored lights to visualize mood. I believed this would be a calming and grounding presence.
<div class="my-12 flex justify-center"><img src="images/projects/mood-logger/story-emotion-tracking-assistant-eeWi.jpg" alt="Companion device sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">However, I quickly realized a critical flaw: such a device could have the negative effect of constantly reminding users of their bad moods, which is counterproductive for many who struggle with anxiety or depression.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Mood tracking apps</h2>
In order to capture a wider timeline of emotions, not just those occurring while around the physical device, I explored mood-tracking apps. A common issue I noticed was that most relied on a one-dimensional "Bad-to-Good" scale, which I found inaccurate. The <em>How We Feel</em> app, which organizes emotions based on the two dimensions of <strong>valence</strong> (pleasantness) and <strong>arousal</strong> (energy), offered a much more accurate model.
<div class="my-12 flex justify-center"><img src="images/projects/mood-logger/story-emotion-tracking-assistant-2Kgl.jpg" alt="How We Feel app UI" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">While this was app was surprisingly effective for building emotional vocabulary, it led to a new problem: I became an expert at describing negative states but rarely remembered to log positive ones. The act of sifting through negative terms to find the right one often led to a feedback loop that often deepened my negative mood.</p>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Mood tracking fidget cube</h3>
Prompted by a therapist's suggestion, I decided to simplify the process by logging emotions into the four quadrants of valence and arousal. I designed a new prototype: a tactile, fidget cube-like device for simple, non-invasive input. The act of fidgeting can be a subconscious activity, which theoretically limits the negative feedback loop I experienced with most of the apps.
<div class="my-12 flex justify-center"><img src="images/projects/mood-logger/story-emotion-tracking-assistant-Npey.jpg" alt="Fidget prototype parts" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The prototype features four tactile buttons, each with a unique texture corresponding to one of the four quadrants. I designed the electronics and 3D-printed the enclosure and various tactile button caps. The internal hardware includes an ESP32S3 microcontroller, a real-time clock, and a small battery.</p>
<p class="mb-6 leading-relaxed text-gray-700">Every button press is logged with a timestamp into a CSV file, which can be extracted via Wi-Fi or USB. This data can then be easily plotted against other metrics, such as health data or calendar events, to reveal meaningful patterns.</p>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Future Development</h3>
The next steps for this project involve developing the firmware to ensure a seamless and user-centric experience. I'm also planning to design a magnetic docking station to simplify charging and data transmission. In parallel, I will start collecting data by logging my own moods using this device.`
    },
    {
      "id": "002",
      "thumbnailUrl": "images/projects/puppet-synthesizer/thumbnail-puppet-synthesizer-audiovisual-installation-wip-9b.jpg",
      "title": "Puppet Synthesizer: Audiovisual Installation",
      "description": "Designing the user interface and playable interactive installation for The Museum of the Future at ZHdK Museum für Gestaltung Zürich.",
      "company": "ZHdK / Museum für Gestaltung",
      "status": "published",
      "type": "Interaction Design",
      "date": "Feb 2025",
      "slug": "/p/002",
      "skills": ["Electronics Hardware Design", "Graphic Design", "Unity 3D"],
      "collaborators": [{"name": "Lisa Bach", "link": "https://lbach.cargo.site/"}, {"name": "Jan H\u00fcgli"}, {"name": "Jan Th\u00fcrig", "link": "https://www.linkedin.com/in/jan-thuering-144724350/"}, {"name": "Jan Espig", "link": "https://www.linkedin.com/in/jan-espig-642480186/"}, {"name": "David Bock", "link": "https://davidbock.ch/"}, {"name": "Lars Kristian"}],
      "links": [{"label": "Repository", "url": "https://github.com/sullyjason/PuppetSynthesizer"}, {"label": "Project Page", "url": "https://museum-gestaltung.ch/de/ausstellung/museum-future"}],
      "story": `<p class="mb-6 leading-relaxed text-gray-700">For the Exhibition <a href="https://museum-gestaltung.ch/de/ausstellung/museum-future" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">"Museum of the Future"</a> in the fall of 2025, Zürich's Museum für Gestaltung commissioned ZHdK to develop a series of interactive installations paying tribute to Sophie Täuber Arp's infamous wooden marionettes that she created for the play <em>King Stag</em>.</p>
<p class="mb-6 leading-relaxed text-gray-700"><a href="https://github.com/sullyjason/PuppetSynthesizer" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Repository</a></p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Concept</h2>
Puppet Synth is a digital reinterpretation of Sophie Taeuber-Arp’s avant-garde puppetry for King Stag, breaking with traditional visual and performative conventions. Inspired by Rudolf Laban’s choreographic notation and Taeuber-Arp’s expressive dance practice, this project brings the puppets’ gestures into the digital realm. Users are invited to choreograph puppet movements themselves. Visually, Puppet Synth renders these complex motion sequences as wave-like frequency patterns, making them both tangible and analyzable.
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Team</h2>
The team consists of five members coming from various disciplines.
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Lisa Bach - Unity 3D and creative direction</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Silvan Roth - Interface design and hardware</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Jan Hügli - Prototyping and production</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Jan Thürig - Unity 3D and firmware</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Jan Espig - Visual design</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">David Bock & Lars Kristian - Sound design</li>
<p class="mb-6 leading-relaxed text-gray-700"></ul><h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Ideation</h2>
The original idea revolved around animating a marionette by controlling a series of waves or frequencies through an experimental and highly tactile interface.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-lkla.jpg" alt="Concept idea sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">We were inspired by the revolved wooden shapes that make up Sophie Täuber-Arp's marionettes and the Labanotation, a system for analyzing and recording human movement such as dance.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-na3G.jpg" alt="Labanotation inspiration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Prototyping</h2>
Developing the concept involved a few iterations of physical prototyping and experimentation in Unity 3D. The aim was to develop an interaction that would spark curiosity in the user, encouraging them to rearrange physical blocks that would then have an effect on the animation.
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-Z5lc.jpg" alt="Interaction prototyping" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">To test these conceptual interactions we experimented with various arduino compatible sensors, linear potentiometers, 3D printed caps and joysticks.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-3eIl.jpg" alt="Sensors prototyping" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">In later iterations we limited the possible inputs to a few dimensions. The interface gradually took on the style of an audio synthesizer.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Implementation</h2>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Interface</h3>
The interface consists of 5 types of inputs: rotary switches, smooth rotary potentiometers, linear potentiometers (faders), and momentary 3 position toggle switches.
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-NhtB.jpg" alt="Interface design" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The final version was designed in KiCad and exported into OnShape for the final panel dimensions.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-NSaH.jpg" alt="KiCad/OnShape" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The panel was designed to not be overly explicit in its functionality but still give users a sense of control, so the various actions can be learned over time. The layout guides the user through the interaction in a logical sequence, and the knobs were chosen with their affordances in mind, creating a cohesive experience with what is happening on screen.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-C6xP.jpg" alt="Final Panel" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Visual Style</h3>
We went through a series of iterations before settling on a visual style for both the marionette and the wave visualization.
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-883q.jpg" alt="Visual Style Iterations" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The final visual style takes inspiration from Sophie Täuber-Arp's minimal color palette and simple revolved shapes that make up the marionettes.</p>
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-8urO.jpg" alt="Final Visual Style" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Experience</h2>
The audience stands in front of the physical interface facing a vertically oriented screen, where a puppet is seen dangling in front of a slow sine wave. As the interface is operated, the wave and audio changes and the puppet jumps to life.
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-wip-Dqg4.jpg" alt="Installation View" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Installation</h2>
The installation is currently being exhibited at the <a href="https://museum-gestaltung.ch/de/ausstellung/museum-future" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Design Museum in Zürich</a> as a part of the theme "Museum of the Future". The exhibition aims to use digital means to make accessible to the audience cultural artifacts that are otherwise difficult or impossible to experience – because they are long gone, do not yet exist, are too large or too small, or would be too fragile for the public to interact with.
<div class="my-12 flex justify-center"><img src="images/projects/puppet-synthesizer/story-puppet-synthesizer-audiovisual-installation-H62q.jpg" alt="Museum View" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Photo: Museum für Gestaltung Zürich</em>`
    },
    {
      "id": "003",
      "thumbnailUrl": "images/projects/wearable-sensor-docking-station/thumbnail-wearable-sensor-docking-station-g7.jpg",
      "title": "Wearable Sensor Docking Station",
      "description": "Developing and building a modular docking station to take the hassle out of running wearable device studies.",
      "company": "SIPLab, ETH Zürich",
      "status": "published",
      "type": "Industrial Design",
      "date": "Apr 2025",
      "slug": "/p/003",
      "skills": ["CAD", "Industrial Design", "PCB Design"],
      "collaborators": [{"name": "Manuel Meier", "link": "https://www.linkedin.com/in/meierman/"}],
      "links": [],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Task</h2>
The task was to design a docking station (called the "BaseStation") to simplify the charging, data transmission, and synchronization of devices such as wearables used in data collection studies. The BaseStation was to offer flexibility and broad device compatibility while maintaining a compact footprint and ease of manufacturing and assembly. I was to design both this interface, the electronics, enclosure, integration, and a framework for making new or existing devices compatible with this device.
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Prototyping</h2>
Iterative prototyping made up the core of this project: it was crucial to get the device interface right before we continued to the enclosure, which could easily be modified later on. I began with primitive cardboard models to get a feel for the usability and then gradually moved on to more high fidelity protyping like 3D modeled parts.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-r512.jpg" alt="Cardboard and 3D prototyping" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Design</h2>
A core problem of the intended docking station was that it would need to have a modular design that can be scaled to both any number of devices and any dimensions of device. The interface should be flat and as subtle as possible, it should be easy to integrate into any enclosure, but should still allow for data transmission and ideally additional inputs or outputs to interface with the docking station itself.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-jTYO.jpg" alt="Design iterations" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The solution was a 5 pin magnetic pogo pin connector: flat, corrosion resistant (suitable for situations where sweat is an issue, for instance), with a small notch for positioning and to prevent the pins from being connected in reverse.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/pogo-pin-prototype.jpg" alt="Magnetic connector" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Electronics</h3>
Each interface needed a small PCB to handle the programmable LED and safely handle the USB to pogo pin conversion. I created a schematic and designed a PCB in KiCAD which I then ordered from JLCPB and assembled by hand.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-ynXr.jpg" alt="PCB Design" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Enclosure</h3>
Designing the enclosure involved sketching, foam modeling, and finally 3D printing.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/sketch.jpg" alt="Enclosure sketching" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">While visual aesthetics were not an explicit key requirement, I was determined to maintain a clean look with clear affordances, designed to be easy to manufacture and assemble, and modify later on.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-LTRG.jpg" alt="Final enclosure design" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Integration</h3>
The final stage involved integrating the modular electronics into the enclosure in a way that would allow for easy assembly and disassembly, used standard fasteners and minimal or no adhesives, and involving as few custom parts as possible.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-MDtA.jpg" alt="Integration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Manufacturing</h3>
After a few iterations on small commercial 3D printers to dial in thicknesses and tolerances, I ordered the final versions through a 3D printing service (JLC3D).
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-YRtq.jpg" alt="Manufacturing" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Outlook</h3>
The next stage is for the docking station to go through rigorous real world testing before being redesigned for manufacturing.
<div class="my-12 flex justify-center"><img src="images/projects/wearable-sensor-docking-station/story-wearable-sensor-docking-station-uMoO.jpg" alt="Final Device" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "004",
      "thumbnailUrl": "images/projects/where-the-river-hides/thumbnail-where-the-river-hides-design-interventions-for-an-overheating-river-JT.jpg",
      "title": "Where the River Hides - Design interventions for an overheating river",
      "description": "An interdisciplinary research project that engages communities to contribute to river revitalization efforts",
      "company": "ZHdK / Ars Electronica",
      "status": "published",
      "type": "Exhibition",
      "date": "May 2025",
      "slug": "/p/004",
      "skills": ["Environmental Design", "Research", "Community Engagement"],
      "collaborators": [{"name": "Dominic Sutter", "link": "https://dominicsutter.ch"}, {"name": "Silvana De Paola", "link": "https://silvanadepaola.ch/"}],
      "links": [],
      "story": `<p class="mb-6 leading-relaxed text-gray-700">Ars Electronica Page: <a href="https://ars.electronica.art/panic/de/view/where-the-river-hides-21e38ddb450c81ef9d1ae97eb74e55b7/" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Where the River Hides</a></p>
<p class="mb-6 leading-relaxed text-gray-700">“Where the River Hides” is an interdisciplinary research project that brings together knowledge from diverse fields and engages communities to contribute to river revitalization efforts. The exploration took place along the Töss River in eastern Switzerland, where aquatic natives such as the brown trout and minnow are increasingly threatened by heatwaves that devastate their populations.</p>
<p class="mb-6 leading-relaxed text-gray-700">Our aim was not only to explore technical solutions to these challenges but also to find sustainable ways to engage both local communities and visitors in making small but cumulative contributions to river revitalization.</p>
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-G6Ve.jpg" alt="River research" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Working with Ecological Interconnectivity</h2>
Rivers are habitats, breeding grounds, and migration corridors– veins that connect ecosystems. Their ecological interdependence presents challenges for urban planning and conservation. Climate change and human intervention amplify issues like overheating, drought, and flash floods, making it clear that solutions must work with, not against, natural systems.
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-i4S2.jpg" alt="Ecological maps" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Designing Interventions</h3>
Drawing from environmental engineering and ecology, we found that the most effective solutions are often surprisingly simple: offering aquatic species hideouts, shade, and a steady flow of fresh water. Civil engineering introduced us to flow deflections: techniques that use fluid dynamics to subtly reshape the river’s course and improve habitats along the riverbed and undercut banks. Local fishing associations have long applied this knowledge in small- to medium-scale interventions, while community-led flood protection efforts use woven willow branches to reinforce riverbanks.
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-Ne1h.jpg" alt="Flow deflections" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Our proposal combines these approaches: a woven willow obstacle that redirects the river’s flow, deepens the riverbed, and erodes part of the bank to form a shaded refuge pool. Vegetation helps stabilize the structure, provides natural shade, and integrate it into the ecosystem.</p>
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-kh9u.jpg" alt="Willow structure" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">A Vision of Community-Led Revitalization</h3>
Planned river restoration is slow, costly, and politically complex. But we believe healthy ecosystems shouldn’t depend entirely on urban planning budgets. While large-scale projects appeal through promises of recreation, we see value in engaging people directly.
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-wFmz.jpg" alt="Community visualization" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Our structures are designed to be built gradually, with no technical skill required, yet robust enough to let the river and vegetation take over. This approach offers locals and visitors a tangible, meaningful way to interact with and care for nature.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Ars Electronica 2025</h2>
We exhibited this project at the 2025 Ars Electronica festival under the theme "Not Plan B", an exhibition on ecological interactions. Instead of focusing on the technical implementation of the intervention, we emphasized the playful and low-tech nature of the idea by printing an explanation onto analog slides, viewable through a View-Master from the 1980s.
<div class="my-12 flex justify-center"><img src="images/projects/where-the-river-hides/story-where-the-river-hides-design-interventions-for-an-overheating-river-O4Uq.jpg" alt="Ars Electronica exhibition" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "005",
      "thumbnailUrl": "images/projects/foggy/thumbnail-foggy-seeing-reality-in-the-low-res-SQ.jpg",
      "title": "Foggy - seeing reality in the low res",
      "description": "Less pixels for more realism: Using a diffused low resolution LED matrix to create impressionistic abstractions of recognizable scenes and video sequences",
      "company": "ZHdK",
      "status": "published",
      "type": "Interaction Design",
      "date": "Sep 2024",
      "slug": "/p/005",
      "skills": [],
      "collaborators": [],
      "links": [],
      "story": `<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-CaBb.jpg" alt="Foggy Main" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Idea</h2>
A part of a 3 week studio class in the Masters program in Interaction Design, the aim was to explore the of capture and representation of reality through visual means.
<p class="mb-6 leading-relaxed text-gray-700">I often contemplated the concept of "Resolution". I thought it was interesting that we are converging on this near-perfect resolution representation of both 2D and 3D objects but wanted to question to what extent this is needed. I wanted to investigate whether very low-resolution visuals could have similarly powerful subconscious effects as higher resolution visuals, thus exploring whether the visual resolution was really a relevant factor in convincing us that something is "real".</p>
<p class="mb-6 leading-relaxed text-gray-700">The idea was to create a "portal to another place via a pixelated camera" (see sketch below), not meant to provide the user with accurate data but simply conveying a vague impression of the other place. If there are people moving on the other side, the idea was to let the user feel this presence, possibly even alleviating feelings of loneliness (even if subconscious).</p>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Inspiration</h3>
I was inspired by artists such as Jim Campell (middle) and design studios such as (now closed) designaffairs (middle bottom). I thought about how we diffuse "real" light, such as with frosted or patterned glass and blinds. These filters intentionally spread light and blur our perception of what's behind them, but for some reason it is still very apparent to us that what's behind them is real. Why is that?
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-co7K.jpg" alt="Inspiration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Process</h2>
Due to the limited amount of time I intended to use supplies I already had for prototyping.
<p class="mb-6 leading-relaxed text-gray-700">1. The original idea involved using an ESP32CAM to stream live footage to another ESP32 controlling a 64x64 LED Matrix via the HUB75 interface.
2. I quickly realized that it might be easier to demonstrate using a Raspberry Pi due to its memory and processing capabilities, as I was intending to control quite a large amount of LEDs.
3. I finally decided that demo videos would likely be more effective to convey my message, letting me choose what scene I want to show and being much simpler to implement technically. I also decided to switch to an existing 8x8 LED Matrix that I already had, as its form factor made it easy to transport and I didn't need to build my own grid from one long string of LEDs.</p>
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-CdgA.jpg" alt="Process" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Implementation</h2>
I used the following process to display videos on the 8x8 LED Matrix:
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-Yjpz.jpg" alt="Implementation Flow" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Videos</h3>
As my initial idea was to create a blurry window to another place, I started by taking videos from real life. This process turned out to be surprisingly meditative - I walked around areas in Zürich such as Irchel park, Toni Areal and the Hardbrücke looking for scenes or elements that you would expect to see through a window. Ideally they had to contain high contrast and some organic movement, as my theory was that this movement would be what makes it recognizable later.
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-7eg2.jpg" alt="Zürich videos" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Later I added iconic movie scenes to the collection.</p>
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-8KD6.jpg" alt="Movie scenes" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Code</h3>
This script cropped the selected videos to a square format, scaled them down to 8x8 pixels, and extracted pngs of the frames at a defined FPS, saved in a folder called "frames":
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-qRIl.jpg" alt="Code segment" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">To output videos on the LED matrix, a python script iterates through all the frames in the folder and displays them on the neopixel grid sequentially, making it appear animated.</p>
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-j8Y2.jpg" alt="More code" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Hardware</h3>
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-PyUu.jpg" alt="Hardware setup" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The hardware currently consists of a 8x8 WS2811 LED Matrix connected to a Raspberry Pi 3 via the GPIO 18 and GND pins, powered by 5V from a USB-C power delivery board (allowing it to draw as much current as it might need) and using a level shifter breakout board to convert the Raspberry Pi's 3.3V logic to the 5V logic required by the Neopixels. I developed on the Raspberry Pi in a headless setup using VNC viewer, connected via ethernet.</p>
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-034U.jpg" alt="Pi setup" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Light diffusers</h3>
Once the electronic setup worked and I was ready to develop the light diffusers. I laser-cut square acrylic panels and sandblasted them to give them the frosted finish. I found that changing the brightness of the LEDs, the distance of a diffuser to the LED panel, the amount of sequential diffusers, and the amount that they were diffusing light all influenced how foggy the image looked. I decided to turn this into a feature of the final result - a slide system that let you change the amount of diffusion by removing or adding diffusion slides to the enclosure holding the Raspberry Pi and LED Matrix.
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-3b8u.jpg" alt="Diffuser slides" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Enclosure</h3>
For this I 3D printed an enclosure, consisting of a base and a lid, connected with M2 screws and threaded inserts. An opening at the top of the LED matrix allows the user to switch out diffuser slides. The enclosure unintentionally ended up looking retro and cute, almost looking like a cartoon snail. I liked this aesthetic, as it felt inviting and matched the playful element of the light diffuser interaction.
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-l9ZJ.jpg" alt="3D enclosure" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Final product</h2>
The final product looks as follows. I powered both the Raspberry Pi and the LED matrix with the same power supply and automated the execution of the python scripts when the Pi is powered on, using a system service file. Once the python script was animating the LEDs, I had four slides with different levels of diffusion that I moved around to show the change in appearance. I played an animation of a public space (example used previously), the <em>Titanic</em> bow scene, and short segment of "The Circle of Life" from <em>The Lion King</em>.
<div class="my-12 flex justify-center"><img src="images/projects/foggy/story-foggy-seeing-reality-in-the-low-res-sNKS.jpg" alt="Final Result" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Limitations and improvements</h3>
The current version is limited in a few ways that, in a next version, could be improved as follows:
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Memory of the Raspberry Pi - Use a newer Raspberry Pi or optimize code to pre-load all the image data more efficiently. Consider converting to BMP instead of PNG for more efficient rendering.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Color accuracy and contrast - implement gamma correction and color correction filters.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Occasional glitching - Possibly due to fluctuations in current, LED matrix acts erratically sometimes. Other potential causes might be poor connections (I have been using dupont connectors), the quality of the LED matrix, signal noise caused by the level shifter. Using a high quality power brick and cable helps.</li></ul>`
    },
    {
      "id": "006",
      "thumbnailUrl": "images/projects/rebuilding-the-claw/thumbnail--ey.jpg",
      "title": "Rebuilding the CLAW - a VR Controller with tactile feedback",
      "description": "Rebuilding and iterating upon a VR controller prototype for the HCI research lab at ETH",
      "company": "ETH Zürich",
      "status": "published",
      "type": "Research",
      "date": "Aug 2024",
      "slug": "/p/006",
      "skills": ["3D Printing", "Electronics Hardware Design", "Industrial Design", "Prototyping"],
      "collaborators": [{"name": "Rayan Armani", "link": "https://rayanarmani.com"}],
      "links": [{"label": "CLAW Original Paper", "url": "https://www.microsoft.com/en-us/research/wp-content/uploads/2018/03/CLAW_Choi_et_al_CHI2018.pdf"}, {"label": "CRAEFT Website", "url": "https://www.craeft.eu/"}, {"label": "CRAEFT Report", "url": "https://www.craeft.eu/wp-content/uploads/2025/04/D4.2_v2.pdf"}],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Task</h2>
To rebuild the original CLAW Controller, a haptic VR controller with force simulation, designed by Inrak Choi at Microsoft Research in 2018.
<p class="mb-6 leading-relaxed text-gray-700">"CLAW is a handheld virtual reality controller that augments the typical controller functionality with force feedback and actuated movement to the index finger. Our controller enables three distinct interactions...and changes its corresponding haptic rendering by sensing the differences in the user’s grasp" (Choi et al, 2018)</p>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Role</h3>
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Prototyping</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">PCB Design</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Industrial design</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Firmware</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Documentation</li>
<p class="mb-6 leading-relaxed text-gray-700"></ul><div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-T9ED.jpg" alt="CLAW Main" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div></p>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Process</h2>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Version 1</h3>
The first iteration of the rebuilding the controller according to the original documentation provided in the paper.
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-KvHU.jpg" alt="Version 1 breadboard and protoboard version" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Version 1.1</h3>
Between the first and final version there was an attempt to rebuild the controller from the ground up, optimizing the ergonomics and industrial design by moving the servo arm downward.
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-fu8t.jpg" alt="Ergonomics sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">I tested the form with foam and cardboard, then 3D scanned and imported this into CAD, where a built a parametric model for 3D printing.</p>
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-1w6r.jpg" alt="Ergonomic redesign: from foam to 3D print" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Due to time constraints we decided to focus on improving the electronics and code rather than the industrial design, and this version of the controller was shelved.</p>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Version 2</h3>
The second iteration of the controller was a slimmed down, more compact version based on the original designs. I designed a PCB to hold the microcontroller, the load cell amplifier, and the vibration motor driver circuitry.
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-0r6X.jpg" alt="First PCB Iteration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Some components from the servo arm were improved and I designed a custom Meta Quest 3 controller adapter which could be used for more accurate hand tracking, if needed.</p>
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-vWRD.jpg" alt="Quest 3 Adapter" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The controller's firmware was written entirely in Arduino C, using the serial monitor as the interface to read sensors and send commands. A Unity build can then talk to the controller to allow the user to control and interact with their virtual reality environment.</p>
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-6j53.jpg" alt="Technical diagram and final equipment as shipped" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Revision</h3>
Testing showed a few mechanical failure points, which led us to fabricate one final version. We took this opportunity to revise the PCB and polish the appearance. The parts were SLA printed in black nylon.
<div class="my-12 flex justify-center"><img src="images/projects/rebuilding-the-claw/story-rebuilding-the-claw-a-vr-controller-with-tactile-feedback-yCtc.jpg" alt="Improved black nylon version" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "007",
      "thumbnailUrl": "images/projects/wearables-prototyping/thumbnail-wearables-prototyping-6l.jpg",
      "title": "Wearable Devices Prototyping",
      "description": "Developing prototypes for smart watches and wearable sensors.",
      "company": "ETH Zürich",
      "status": "published",
      "type": "Prototyping",
      "date": "Jul 2024",
      "slug": "/p/007",
      "skills": ["3D Printing", "PCB Design", "Rapid Prototyping"],
      "collaborators": [{"name": "Xintong Liu"}],
      "links": [],
      "story": `<div class="my-12 flex justify-center"><img src="images/projects/wearables-prototyping/story-wearables-prototyping-FWRY.jpg" alt="Wearables Main" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Problem</h3>
Developed as part of a study on hand gesture sensing through photoplethysmogram (PPG) sensor data and machine learning, the challenge was to develop a series of prototypes that would allow the lab to perform the user studies.
<div class="my-12 flex justify-center"><img src="images/projects/wearables-prototyping/story-wearables-prototyping-KThv.jpg" alt="Sensors Detail" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">First tests</h3>
PPG is a technique commonly used for pulse measurement in smart watches. The original idea was to modify existing PPG sensing development boards, enlarging their light sensor rings and repositioning the sensors from the volar (bottom) wrist to the dorsal (top) wrist.
<div class="my-12 flex justify-center"><img src="images/projects/wearables-prototyping/story-wearables-prototyping-w11f.jpg" alt="First iterations" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Designs were created in KiCad and Autodesk Fusion, 3D printed in PLA on an Ultimaker 4.</p>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Second iteration</h3>
The second iteration aimed to be as compact as possible, packaging all components into one module, rather than having a dorsal and a volar element connected by fragile flat band cables.
<div class="my-12 flex justify-center"><img src="images/projects/wearables-prototyping/story-wearables-prototyping-eQLo.jpg" alt="Compact iteration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Later versions</h3>
A later version required an IMU sensor and a touch screen, both which we found in an ESP32 smart watch development board. The tradeoff was a much larger enclosure and a dual USB-C port.
<div class="my-12 flex justify-center"><img src="images/projects/wearables-prototyping/story-wearables-prototyping-Y1Hd.jpg" alt="ESP32 smartwatch version" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "008",
      "thumbnailUrl": "images/projects/interactiles/thumbnail-interac-tiles-tactile-interactive-canvas-wip-aw.jpg",
      "title": "InteracTiles - Tactile Interactive Installation (WIP)",
      "description": "Building a grid of glowing clickable pixels to stay connected in a tangible way",
      "company": "Personal Project",
      "status": "published",
      "type": "Design",
      "date": "Feb 2024",
      "slug": "/p/008",
      "skills": ["Electro-Mechanical Design", "Industrial Design", "Interaction Design", "Rapid Prototyping"],
      "collaborators": [{"name": "Andy Kong", "link": "https://andykong.org/"}],
      "links": [],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Idea</h2>
Developing an interactive grid of buttons that light up and change colors when pressed, designed to communicate, connect, and create art across distances. Each grid is connected via the internet to a corresponding grid, allowing users to share visual messages in real-time.
<p class="mb-6 leading-relaxed text-gray-700">This project explores the fusion of technology and creativity, aiming to understand how we interact with digital interfaces on a personal and communal level.</p>
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-jw7P.jpg" alt="InteracTiles AI Renders" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Renders generated using photoshop and AI tools illustrating two possible scales of this project</em>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Inspiration</h2>
The main sources of inspiration for this project stemmed from the following:
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">The reddit project r/place, a digital online canvas allowing the entire online community to collectively create pixel art.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Valentin Ruhry’s and Simone Giertz’s grids of illuminated switches.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">“The Everbright”, an installation seen at the San Jose Science Museum in 2021.</li>
<p class="mb-6 leading-relaxed text-gray-700"></ul>Andy developed a physical version of r/place in 2023 with <a href="https://andykong.org/projects/gridworld/" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">GridWorld</a>, a virtual canvas that was displayed in real time on a physical LED screen. My own ideas came from previous projects such as <a href="/p/6852" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">GlowGrid</a> and my work in tactile user interfaces.</p>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Use cases by configuration</h2>
The following are some of the potential use cases for this project. We have not yet attempted to evaluate the feasibility of each of the ideas to narrow down the scope of the project, as we believe users will find their own unique and creative uses for the product once they are given access.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-oooz.jpg" alt="Use cases" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Design</h2>
The design process of Interactiles started in December 2023. We made sure to respect certain basic principles, such as modularity, no screen, and exclusively tactile controls. The buttons were to feel pleasant and as tactile as possible. The use case was not clear yet at this point, but we were determined that a clean and user friendly product would find its use case if it was designed to be user friendly enough.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-IERw.jpg" alt="Design sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Sketches of initial ideas for different form factors</em>
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-wip-jOar.jpg" alt="Morphological box" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Morphological box used to make sense of all the possible designs that could be pursued</em>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Iteration 1</h3>
A first iteration was designed using non-intelligent tactile RGB Switches and an ESP32 microcontroller.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-wip-xLlY.jpg" alt="Iteration 1" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>ESP32 prototyping with non-intelligent, standard tactile RBG switches.</em>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Iteration 2</h3>
The second iteration used the same RGB switches but a smaller microcontroller and ICs to control the RGB channels, rather than addressing each color individually. This model is fully compatible with the original prototype. Four fully functional 2x2 Interactiles are currently assembled.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-RsOV.jpg" alt="Modular setup sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Modular setup sketches (left-center left) and a setup using keyboard keys and intelligent RGB LEDs.</em>
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-wip-ygmw.jpg" alt="Prototyping switches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Prototyping with different sizes and types of tactile switch. PCB Design with KiCAD, manufactured through JLCPCB.</em>
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-wip-W1zg.jpg" alt="Design to enclosure" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>From schematic to enclosure design for the second iteration of the 2x2 Interactiles.</em>
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-wip-qB72.jpg" alt="Completed 2x2 PCBs" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<em>Completed 2x2 Interactiles PCBs, with and without 3D printed enclosures. A dip switch on the back of the PCB was added to allow users to select their "channel" - with the idea that all Interactiles on the same channel would display the same colors.</em>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Networking</h3>
Interactiles is a project about enabling connection, so a key feature must be that they can interface with each other. I started with a HTTP web server and an webpage to emulate a second Interactile while I iterated on the firmware. Once this was stable, I switched to a more efficient MQTT structure, in which each individual pixel is subscribed to or posts to a channel containing an RGB value. Like this, pressing a button to change the color of the pixel will post the change on the MQTT server, which will be read by any corresponding subscribed pixels. This happens quickly enough that it appears that all pixels are changing perfectly in sync.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-tactile-interactive-canvas-wip-SCxg.jpg" alt="Networking sync" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Scaling up (WIP since Sept 2024)</h3>
The next step is to build a bigger grid of pixels. I am currently working on designing one 10x6 matrix using the largest available switches and one miniaturized version of the same matrix size using the smallest available buttons.
<div class="my-12 flex justify-center"><img src="images/projects/interactiles/story-interactiles-tactile-interactive-canvas-wip-P9ON.jpg" alt="Scaling up" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "009",
      "thumbnailUrl": "images/projects/ux-consulting/thumbnail-ux-consulting-XY.jpg",
      "title": "UX Consulting and Redesign",
      "description": "Redesigning a startup's product configurator page to boost user experience and engagement",
      "company": "Startup Consulting",
      "status": "published",
      "type": "UX Design",
      "date": "Feb 2024",
      "slug": "/p/009",
      "skills": ["Design Consulting", "User Experience", "User Research"],
      "collaborators": [],
      "links": [],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Task</h2>
Contracted by a startup in eastern Switzerland that specializes in the creation of curated lists of contacts and sales leads. The startup lets their users select which kind of leads they are looking for using a configurator, then automatically creates a quote.
<p class="mb-6 leading-relaxed text-gray-700">The customer felt that this experience could be improved.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Process</h2>
We began on-site by conducting a series of user tests, some with existing users and some with new users that were unfamiliar with the product.
<div class="my-12 flex justify-center"><img src="images/projects/ux-consulting/story-ux-consulting-u9Af.jpg" alt="User testing session" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Based on my notes and observations from the testing session, I then dedicated a few weeks to redesigning the interface, considering things like the flow, information hierarchy, and UX writing.</p>
<div class="my-12 flex justify-center"><img src="images/projects/ux-consulting/story-ux-consulting-qFOe.jpg" alt="Redesign sketches" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Results</h2>
We discussed the results of my research in a final presentation. The result was not a polished mockup, but rather a series of recommendations, communicated with wireframes and sketches, for how their users' experience and engagement could be improved.
<div class="my-12 flex justify-center"><img src="images/projects/ux-consulting/story-ux-consulting-sMMO.jpg" alt="Final presentation results" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Impact</h2>
The customer has since implemented many of the changes that I recommended and their configurator has been given a significantly smoother experience. The following is a screenshot of the current UI (updated 8 Nov 2024).
<div class="my-12 flex justify-center"><img src="images/projects/ux-consulting/story-ux-consulting-tFm1.jpg" alt="Current UI" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "010",
      "thumbnailUrl": "images/projects/glow-grid/thumbnail-glow-grid-illuminating-the-journey-of-habit-tracking-wip-Hd.jpg",
      "title": "GlowGrid - Flipping the Switch on New Habits",
      "description": "Designing and building a board of illuminated switches, a tactile representation of personal milestones",
      "company": "Personal Project",
      "status": "published",
      "type": "Design",
      "date": "Feb 2024",
      "slug": "/p/010",
      "skills": ["3D Modeling", "Electrical Design", "Industrial Design", "Laser Cutting", "Rapid Prototyping"],
      "collaborators": [],
      "links": [],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Inspiration</h3>
The idea for GlowGrid was born out of the long and anxious hours of the COVID-19 lockdown. I was stranded in a tiny studio apartment in a Tokyo suburb, having traveled there for an exchange semester but now too scared to leave. Not knowing when or if this lockdown would end but determined to not go insane, I committed myself to a series of new habits (mostly learning japanese, outdoor exercise).
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-MIKE.jpg" alt="Tokyo lockdown" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">I found the most effective habit tracking tools to be visual reminders that would also show me my progress so far. I started off with posters and later progressed to rainbow scratch paper. I found myself craving that small reward of scratching off another day, and noticing a gap in my progress was just painful enough that I would try to prevent it.</p>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Iteration 1: Acrylic Prototype</h2>
Even after lockdown ended, I found myself still using this method to track my habits (now reading books, meditating). I came across Simone Giertz’s "Everyday Calendar", which inspired me to build a more tangible and reusable version of this habit tracking system. The Everyday Calendar uses capacitive touch pads that light up when touched.
<p class="mb-6 leading-relaxed text-gray-700">Preferring the idea of a more tactile experience, my first prototype consisted of an acrylic frame with an array of 31 illuminated neon rocker switches - one switch for each day.</p>
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-qv75.jpg" alt="Prototype 1" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The idea worked well. I refined the design in CAD and improved the wiring to make it easier to assemble and repair. With the second version I had a product that was easy and safe enough to produce serially. I made 6 units in various colors for friends.</p>
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-PGlm.jpg" alt="Production units" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-RAjh.jpg" alt="Multiple units" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Iteration 2: A Broader Canvas</h2>
Encouraged by <a href="http://ruhry.at/en/work/items/untitled-hello-world.html" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Valentin Ruhry's "Hello World"</a>, I have expanded GlowGrid's scope.
<p class="mb-6 leading-relaxed text-gray-700">The next version of GlowGrid aims to be much larger than 31 switches – hopefully hundreds or thousands. Date labels will be omitted, the aim shifted towards a broader view of achievement: recognizing that progress isn’t always linear. The illuminated switches should appear like pixels, capturing the essence that every small effort contributes to the bigger picture.</p>
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-HsSl.jpg" alt="Large canvas mockup" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The current challenges are sourcing a more appropriate and affordable rocker switch and reducing the spacing between the switches, possibly transitioning from the current acrylic frame to a stronger version made of aluminum or steel. The acrylic frame pictured above will be used to prototype the electric wiring and validate the modular design idea.</p>
<div class="my-12 flex justify-center"><img src="images/projects/glow-grid/story-glowgrid-illuminating-the-journey-to-new-habits-wip-aB1L.jpg" alt="Modular prototyping" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "011",
      "thumbnailUrl": "images/projects/remy-ai-assistant/thumbnail-hack-zurich-2023-remy-ai-cooking-assistant-hU.jpg",
      "title": "HackZurich 2023: Remy, AI Cooking Assistant",
      "description": "UX design and branding for an app that reimagines any recipe for the mindful chef, suggesting sustainable alternatives and guiding you step by step, hands free",
      "company": "HackZurich",
      "status": "published",
      "type": "Design",
      "date": "Sep 2023",
      "slug": "/p/011",
      "skills": ["Brand Design", "Front-End Web Development", "Graphic Design", "Product Management", "UX Design"],
      "collaborators": [],
      "links": [],
      "story": `<div data-youtube-video=""><iframe src="https://www.youtube-nocookie.com/embed/Ygs8dQEqntM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
<p class="mb-6 leading-relaxed text-gray-700"><a href="https://devpost.com/software/remy-c2b5e1" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Devpost: Remy | Devpost</a></p>
<p class="mb-6 leading-relaxed text-gray-700">Participating at Europe's biggest Hackathon in Zurich with a team of experienced developers and NLP experts, we designed a voice assistant app that interactively guides the user through the cooking process and suggests sustainable ingredients, making cooking cooking effortlessly sustainable and completely hands-off.</p>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Inspiration</h2>
When building our app, we were driven by a straightforward idea: to stand out and spark interest. We drew inspiration from the small actions that lead to bigger changes, especially in sustainability. Our goal was to make a tool that doesn't just catch the eye but truly helps users step towards greener cooking habits.
<div class="my-12 flex justify-center"><img src="images/projects/remy-ai-assistant/story-ai-assistant-remy-simplifies-cooking-with-nlp-tIv7.jpg" alt="Inspiration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Branding and User Experience</h2>
As the name implies, "Remy" was named after the culinary genius rodent starring in Disney Pixar's classic, <em>Ratatouille</em>. By using Remy, the user is guided through the recipe naturally and step by step, almost as if there was a rodent tugging on their hair underneath their imaginary chef hat.
<p class="mb-6 leading-relaxed text-gray-700">The goal of the app was to achieve a completely hands-off experience. The recipe instructions user interface was inspired by Spotify's (among others) lyrics feature, where the relevant lyrics appear on screen as soon as it's their turn. The color scheme was chosen based on warm and inviting colors commonly associated with appetite, yet dark enough to provide sufficient contrast to be read from a distance while also preserving battery.</p>
<div class="my-12 flex justify-center"><img src="images/projects/remy-ai-assistant/story-hackzurich-2023-remy-ai-cooking-assistant-Y5ME.jpg" alt="Branding and UX" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">What it does</h2>
Remy is an LLM powered voice assistant for the kitchen. The user can simply tell Remy what they're cooking (per URL to an online recipe or prompt it with an idea for a dish), Remy will interactively talk the user through every step of the recipe, allowing hand-free interaction. Additionally, as the user gathers ingredients, Remy suggests sustainable alternatives, weaving sustainability effortlessly into the kitchen routine.
<div class="my-12 flex justify-center"><img src="images/projects/remy-ai-assistant/story-ai-assistant-remy-simplifies-cooking-with-nlp-Eeph.jpg" alt="Usage" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">How we built it</h2>
At the core, LLM powers our back-end, deftly processing recipes, extracting ingredients, and suggesting alternatives, while adeptly navigating user prompts. Voice interaction? We leaned into the Web Speech API for flawless speech-to-text conversion, and chose Eleven-Labs to breathe life into the text, translating it back to guiding voices. The facade you interact with is sculpted using React-JS, housed on Firebase. And that touch of sustainability? It’s data-driven, with a nod to real grocery product datasets.
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Challenges we ran into</h2>
We often lost focus, wanting to do too much at once. Combining our work was challenging. Understanding and responding to natural speech, like knowing when to listen, was hard. Setting up the app for everyone to use gave us headaches. And figuring out the best way to handle recipe prompts took a lot of time and effort. Goal setting and delivering a specific result by a certain time proved to be a challenge.
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Accomplishments that we're proud of</h2>
Seeing our first Proof-of-Concept come alive was a major win; it was proof our idea wasn't just a dream but could work in real life. We're incredibly proud of the originality of our concept. The way we divided tasks and maintained focus was spot-on. And bringing together everyone's contributions into one cohesive app is a feat we'll always cherish.`
    },
    {
      "id": "012",
      "thumbnailUrl": "images/projects/ambulance-fleet-management/thumbnail-ambulance-fleet-management-and-paramedic-companion-app-Z0.jpg",
      "title": "Ambulance Fleet Management and Paramedic Companion App",
      "description": "Designing a mobile app for paramedics and a virtual workspace for ambulance fleet management",
      "company": "Swiss Hospitals Group",
      "status": "published",
      "type": "Consulting",
      "date": "Jul 2023",
      "slug": "/p/012",
      "skills": ["Agile Project Management", "Design Thinking", "Product Management", "Requirements Engineering", "Requirements Workshops", "UX Design"],
      "collaborators": [],
      "links": [],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Problem</h2>
Contracted by a Swiss group of hospitals, the challenge was to develop a mobile app and dashboard that would help manage the fleet of ambulances and report and log any damage or repairs.
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Role</h2>
I acted as the role of consultant, UX designer, and design workshop facilitator.
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Method</h2>
We began by conducting a discovery workshop at the customer's site. They showed us their infrastructure and we explicitly asked us to walk us through every step of their daily routine and processes in order to better understand their pain points. This took several iterations but helped us define a detailed customer journey that laid the foundation for the proposed information architecture and user flow.
<div class="my-12 flex justify-center"><img src="images/projects/ambulance-fleet-management/story-ambulance-fleet-management-and-paramedic-companion-app-eDt4.jpg" alt="User journey workshop" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The resulting user journey map helped us understand the customer's pain points and design requirements, which allowed us to sketch some initial wireframes, later to be turned into a more functional Figma prototype.</p>
<div class="my-12 flex justify-center"><img src="images/projects/ambulance-fleet-management/story-ambulance-fleet-management-and-paramedic-companion-app-rsX0.jpg" alt="Wireframes and architecture" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Example process</h3>
One of the problems to be solved with the mobile app was to replace a paper report with tickets submitted through an app. The proposed solution was a virtual workspace for ambulance drivers to submit reports about vehicle faults and repairs, built with ServiceNow's mobile UI design system. We ran several rounds of user tests using the Figma prototype to validate and improve the designs.
<div class="my-12 flex justify-center"><img src="images/projects/ambulance-fleet-management/story-ambulance-fleet-management-and-paramedic-companion-app-mxAU.jpg" alt="Mobile app interface" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Offer</h2>
The project deliverable was a detailed offer to the customer, which proposed a mobile app (shown above), a desktop workspace (below), and a TV screen dashboard.
<div class="my-12 flex justify-center"><img src="images/projects/ambulance-fleet-management/story-ambulance-fleet-management-and-paramedic-companion-app-YLgZ.jpg" alt="Desktop workspace" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">For budget reasons the offer could not be accepted and the digitalization effort was deferred to a later date.</p>`
    },
    {
      "id": "013",
      "thumbnailUrl": "images/projects/accessible-cooktops/thumbnail-making-cooktops-accessible-for-visually-impaired-Xy.jpg",
      "title": "Making Cooktops Accessible for Visually Impaired",
      "description": "Innosuisse funded prototyping research project of solutions to make modern touch-controlled cooktops usable for users who are visually impaired",
      "company": "SBV / HSLU",
      "status": "published",
      "type": "Research",
      "date": "Feb 2022",
      "slug": "/p/013",
      "skills": ["Design Research", "Prototyping", "Assistive Technology"],
      "collaborators": [],
      "links": [],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Video by Innosuisse</h3>
<div data-youtube-video=""><iframe src="https://www.youtube-nocookie.com/embed/_0n_z2QLrWg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Article</h3>
<a href="https://www.innosuisse.admin.ch/en/innovating-in-the-field-of-disability-through-co-creation" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Innovating in the field of disability through co-creation (innosuisse.ch)</a>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Project Details</h2>
Industrial Design / concept development of solutions to make modern built-in glass ceramic and induction cooktops usable for users who are visually impaired. Solutions were conceptualized, prototyped, and tested in collaboration with the Swiss Blind Union SBV and HSLU.
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Team</h3>
A partnership between HSLU Lucerne University of Applied Sciences and the Swiss Federation for the Blind, funded by the NTN Innovation Booster - Technology & Special Needs, backed by the Swiss Innovation Agency Innosuisse.
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-GoPU.jpg" alt="Project Team" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The Team started with Luciano Butera (right), Head of Technology and Innovation at the Swiss Blind Federation (SBV) as the industrial partner, me as the project manager and researcher, and Norbert Meier, industrial designer and professor of Industrial Design at Lucerne University of Applied Sciences (HSLU) as the advisor. Once Innosuisse began funding the project, our main contact was Noémi Moulin (left), project coordinator for the NTN Innovation Booster - Technology and Special Needs.</p>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Problem</h3>
Many modern cooktops are controlled with a touch-control panel built into the smooth glass surface. These cooktops are typically pre-installed in kitchens of rental units and cannot be removed or replaced. Most do not have an interface for third party devices or control and rely exclusively on touch-controls making them useless to Visually impaired (VI) users. These touch-control cooktops must be retrofitted with a device that takes input from the user via conventional tactile knobs or buttons.
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-t9IY.jpg" alt="Touch control problem" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Task</h3>
Develop one or several solutions to make existing modern touch-control cooktops accessible for users who are visually impaired.
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Development Process</h3>
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-o9AA.jpg" alt="Design thinking process" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">To develop ideas for concepts, the Design Thinking Method was used, including ideation techniques, shadowing and user workshops, and iterative prototyping using rapid prototyping such as 3D printing, lasercutting, and Arduino, testing each iteration with users along the way.</p>
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-mcgy.jpg" alt="Prototyping iteration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">The concepts ranged from very low tech, representing nothing more than a guide for the fingers, to relatively high tech, interfacing directly with the cooktop. Testing was conducted with visually impaired users: ideas were compared, some discarded, some new requirements added.</p>
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-kCo4.jpg" alt="User testing" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Results</h3>
The final concept consists of an “AutoClicker” module that is controlled wirelessly via low energy bluetooth. The AutoClicker controls leads that are attached to the glass surface with adhesive, one lead per touch button. These leads are recognized by the cooktop control panel just like a real finger. The bluetooth signal comes from a remote module with dials and other basic tactile input elements (switches, sliders, buttons). The user receives feedback via LEDs (90% of visually impaired users can still differentiate light and colors) and/or speakers that emit a short sound corresponding to the current cooktop setting.
<div class="my-12 flex justify-center"><img src="images/projects/accessible-cooktops/story-making-cooktops-accessible-for-visually-impaired-A0pt.jpg" alt="Final system concept" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Outlook</h3>
Throughout the project, we developed several promising prototypes with potential for further refinement. For optimal results, collaboration with a kitchen appliance manufacturer would be beneficial. Their expertise would provide essential insights, market data, and valuable resources.
<p class="mb-6 leading-relaxed text-gray-700">Our vision isn't limited to supporting only VI users. We're looking at a product that is inclusive for individuals with motor and cognitive challenges, and equally beneficial for the aging population. This endeavor emphasizes the importance of inclusive design, enhancing many lives.</p>
<p class="mb-6 leading-relaxed text-gray-700">Looking forward, the plan is to advance the project into a second prototyping phase. The ultimate goal is to introduce a versatile product to the market, making a variety of touch-controlled home appliances accessible for all, promoting a shift towards more inclusive design in the industry.</p>`
    },
    {
      "id": "014",
      "thumbnailUrl": "images/projects/tactile-displays-ux/thumbnail-ux-concept-development-for-tactile-displays-0v.jpg",
      "title": "Dot Inc x Apple - UI Concept Development for Tactile Displays",
      "description": "Developed UX concepts addressing how complex graphical user interfaces should best be translated into tactile graphical user interfaces",
      "company": "Dot Inc / Apple",
      "status": "published",
      "type": "Design Research",
      "date": "Oct 2020",
      "slug": "/p/014",
      "skills": ["UX Design", "Research", "Assistive Technology"],
      "collaborators": [],
      "links": [],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Article</h3>
<a href="https://techcrunch.com/2022/03/10/dot-pad-tactile-display-makes-images-touchable-for-visually-impaired-users/" target="_blank" class="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 transition-all font-medium">Techcrunch article</a>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">About</h2>
Dot Incorporation is a South Korean startup producing innovative assistive technology for the blind such as braille smart watches, tactile braille displays, and accessible information kiosks.
<p class="mb-6 leading-relaxed text-gray-700">Dot Pad is the first smart tactile graphics display for the visually impaired that enables the user to access visual content such as handwriting, graphs, equations, photos, documents, sketches and art in real time via 2400 tactile braille pins.</p>
<div class="my-12 flex justify-center"><img src="images/projects/tactile-displays-ux/story-dot-inc-x-apple-ux-concept-development-for-tactile-displays-upCM.jpg" alt="Dot Pad Interface" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Task</h2>
To ensure Dot's tactile displays integrate seamlessly with iOS and macOS devices, we engaged in a collaborative effort with Apple Inc.
<p class="mb-6 leading-relaxed text-gray-700">This involved creating user experience (UX) concepts and developing an API that enables compatibility with Apple's VoiceOver, the primary assistive technology used by visually impaired users today.</p>
<div class="my-12 flex justify-center"><img src="images/projects/tactile-displays-ux/story-dot-inc-x-apple-ux-concept-development-for-tactile-displays-InjD.jpg" alt="VoiceOver integration" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Team</h3>
A 3-day workshop was held in Cupertino with Apple's VoiceOver Team and QA testers. The team consisted of co-founders Ki Kwang Sung and Eric Ju Yoon Kim (far left, middle right), Lead Engineer Giyeon Hwang (far right), and me as the design researcher.
<div class="my-12 flex justify-center"><img src="images/projects/tactile-displays-ux/story-dot-inc-x-apple-ux-concept-development-for-tactile-displays-BaMX.jpg" alt="Apple Workshop Team" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Role</h3>
My role during the workshop was to create visuals and pitch decks (eg for presentation to Apple marketing team) and present my case study and findings about tactile graphics (see next page).
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Case Study: Displaying emojis on tactile displays</h2>
Emojis were used as a case study for how and whether images should be processed into tactile graphics.
<p class="mb-6 leading-relaxed text-gray-700">Past studies had suggested that the ability to understand simple visual representations of facial expressions is innate in humans and not strictly learned, such that tactile emojis could indeed enhance the writing’s meaning and emotional depth.</p>
<p class="mb-6 leading-relaxed text-gray-700">The emoji were ordered by usage and processed into into 32x32 pixel representation. Most of these then had to be manually refined.</p>
<p class="mb-6 leading-relaxed text-gray-700">The design process led to questions such as:
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Which symbols provide the most value and how do we measure this?</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">How do we deal with images that are too visually complex for single color 32x32 pixels?</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Is there a responsibility to convey the semantic meaning and cultural usage of an emoji or symbol, rather than their literal meaning?</li></p>
<p class="mb-6 leading-relaxed text-gray-700"></ul><div class="my-12 flex justify-center"><img src="images/projects/tactile-displays-ux/story-dot-inc-x-apple-ux-concept-development-for-tactile-displays-0bsm.jpg" alt="Tactile Emojis" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div></p>`
    },
    {
      "id": "015",
      "thumbnailUrl": "images/projects/offshore-wind-monitoring/thumbnail-industrial-project-in-offshore-wind-product-concept-development-l2.jpg",
      "title": "Industrial Project in Offshore Wind – Concept Development",
      "description": "Requirements engineering and concept development for a condition monitoring system for bolted flange connections on offshore wind turbines.",
      "company": "Arvick BV",
      "status": "published",
      "type": "Engineering",
      "date": "Dec 2019",
      "slug": "/p/015",
      "skills": ["Civil Engineering", "Concept Development", "Requirements Engineering"],
      "collaborators": [],
      "links": [],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Problem Statement</h3>
The dynamics and vibrations experienced by Offshore Wind Turbine (OWTs) bolted joints, especially monopile - transition piece (MP- TP) flanges, can jeopardize joint reliability. Challenges include bolt relaxation, fatigue, and corrosion. Notably, these connections are typically inspected on a fixed schedule rather than in real-time. Previously, field operatives noticed loosened bolts in MP-TP connections, but the precise cause was unidentified.
<div class="my-12 flex justify-center"><img src="images/projects/offshore-wind-monitoring/story-industrial-project-in-offshore-wind-product-concept-development-6QWa.jpg" alt="Flange joint" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Project Aim</h3>
To conceptualize a monitoring system for bolted flange connections and to determine its feasibility in terms of cost savings during Operation and Maintenance (O&M).
<hr class="my-12 border-gray-200">
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Approach</h3>
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Utilize existing technologies to monitor bolted flange connection conditions.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Convert these measurements into digital data.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700">Transmit this data in real-time to an onshore location for interpretation and visualization.</li>
<p class="mb-6 leading-relaxed text-gray-700"></ul><div class="my-12 flex justify-center"><img src="images/projects/offshore-wind-monitoring/story-industrial-project-in-offshore-wind-product-concept-development-P5Vu.jpg" alt="Data transmission concept" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div></p>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Impact</h2>
> The project's proposed innovation pushes the industry from fixed-schedule maintenance to condition-based maintenance, presenting potential significant long-term savings in OWF maintenance.
<p class="mb-6 leading-relaxed text-gray-700">Long-Term Benefits:
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Reduced Inspection Frequency:</em> This leads to significant savings on maintenance trips.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Minimized Inspection Extent:</em> Focus only on areas of concern.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Enhanced Structural Integrity Confidence</em>: Reduced uncertainty in the overall structural health.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Mitigated Unplanned Maintenance:</em> By catching issues earlier.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Bolt Failure Root Causes</em>: Identification of primary reasons for bolt failures.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>Regulation & Standardization Contribution</em>: Set new industry benchmarks and standards.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><em>New Opportunities</em>: Pave the way for advancements in structural engineering and innovative product development.</li></p>
<p class="mb-6 leading-relaxed text-gray-700"></ul>---</p>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Executive Summary</h3>
As offshore wind energy gains traction, most offshore wind turbines consist of a monopile and a transition piece secured by flanges and M72 steel bolts. Arvick BV, specialists in the bolting methodologies for these connections, aspires to extend their expertise to condition monitoring. This initiative offers wind park operators or owners the ability to oversee their assets' bolted flange connections throughout its 20-30 year lifespan, ensuring superior asset integrity.
<p class="mb-6 leading-relaxed text-gray-700">The project's ambition is to conceptualize this monitoring system, commencing with a preliminary situation analysis. This process establishes the groundwork for distinct system requirements which emphasize measuring bolt loads, ensuring compatibility with hydraulic bolting instruments, efficient data processing, and secure onshore data transmission.</p>
<p class="mb-6 leading-relaxed text-gray-700">Various technological solutions were evaluated, culminating in three primary concepts:
1. A versatile system harnessing NordLock Superbolt smart tensioners.
2. A technologically advanced setup utilizing Brosa Force Washers via CANBus.
3. A cost-conscious system employing wireless Sulzer Sense accelerometers for vibration-rooted detection.</p>
<div class="my-12 flex justify-center"><img src="images/projects/offshore-wind-monitoring/story-industrial-project-in-offshore-wind-product-concept-development-4nF4.jpg" alt="System concepts" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<hr class="my-12 border-gray-200">
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">My Role</h2>
<ul class="my-8 space-y-2"><li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><strong>Product Planning:</strong> Spearheaded the early phases, aligning problem with product vision.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><strong>Concept Development:</strong> Led brainstorming and visualization sessions.</li>
<li class="ml-6 mb-2 list-disc pl-2 text-gray-700"><strong>Requirement Engineering:</strong> Developed the table of requirements, applied a morphological box approach, and illustrated these concepts through detailed diagrams and sketches.</li></ul>`
    },
    {
      "id": "016",
      "thumbnailUrl": "images/projects/freitag-design-thinking/thumbnail-sustainable-delivery-solutions-boost-satisfaction-Qp.jpg",
      "title": "Freitag Labs x HSLU - Design Thinking Project",
      "description": "As a part of the course \\\"Innovation Project\\\", a new concept for the prompt \\\"individual logistics\\\" was iteratively designed for Freitag AG.",
      "company": "Freitag AG",
      "status": "published",
      "type": "Business Development",
      "date": "Dec 2018",
      "slug": "/p/016",
      "skills": [],
      "collaborators": [],
      "links": [],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Problem</h2>
Freitag AG, a Swiss company specializing in upcycling materials to create unique bags and accessories, sought inspiration developing new concepts for "individual logistics". The company wanted to explore new ways of delivering their products to customers while maintaining their commitment to sustainability.
<p class="mb-6 leading-relaxed text-gray-700">Our team of students was tasked with addressing this challenge through a 6-month Design Thinking project. We had to find a way to identify customer needs, develop creative ideas, and prototype potential solutions that aligned with Freitag's brand values.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Method</h2>
We began by conducting extensive user research using personas, interviews, and customer journeys. This allowed us to gain a deep understanding of our target audience's pain points and preferences when it came to product delivery. From there, we used brainstorming techniques to generate a wide range of potential solutions.
<p class="mb-6 leading-relaxed text-gray-700">Once we had several promising ideas, we created low-fidelity prototypes that we tested with users for feedback. Based on this feedback, we iteratively refined our prototypes until we had a high-fidelity solution that met both user needs and Freitag's sustainability goals. Throughout the process, we also developed a lean business canvas that helped us visualize the potential market for our product.</p>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Solution</h2>
The solution we chose was a bag with modular inserts that could be configured via an app configurator based on a 3D scans of the users belongings that they wished to transport in this bag. We iteratively wireframed how such an app could look and developed a functional prototype of such a bag with inserts so we could demonstrate a few different configurations.
<div class="my-12 flex justify-center"><img src="images/projects/freitag-design-thinking/story-sustainable-delivery-solutions-boost-satisfaction-egWH.jpg" alt="Solution concept 1" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<div class="my-12 flex justify-center"><img src="images/projects/freitag-design-thinking/story-sustainable-delivery-solutions-boost-satisfaction-jCOg.jpg" alt="Solution concept 2" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<div class="my-12 flex justify-center"><img src="images/projects/freitag-design-thinking/story-sustainable-delivery-solutions-boost-satisfaction-3vKc.jpg" alt="Physical prototype" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "017",
      "thumbnailUrl": "images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-IE7W.jpg",
      "title": "WallBo Social Robot: Industrial Design & Prototyping",
      "description": "Updating the physical design of a wall-mounted social robot to accommodate upgraded hardware and improve its friendliness for children.",
      "company": "Personal Project",
      "status": "unlisted",
      "type": "Industrial Design",
      "date": "Nov 2025",
      "slug": "/p/017",
      "skills": ["3D Modeling", "Blender"],
      "collaborators": [{"name": "Amol Deshmukh"}],
      "links": [{"label": "Wallbo Case Study", "url": "https://arcaccelerator.io/case-studies/wallbo/"}],
      "story": `<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Original Project</h2>
<p class="mb-6 leading-relaxed text-gray-700">WallBo is a wall-mounted social robot designed to encourage and monitor handwashing habits among children in schools. Developed to combat the spread of diseases like COVID-19 and reduce child mortality rates in developing countries, the robot uses AI to engage with students, making the hygiene process fun and interactive.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-IE7W.jpg" alt="WallBo Robot" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-3">Task</h2>
<p class="mb-6 leading-relaxed text-gray-700">The objective was to update the robot's physical design to accommodate upgraded internal hardware - specifically an Nvidia Jetson edge computer and a larger touchscreen interface.</p>
<p class="mb-6 leading-relaxed text-gray-700">Additionally, the project required a visual overhaul to make the robot's appearance friendlier and more approachable for its young user base.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-GCZc.jpg" alt="Task Image" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">I was contracted to handle the Industrial Design, CAD modeling, and physical prototyping. My responsibilities focused on the complete redesign of the enclosure and the physical integration of the new electronic components.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-74xv.jpg" alt="Design Image" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">I modeled a new enclosure that securely housed the Nvidia Jetson and touchscreen while softening the overall aesthetic to improve its "friendliness" factor.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-Wnr1.jpg" alt="Enclosure Image" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">Once the design was finalized in CAD, I 3D printed the new housing and managed the assembly process, successfully integrating the new hardware into the redesigned chassis.</p>
<div class="my-12 flex justify-center"><img src="images/projects/wallbo-social-robot/story-wallbo-social-robot-industrial-design-prototyping-NW4t.jpg" alt="Assembly Image" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "3456",
      "thumbnailUrl": "images/projects/Again-and-again-and-again/thumbnail.jpg",
      "title": "Again & Again & Again & - Multimedia performance and installation",
      "description": "Planning and installing a multimedia installation exploring alternative temporalities through melting ice, amplified soundscapes, and video footage, presented in Yogyakarta.",
      "company": "ZHdK / Shared Campus",
      "status": "published",
      "type": "Arts Production",
      "date": "March 2026",
      "slug": "/p/3456",
      "skills": ["Multimedia Art Production", "Installation Design", "Project Management"],
      "collaborators": [{"name": "Vendela H\u00e4konsen", "link": "https://www.instagram.com/venaurt/"}, {"name": "Rachel Lin", "link": "https://www.linkedin.com/in/rachel-lin-huiyi/"}, {"name": "Li De"}, {"name": "Leonie Karbownik"}, {"name": "Anja Schl\u00e4ppi"}],
      "links": [{"label": "Shared Campus", "url": "https://shared-campus.com/"}],
      "story": `<p class="mb-6 leading-relaxed text-gray-700"><em>Again & Again & Again & (splishsplashpingpongbeepboop)</em> explores alternative temporalities as methodology and proposes a social, polythematic approach to lived reality. Through the simultaneous reduction and accumulation of melting ice and amplified soundscapes and footages of Yogyakarta, the work embodies event-based time while layering communal polyrhythms. Activated by a performance, it layers upon a communal agreement to alter its melt but fails as time asserts  itself as an unstoppable, cosmic force.</p>
<p class="mb-6 leading-relaxed text-gray-700">The installation and performance was part of an exhibition called <em>Hati Hati, It Will Rain Soon</em>, hosted at Galleri Lorong in Yogyakarta. 27 artists, both from Yogyakarta and international, presented
artistic works offering insights into our collaborative and transcultural working processes, observing and reflecting on the cultural context of Yogyakarta where we had been staying for 3 weeks.</p>
<div class="my-12 flex justify-center"><img src="images/projects/Again-and-again-and-again/closeup-rachel.jpg" alt="Rachel Lin performing in Again & Again & Again &" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Collaboration</h3>
The conceptualization and execution of the installation occured over the course of less than two weeks, in an international team of participants from a wide range of discplines: art history, fine arts, sound art, film, and performing arts. We worked hard to be as collaborative as possible, incorporating each others' perspectives and skills throughout the process but still allowing each other to try something new if desired.
<div class="my-12 flex justify-center"><img src="images/projects/Again-and-again-and-again/planning.jpg" alt="Planning the installation" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Role</h3>
While some other members in the team rehearsed and refined the performance, my role was primarily in installation design and execution: I coordinated with local artists, residents, and collectives to procure materials and contact technicians who could help us realize our vision in the little time we had. Luckily, Yogyakarta's culture is dynamic and spontaneous, making last-minute changes and arrangements easy.
<div class="my-12 flex justify-center"><img src="images/projects/Again-and-again-and-again/sourcing.jpg" alt="Sourcing materials in Yogyakarta" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Execution</h3>
In preparing the installation, we consulted HONF collective, a media art collective and research lab for citizen science. Dhoni from HONF suggested we present the detailed concept at their house so they could provide architectural input. A few days later we met; the initial meeting was efficient and thorough. We discussed possible implementation strategies, discarded mechanically risky and electronically complex ideas, and negotiated a daily rate for two technicians for three days (setup, exhibition, dismantling). The coordination later happened mostly through whatsapp, using Google Translate where necessary.
<div class="my-12 flex justify-center"><img src="images/projects/Again-and-again-and-again/installing.jpg" alt="Building the installation" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">The Program "Transcultural Collaboration"</h3>
The event was presented by the minor programme «Transcultural Collaboration» of Zurich
University of the Arts in collaboration with partner universities in Hong Kong, Singapore, Taipei,
Tokyo, and Yogyakarta. The programme was offered in cooperation with Shared Campus, a unique cooperation platform of
currently 9 art universities.
<div class="my-12 flex justify-center"><img src="images/projects/Again-and-again-and-again/action-shot.jpg" alt="Rachel Lin performing" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
    {
      "id": "7846",
      "thumbnailUrl": "images/projects/haptics_kit/thumbnail.jpg",
      "title": "Audio-to-Haptics Hardware Interface",
      "description": "Developing a custom hardware solution for converting audio files into tactile vibration patterns for robotic interaction research.",
      "company": "ETH Zürich",
      "status": "published",
      "type": "Hardware design",
      "date": "Oct 2025",
      "slug": "/p/7846",
      "skills": ["Haptics", "Internet of Things", "Interaction Design", "Human-Robot Interaction", "Web Design"],
      "collaborators": [],
      "links": [{"label": "GitHub", "url": "https://github.com/sullyjason/AudioToHaptics"}, {"label": "Background Research Paper", "url": "https://dl.acm.org/doi/abs/10.1145/3757279.3785620"}],
      "story": `<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Task</h3>
Contracted by one of ETH Zürich's neuroscience research labs, it was my job to produce a piece of hardware that would be capable of converting any audio files into vibration patterns. The project belonged to a larger effort to understand and systematize how we as humans perceive tactile feedback and haptic interactions with robots. Which haptic patterns do we consider pleasant, and which do we feel an aversion to?
<div class="my-12 flex justify-center"><img src="images/projects/haptics_kit/prototyping.jpg" alt="Testing audio amplifier boards" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Solution</h3>
The Audio-to-haptics solution relies on cheap, widely available components and a working principle that is intuitive and well-documented. It uses a microcontroller with a wifi antenna, an audio amplifier, and an SD card reader.
<div class="my-12 flex justify-center"><img src="images/projects/haptics_kit/sketching.jpg" alt="Enclosure sketches and 3D Modeling" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<p class="mb-6 leading-relaxed text-gray-700">An SD card pre-loaded with audio files is inserted into the device. The device is powered via USB C (eg. with a power bank). The haptic vibration motor is plugged into the device, and can now be embedded into the object of study. The device and the contents of its SD card can then be seen on an online dashboard, where the user can play, loop, and stop each audio file as needed. The device amplifies the audio signal so that the vibration motor outputs them as vibrations.</p>
<div class="my-12 flex justify-center"><img src="images/projects/haptics_kit/final_product.jpg" alt="Final Result" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>
<h3 class="text-xl font-bold mt-10 mb-4 text-gray-900">Role</h3>
I was responsible for the complete design, prototyping, documentation and shipping of this product. The solution was to be as robust as possible, with multiple backup options in place so the device could stay in operation for the duration of the studies it was intended to be used for. The intended user was also considered non-technical, which provided me with the additional challenge of documenting without the use of technical jargon. Overall, a rewarding experience in transdisciplinary product development and exchange.
<div class="my-12 flex justify-center"><img src="images/projects/haptics_kit/dashboard.jpg" alt="Architecture and Dashboard" class="max-w-full rounded-2xl shadow-xl border border-gray-100 cursor-zoom-in" loading="lazy" onclick="openLightbox(this.src)" /></div>`
    },
];
