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
You will need to download [MoodleExtension.crx](https://github.com/ZacDavidsen/MoodleFixer/blob/master/MoodleExtension.crx), open Chrome, navigate to chrome://extensions, and drag and drop the downloaded .crx file onto the page. Chrome will open a dialog/confirmation, which will take care of the rest.

### To update:
Unfortunately, I don't know of any way to update other than to delete the old extension and then install the new version.  This will likely delete your saved filter data, but until I find a better way (or pay to host it in the Chrome Web Store), this is the most straighforward option.  

### Other stuff
If anyone wants to contribute to this (cleaning up code, adding new features, making the html look nicer), feel free to fork and fix, open a pull request, or whatever the actual process is (I'm pretty new to this so I'm still figuring things out)
