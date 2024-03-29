// Every text in the English localization file should have a comment above
// it explaining the context in which it is used. This will help translators to
// more accurately translate and localize the application.

// Just showing `"support": "support"` is rather ambiguous to a translator.
// Depending on where this translation is used within the application it could
// have different meanings.

// Eg: A button with the text "support" could provide support to a customer, or
// it could request support from an employee / administrator. These functions
// are obvious from within the application, however not so when just looking at
// this localization file. In some other languages these two different
// functions could require a different text.

// Style conventions:
//  - Leave at least 8 new lines between sections in this locale file, to
//     make manual searching easier.
//  - Always use double quotes, to make manual conversion to json easier
//  - Each section should be preceded by a comment stating the section
//     name in square brackets ie: [], to make searching for sections
//     easier. eg: Ctrl+f [ Orders ] (without spaces) will go to the
//     section, and not to any text in the translation or in the
//     comments.

// Naming conventions:
//  - heading
//  - placeholder
//  - noResults
//  - fail
//  - columns

export default {
  global: {
    siteTitle: 'Khammerson inc',
    siteShortName: 'A short name',
    twitterHandle: '@example'
  },
  navigation: {
    dropdown: 'Menu',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    register: 'Register'
  },
  page: {
    notFound: {
      body: 'The page you are looking for does not exist.',
      callToAction: 'Return home',
      title: 'Not found'
    },
    chat: {
      title: 'Chat',
      description: ''
    },
    profile: {
      title: 'Profile',
      description: '',
      form: {
        name: {
          label: 'Name',
          placeholder: 'Jane Doe'
        },
        email: {
          label: 'Email',
          placeholder: 'test@example.com'
        },
        bio: {
          label: 'Bio',
          placeholder: 'I am a...'
        },
        callToAction: 'SAVE SETTINGS',
        onSuccess: {
          title: 'Profile updated',
          message: 'Your profile has successfully been updated'
        }
      }
    },
    login: {
      title: 'Login',
      description: '',
      heading: 'Login to Khammerson App:'
    },
    register: {
      title: 'Register',
      description: ''
    },
    github: {
      title: 'Login with GitHub',
      description: '',
      errors: {
        missingCode: 'Invalid GitHub code'
      }
    },
    google: {
      title: 'Login with Google',
      description: '',
      errors: {
        missingCode: 'Invalid Google code'
      }
    },
    reddit: {
      title: 'Login with Reddit',
      description: '',
      errors: {
        missingCode: 'Invalid Reddit code'
      }
    }
  }
};
