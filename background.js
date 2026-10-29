const MENU_ID = "close-left-tabs";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Close Tabs to the Left",
    contexts: ["page", "frame", "selection", "link", "image", "video", "audio"],
  });
});

// Close unpinned tabs left of `tab` in its window, matching Chrome's
// "Close Tabs to the Right", which leaves pinned tabs alone.
async function closeTabsToLeft(tab) {
  if (!tab) return;
  const tabs = await chrome.tabs.query({ windowId: tab.windowId });
  const ids = tabs
    .filter((t) => t.index < tab.index && !t.pinned)
    .map((t) => t.id);
  if (ids.length) await chrome.tabs.remove(ids);
}

async function closeLeftOfActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await closeTabsToLeft(tab);
}

chrome.action.onClicked.addListener(closeTabsToLeft);

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ID) closeTabsToLeft(tab);
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "close-left-tabs") closeLeftOfActiveTab();
});
