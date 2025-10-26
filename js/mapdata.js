var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
  
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",

    //State defaults
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    ARE338: { name: "Ras Al Khaymah", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE339: { name: "Umm Al Qaywayn", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE341: { name: "Fujayrah", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE346: { name: "Ajman", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE348: { name: "Sharjah", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE349: { name: "Abu Dhabi", description: "default", color: "#007296", hover_color: "default", url: "default" },
    ARE350: { name: "Dubai", description: "default", color: "#628c1e", hover_color: "default", url: "default" },
    ARE351: { name: "Al Ain", description: "default", color: "#628c1e", hover_color: "default", url: "default" } // Add Al Ain state
  },
  locations: {
    "0": { lat: "24.466667", lng: "54.366667", name: "Abu Dhabi" },
    "1": { lat: "24.130162", lng: "55.802311", name: "Al Ain" } // Al Ain location added
  }
};
