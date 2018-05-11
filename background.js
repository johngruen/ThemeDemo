const theme = {
  colors: {
    accentcolor: 'red', // USED
    button_background_active: 'darkblue',
    button_background_hover: 'lime',
    frame_inactive: 'orange', // this one needs the window unfocused, mdn views this as an alias for accentcolor
    icons: 'yellow',
    icons_attention: 'red',
    popup: 'red',
    popup_border: 'cyan',
    popup_highlight_text: 'green',
    popup_highlight: 'pink', // this and the one below don't seem to work. supposed to set selected awesomebar item
    popup_text: 'blue',
    tab_background_text: 'white',
    tab_line: 'orange', //USED
    tab_loading: 'salmon',
    tab_selected: 'transparent',
    tab_text: 'red',
    textcolor: 'black', // USED
    toolbar: 'rgba(0, 255, 0, .2)', // USED
    toolbar_bottom_separator: 'lime',
    toolbar_field: 'pink', // USED
    toolbar_field_border: 'lime',
    toolbar_field_border_focus: 'red',
    toolbar_field_focus: 'purple',
    toolbar_field_separator: 'navy', // this is just the little vertical line that sometimes is in the awesomebar
    toolbar_field_text: 'orange', // USED
    toolbar_text: 'black', // USED
    toolbar_top_separator: 'salmon',
    toolbar_vertical_separator: 'pink'
  },
  images: {
    additional_backgrounds: [
      'images/left-gradient.svg',
      'images/triangle.svg',
      'images/right-gradient.svg'
    ]
  },
  properties: {
    additional_backgrounds_alignment: [
      'left top',
      'center top',
      'right top'
    ],
    additional_backgrounds_tiling: [
      'repeat-y',
      'repeat',
      'repeat-y'
    ]
  }
};

browser.theme.update(theme);
