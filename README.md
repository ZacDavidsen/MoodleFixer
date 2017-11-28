# MoodleFixer
A Chrome extension that allows filtering the navigation tab in Moodle

The reason this exists is because I got tired of scrolling down a long list of old courses trying to find the ones I needed.  This solves that problem by allowing the user to filter which classes show up in the navigation tab, filtered by the term code (e.g. 1516F).  It autodetects new term codes/names when moodle is loaded, and adds them to the list of codes that it filters.  The extension also comes with a "browser action" button that appears next to the search bar, and allows the user to edit which terms are shown.  Additionally, the extension will never affect any other pages, and the action button is only enabled on the moodle.rose-hulman.edu domain.

The navigation tab that I had to spend way too long searching vs. the filtered version:

![alt text](https://github.com/ZacDavidsen/MoodleFixer/blob/master/exampleImages/oldNavBar.PNG) ![alt text](https://github.com/ZacDavidsen/MoodleFixer/blob/master/exampleImages/filteredNavBar.PNG)

The browser action button (note that this will be grayed out when not on Moodle):

![alt text](https://github.com/ZacDavidsen/MoodleFixer/blob/master/exampleImages/actionButton.PNG)

The filter UI (drops down frome the action button):

![alt text](https://github.com/ZacDavidsen/MoodleFixer/blob/master/exampleImages/filterInterface.PNG)

The repository will always have an up to date version of the compiled/packaged extension in the main directory.

### To install:
Since Chrome doesn't support using extensions not from the web store, the only way to (permanently) install is to download the repo, extract the MoodleExtension folder to a location of your choosing, open chrome and navigate to chrome://extensions. Then you need to enable developer mode from a checkbox on the upper right of the page, and click the "load unpacked extension" that shows up in the upper left of the page.  Navigate to where you unpacked the MoodleExtension folder, select the MoodleExtension folder, and hit okay.

### To update:
Unfortunately, the only way to update is to download a new version, extract the new MoodleExtension folder to the same place as the old one, which should update/replace the files with the new version.  Then navigate to chrome://extensions, find Moodle Fixer in the list, and click the reload button under the description.

### Other stuff
If anyone wants to contribute to this (cleaning up code, adding new features, making the html look nicer), feel free to fork and fix, open a pull request, or whatever the actual process is (I'm pretty new to this so I'm still figuring things out)
