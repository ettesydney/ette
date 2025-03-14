export const HOMEPAGE_QUERY = `*[_type == "home"][0] {
  primaryImages[] {
    asset-> {
      url
    },
    alt
  },
  mobileImage {
    asset-> {
      url
    },
    alt
  },
  blurb
}`;

export const ABOUT_QUERY = `*[_type == "about"][0] {
  image {
    asset-> {
      url
    }
  },
  title,
  blurb
}`;

export const MENU_QUERY = `*[_type == "menu"][0] {
  title[] {
    title,
    blurb
  },
  menuBlurb,
  sections[] {
    title,
    items
  },
  drinksMenu {
    asset-> {
      url
    }
  }
}`;

export const FUNCTIONS_QUERY = `*[_type == "functions"][0] {
  sections[] {
    title,
    blurb,
    callToAction,
    images[] {
      asset-> {
        url
      },
      alt
    }
  }
}`;

export const WHATS_ON_QUERY = `*[_type == "whatsOn"][0] {
  title,
  blurb,
  events[] {
    date,
    title,
    blurb,
    image {
      asset-> {
        url
      },
      alt
    },
    callToAction,
    callToActionText
  }
}`;


export const GENERIC_QUERY = `*[_type == "generic"][0] {
  headerLogo {
    asset-> {
      url
    }
  },
  footerLogo {
    asset-> {
      url
    }
  },
  footerImage {
    asset-> {
      url
    }
  },
  bookNowLink,
  subscribeLink,
  instagram,
  facebook,
  address,
  email,
  phone,
  hours
}`;
