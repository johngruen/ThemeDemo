const theme = {
  colors: {
    accentcolor: 'cyan', // USED
    tab_background_text: 'white',
    button_background_active: 'darkblue',
    button_background_hover: 'lime',
    frame_inactive: 'orange', // this one needs the window unfocused
    icons: 'olive',
    icons_attention: 'red',
    popup: 'red',
    popup_border: 'green',
    popup_text: 'blue',
    popup_highlight: 'pink', // this and the one below don't seem to work. supposed to set selected awesomebar item
    popup_highlight_text: 'green',
    tab_line: 'navy',
    tab_loading: 'salmon',
    tab_selected: 'green', // i can't make this one work, or it's being overidden somewhere?
    tab_text: 'red',
    textcolor: 'green', // USED
    toolbar: 'yellow', // USED
    toolbar_bottom_separator: 'lime',
    toolbar_field_border: 'lime',
    toolbar_field_separator: 'navy', // this is just the little vertical line that sometimes is in the awesomebar
    toolbar_field: 'pink', // USED
    toolbar_text: 'black', // USED
    toolbar_field_text: 'orange', // USED
    toolbar_top_separator: 'salmon',
    toolbar_vertical_separator: 'blue'
  }
};

browser.theme.update(theme);