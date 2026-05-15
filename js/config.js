const profiles = {
    default: {
        customProjectOrder: [],
        hiddenProjectIds: [],
    },
    jobApp: {
        customProjectOrder: [
            "003",  // Wearable Sensor Docking Station
            "014",  // Dot Inc x Apple
            "006",  // Rebuilding the CLAW
            "002",  // Puppet Synthesizer
            "007",  // Wearable Devices Prototyping (PPG)
            "001",  // Mood Logger
            "7846", // Audio-to-Haptics Hardware Interface
            "008",  // InteracTiles
            "005",  // Foggy
            "017",  // WallBo 2.0
        ],
        hiddenProjectIds: [
            "016",  // Freitag Labs x HSLU
            "015",  // Industrial Project in Offshore Wind
            "012",  // Ambulance Fleet Management
            "011",  // HackZurich 2023: Remy
            "009",  // UX Consulting and Redesign
        ],
    },
};

// ← change this line to switch audiences
const activeProfile = profiles.jobApp;

const customProjectOrder = activeProfile.customProjectOrder;
const hiddenProjectIds = activeProfile.hiddenProjectIds;
