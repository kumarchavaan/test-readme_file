# MLJ Gadget Message Handler

## Description

This script is an event listener designed to handle messages received from an iframe MLJ gadget. It implements various actions based on the message data to interact with the window or the document.

## Usage

1. **Integration with Existing Theme JS**: If you already have an existing theme JavaScript file, simply copy this script and append it to below your existing JavaScript code. The script will automatically take effect within your theme.

2. **Overriding Existing `window.onmessage` Functionality**: Note that if your theme JavaScript also utilizes the `window.onmessage` function, integrating this script may override that functionality. Ensure compatibility or adjust your existing code accordingly.

3. **Code Review and Integration**: Consider scheduling a code review meeting before adding this script to theme, if there are any concerns. 

## Functionality

- **Adjusting Iframe Scrolling Behavior:** If the received message contains data to set the scrolling behavior of the iframe, it adjusts the scrolling attribute accordingly.

- **Setting Iframe Height:** If the message includes data for setting the iframe height, it adjusts the height of the iframe to resolve any double scrollbar issues.

- **Scrolling the Main Window:** If the message contains data to scroll the main window to a specified position, it scrolls the window accordingly.

- **Managing Main Window Scrolling:** It manages the scrolling behavior of the main window, especially when item popups are open. It can hide or show the scrollbar based on the received message.

- **Sending Window and Iframe Position Data:** If requested, it sends window and iframe position data for popup alignment.

- **Reloading the Main Window or Focusing the Iframe:** It can trigger the reloading of the main window or focus on the iframe element based on the received message.

## Note

If the provided script is not integrated, functionalities described above will behave incorrectly.

This script assumes that the `onmessage` event is triggered only from the specified origin 'https://mljltitool.mylearnerjourney.com'. Ensure that messages received from other origins are handled appropriately or ignored to prevent unintended behavior.
