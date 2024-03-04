# Iframe Gadget Message Handler

## Description

This script is an event listener designed to handle messages received from an iframe gadget. It implements various actions based on the message data to interact with the window or the document.

## Usage

Ensure that this script is included in the HTML document where you expect to receive messages from the iframe gadget. The event listener is set up to trigger when messages are received. Actions are performed based on the content of the messages.

## Functionality

- **Adjusting Iframe Scrolling Behavior:** If the received message contains data to set the scrolling behavior of the iframe, it adjusts the scrolling attribute accordingly.

- **Setting Iframe Height:** If the message includes data for setting the iframe height, it adjusts the height of the iframe to resolve any double scrollbar issues.

- **Scrolling the Main Window:** If the message contains data to scroll the main window to a specified position, it scrolls the window accordingly.

- **Managing Main Window Scrolling:** It manages the scrolling behavior of the main window, especially when item popups are open. It can hide or show the scrollbar based on the received message.

- **Sending Window and Iframe Position Data:** If requested, it sends window and iframe position data for popup alignment.

- **Reloading the Main Window or Focusing the Iframe:** It can trigger the reloading of the main window or focus on the iframe element based on the received message.

## Note

Ensure that the origin of the message is from the specified domain 'https://mljltitool.mylearnerjourney.com' to execute the associated actions.
