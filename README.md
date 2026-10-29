# Close Tabs to the Left

A Chrome extension that closes every tab to the left of the current tab, the
counterpart to Chrome's built-in "Close Tabs to the Right".

Pinned tabs are left open, and only tabs in the current window are affected.

## Install

1. Download the zip from the
   [latest release](https://github.com/kosiew/chrome-close-left-tabs/releases/latest)
   and unzip it.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the unzipped `chrome-close-left-tabs`
   folder.
5. Optional: pin the extension from the puzzle-piece menu in the toolbar.

### From source

To track the latest code instead, clone this repository and load its folder
in step 4. After pulling changes, click the reload button on the extension's
card at `chrome://extensions`.

## Usage

- **Keyboard shortcut:** <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd>
  (<kbd>⌥</kbd><kbd>⇧</kbd><kbd>←</kbd> on macOS)
- **Toolbar button:** click the extension's icon.
- **Right-click menu:** right-click on the page and choose
  **Close Tabs to the Left**.

To change the shortcut, or if it clashes with another one, go to
`chrome://extensions/shortcuts`.

Tabs close without confirmation. Reopen them with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>
(<kbd>⌘</kbd><kbd>⇧</kbd><kbd>T</kbd> on macOS).

### Why not the tab right-click menu?

Chrome doesn't let extensions add items to the menu you get by right-clicking a
tab, so this can't appear next to "Close Tabs to the Right".

## Regenerating the icons

The icons in `icons/` are drawn by a script, which needs
[Pillow](https://pypi.org/project/pillow/):

```sh
python3 scripts/make_icons.py
```

## License

[MIT](LICENSE)
