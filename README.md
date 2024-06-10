# mangaplus-ripper 
A bit of code I wrote to automatically rip images from [Shueisha's MangaPlus service](https://mangaplus.shueisha.co.jp/).

## Usage:

1. Visit the website linked above and open a chapter you want to save
2. Open Inspect Element (F12 or Ctrl+Shift+I), paste this in the console and enter
3. ???
4. Profit

## Notes:

* Works on Firefox, doesn't seem to work on Chrome due to a thing with the Blob file format. Will try to fix this soon.
* You need to scroll down and load all pages before using it, and changing the browser window size or switching tabs can mess this up. As of 2024-06-10, I'm working on an alternative method of getting the images that doesn't require scrolling (almost there... I think). When it's done, I'll either delete the existing files or shove them into a folder labelled "old".
* If you have "Always ask you where to save files" enabled, prepare for a LOT of confirmation dialogue boxes. I'll look into turning them into a .zip file soon.
* If you want high-quality rips, don't forget to set the image quality on the top right :)
* It won't work for chapters unavailable on the web version, even if you have a link, because it'll lead to a 404 page. In the case of One Piece for example, only the first and last three chapters are public. The rest are locked behind their free mobile app.
* If anyone somehow manages to make a working script for the app please let me know, I'm not a mobile programmer :)
