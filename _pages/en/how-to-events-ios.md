---
lang-ref: events
title: Subscribe to Calendar on Android
description: <!-- optional metadata -->
headline: <!-- optional display text -->
subhead: <!-- optional display text -->
---

# Subscribe to the calendar on iPhone/iOS

<input type="text" value="https://calendar.google.com/calendar/ical/6f34b245a131d9734d6922f3b89a34ef8d4a8d61ebd21900f681cfce1829b389%40group.calendar.google.com/public/basic.ics" id="iCalLink">

<script>
    function copyFunction() {
        // Get the text field
        var copyText = document.getElementById("iCalLink");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }
</script>

{% include comp-button-jsfunction.html text="Copy Text" onClick="copyFunction()" %}

- Press the button above to copy the iCal link to your clipboard
- Open Settings
- Scroll down and click Apps
- Open Calendar Settings

![Calendar Accounts](assets/images/ios-cal-1.png)
- Tap "Calendar Accounts"

![Calendar Accounts](assets/images/ios-cal-2.png)
- Tap "Add Account"

![Calendar Accounts](assets/images/ios-cal-3.png)
- Tap "Other"

![Calendar Accounts](assets/images/ios-cal-4.png)
- Tap "Add Subscribed Calendar"
- Paste the URL you copied

![Calendar Accounts](assets/images/ios-cal-5.png)
- Choose whether to allow alerts
- Save new calendar
